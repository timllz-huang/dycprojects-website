import React, { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * On-brand abstract illustrations that fill the image slots of the Relume layout.
 * Pure SVG (no network requests), scales to any box via `slice`.
 * Swap for real photography later by replacing <Visual/> with an <img/>.
 */
const C = {
  bg1: "#081722",
  bg2: "#153f5b",
  line: "rgba(255,255,255,0.14)",
  soft: "rgba(255,255,255,0.55)",
  white: "#ffffff",
  blue: "#6caad3",
  teal: "#48c9b0",
  amber: "#f6b959",
};

function Motif({ kind }) {
  switch (kind) {
    case "cloud":
      return (
        <g>
          <path
            d="M128 214c-22 0-40-17-40-38s18-38 40-38c4-30 30-52 62-52 27 0 50 16 59 40 3-1 7-1 10-1 29 0 52 22 52 50s-23 50-52 50H128z"
            fill="rgba(255,255,255,0.06)"
            stroke={C.soft}
            strokeWidth="3"
          />
          {[150, 200, 250].map((x, i) => (
            <g key={x}>
              <line x1={x} y1={226} x2={x} y2={268} stroke={C.line} strokeWidth="3" strokeDasharray="4 6" />
              <rect x={x - 26} y={270} width="52" height="44" rx="8" fill="rgba(255,255,255,0.08)" stroke={C.soft} strokeWidth="2" />
              <rect x={x - 16} y={282} width="32" height="5" rx="2.5" fill={[C.blue, C.teal, C.amber][i]} />
              <rect x={x - 16} y={293} width="20" height="5" rx="2.5" fill={C.line} />
            </g>
          ))}
          <circle cx="200" cy="168" r="14" fill={C.teal} opacity="0.9" />
          <path d="M193 168l5 5 10-11" stroke={C.bg1} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "code":
      return (
        <g>
          <rect x="84" y="96" width="232" height="208" rx="12" fill="rgba(255,255,255,0.06)" stroke={C.soft} strokeWidth="2.5" />
          <line x1="84" y1="126" x2="316" y2="126" stroke={C.line} strokeWidth="2" />
          {[C.amber, C.teal, C.blue].map((c, i) => (
            <circle key={i} cx={102 + i * 14} cy="111" r="4.5" fill={c} />
          ))}
          {[
            [108, 40, C.blue, 70, C.line],
            [124, 26, C.teal, 96, C.line],
            [124, 54, C.line, 50, C.amber],
            [108, 30, C.blue, 0, null],
            [124, 60, C.line, 64, C.teal],
            [140, 34, C.amber, 52, C.line],
            [124, 44, C.line, 0, null],
            [108, 22, C.blue, 0, null],
          ].map(([x, w1, c1, w2, c2], i) => (
            <g key={i}>
              <rect x={x} y={146 + i * 19} width={w1} height="7" rx="3.5" fill={c1} />
              {w2 ? <rect x={x + w1 + 8} y={146 + i * 19} width={w2} height="7" rx="3.5" fill={c2} /> : null}
            </g>
          ))}
        </g>
      );
    case "pipeline":
      return (
        <g>
          <line x1="80" y1="200" x2="320" y2="200" stroke={C.line} strokeWidth="4" />
          <line x1="80" y1="200" x2="240" y2="200" stroke={C.teal} strokeWidth="4" />
          {[80, 160, 240, 320].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="200" r="22" fill={i < 3 ? C.teal : "rgba(255,255,255,0.08)"} stroke={i < 3 ? "none" : C.soft} strokeWidth="2.5" />
              {i < 3 ? (
                <path d={`M${x - 8} 200l5 5 11-12`} stroke={C.bg1} strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <circle cx={x} cy="200" r="6" fill={C.amber} />
              )}
              <rect x={x - 22} y="240" width="44" height="6" rx="3" fill={C.line} />
            </g>
          ))}
          {[0, 1, 2].map((i) => (
            <rect key={i} x={96 + i * 70} y={130 - i * 6} width={46 + i * 10} height="6" rx="3" fill={[C.blue, C.amber, C.soft][i]} opacity="0.85" />
          ))}
        </g>
      );
    case "network":
      return (
        <g>
          {[
            [200, 200, 120, 120],
            [200, 200, 290, 130],
            [200, 200, 300, 270],
            [200, 200, 110, 285],
            [120, 120, 290, 130],
            [110, 285, 300, 270],
            [200, 200, 200, 90],
            [200, 200, 205, 320],
          ].map(([a, b, c, d], i) => (
            <line key={i} x1={a} y1={b} x2={c} y2={d} stroke={C.line} strokeWidth="2.5" />
          ))}
          {[
            [120, 120, 14, C.blue],
            [290, 130, 12, C.teal],
            [300, 270, 15, C.amber],
            [110, 285, 12, C.teal],
            [200, 90, 9, C.soft],
            [205, 320, 9, C.soft],
          ].map(([x, y, r, c], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill={c} />
          ))}
          <circle cx="200" cy="200" r="34" fill="rgba(255,255,255,0.08)" stroke={C.white} strokeWidth="2.5" />
          <circle cx="200" cy="200" r="12" fill={C.white} />
        </g>
      );
    case "shield":
      return (
        <g>
          <path
            d="M200 92l86 32v64c0 56-37 99-86 118-49-19-86-62-86-118v-64l86-32z"
            fill="rgba(255,255,255,0.06)"
            stroke={C.soft}
            strokeWidth="3"
          />
          <path d="M200 118l62 23v47c0 40-26 72-62 87V118z" fill="rgba(108,170,211,0.18)" />
          <circle cx="200" cy="196" r="30" fill={C.teal} />
          <path d="M186 196l10 10 19-21" stroke={C.bg1} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      );
    case "chart":
      return (
        <g>
          <line x1="90" y1="300" x2="320" y2="300" stroke={C.line} strokeWidth="2.5" />
          {[70, 100, 92, 140, 168, 205].map((h, i) => (
            <rect key={i} x={100 + i * 36} y={300 - h} width="22" height={h} rx="5" fill={i === 5 ? C.teal : "rgba(255,255,255,0.14)"} />
          ))}
          <polyline
            points="111,214 147,186 183,196 219,150 255,124 291,84"
            fill="none"
            stroke={C.amber}
            strokeWidth="3.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <circle cx="291" cy="84" r="8" fill={C.amber} />
        </g>
      );
    case "hybrid":
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="80" y={150 + i * 42} width="104" height="32" rx="6" fill="rgba(255,255,255,0.08)" stroke={C.soft} strokeWidth="2" />
              <circle cx="98" cy={166 + i * 42} r="4.5" fill={[C.teal, C.teal, C.amber][i]} />
              <rect x="112" y={163 + i * 42} width="56" height="6" rx="3" fill={C.line} />
            </g>
          ))}
          <path
            d="M262 196c-17 0-30-13-30-29s13-29 30-29c3-23 23-40 47-40 21 0 38 13 45 31"
            fill="none"
            stroke={C.soft}
            strokeWidth="3"
          />
          <path d="M184 216h28c14 0 20-10 20-22v-8" stroke={C.blue} strokeWidth="3" fill="none" strokeDasharray="5 6" />
          <circle cx="232" cy="182" r="7" fill={C.blue} />
          <rect x="246" y="214" width="84" height="74" rx="10" fill="rgba(255,255,255,0.08)" stroke={C.soft} strokeWidth="2" />
          <rect x="260" y="232" width="56" height="6" rx="3" fill={C.teal} />
          <rect x="260" y="248" width="40" height="6" rx="3" fill={C.line} />
          <rect x="260" y="264" width="48" height="6" rx="3" fill={C.line} />
        </g>
      );
    case "consult":
    default:
      return (
        <g>
          <rect x="82" y="112" width="170" height="92" rx="16" fill="rgba(255,255,255,0.08)" stroke={C.soft} strokeWidth="2.5" />
          <path d="M112 204l-6 26 30-26" fill="rgba(255,255,255,0.08)" stroke={C.soft} strokeWidth="2.5" strokeLinejoin="round" />
          <rect x="104" y="138" width="110" height="8" rx="4" fill={C.white} opacity="0.85" />
          <rect x="104" y="156" width="80" height="8" rx="4" fill={C.line} />
          <rect x="104" y="174" width="96" height="8" rx="4" fill={C.line} />
          <rect x="164" y="218" width="154" height="74" rx="16" fill={C.teal} opacity="0.95" />
          <path d="M290 292l8 22-30-22" fill={C.teal} opacity="0.95" />
          <rect x="186" y="242" width="100" height="8" rx="4" fill={C.bg1} opacity="0.75" />
          <rect x="186" y="260" width="64" height="8" rx="4" fill={C.bg1} opacity="0.45" />
        </g>
      );
  }
}

export function Visual({ kind = "consult", className, label }) {
  const id = useId().replace(/:/g, "");
  const sized = /\b(size-full|h-full|h-\[|aspect-)/.test(className || "");
  return (
    <div
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("relative overflow-hidden rounded-image", !sized && "aspect-square w-full", className)}
    >
      <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
        <defs>
          <linearGradient id={`g${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={C.bg1} />
            <stop offset="1" stopColor={C.bg2} />
          </linearGradient>
          <pattern id={`p${id}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill="rgba(255,255,255,0.09)" />
          </pattern>
          <radialGradient id={`r${id}`} cx="0.75" cy="0.2" r="0.7">
            <stop offset="0" stopColor="#2e86c1" stopOpacity="0.35" />
            <stop offset="1" stopColor="#2e86c1" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect x="-400" y="-400" width="1200" height="1200" fill={`url(#g${id})`} />
        <rect x="-400" y="-400" width="1200" height="1200" fill={`url(#p${id})`} />
        <rect x="-400" y="-400" width="1200" height="1200" fill={`url(#r${id})`} />
        <Motif kind={kind} />
      </svg>
    </div>
  );
}
