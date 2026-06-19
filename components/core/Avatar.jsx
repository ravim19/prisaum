import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-avatar-css")) {
  const el = document.createElement("style");
  el.id = "ps-avatar-css";
  el.textContent = `
  .ps-avatar{
    display:inline-flex; align-items:center; justify-content:center;
    border-radius:50%; overflow:hidden; flex:none;
    background:var(--green-100); color:var(--green-800);
    font-family:var(--font-sans); font-weight:var(--weight-bold);
    line-height:1; user-select:none; position:relative;
  }
  .ps-avatar img{ width:100%; height:100%; object-fit:cover; }
  .ps-avatar--ring{ box-shadow:0 0 0 2px var(--color-surface), 0 0 0 4px var(--green-300); }
  .ps-avatar--xs{ width:28px; height:28px; font-size:11px; }
  .ps-avatar--sm{ width:36px; height:36px; font-size:13px; }
  .ps-avatar--md{ width:48px; height:48px; font-size:var(--text-base); }
  .ps-avatar--lg{ width:64px; height:64px; font-size:var(--text-xl); }
  .ps-avatar--xl{ width:96px; height:96px; font-size:var(--text-3xl); }
  `;
  document.head.appendChild(el);
}

function initials(name = "") {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}

export function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  className = "",
  ...rest
}) {
  const cls = ["ps-avatar", `ps-avatar--${size}`, ring ? "ps-avatar--ring" : "", className]
    .filter(Boolean).join(" ");
  return (
    <span className={cls} title={name} {...rest}>
      {src ? <img src={src} alt={name} /> : initials(name)}
    </span>
  );
}
