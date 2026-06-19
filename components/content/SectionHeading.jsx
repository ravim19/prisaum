import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-heading-css")) {
  const el = document.createElement("style");
  el.id = "ps-heading-css";
  el.textContent = `
  .ps-heading{ display:flex; flex-direction:column; gap:var(--space-3); max-width:62ch; }
  .ps-heading--center{ align-items:center; text-align:center; margin-inline:auto; }
  .ps-heading__eyebrow{
    display:inline-flex; align-items:center; gap:.5em;
    font-size:var(--text-sm); font-weight:var(--weight-bold);
    letter-spacing:var(--tracking-eyebrow); text-transform:uppercase;
    color:var(--color-primary); margin:0;
  }
  .ps-heading--onDark .ps-heading__eyebrow{ color:var(--green-300); }
  .ps-heading__eyebrow::before{
    content:""; width:1.6em; height:2px; background:currentColor; border-radius:2px;
  }
  .ps-heading--center .ps-heading__eyebrow::before{ display:none; }
  .ps-heading__title{
    margin:0; font-family:var(--font-display); font-weight:var(--weight-extrabold);
    line-height:var(--leading-tight); letter-spacing:var(--tracking-tight);
    color:var(--text-strong); font-size:var(--text-3xl);
  }
  .ps-heading--lg .ps-heading__title{ font-size:var(--text-4xl); }
  .ps-heading--sm .ps-heading__title{ font-size:var(--text-2xl); }
  .ps-heading--onDark .ps-heading__title{ color:var(--text-on-dark); }
  .ps-heading__intro{ margin:0; font-size:var(--text-lg); line-height:var(--leading-relaxed); color:var(--text-muted); }
  .ps-heading--onDark .ps-heading__intro{ color:var(--text-on-dark-muted); }
  `;
  document.head.appendChild(el);
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  size = "md",
  onDark = false,
  as = "h2",
  className = "",
  ...rest
}) {
  const Title = as;
  const cls = [
    "ps-heading",
    align === "center" ? "ps-heading--center" : "",
    size !== "md" ? `ps-heading--${size}` : "",
    onDark ? "ps-heading--onDark" : "",
    className,
  ].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {eyebrow && <p className="ps-heading__eyebrow">{eyebrow}</p>}
      <Title className="ps-heading__title">{title}</Title>
      {intro && <p className="ps-heading__intro">{intro}</p>}
    </div>
  );
}
