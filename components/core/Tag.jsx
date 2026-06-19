import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-tag-css")) {
  const el = document.createElement("style");
  el.id = "ps-tag-css";
  el.textContent = `
  .ps-tag{
    display:inline-flex; align-items:center; gap:.4em;
    font-family:var(--font-sans); font-weight:var(--weight-semibold);
    font-size:var(--text-xs); line-height:1; letter-spacing:.01em;
    padding:.4em .7em; border-radius:var(--radius-pill);
    border:1px solid transparent; white-space:nowrap;
  }
  .ps-tag--sm{ font-size:11px; padding:.32em .6em; }
  .ps-tag--lg{ font-size:var(--text-sm); padding:.5em .85em; }
  .ps-tag__dot{ width:.5em; height:.5em; border-radius:50%; background:currentColor; }
  .ps-tag__icon{ display:inline-flex; width:1.1em; height:1.1em; }
  .ps-tag__icon svg{ width:100%; height:100%; }

  /* soft (default) */
  .ps-tag--soft.ps-tag--leaf{ background:var(--green-100); color:var(--green-800); }
  .ps-tag--soft.ps-tag--success{ background:var(--status-success-bg); color:var(--status-success-fg); }
  .ps-tag--soft.ps-tag--warning{ background:var(--status-warning-bg); color:var(--status-warning-fg); }
  .ps-tag--soft.ps-tag--danger{ background:var(--status-danger-bg); color:var(--status-danger-fg); }
  .ps-tag--soft.ps-tag--info{ background:var(--status-info-bg); color:var(--status-info-fg); }
  .ps-tag--soft.ps-tag--neutral{ background:var(--stone-100); color:var(--stone-700); }

  /* solid */
  .ps-tag--solid.ps-tag--leaf{ background:var(--green-500); color:#fff; }
  .ps-tag--solid.ps-tag--success{ background:var(--green-600); color:#fff; }
  .ps-tag--solid.ps-tag--warning{ background:var(--gold-500); color:var(--green-950); }
  .ps-tag--solid.ps-tag--danger{ background:var(--red-500); color:#fff; }
  .ps-tag--solid.ps-tag--info{ background:var(--green-800); color:#fff; }
  .ps-tag--solid.ps-tag--neutral{ background:var(--stone-600); color:#fff; }

  /* outline */
  .ps-tag--outline{ background:transparent; }
  .ps-tag--outline.ps-tag--leaf{ color:var(--green-700); border-color:var(--green-300); }
  .ps-tag--outline.ps-tag--neutral{ color:var(--stone-600); border-color:var(--stone-300); }
  .ps-tag--outline.ps-tag--success{ color:var(--status-success-fg); border-color:var(--green-300); }
  .ps-tag--outline.ps-tag--warning{ color:var(--status-warning-fg); border-color:var(--gold-300); }
  .ps-tag--outline.ps-tag--danger{ color:var(--status-danger-fg); border-color:var(--red-500); }
  .ps-tag--outline.ps-tag--info{ color:var(--status-info-fg); border-color:var(--stone-300); }
  `;
  document.head.appendChild(el);
}

export function Tag({
  children,
  tone = "leaf",
  variant = "soft",
  size = "md",
  icon,
  dot = false,
  className = "",
  ...rest
}) {
  const cls = [
    "ps-tag",
    `ps-tag--${variant}`,
    `ps-tag--${tone}`,
    size !== "md" ? `ps-tag--${size}` : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <span className={cls} {...rest}>
      {dot && <span className="ps-tag__dot" />}
      {icon && <span className="ps-tag__icon">{icon}</span>}
      {children}
    </span>
  );
}
