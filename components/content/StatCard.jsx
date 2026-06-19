import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-stat-css")) {
  const el = document.createElement("style");
  el.id = "ps-stat-css";
  el.textContent = `
  .ps-stat{ display:flex; flex-direction:column; gap:.25rem; }
  .ps-stat--center{ align-items:center; text-align:center; }
  .ps-stat__value{
    font-family:var(--font-display); font-weight:var(--weight-extrabold);
    font-size:var(--text-4xl); line-height:1; letter-spacing:var(--tracking-tight);
    color:var(--color-primary); font-feature-settings:"tnum" 1;
  }
  .ps-stat--onDark .ps-stat__value{ color:var(--green-300); }
  .ps-stat__label{ font-size:var(--text-sm); font-weight:var(--weight-medium); color:var(--text-muted); }
  .ps-stat--onDark .ps-stat__label{ color:var(--text-on-dark-muted); }
  .ps-stat__suffix{ font-size:.6em; vertical-align:.05em; margin-left:.05em; }
  `;
  document.head.appendChild(el);
}

export function StatCard({
  value,
  suffix,
  label,
  align = "left",
  onDark = false,
  className = "",
  ...rest
}) {
  const cls = ["ps-stat", align === "center" ? "ps-stat--center" : "", onDark ? "ps-stat--onDark" : "", className]
    .filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      <div className="ps-stat__value">
        {value}{suffix && <span className="ps-stat__suffix">{suffix}</span>}
      </div>
      {label && <div className="ps-stat__label">{label}</div>}
    </div>
  );
}
