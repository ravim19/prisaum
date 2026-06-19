import React from "react";

if (typeof document !== "undefined" && !document.getElementById("ps-field-css")) {
  const el = document.createElement("style");
  el.id = "ps-field-css";
  el.textContent = `
  .ps-field{ display:flex; flex-direction:column; gap:.4rem; font-family:var(--font-sans); }
  .ps-field__label{ font-size:var(--text-sm); font-weight:var(--weight-semibold); color:var(--text-strong); }
  .ps-field__req{ color:var(--red-500); margin-left:.15em; }
  .ps-field__hint{ font-size:var(--text-xs); color:var(--text-muted); }
  .ps-field__err{ font-size:var(--text-xs); color:var(--status-danger-fg); font-weight:var(--weight-medium); }
  .ps-input, .ps-textarea, .ps-select{
    width:100%; font-family:var(--font-sans); font-size:var(--text-base);
    color:var(--text-body); background:var(--color-surface);
    border:1.5px solid var(--color-border-strong); border-radius:var(--radius-sm);
    padding:.7rem .9rem; transition:border-color var(--dur) var(--ease-out), box-shadow var(--dur) var(--ease-out);
  }
  .ps-textarea{ min-height:7rem; resize:vertical; line-height:var(--leading-normal); }
  .ps-input::placeholder, .ps-textarea::placeholder{ color:var(--stone-400); }
  .ps-input:hover, .ps-textarea:hover, .ps-select:hover{ border-color:var(--green-400); }
  .ps-input:focus, .ps-textarea:focus, .ps-select:focus{
    outline:none; border-color:var(--color-primary); box-shadow:var(--shadow-focus);
  }
  .ps-field--invalid .ps-input, .ps-field--invalid .ps-textarea, .ps-field--invalid .ps-select{
    border-color:var(--red-500);
  }
  .ps-input:disabled, .ps-textarea:disabled, .ps-select:disabled{
    background:var(--stone-100); color:var(--text-muted); cursor:not-allowed;
  }
  .ps-select{ appearance:none; cursor:pointer;
    background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23647f42' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
    background-repeat:no-repeat; background-position:right .8rem center; padding-right:2.4rem;
  }
  `;
  document.head.appendChild(el);
}

export function Input({
  label,
  type = "text",
  hint,
  error,
  required = false,
  as = "input",
  options = [],
  id,
  className = "",
  ...rest
}) {
  const fid = id || (label ? `ps-${label.replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const control =
    as === "textarea" ? (
      <textarea id={fid} className="ps-textarea" {...rest} />
    ) : as === "select" ? (
      <select id={fid} className="ps-select" {...rest}>
        {options.map((o) =>
          typeof o === "string"
            ? <option key={o} value={o}>{o}</option>
            : <option key={o.value} value={o.value}>{o.label}</option>
        )}
      </select>
    ) : (
      <input id={fid} type={type} className="ps-input" {...rest} />
    );

  return (
    <div className={["ps-field", error ? "ps-field--invalid" : "", className].filter(Boolean).join(" ")}>
      {label && (
        <label className="ps-field__label" htmlFor={fid}>
          {label}{required && <span className="ps-field__req">*</span>}
        </label>
      )}
      {control}
      {error ? <span className="ps-field__err">{error}</span>
             : hint ? <span className="ps-field__hint">{hint}</span> : null}
    </div>
  );
}
