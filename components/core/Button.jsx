import React from "react";

/* Inject component CSS once when the bundle loads */
if (typeof document !== "undefined" && !document.getElementById("ps-button-css")) {
  const el = document.createElement("style");
  el.id = "ps-button-css";
  el.textContent = `
  .ps-btn{
    --_bg:var(--color-primary); --_fg:#fff; --_bd:transparent;
    display:inline-flex; align-items:center; justify-content:center; gap:.55em;
    font-family:var(--font-sans); font-weight:var(--weight-bold);
    line-height:1; white-space:nowrap; cursor:pointer; text-decoration:none;
    border:1.5px solid var(--_bd); background:var(--_bg); color:var(--_fg);
    border-radius:var(--radius-pill);
    transition:background var(--dur) var(--ease-out), border-color var(--dur) var(--ease-out),
               color var(--dur) var(--ease-out), transform var(--dur-fast) var(--ease-out),
               box-shadow var(--dur) var(--ease-out);
  }
  .ps-btn:hover{ text-decoration:none; }
  .ps-btn:active{ transform:translateY(1px); }
  .ps-btn:focus-visible{ outline:none; box-shadow:var(--shadow-focus); }
  .ps-btn[aria-disabled="true"],.ps-btn:disabled{ opacity:.5; cursor:not-allowed; transform:none; }
  .ps-btn--sm{ font-size:var(--text-sm); padding:.5rem .95rem; }
  .ps-btn--md{ font-size:var(--text-base); padding:.7rem 1.35rem; }
  .ps-btn--lg{ font-size:var(--text-lg); padding:.9rem 1.8rem; }
  .ps-btn--full{ width:100%; }

  .ps-btn--primary{ --_bg:var(--color-primary); --_fg:#fff; }
  .ps-btn--primary:hover{ --_bg:var(--color-primary-hover); }
  .ps-btn--support{ --_bg:var(--color-support); --_fg:var(--green-950); }
  .ps-btn--support:hover{ --_bg:var(--color-support-hover); }
  .ps-btn--secondary{ --_bg:transparent; --_fg:var(--color-primary); --_bd:var(--color-primary); }
  .ps-btn--secondary:hover{ --_bg:var(--color-primary-soft); }
  .ps-btn--ghost{ --_bg:transparent; --_fg:var(--color-primary); --_bd:transparent; }
  .ps-btn--ghost:hover{ --_bg:var(--color-primary-soft); }
  .ps-btn--onDark{ --_bg:#fff; --_fg:var(--green-900); }
  .ps-btn--onDark:hover{ --_bg:var(--green-50); }
  .ps-btn__icon{ display:inline-flex; width:1.15em; height:1.15em; }
  .ps-btn__icon svg{ width:100%; height:100%; display:block; }
  `;
  document.head.appendChild(el);
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  href,
  className = "",
  ...rest
}) {
  const cls = [
    "ps-btn",
    `ps-btn--${variant}`,
    `ps-btn--${size}`,
    fullWidth ? "ps-btn--full" : "",
    className,
  ].filter(Boolean).join(" ");

  const inner = (
    <>
      {iconLeft && <span className="ps-btn__icon">{iconLeft}</span>}
      {children && <span>{children}</span>}
      {iconRight && <span className="ps-btn__icon">{iconRight}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a href={href} className={cls} {...rest}>{inner}</a>
    );
  }
  return (
    <button className={cls} disabled={disabled} aria-disabled={disabled} {...rest}>
      {inner}
    </button>
  );
}
