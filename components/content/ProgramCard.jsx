import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-program-css")) {
  const el = document.createElement("style");
  el.id = "ps-program-css";
  el.textContent = `
  .ps-program{
    display:flex; flex-direction:column; gap:var(--space-3);
    background:var(--color-surface); border:1px solid var(--color-border);
    border-radius:var(--radius-card); padding:var(--space-6);
    box-shadow:var(--shadow-card); text-decoration:none; color:inherit;
    transition:transform var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out);
  }
  a.ps-program:hover{ transform:translateY(-4px); box-shadow:var(--shadow-lg); border-color:var(--color-border-leaf); text-decoration:none; }
  .ps-program__icon{
    width:56px; height:56px; border-radius:var(--radius-md);
    display:flex; align-items:center; justify-content:center;
    background:var(--green-100); color:var(--green-700); margin-bottom:var(--space-1);
  }
  .ps-program__icon img{ width:34px; height:34px; object-fit:contain; }
  .ps-program__icon svg{ width:28px; height:28px; }
  .ps-program__title{ margin:0; font-family:var(--font-display); font-weight:var(--weight-bold);
    font-size:var(--text-xl); line-height:var(--leading-snug); color:var(--text-strong); letter-spacing:var(--tracking-tight); }
  .ps-program__desc{ margin:0; font-size:var(--text-base); line-height:var(--leading-relaxed); color:var(--text-muted); }
  .ps-program__more{ margin-top:auto; padding-top:var(--space-2); display:inline-flex; align-items:center; gap:.4em;
    font-weight:var(--weight-bold); font-size:var(--text-sm); color:var(--color-primary); }
  a.ps-program:hover .ps-program__more{ gap:.7em; }
  `;
  document.head.appendChild(el);
}

export function ProgramCard({
  icon,
  title,
  description,
  tag,
  href,
  cta = "Learn more",
  className = "",
  ...rest
}) {
  const Comp = href ? "a" : "div";
  return (
    <Comp className={["ps-program", className].filter(Boolean).join(" ")} href={href} {...rest}>
      {icon && <span className="ps-program__icon">{typeof icon === "string" ? <img src={icon} alt="" /> : icon}</span>}
      {tag}
      <h3 className="ps-program__title">{title}</h3>
      {description && <p className="ps-program__desc">{description}</p>}
      {href && (
        <span className="ps-program__more">
          {cta}
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      )}
    </Comp>
  );
}
