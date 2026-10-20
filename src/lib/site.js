import config from "../../site.config.json";

export const site = config;

/** Current page path (e.g. "services/devops-automation/"), set by the build (server) and the page script (client). */
function currentPath() {
  if (typeof window !== "undefined" && window.__DYC_PAGE__ !== undefined) return window.__DYC_PAGE__;
  return globalThis.__DYC_PAGE__ || "";
}

/**
 * Turn a site path into a link relative to the current page, so the site works at the
 * domain root and on a github.io project URL. Accepts "/", "/services/", "/contact/#form", "assets/x.svg".
 */
export function href(target) {
  if (/^(https?:|mailto:|tel:|#)/.test(target)) return target;
  const [pathPart, hash = ""] = target.split("#");
  const clean = pathPart.replace(/^\//, "");
  const depth = currentPath().split("/").filter(Boolean).length;
  const prefix = depth ? "../".repeat(depth) : "./";
  const out = (prefix === "./" && clean ? clean : prefix + clean) || "./";
  return hash ? `${out}#${hash}` : out;
}

export function asset(p) {
  return href("/assets/" + p.replace(/^\//, ""));
}
