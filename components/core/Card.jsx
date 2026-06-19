import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-card-css")) {
  const el = document.createElement("style");
  el.id = "ps-card-css";
  el.textContent = `
  .ps-card{
    background:var(--color-surface);
    border:1px solid var(--color-border);
    border-radius:var(--radius-card);
    box-shadow:var(--shadow-card);
    overflow:hidden;
    transition:transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out),
               border-color var(--dur) var(--ease-out);
  }
  .ps-card--flat{ box-shadow:none; }
  .ps-card--raised{ box-shadow:var(--shadow-md); }
  .ps-card--leaf{ background:var(--color-surface-leaf); border-color:var(--color-border-leaf); }
  .ps-card--dark{ background:var(--green-900); border-color:transparent; color:var(--text-on-dark); }
  .ps-card--interactive{ cursor:pointer; }
  .ps-card--interactive:hover{ transform:translateY(-3px); box-shadow:var(--shadow-lg); border-color:var(--color-border-leaf); }
  .ps-card__pad{ padding:var(--space-6); }
  .ps-card__pad--sm{ padding:var(--space-4); }
  .ps-card__pad--lg{ padding:var(--space-8); }
  `;
  document.head.appendChild(el);
}

export function Card({
  children,
  tone = "default",
  elevation = "card",
  interactive = false,
  padding = "md",
  className = "",
  ...rest
}) {
  const toneCls = { default: "", leaf: "ps-card--leaf", dark: "ps-card--dark" }[tone] || "";
  const elevCls = { flat: "ps-card--flat", card: "", raised: "ps-card--raised" }[elevation] || "";
  const padCls = padding === "none" ? "" :
    `ps-card__pad${padding === "sm" ? " ps-card__pad--sm" : padding === "lg" ? " ps-card__pad--lg" : ""}`;
  const cls = ["ps-card", toneCls, elevCls, interactive ? "ps-card--interactive" : "", className]
    .filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {padding === "none" ? children : <div className={padCls}>{children}</div>}
    </div>
  );
}
