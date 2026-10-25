"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------ hooks */

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** started: became ~30% visible once. visible: currently on screen (stories pause when false). */
export function useInView(ref, threshold = 0.3) {
  const [state, setState] = useState({ started: false, visible: false });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return setState({ started: true, visible: true });
    const io = new IntersectionObserver(
      ([e]) => setState((s) => ({ started: s.started || e.isIntersecting, visible: e.isIntersecting })),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref, threshold]);
  return state;
}

/** A clock that only runs while `running`, calling onFrame(t seconds since the story began). */
export function useStoryClock(running, onFrame, delay = 2.4) {
  const t = useRef(-delay);
  const cb = useRef(onFrame);
  cb.current = onFrame;
  useEffect(() => {
    if (!running || reduced()) return;
    let raf;
    let last = performance.now();
    const loop = (now) => {
      t.current += Math.min(0.05, (now - last) / 1000);
      last = now;
      if (t.current >= 0) cb.current(t.current);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [running]);
}

const easeInOut = (k) => (k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2);
/** [[time, value], …] eased per segment */
export function track(keys, t, ease = easeInOut) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const [t1, v1] = keys[i];
    const [t0, v0] = keys[i - 1];
    if (t <= t1) return v0 + (v1 - v0) * ease(Math.min(1, (t - t0) / (t1 - t0 || 1)));
  }
  return keys[keys.length - 1][1];
}

/** Once a story drives an element every frame, its CSS intro transition must stop smoothing it. */
function live(el) {
  if (el && !el.dataset.live) {
    el.style.transition = "none";
    el.dataset.live = "1";
  }
  return el;
}

/* ------------------------------------------------- shared card shell */

/** Glass card that rises in from blur (the `card` kind) once its section is visible. */
function StatusShell({ started, title, badge, children, className }) {
  return (
    <div
      data-motion-card=""
      data-in={started ? "" : undefined}
      className={cn(
        "w-full rounded-2xl border border-white/70 bg-white/85 p-4 shadow-lg backdrop-blur-xl md:p-6",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-ink">{title}</p>
        {badge}
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}

function LiveBadge({ label = "Operational" }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
      <span className="relative flex size-2">
        <span className="motion-ping absolute inline-flex size-full rounded-full bg-success" />
        <span className="relative inline-flex size-2 rounded-full bg-success" />
      </span>
      {label}
    </span>
  );
}

/* ------------------------------------------- story: systems overview */

const BARS = [0.42, 0.58, 0.5, 0.72, 0.64, 0.8, 0.56, 0.68, 0.9, 0.62, 0.74, 0.86, 0.7, 0.78];

/** Story: bars breathe like a live feed and always settle around their design heights. */
function HealthCard({ started, running }) {
  const bars = useRef([]);
  useStoryClock(running, (t) => {
    bars.current.forEach((el, i) => {
      if (!live(el)) return;
      const wave = Math.sin((t / 2.6) * Math.PI * 2 + i * 0.7) * 0.18 + Math.sin((t / 1.3) * Math.PI * 2 + i) * 0.06;
      el.style.transform = `scaleY(${Math.min(1, Math.max(0.2, BARS[i] + wave * BARS[i]))})`;
    });
  });
  return (
    <StatusShell started={started} title="Systems overview" badge={<LiveBadge />}>
      <div className="flex h-16 items-end gap-1" aria-hidden="true">
        {BARS.map((h, i) => (
          <span
            key={i}
            ref={(el) => (bars.current[i] = el)}
            data-motion-bar=""
            style={{ "--h": h, "--d": `${600 + i * 40}ms` }}
            className="h-full flex-1 origin-bottom rounded-sm bg-brand/80"
          />
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-ink-muted">
        <span>Azure · AWS · Google Cloud</span>
        <span className="inline-flex items-center gap-1 font-semibold text-ink-soft">
          <Icon name="shield-check" className="size-4 text-brand" /> Backups verified
        </span>
      </div>
    </StatusShell>
  );
}

/* ------------------------------------------------ story: migration */

const STAGES = ["Assess", "Plan", "Migrate", "Optimise"];

/** Story: the migrate bar fills to complete, its tick pops, Optimise goes live, then the plan resets to the design state. */
function MigrationCard({ started, running }) {
  const bar = useRef(null);
  const tick = useRef(null);
  const spin = useRef(null);
  const next = useRef(null);
  useStoryClock(running, (time) => {
    const t = time % 8;
    const fill = track([[0, 0.58], [3.2, 1], [6.4, 1], [7.2, 0], [8, 0.58]], t);
    const done = track([[3, 0], [3.4, 1], [6.4, 1], [6.8, 0]], t);
    if (live(bar.current)) bar.current.style.transform = `scaleX(${fill})`;
    if (tick.current) {
      tick.current.style.opacity = done;
      tick.current.style.transform = `scale(${0.82 + 0.18 * done})`;
    }
    if (spin.current) spin.current.style.opacity = 1 - done;
    if (next.current) next.current.style.opacity = 0.45 + 0.55 * done;
  });
  return (
    <StatusShell started={started} title="Cloud migration plan" badge={<LiveBadge label="On track" />}>
      <ol className="space-y-3 text-sm">
        {STAGES.map((s, i) => (
          <li key={s} ref={i === 3 ? next : undefined} className={cn("flex items-center gap-3", i === 3 && "opacity-45")}>
            <span className="relative flex size-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand">
              {i < 2 && <Icon name="check" className="size-4" />}
              {i === 2 && (
                <>
                  <span ref={spin} className="motion-spin absolute size-4 rounded-full border-2 border-brand border-t-transparent" />
                  <span ref={tick} className="absolute flex size-6 items-center justify-center rounded-full bg-brand text-white opacity-0">
                    <Icon name="check" className="size-4" />
                  </span>
                </>
              )}
              {i === 3 && <span className="size-2 rounded-full bg-brand/40" />}
            </span>
            <span className="w-16 font-semibold text-ink">{s}</span>
            {i === 2 ? (
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-mist">
                <span ref={bar} data-motion-wipe="" className="block h-full origin-left rounded-full bg-brand" style={{ transform: "scaleX(0.58)" }} />
              </span>
            ) : (
              <span className="text-xs text-ink-muted">{i < 2 ? "Complete" : "Next"}</span>
            )}
          </li>
        ))}
      </ol>
    </StatusShell>
  );
}

/* ---------------------------------------------- story: delivery board */

const WORK = [
  ["Customer portal sign in", "In review"],
  ["Stock sync with supplier API", "Building"],
  ["Invoice export to Xero", "Shipped"],
  ["Job scheduling dashboard", "Shipped"],
  ["Quote approval workflow", "Building"],
  ["Field service mobile form", "In review"],
];
const chip = {
  Building: "bg-accent/10 text-accent",
  "In review": "bg-brand-soft text-brand",
  Shipped: "bg-success/10 text-success",
};

/** Story: a new work item lands on top with a blur, the others step back one slot, the last one leaves. */
function BoardCard({ started, running }) {
  const [head, setHead] = useState(0);
  useEffect(() => {
    if (!running || reduced()) return;
    const id = setInterval(() => setHead((h) => h + 1), 3200);
    return () => clearInterval(id);
  }, [running]);
  // Render five items keyed by absolute index: one waiting above (pos -1), three visible, one leaving (pos 3).
  const items = [0, 1, 2, 3, 4].map((k) => head + k);
  return (
    <StatusShell started={started} title="Delivery board" badge={<LiveBadge label="This sprint" />}>
      <div className="relative h-36 overflow-hidden" aria-hidden="true">
        {items.map((idx) => {
          const item = WORK[idx % WORK.length];
          const pos = head + 3 - idx;
          const hidden = pos < 0 || pos > 2;
          return (
            <div
              key={idx}
              className="motion-slot absolute inset-x-0 top-0 flex h-10 items-center justify-between gap-2 rounded-lg border border-line bg-paper px-3"
              style={{
                transform: `translateY(${pos < 0 ? -24 : pos * 48}px)`,
                opacity: hidden ? 0 : 1,
                filter: hidden ? "blur(4px)" : "blur(0px)",
              }}
            >
              <span className="truncate text-sm font-semibold text-ink">{item[0]}</span>
              <span className={cn("shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold", chip[item[1]])}>{item[1]}</span>
            </div>
          );
        })}
      </div>
    </StatusShell>
  );
}

/* --------------------------------------------------- story: pipeline */

const PIPE = [
  ["git-commit", "Commit"],
  ["hammer", "Build"],
  ["test-tube", "Test"],
  ["rocket-launch", "Deploy"],
];

/** Story: stages dim, a pulse runs along the pipeline lighting each one, then the Deployed badge pops back in. */
function PipelineCard({ started, running }) {
  const nodes = useRef([]);
  const pulse = useRef(null);
  const badge = useRef(null);
  useStoryClock(running, (time) => {
    const t = time % 6.5;
    const p = track([[0.6, 0], [3.6, 1]], t);
    const dim = track([[0, 0], [0.5, 1], [5.6, 1], [6.2, 0]], t);
    nodes.current.forEach((el, i) => {
      if (!el) return;
      const lit = p >= i / 3 - 0.001 ? 1 : 0;
      const on = 1 - dim * (1 - lit);
      el.style.opacity = 0.35 + 0.65 * on;
      el.style.transform = `scale(${0.9 + 0.1 * on})`;
    });
    if (pulse.current) {
      pulse.current.style.transform = `translateX(calc(${p * 100}cqw - 5px))`;
      pulse.current.style.opacity = t > 0.5 && t < 3.9 ? 1 : 0;
    }
    if (badge.current) {
      const b = 1 - dim + track([[3.6, 0], [4, 1], [5.6, 1], [6.2, 1]], t) * dim;
      badge.current.style.opacity = Math.min(1, b);
      badge.current.style.transform = `scale(${0.85 + 0.15 * Math.min(1, b)})`;
    }
  });
  return (
    <StatusShell
      started={started}
      title="Release pipeline"
      badge={
        <span ref={badge} className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-xs font-semibold text-success">
          <Icon name="check" className="size-4" /> Deployed
        </span>
      }
    >
      <div className="relative px-3" aria-hidden="true">
        <div className="absolute inset-x-6 top-5 h-0.5 bg-line" style={{ containerType: "inline-size" }}>
          <span ref={pulse} className="absolute -top-1 left-0 size-2.5 rounded-full bg-brand opacity-0 shadow-[0_0_0_4px_rgba(27,79,114,0.18)]" />
        </div>
        <ol className="relative flex justify-between">
          {PIPE.map(([icon, label], i) => (
            <li key={label} ref={(el) => (nodes.current[i] = el)} className="flex flex-col items-center gap-2">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white">
                <Icon name={icon} className="size-5" />
              </span>
              <span className="text-xs font-semibold text-ink">{label}</span>
            </li>
          ))}
        </ol>
      </div>
    </StatusShell>
  );
}

/* -------------------------------------------------- public: hero card */

const CARDS = { health: HealthCard, migration: MigrationCard, board: BoardCard, pipeline: PipelineCard };

/** A live status card floating over the hero photo. */
export function HeroStatus({ kind = "health" }) {
  const ref = useRef(null);
  const { started, visible } = useInView(ref, 0.3);
  const Card = CARDS[kind];
  return (
    <div ref={ref} className="relative z-10 mx-4 -mt-12 md:mx-auto md:max-w-sm lg:absolute lg:bottom-6 lg:-left-12 lg:mx-0 lg:mt-0 lg:w-80">
      <Card started={started} running={started && visible} />
    </div>
  );
}

/* ------------------------------------------------------ marquee */

/** Continuous marquee that moves exactly one set per loop, paused off screen. */
export function Marquee({ children, seconds = 28, className }) {
  const ref = useRef(null);
  const trackEl = useRef(null);
  const { visible } = useInView(ref, 0);
  useStoryClock(
    visible,
    (t) => {
      if (trackEl.current) trackEl.current.style.transform = `translateX(${-((t % seconds) / seconds) * 50}%)`;
    },
    0
  );
  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", className)}
      style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
    >
      <div ref={trackEl} className="flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------- steps connector */

/** Line that draws across the steps, then a pulse travels along it and rings each number as it passes. */
export function StepsFlow({ count = 3 }) {
  const ref = useRef(null);
  const dot = useRef(null);
  const { started, visible } = useInView(ref, 0.3);
  useStoryClock(started && visible, (time) => {
    const t = time % 5;
    const p = track([[0, 0], [3, 1]], t);
    if (dot.current) {
      const w = ref.current ? ref.current.offsetWidth : 0;
      dot.current.style.transform = `translateX(${p * w}px)`;
      dot.current.style.opacity = t < 3.2 ? track([[0, 0], [0.3, 1], [2.8, 1], [3.2, 0]], t) : 0;
    }
    document.querySelectorAll("[data-step-num]").forEach((el, i) => {
      const at = i / (count - 1);
      const near = Math.max(0, 1 - Math.abs(p - at) * 6) * (t < 3.2 ? 1 : 0);
      el.style.boxShadow = `0 0 0 ${near * 8}px rgba(27, 79, 114, ${0.18 * near})`;
    });
  }, 1.6);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute z-10 hidden md:block"
      style={{ top: 51, left: 52, right: "calc((100% - 48px) / 3 - 52px)" }}
    >
      <span
        data-motion-line=""
        data-in={started ? "" : undefined}
        className="block h-0.5 origin-left bg-brand/30"
      />
      <span ref={dot} className="absolute -top-1 -ml-1 size-2.5 rounded-full bg-brand opacity-0 shadow-[0_0_0_4px_rgba(27,79,114,0.18)]" />
    </div>
  );
}

/* ------------------------------------------------ list spotlight */

/**
 * Story for lists: a soft highlight steps down the rows one at a time, then rests on none.
 * Rows are the descendants marked data-spot. Starts once the list is ~30% visible, pauses off screen.
 */
export function Spotlight({ as: Tag = "div", period = 2.2, className, children }) {
  const ref = useRef(null);
  const { started, visible } = useInView(ref, 0.3);
  const last = useRef(-2);
  useStoryClock(started && visible, (t) => {
    const rows = ref.current ? ref.current.querySelectorAll("[data-spot]") : [];
    if (!rows.length) return;
    const cycle = rows.length + 1; // one beat of rest after the last row
    const i = Math.floor(t / period) % cycle;
    if (i === last.current) return;
    last.current = i;
    rows.forEach((r, j) => (j === i ? r.setAttribute("data-active", "") : r.removeAttribute("data-active")));
  });
  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
