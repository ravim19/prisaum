/* @ds-bundle: {"format":3,"namespace":"PrisaumSevaDesignSystem_cee68f","components":[{"name":"ProgramCard","sourcePath":"components/content/ProgramCard.jsx"},{"name":"SectionHeading","sourcePath":"components/content/SectionHeading.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"}],"sourceHashes":{"components/content/ProgramCard.jsx":"e9e2bbbad281","components/content/SectionHeading.jsx":"1a7b2c3473f9","components/content/StatCard.jsx":"5e6b11540601","components/core/Avatar.jsx":"364667bd555c","components/core/Button.jsx":"3a52106ce22a","components/core/Card.jsx":"8966dfb44e23","components/core/Tag.jsx":"409fc536c414","components/forms/Input.jsx":"ecda31efcce4","prisaum-site/programs/legacy-hash-redirect.js":"65730cdcf82a","ui_kits/prisaum-website/About.jsx":"bf9cf98cc571","ui_kits/prisaum-website/AboutPage.jsx":"9e91212b6d7f","ui_kits/prisaum-website/App.jsx":"43df1620d9fb","ui_kits/prisaum-website/Footer.jsx":"a4421add2a4f","ui_kits/prisaum-website/Header.jsx":"eb7062f6747c","ui_kits/prisaum-website/Hero.jsx":"3a8dcba70da7","ui_kits/prisaum-website/Programs.jsx":"6971e42c5562","ui_kits/prisaum-website/SiteHeader.jsx":"b22c4f7226c0","ui_kits/prisaum-website/SupportPage.jsx":"577785cd4364","ui_kits/prisaum-website/Volunteer.jsx":"9f16e7c7a20f","ui_kits/prisaum-website/data.js":"61d3cae625b7","ui_kits/prisaum-website/programs/ProgramPage.jsx":"0946f465495c","ui_kits/prisaum-website/programs/legacy-hash-redirect.js":"65730cdcf82a","ui_kits/prisaum-website/programs/program-content.js":"d572c7564b74"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PrisaumSevaDesignSystem_cee68f = window.PrisaumSevaDesignSystem_cee68f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/ProgramCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function ProgramCard({
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
  return /*#__PURE__*/React.createElement(Comp, _extends({
    className: ["ps-program", className].filter(Boolean).join(" "),
    href: href
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    className: "ps-program__icon"
  }, typeof icon === "string" ? /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: ""
  }) : icon), tag, /*#__PURE__*/React.createElement("h3", {
    className: "ps-program__title"
  }, title), description && /*#__PURE__*/React.createElement("p", {
    className: "ps-program__desc"
  }, description), href && /*#__PURE__*/React.createElement("span", {
    className: "ps-program__more"
  }, cta, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "16",
    height: "16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "5",
    y1: "12",
    x2: "19",
    y2: "12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 5 19 12 12 19"
  }))));
}
Object.assign(__ds_scope, { ProgramCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProgramCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function SectionHeading({
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
  const cls = ["ps-heading", align === "center" ? "ps-heading--center" : "", size !== "md" ? `ps-heading--${size}` : "", onDark ? "ps-heading--onDark" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), eyebrow && /*#__PURE__*/React.createElement("p", {
    className: "ps-heading__eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(Title, {
    className: "ps-heading__title"
  }, title), intro && /*#__PURE__*/React.createElement("p", {
    className: "ps-heading__intro"
  }, intro));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function StatCard({
  value,
  suffix,
  label,
  align = "left",
  onDark = false,
  className = "",
  ...rest
}) {
  const cls = ["ps-stat", align === "center" ? "ps-stat--center" : "", onDark ? "ps-stat--onDark" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("div", {
    className: "ps-stat__value"
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    className: "ps-stat__suffix"
  }, suffix)), label && /*#__PURE__*/React.createElement("div", {
    className: "ps-stat__label"
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
  return name.trim().split(/\s+/).slice(0, 2).map(w => w[0]).join("").toUpperCase();
}
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  className = "",
  ...rest
}) {
  const cls = ["ps-avatar", `ps-avatar--${size}`, ring ? "ps-avatar--ring" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : initials(name));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Button({
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
  const cls = ["ps-btn", `ps-btn--${variant}`, `ps-btn--${size}`, fullWidth ? "ps-btn--full" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    className: "ps-btn__icon"
  }, iconLeft), children && /*#__PURE__*/React.createElement("span", null, children), iconRight && /*#__PURE__*/React.createElement("span", {
    className: "ps-btn__icon"
  }, iconRight));
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    disabled: disabled,
    "aria-disabled": disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Card({
  children,
  tone = "default",
  elevation = "card",
  interactive = false,
  padding = "md",
  className = "",
  ...rest
}) {
  const toneCls = {
    default: "",
    leaf: "ps-card--leaf",
    dark: "ps-card--dark"
  }[tone] || "";
  const elevCls = {
    flat: "ps-card--flat",
    card: "",
    raised: "ps-card--raised"
  }[elevation] || "";
  const padCls = padding === "none" ? "" : `ps-card__pad${padding === "sm" ? " ps-card__pad--sm" : padding === "lg" ? " ps-card__pad--lg" : ""}`;
  const cls = ["ps-card", toneCls, elevCls, interactive ? "ps-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), padding === "none" ? children : /*#__PURE__*/React.createElement("div", {
    className: padCls
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Tag({
  children,
  tone = "leaf",
  variant = "soft",
  size = "md",
  icon,
  dot = false,
  className = "",
  ...rest
}) {
  const cls = ["ps-tag", `ps-tag--${variant}`, `ps-tag--${tone}`, size !== "md" ? `ps-tag--${size}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "ps-tag__dot"
  }), icon && /*#__PURE__*/React.createElement("span", {
    className: "ps-tag__icon"
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
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
function Input({
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
  const control = as === "textarea" ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    className: "ps-textarea"
  }, rest)) : as === "select" ? /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    className: "ps-select"
  }, rest), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))) : /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    className: "ps-input"
  }, rest));
  return /*#__PURE__*/React.createElement("div", {
    className: ["ps-field", error ? "ps-field--invalid" : "", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ps-field__label",
    htmlFor: fid
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "ps-field__req"
  }, "*")), control, error ? /*#__PURE__*/React.createElement("span", {
    className: "ps-field__err"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ps-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// prisaum-site/programs/legacy-hash-redirect.js
try { (() => {
// legacy-hash-redirect.js
// Old HubSpot site put every programme as an anchor on a single /programs page
// (e.g. /programs#baking). Server 301s can't match a URL fragment (the part after
// "#" is never sent to the server), so we forward those legacy deep links here,
// on the /programs hub, to the new dedicated programme pages.
(function () {
  var map = {
    baking: "baking-confectionery",
    weaving: "weaving",
    gardening: "gardening-horticulture",
    computers: "computer-skills",
    printing: "printing-merchandise",
    housekeeping: "housekeeping",
    platemaking: "eco-friendly-plate-making",
    laundry: "laundry-fabric-care",
    nios: "nios-support",
    "music-therapy": "music-arts-therapy",
    "play-therapy": "play-therapy",
    occupational: "occupational-therapy"
  };
  var h = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (h && map[h]) {
    // production clean URL; in this prototype the page is <slug>.html
    var clean = "/programs/" + map[h];
    var proto = map[h] + ".html";
    location.replace(location.pathname.indexOf(".html") > -1 ? proto : clean);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "prisaum-site/programs/legacy-hash-redirect.js", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/About.jsx
try { (() => {
const {
  SectionHeading: ASH,
  Card: ACard
} = window.PrisaumSevaDesignSystem_cee68f;
function About() {
  React.useEffect(() => {
    refreshIcons();
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: A.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: A.inner
  }, /*#__PURE__*/React.createElement(ASH, {
    align: "center",
    eyebrow: "About Us",
    title: "A caring path to independence",
    intro: "We help young adults and children with special needs grow vocational, life and social skills \u2014 with dignity at the centre of everything we do."
  }), /*#__PURE__*/React.createElement("div", {
    style: A.cards
  }, ABOUT.map(c => /*#__PURE__*/React.createElement(ACard, {
    key: c.title,
    padding: "none",
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: A.media
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[c.img],
    alt: c.title,
    style: A.img,
    onError: e => {
      e.currentTarget.parentNode.style.background = 'var(--green-100)';
      e.currentTarget.style.display = 'none';
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: A.cardTitle
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: A.cardBody
  }, c.body))))), /*#__PURE__*/React.createElement("div", {
    style: A.services
  }, /*#__PURE__*/React.createElement("p", {
    style: A.servHead
  }, "Vocational Services"), /*#__PURE__*/React.createElement("div", {
    style: A.servGrid
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: A.serv
  }, /*#__PURE__*/React.createElement("div", {
    style: A.servIcon
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG[s.img],
    alt: "",
    style: {
      width: 44,
      height: 44,
      objectFit: "contain"
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: A.servTitle
  }, s.title)))))));
}
const A = {
  wrap: {
    background: "var(--color-bg)",
    padding: "var(--section-pad-y) 0"
  },
  inner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    gap: 44,
    alignItems: "center"
  },
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 24,
    width: "100%"
  },
  media: {
    aspectRatio: "16/10",
    overflow: "hidden",
    background: "var(--green-100)"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  cardTitle: {
    margin: "0 0 8px",
    fontSize: "var(--text-xl)",
    fontWeight: 700,
    color: "var(--text-strong)",
    letterSpacing: "var(--tracking-tight)"
  },
  cardBody: {
    margin: 0,
    fontSize: "var(--text-base)",
    lineHeight: "var(--leading-relaxed)",
    color: "var(--text-muted)"
  },
  services: {
    width: "100%",
    background: "var(--green-50)",
    border: "1px solid var(--color-border-leaf)",
    borderRadius: "var(--radius-xl)",
    padding: "32px 28px",
    display: "flex",
    flexDirection: "column",
    gap: 22
  },
  servHead: {
    margin: 0,
    textAlign: "center",
    fontSize: "var(--text-2xl)",
    fontWeight: 800,
    color: "var(--text-strong)",
    letterSpacing: "var(--tracking-tight)"
  },
  servGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20
  },
  serv: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 12
  },
  servIcon: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    background: "var(--color-surface)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "var(--shadow-sm)"
  },
  servTitle: {
    fontSize: 14.5,
    fontWeight: 600,
    color: "var(--text-body)",
    maxWidth: 180,
    lineHeight: 1.4
  }
};
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/AboutPage.jsx
try { (() => {
/* /about-us — standalone About page. Composes SiteHeader + hero + the shared
   About section + mission/admissions + Footer, with breadcrumb and JSON-LD. */
const {
  Button: AbBtn,
  Tag: AbTag,
  SectionHeading: AbSH,
  Card: AbCard
} = window.PrisaumSevaDesignSystem_cee68f;
function injectAboutLd() {
  const base = "https://prisaum.com";
  const graph = [{
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Prisaum SEVA",
    url: base + "/about-us",
    about: {
      "@type": "EducationalOrganization",
      name: "Prisaum SEVA",
      url: base + "/"
    }
  }, {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: base + "/"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: base + "/about-us"
    }]
  }];
  let el = document.getElementById("ps-jsonld");
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "ps-jsonld";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(graph);
}
function AboutPage() {
  React.useEffect(() => {
    injectAboutLd();
    refreshIcons();
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "ps-site"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    current: "about"
  }), /*#__PURE__*/React.createElement("section", {
    style: AB.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: AB.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: AB.heroInner
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: AB.crumbs
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: AB.crumbLink
  }, "Home"), /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 600
    }
  }, "About Us")), /*#__PURE__*/React.createElement("h1", {
    style: AB.h1
  }, "About Prisaum SEVA"), /*#__PURE__*/React.createElement("p", {
    style: AB.lede
  }, "A residential special-education and vocational academy in Chennai, run by the Prisaum Empowerment Foundation \u2014 helping young adults and children with special needs build job skills, life skills and independence, with dignity at the centre."), /*#__PURE__*/React.createElement("div", {
    style: AB.heroCtas
  }, /*#__PURE__*/React.createElement(AbTag, {
    tone: "warning",
    variant: "solid",
    size: "lg"
  }, "Recognised by Govt. of Tamil Nadu \xB7 908/2025")))), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement("section", {
    style: AB.serve
  }, /*#__PURE__*/React.createElement("div", {
    style: AB.serveInner
  }, /*#__PURE__*/React.createElement(AbSH, {
    eyebrow: "Admissions",
    title: "Whom we serve",
    intro: "We welcome learners aged 12 and above. Our programmes support a wide range of needs:"
  }), /*#__PURE__*/React.createElement("div", {
    style: AB.chips
  }, ADMISSIONS.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: AB.chip
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 15
  }), " ", a))), /*#__PURE__*/React.createElement(AbCard, {
    tone: "leaf",
    padding: "lg",
    className: "ps-mission"
  }, /*#__PURE__*/React.createElement("h3", {
    style: AB.missionH
  }, "Our mission"), /*#__PURE__*/React.createElement("p", {
    style: AB.missionP
  }, "\u201CWhere every ability finds opportunity.\u201D We pair vocational training with educational and therapeutic support \u2014 individual goals, tailored to each learner and guided by our staff and professional artists \u2014 so every trainee can move toward a more independent, dignified life."), /*#__PURE__*/React.createElement("div", {
    style: AB.missionCtas
  }, /*#__PURE__*/React.createElement(AbBtn, {
    variant: "primary",
    size: "lg",
    href: "programs/index.html",
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 18
    })
  }, "Explore our programmes"), /*#__PURE__*/React.createElement(AbBtn, {
    variant: "secondary",
    size: "lg",
    href: "support.html",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "heart",
      size: 18
    })
  }, "Support us"))))), /*#__PURE__*/React.createElement(Footer, null));
}
const AB = {
  hero: {
    position: "relative",
    background: "var(--green-800)",
    color: "var(--text-on-dark)",
    overflow: "hidden"
  },
  glow: {
    position: "absolute",
    top: -160,
    right: -120,
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)",
    pointerEvents: "none"
  },
  heroInner: {
    position: "relative",
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "22px 24px clamp(2.5rem,5vw,3.5rem)"
  },
  crumbs: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    color: "var(--text-on-dark-muted)",
    marginBottom: 20
  },
  crumbLink: {
    color: "var(--green-200)",
    fontWeight: 600
  },
  h1: {
    margin: "0 0 12px",
    fontSize: "clamp(2.2rem,4.5vw,3.2rem)",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "var(--tracking-tight)"
  },
  lede: {
    margin: "0 0 18px",
    fontSize: "var(--text-lg)",
    lineHeight: 1.6,
    color: "var(--text-on-dark-muted)",
    maxWidth: 660
  },
  heroCtas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  },
  serve: {
    background: "var(--color-surface)",
    padding: "clamp(2.5rem,6vw,5rem) 0",
    borderTop: "1px solid var(--color-border)"
  },
  serveInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    gap: 24
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12
  },
  chip: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 15,
    fontWeight: 600,
    color: "var(--green-800)",
    background: "var(--green-50)",
    border: "1px solid var(--color-border-leaf)",
    borderRadius: "var(--radius-pill)",
    padding: "9px 16px"
  },
  missionH: {
    margin: "0 0 10px",
    fontSize: "var(--text-xl)",
    fontWeight: 800,
    color: "var(--text-strong)"
  },
  missionP: {
    margin: "0 0 18px",
    fontSize: "var(--text-lg)",
    lineHeight: 1.65,
    color: "var(--text-body)"
  },
  missionCtas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }
};
window.AboutPage = AboutPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/AboutPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/App.jsx
try { (() => {
const {
  Header,
  Hero,
  About,
  Programs,
  Volunteer,
  Footer
} = window;

// Responsive + helper CSS for the kit
if (!document.getElementById("ps-site-css")) {
  const el = document.createElement("style");
  el.id = "ps-site-css";
  el.textContent = `
  .ps-mobile-nav{ display:none; }
  @media (max-width: 920px){
    .ps-desktop-nav{ display:none !important; }
    .ps-mobile-nav{ display:block; }
    .ps-site section [style*="grid-template-columns: 1.05fr"]{ grid-template-columns:1fr !important; }
  }
  .ps-site a{ text-decoration:none; }
  .ps-site a:hover{ text-decoration:none; }
  html{ scroll-behavior:smooth; }
  `;
  document.head.appendChild(el);
}
function App() {
  const onNav = id => {
    if (id === "top") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }
  };
  React.useEffect(() => {
    refreshIcons();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "site ps-site"
  }, /*#__PURE__*/React.createElement(Header, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Hero, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(About, null), /*#__PURE__*/React.createElement(Programs, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement(Volunteer, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
// icons render after the tree mounts
setTimeout(refreshIcons, 60);
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/Footer.jsx
try { (() => {
const {
  Button: FBtn,
  Input: FInput
} = window.PrisaumSevaDesignSystem_cee68f;

// Resolve links against THIS script's location (kit root), so the footer works
// from the homepage and from deeper /programs/ pages alike.
const _footerScript = document.currentScript && document.currentScript.src && document.currentScript || [...document.querySelectorAll("script")].find(s => s.src && /Footer\.jsx(\?|$)/.test(s.src));
const _KIT_ROOT = _footerScript ? new URL(".", _footerScript.src).href : "./";
function kpage(p) {
  return _KIT_ROOT + p;
}
function Footer() {
  React.useEffect(() => {
    refreshIcons();
  });
  const cols = [{
    h: "Programs",
    links: [{
      t: "Vocational Training",
      href: kpage("programs/index.html")
    }, {
      t: "Educational & Therapeutic",
      href: kpage("programs/index.html")
    }, {
      t: "NIOS Support",
      href: kpage("programs/nios-support.html")
    }, {
      t: "All Programmes",
      href: kpage("programs/index.html")
    }]
  }, {
    h: "About",
    links: [{
      t: "How We Began",
      href: kpage("about-us.html")
    }, {
      t: "Whom We Serve",
      href: kpage("about-us.html")
    }, {
      t: "What We Offer",
      href: kpage("about-us.html")
    }, {
      t: "About Us",
      href: kpage("about-us.html")
    }]
  }, {
    h: "Get Involved",
    links: [{
      t: "Volunteer",
      href: kpage("support.html")
    }, {
      t: "Become a Benefactor",
      href: kpage("support.html")
    }, {
      t: "Partner / CSR",
      href: kpage("support.html")
    }, {
      t: "Support Us",
      href: kpage("support.html")
    }]
  }];
  const social = [{
    i: "facebook",
    href: "https://www.facebook.com/profile.php?id=61567174286850"
  }, {
    i: "instagram",
    href: "https://www.instagram.com/prisaum.seva"
  }, {
    i: "youtube",
    href: "https://www.youtube.com/@Prisaum-Seva"
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: F.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: F.top
  }, /*#__PURE__*/React.createElement("div", {
    style: F.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: F.brandCol
  }, /*#__PURE__*/React.createElement("a", {
    href: kpage("index.html"),
    style: {
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.logoReversed,
    alt: "Prisaum SEVA",
    style: {
      height: 76,
      width: "auto",
      marginBottom: 14
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: F.tagline
  }, "Where every ability finds opportunity."), /*#__PURE__*/React.createElement("div", {
    style: F.social
  }, social.map(s => /*#__PURE__*/React.createElement("a", {
    key: s.i,
    href: s.href,
    target: "_blank",
    rel: "noreferrer",
    style: F.socialBtn
  }, /*#__PURE__*/React.createElement(Ico, {
    name: s.i,
    size: 18
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: F.col
  }, /*#__PURE__*/React.createElement("p", {
    style: F.colHead
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.t,
    href: l.href,
    style: F.link
  }, l.t)))), /*#__PURE__*/React.createElement("div", {
    style: F.contactCol
  }, /*#__PURE__*/React.createElement("p", {
    style: F.colHead
  }, "Visit Us"), /*#__PURE__*/React.createElement("p", {
    style: F.addr
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "map-pin",
    size: 15
  }), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Branch 1:"), " 43 Saptha Giri Colony, 1st Street, Ashok Nagar, Chennai 600083")), /*#__PURE__*/React.createElement("p", {
    style: F.addr
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "map-pin",
    size: 15
  }), " ", /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Branch 2 (Hostel):"), " 1 Balaraman Garden St, Parthasarathy Nagar, Manapakkam, Chennai 600125")), /*#__PURE__*/React.createElement("p", {
    style: F.addr
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 15
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "ps-mono"
  }, "98404 04752 \xB7 +91-44-4604 9575")), /*#__PURE__*/React.createElement("p", {
    style: F.addr
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mail",
    size: 15
  }), " support@prisaum.com")))), /*#__PURE__*/React.createElement("div", {
    style: F.bottom
  }, /*#__PURE__*/React.createElement("div", {
    style: F.bottomInner
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Prisaum Empowerment Foundation. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: F.legal
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: F.legal
  }, "Terms & Conditions")))));
}
const F = {
  wrap: {
    background: "var(--green-950)",
    color: "var(--text-on-dark-muted)"
  },
  top: {
    borderBottom: "1px solid rgba(255,255,255,.1)"
  },
  inner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "52px 24px",
    display: "grid",
    gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1.6fr",
    gap: 32
  },
  brandCol: {
    display: "flex",
    flexDirection: "column"
  },
  tagline: {
    margin: "0 0 16px",
    fontSize: 14.5,
    color: "var(--green-200)",
    maxWidth: 220,
    lineHeight: 1.5
  },
  social: {
    display: "flex",
    gap: 10
  },
  socialBtn: {
    width: 38,
    height: 38,
    borderRadius: "50%",
    background: "rgba(255,255,255,.08)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255,255,255,.12)"
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  colHead: {
    margin: "0 0 4px",
    fontSize: 12,
    fontWeight: 800,
    letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase",
    color: "#fff"
  },
  link: {
    fontSize: 14.5,
    color: "var(--text-on-dark-muted)",
    lineHeight: 1.4
  },
  contactCol: {
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  addr: {
    margin: 0,
    fontSize: 13.5,
    lineHeight: 1.5,
    display: "flex",
    gap: 8,
    alignItems: "flex-start",
    color: "var(--text-on-dark-muted)"
  },
  bottom: {},
  bottomInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "18px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap",
    fontSize: 13
  },
  legal: {
    color: "var(--green-200)"
  }
};
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/Header.jsx
try { (() => {
const {
  Button: PSButton
} = window.PrisaumSevaDesignSystem_cee68f;
function Header({
  onNav
}) {
  const [open, setOpen] = React.useState(false); // mobile menu
  const [progOpen, setProgOpen] = React.useState(false); // programs dropdown
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f, {
      passive: true
    });
    return () => window.removeEventListener("scroll", f);
  }, []);
  React.useEffect(() => {
    refreshIcons();
  });
  const go = id => e => {
    e.preventDefault();
    setOpen(false);
    setProgOpen(false);
    onNav(id);
  };
  const close = () => {
    setOpen(false);
    setProgOpen(false);
  };
  const links = [{
    id: "about",
    label: "About Us",
    href: "about-us.html"
  }, {
    id: "programs",
    label: "Our Programs",
    href: "programs/index.html",
    dropdown: true
  }, {
    id: "support",
    label: "Support Us",
    href: "support.html"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: S.header(scrolled)
  }, /*#__PURE__*/React.createElement("div", {
    style: S.utility
  }, /*#__PURE__*/React.createElement("div", {
    style: S.utilityInner
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "badge-check",
    size: 15
  }), " Recognised by Government of Tamil Nadu \xB7 Reg No: 908/2025"), /*#__PURE__*/React.createElement("span", {
    style: S.utilityContact
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:9840404752",
    style: S.utilityLink
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 14
  }), " 98404 04752"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@prisaum.com",
    style: S.utilityLink
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mail",
    size: 14
  }), " support@prisaum.com")))), /*#__PURE__*/React.createElement("div", {
    style: S.barWrap
  }, /*#__PURE__*/React.createElement("nav", {
    style: S.bar
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: go("top"),
    style: S.brand
  }, /*#__PURE__*/React.createElement("span", {
    style: S.logoChip
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.logoReversed,
    alt: "Prisaum SEVA",
    style: {
      height: 138,
      width: "auto",
      display: "block"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: S.navLinks,
    className: "ps-desktop-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l.id,
    style: {
      position: "relative"
    },
    onMouseEnter: () => l.dropdown && setProgOpen(true),
    onMouseLeave: () => l.dropdown && setProgOpen(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    onClick: close,
    style: S.navLink
  }, l.label, l.dropdown && /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-down",
    size: 16
  })), l.dropdown && progOpen && /*#__PURE__*/React.createElement("div", {
    style: S.dropdown
  }, /*#__PURE__*/React.createElement("div", {
    style: S.ddCol
  }, /*#__PURE__*/React.createElement("p", {
    style: S.ddHead
  }, "Vocational Training"), VOCATIONAL.slice(0, 5).map(p => /*#__PURE__*/React.createElement("a", {
    key: p.title,
    href: `programs/${p.slug}.html`,
    onClick: close,
    style: S.ddItem
  }, p.title))), /*#__PURE__*/React.createElement("div", {
    style: S.ddCol
  }, /*#__PURE__*/React.createElement("p", {
    style: S.ddHead
  }, "Educational & Therapeutic"), THERAPEUTIC.slice(0, 5).map(p => /*#__PURE__*/React.createElement("a", {
    key: p.title,
    href: `programs/${p.slug}.html`,
    onClick: close,
    style: S.ddItem
  }, p.title))), /*#__PURE__*/React.createElement("a", {
    href: "programs/index.html",
    onClick: close,
    style: S.ddAll
  }, "View all programmes ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 15
  })))))), /*#__PURE__*/React.createElement("div", {
    className: "ps-desktop-nav"
  }, /*#__PURE__*/React.createElement(PSButton, {
    variant: "support",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "heart",
      size: 17
    }),
    href: "support.html"
  }, "Support Us")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Menu",
    onClick: () => setOpen(!open),
    style: S.hamburger,
    className: "ps-mobile-nav"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: open ? "x" : "menu",
    size: 26
  })))), open && /*#__PURE__*/React.createElement("div", {
    style: S.mobileMenu,
    className: "ps-mobile-nav"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: l.href,
    onClick: close,
    style: S.mobileLink
  }, l.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px"
    }
  }, /*#__PURE__*/React.createElement(PSButton, {
    variant: "support",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "heart",
      size: 17
    }),
    href: "support.html"
  }, "Support Us"))));
}
const S = {
  header: sc => ({
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "var(--green-900)",
    boxShadow: sc ? "var(--shadow-md)" : "none",
    transition: "box-shadow var(--dur) var(--ease-out)"
  }),
  utility: {
    background: "var(--green-950)",
    color: "var(--text-on-dark-muted)",
    fontSize: 12.5
  },
  utilityInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "7px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap"
  },
  utilityContact: {
    display: "flex",
    gap: 18,
    alignItems: "center"
  },
  utilityLink: {
    color: "var(--text-on-dark-muted)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontWeight: 500
  },
  barWrap: {
    borderBottom: "1px solid rgba(255,255,255,.12)"
  },
  bar: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "4px 24px",
    display: "flex",
    alignItems: "center",
    gap: 24
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    flex: "none"
  },
  logoChip: {
    display: "inline-flex",
    alignItems: "center",
    background: "transparent",
    padding: 0
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 4,
    marginLeft: "auto"
  },
  navLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    padding: "10px 14px",
    fontSize: 15,
    fontWeight: 600,
    color: "var(--text-on-dark)",
    borderRadius: "var(--radius-sm)",
    cursor: "pointer"
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    marginTop: 4,
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    boxShadow: "var(--shadow-lg)",
    padding: 18,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    minWidth: 460
  },
  ddCol: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    minWidth: 200
  },
  ddHead: {
    margin: "0 0 6px",
    fontSize: 11,
    fontWeight: 800,
    letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase",
    color: "var(--color-primary)"
  },
  ddItem: {
    padding: "7px 8px",
    fontSize: 14,
    color: "var(--text-body)",
    borderRadius: "var(--radius-xs)",
    cursor: "pointer"
  },
  ddAll: {
    gridColumn: "1 / -1",
    marginTop: 6,
    paddingTop: 12,
    borderTop: "1px solid var(--color-border)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13.5,
    fontWeight: 700,
    color: "var(--color-primary)"
  },
  hamburger: {
    marginLeft: "auto",
    background: "none",
    border: "none",
    color: "var(--text-on-dark)",
    cursor: "pointer",
    padding: 4
  },
  mobileMenu: {
    borderTop: "1px solid rgba(255,255,255,.12)",
    background: "var(--green-900)",
    paddingBottom: 8
  },
  mobileLink: {
    display: "block",
    padding: "14px 20px",
    fontSize: 16,
    fontWeight: 600,
    color: "var(--text-on-dark)",
    borderBottom: "1px solid rgba(255,255,255,.1)"
  }
};
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/Hero.jsx
try { (() => {
const {
  Button: HBtn,
  Tag: HTag,
  StatCard: HStat
} = window.PrisaumSevaDesignSystem_cee68f;
function Hero({
  onNav
}) {
  React.useEffect(() => {
    refreshIcons();
  });
  const go = id => e => {
    e.preventDefault();
    onNav(id);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: H.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: H.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: H.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: H.left
  }, /*#__PURE__*/React.createElement("span", {
    style: H.eyebrow
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "sparkles",
    size: 15
  }), " Special Education & Vocational Academy"), /*#__PURE__*/React.createElement("h1", {
    style: H.title
  }, "Boarding school with world-class infrastructure & ", /*#__PURE__*/React.createElement("span", {
    style: H.em
  }, "vocational excellence")), /*#__PURE__*/React.createElement("p", {
    style: H.lead
  }, "A residential vocational programme in Chennai where young adults with special needs build real job skills, independence and confidence \u2014 supported by caring staff and professional artists."), /*#__PURE__*/React.createElement("div", {
    style: H.admit
  }, /*#__PURE__*/React.createElement(HTag, {
    tone: "warning",
    variant: "solid",
    size: "lg"
  }, "Admissions \xB7 Age 12+"), /*#__PURE__*/React.createElement("div", {
    style: H.admitList
  }, ADMISSIONS.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: H.admitItem
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 14
  }), " ", a)))), /*#__PURE__*/React.createElement("div", {
    style: H.ctas
  }, /*#__PURE__*/React.createElement(HBtn, {
    variant: "onDark",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 18
    }),
    onClick: go("support")
  }, "Enquire about admission"), /*#__PURE__*/React.createElement(HBtn, {
    variant: "support",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "heart",
      size: 18
    }),
    onClick: go("support")
  }, "Support Us"))), /*#__PURE__*/React.createElement("div", {
    style: H.right
  }, /*#__PURE__*/React.createElement("div", {
    style: H.media
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.hero,
    alt: "A trainee learning at Prisaum Seva",
    style: H.img,
    onError: e => {
      e.currentTarget.style.display = 'none';
    }
  }), /*#__PURE__*/React.createElement("a", {
    style: H.play,
    href: "https://www.youtube.com/@Prisaum-Seva",
    target: "_blank",
    rel: "noreferrer",
    "aria-label": "Watch our intro video"
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "play",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: H.badge
  }, /*#__PURE__*/React.createElement("span", {
    style: H.badgeBig
  }, "Prisaum Empowerment Foundation"), /*#__PURE__*/React.createElement("span", {
    style: H.badgeSm
  }, "Where every ability finds opportunity"))), /*#__PURE__*/React.createElement("div", {
    style: H.stats
  }, /*#__PURE__*/React.createElement(HStat, {
    value: "15",
    suffix: "+",
    label: "Skill programmes",
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: H.div
  }), /*#__PURE__*/React.createElement(HStat, {
    value: "2",
    label: "Chennai campuses",
    onDark: true
  }), /*#__PURE__*/React.createElement("div", {
    style: H.div
  }), /*#__PURE__*/React.createElement(HStat, {
    value: "12",
    suffix: "+",
    label: "Admissions from age",
    onDark: true
  })))));
}
const H = {
  wrap: {
    position: "relative",
    background: "var(--green-800)",
    color: "var(--text-on-dark)",
    overflow: "hidden"
  },
  glow: {
    position: "absolute",
    top: -160,
    right: -120,
    width: 520,
    height: 520,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.45), transparent 70%)",
    pointerEvents: "none"
  },
  inner: {
    position: "relative",
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "clamp(2.5rem,6vw,5rem) 24px",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 48,
    alignItems: "stretch"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 22
  },
  eyebrow: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    fontWeight: 700,
    letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase",
    color: "var(--green-300)"
  },
  title: {
    margin: 0,
    fontSize: "clamp(2.1rem,4.4vw,3.4rem)",
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: "var(--tracking-tight)",
    color: "#fff"
  },
  em: {
    color: "var(--green-300)"
  },
  lead: {
    margin: 0,
    fontSize: "var(--text-lg)",
    lineHeight: "var(--leading-relaxed)",
    color: "var(--text-on-dark-muted)",
    maxWidth: 540
  },
  admit: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "var(--radius-lg)",
    padding: 18
  },
  admitList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px 18px"
  },
  admitItem: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 13.5,
    color: "#e9efe0",
    fontWeight: 500
  },
  ctas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  },
  stats: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 16,
    background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "var(--radius-lg)",
    padding: "16px 12px"
  },
  div: {
    width: 1,
    height: 38,
    background: "rgba(255,255,255,.16)"
  },
  right: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    justifyContent: "center",
    width: "100%",
    maxWidth: 480,
    marginLeft: "auto",
    marginRight: "auto"
  },
  media: {
    position: "relative",
    width: "100%",
    flex: "1 1 auto",
    minHeight: 340,
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    background: "var(--green-800)",
    boxShadow: "var(--shadow-xl)",
    border: "1px solid rgba(255,255,255,.1)"
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  play: {
    position: "absolute",
    top: "42%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "rgba(255,255,255,.92)",
    color: "var(--green-800)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "var(--shadow-lg)",
    cursor: "pointer",
    textDecoration: "none"
  },
  badge: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 16,
    background: "rgba(29,42,29,.82)",
    backdropFilter: "blur(6px)",
    borderRadius: "var(--radius-md)",
    padding: "12px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  badgeBig: {
    fontSize: 14,
    fontWeight: 700,
    color: "#fff"
  },
  badgeSm: {
    fontSize: 12.5,
    color: "var(--green-200)"
  }
};
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/Programs.jsx
try { (() => {
const {
  SectionHeading: PSH,
  ProgramCard: PCard,
  Tag: PTag,
  Button: PBtn
} = window.PrisaumSevaDesignSystem_cee68f;

// Homepage programmes section — cards link to real, crawlable programme pages.
function Programs({
  onNav
}) {
  const [tab, setTab] = React.useState("vocational");
  React.useEffect(() => {
    refreshIcons();
  }, [tab]);
  const list = tab === "vocational" ? VOCATIONAL : THERAPEUTIC;
  const toneFor = tab === "vocational" ? "leaf" : "info";
  const tabs = [{
    id: "vocational",
    label: "Vocational Training",
    n: VOCATIONAL.length
  }, {
    id: "therapeutic",
    label: "Educational & Therapeutic",
    n: THERAPEUTIC.length
  }];

  // dedicated SEO page when a slug exists, else the programmes hub
  const hrefFor = p => p.slug ? `programs/${p.slug}.html` : "programs/index.html";
  return /*#__PURE__*/React.createElement("section", {
    id: "programs",
    style: P.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: P.inner
  }, /*#__PURE__*/React.createElement(PSH, {
    eyebrow: "Our Programs",
    title: "Skills that open real opportunities",
    intro: "Hands-on vocational training paired with educational and therapeutic support \u2014 each programme tailored to the learner."
  }), /*#__PURE__*/React.createElement("div", {
    style: P.tabs
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    onClick: () => setTab(t.id),
    style: P.tab(tab === t.id)
  }, t.label, /*#__PURE__*/React.createElement("span", {
    style: P.tabCount(tab === t.id)
  }, t.n)))), /*#__PURE__*/React.createElement("div", {
    style: P.grid
  }, list.map(p => /*#__PURE__*/React.createElement(PCard, {
    key: p.title,
    icon: /*#__PURE__*/React.createElement(Ico, {
      name: p.icon,
      size: 26
    }),
    title: p.title,
    description: p.desc,
    tag: /*#__PURE__*/React.createElement(PTag, {
      tone: toneFor,
      size: "sm"
    }, tab === "vocational" ? "Vocational" : "Therapeutic"),
    href: hrefFor(p),
    cta: p.slug ? "View programme" : "Learn more"
  }))), /*#__PURE__*/React.createElement(PBtn, {
    variant: "secondary",
    size: "lg",
    href: "programs/index.html",
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 18
    })
  }, "View all programmes"), /*#__PURE__*/React.createElement("div", {
    style: P.certs
  }, /*#__PURE__*/React.createElement("p", {
    style: P.certHead
  }, "We offer certifications in"), /*#__PURE__*/React.createElement("div", {
    style: P.certRow
  }, ["Digital Literacy", "Handicrafts", "Gardening / Horticulture", "Fashion Design & Garment Making"].map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: P.cert
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "award",
    size: 16
  }), " ", c))))));
}
const P = {
  wrap: {
    background: "var(--color-surface)",
    padding: "var(--section-pad-y) 0"
  },
  inner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    gap: 28,
    alignItems: "center"
  },
  tabs: {
    display: "inline-flex",
    gap: 6,
    background: "var(--stone-100)",
    borderRadius: "var(--radius-pill)",
    padding: 6
  },
  tab: on => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    border: "none",
    cursor: "pointer",
    padding: "10px 20px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    fontWeight: 700,
    color: on ? "#fff" : "var(--text-body)",
    background: on ? "var(--color-primary)" : "transparent",
    boxShadow: on ? "var(--shadow-sm)" : "none",
    transition: "all var(--dur) var(--ease-out)"
  }),
  tabCount: on => ({
    fontSize: 12,
    fontWeight: 700,
    padding: "2px 8px",
    borderRadius: 999,
    background: on ? "rgba(255,255,255,.22)" : "var(--stone-200)",
    color: on ? "#fff" : "var(--text-muted)"
  }),
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: 22,
    width: "100%"
  },
  certs: {
    width: "100%",
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    borderTop: "1px dashed var(--color-border-strong)",
    paddingTop: 32
  },
  certHead: {
    margin: 0,
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase",
    color: "var(--text-muted)"
  },
  certRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center"
  },
  cert: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 15,
    fontWeight: 600,
    color: "var(--green-800)",
    background: "var(--green-50)",
    border: "1px solid var(--color-border-leaf)",
    borderRadius: "var(--radius-pill)",
    padding: "9px 16px"
  }
};
window.Programs = Programs;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/Programs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/SiteHeader.jsx
try { (() => {
/* Shared multi-page site header for standalone pages (About, Support).
   `prefix` adjusts relative links by folder depth ("" at site root). */
const {
  Button: ShBtn
} = window.PrisaumSevaDesignSystem_cee68f;
function SiteHeader({
  prefix = "",
  current = ""
}) {
  React.useEffect(() => {
    refreshIcons();
  });
  const link = p => prefix + p;
  const items = [{
    id: "about",
    label: "About Us",
    href: link("about-us.html")
  }, {
    id: "programs",
    label: "Our Programs",
    href: link("programs/index.html")
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: SH.header
  }, /*#__PURE__*/React.createElement("div", {
    style: SH.utility
  }, /*#__PURE__*/React.createElement("div", {
    style: SH.utilityInner
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "badge-check",
    size: 15
  }), " Recognised by Government of Tamil Nadu \xB7 Reg No: 908/2025"), /*#__PURE__*/React.createElement("span", {
    style: SH.utilityContact
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:9840404752",
    style: SH.utilityLink
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 14
  }), " 98404 04752"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@prisaum.com",
    style: SH.utilityLink
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mail",
    size: 14
  }), " support@prisaum.com")))), /*#__PURE__*/React.createElement("div", {
    style: SH.barWrap
  }, /*#__PURE__*/React.createElement("nav", {
    style: SH.bar
  }, /*#__PURE__*/React.createElement("a", {
    href: link("index.html"),
    style: SH.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.logoReversed,
    alt: "Prisaum SEVA \u2014 home",
    style: {
      height: 84,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: SH.nav,
    className: "ps-desktop-nav"
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it.id,
    href: it.href,
    style: SH.navLink(current === it.id)
  }, it.label)), /*#__PURE__*/React.createElement(ShBtn, {
    variant: "support",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "heart",
      size: 17
    }),
    href: link("support.html")
  }, "Support Us")), /*#__PURE__*/React.createElement("a", {
    href: link("index.html"),
    className: "ps-mobile-nav",
    style: {
      ...SH.navLink(false),
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-left",
    size: 18
  }), " Home"))));
}
const SH = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "var(--green-900)",
    boxShadow: "var(--shadow-md)"
  },
  utility: {
    background: "var(--green-950)",
    color: "var(--text-on-dark-muted)",
    fontSize: 12.5
  },
  utilityInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "7px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    flexWrap: "wrap"
  },
  utilityContact: {
    display: "flex",
    gap: 18,
    alignItems: "center"
  },
  utilityLink: {
    color: "var(--text-on-dark-muted)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontWeight: 500
  },
  barWrap: {
    borderBottom: "1px solid rgba(255,255,255,.12)"
  },
  bar: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "4px 24px",
    display: "flex",
    alignItems: "center",
    gap: 24
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    flex: "none"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginLeft: "auto"
  },
  navLink: on => ({
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 14px",
    fontSize: 15,
    fontWeight: on ? 800 : 600,
    color: on ? "#fff" : "var(--text-on-dark)",
    whiteSpace: "nowrap",
    borderBottom: on ? "2px solid var(--green-300)" : "2px solid transparent"
  })
};
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/SupportPage.jsx
try { (() => {
/* /support — standalone Support / Get-involved page. Composes SiteHeader + hero +
   the shared Volunteer band + ways-to-give + contact/visit + Footer. */
const {
  Button: SuBtn,
  Tag: SuTag,
  SectionHeading: SuSH,
  Card: SuCard
} = window.PrisaumSevaDesignSystem_cee68f;
function injectSupportLd() {
  const base = "https://prisaum.com";
  const graph = [{
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Support Prisaum SEVA",
    url: base + "/support",
    about: {
      "@type": "EducationalOrganization",
      name: "Prisaum SEVA",
      url: base + "/",
      telephone: "+91-98404-04752",
      email: "support@prisaum.com"
    }
  }, {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: base + "/"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Support Us",
      item: base + "/support"
    }]
  }];
  let el = document.getElementById("ps-jsonld");
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "ps-jsonld";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(graph);
}
function SupportPage() {
  React.useEffect(() => {
    injectSupportLd();
    refreshIcons();
  });
  const ways = [{
    icon: "hand-heart",
    t: "Volunteer",
    d: "Give at least 2 hours each week to mentor and guide our trainees."
  }, {
    icon: "gift",
    t: "Become a benefactor",
    d: "Fund a learner's training, materials or a programme for the year."
  }, {
    icon: "handshake",
    t: "Partner / CSR",
    d: "Collaborate with us on skills, placements and awareness."
  }, {
    icon: "megaphone",
    t: "Share the message",
    d: "Raise awareness about special education and child mental health."
  }];
  const branches = [{
    name: "Branch 1",
    addr: "43 Saptha Giri Colony, 1st Street, Ashok Nagar, Chennai 600083, Tamil Nadu"
  }, {
    name: "Branch 2 (Hostel)",
    addr: "1 Balaraman Garden Street, Parthasarathy Nagar, Manapakkam, Chennai 600125, Tamil Nadu"
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "ps-site"
  }, /*#__PURE__*/React.createElement(SiteHeader, {
    current: "support"
  }), /*#__PURE__*/React.createElement("section", {
    style: SU.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: SU.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: SU.heroInner
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: SU.crumbs
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: SU.crumbLink
  }, "Home"), /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff",
      fontWeight: 600
    }
  }, "Support Us")), /*#__PURE__*/React.createElement(SuTag, {
    tone: "warning",
    variant: "solid",
    size: "lg"
  }, "Get involved"), /*#__PURE__*/React.createElement("h1", {
    style: SU.h1
  }, "Help every ability find its opportunity"), /*#__PURE__*/React.createElement("p", {
    style: SU.lede
  }, "Your time and generosity move a young adult closer to independence. Volunteer, become a benefactor, partner with us, or simply spread the word \u2014 every contribution counts."))), /*#__PURE__*/React.createElement("section", {
    style: SU.ways
  }, /*#__PURE__*/React.createElement("div", {
    style: SU.waysInner
  }, /*#__PURE__*/React.createElement(SuSH, {
    align: "center",
    eyebrow: "Ways to help",
    title: "Four ways to make a difference"
  }), /*#__PURE__*/React.createElement("div", {
    style: SU.waysGrid
  }, ways.map(w => /*#__PURE__*/React.createElement(SuCard, {
    key: w.t,
    interactive: true
  }, /*#__PURE__*/React.createElement("div", {
    style: SU.wayIcon
  }, /*#__PURE__*/React.createElement(Ico, {
    name: w.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: SU.wayT
  }, w.t), /*#__PURE__*/React.createElement("p", {
    style: SU.wayD
  }, w.d)))))), /*#__PURE__*/React.createElement(Volunteer, null), /*#__PURE__*/React.createElement("section", {
    style: SU.contact
  }, /*#__PURE__*/React.createElement("div", {
    style: SU.contactInner
  }, /*#__PURE__*/React.createElement(SuSH, {
    eyebrow: "Visit us",
    title: "Come and see our work",
    intro: "We'd love to welcome you to either campus. Call ahead and we'll arrange a visit."
  }), /*#__PURE__*/React.createElement("div", {
    style: SU.branches
  }, branches.map(b => /*#__PURE__*/React.createElement(SuCard, {
    key: b.name,
    tone: "leaf",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: SU.branchHead
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "map-pin",
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", {
    style: SU.branchName
  }, b.name)), /*#__PURE__*/React.createElement("p", {
    style: SU.branchAddr
  }, b.addr)))), /*#__PURE__*/React.createElement("div", {
    style: SU.contactRow
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:9840404752",
    style: SU.contactPill
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 16
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "ps-mono"
  }, "98404 04752")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:support@prisaum.com",
    style: SU.contactPill
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mail",
    size: 16
  }), " support@prisaum.com")))), /*#__PURE__*/React.createElement(Footer, null));
}
const SU = {
  hero: {
    position: "relative",
    background: "var(--green-800)",
    color: "var(--text-on-dark)",
    overflow: "hidden"
  },
  glow: {
    position: "absolute",
    top: -160,
    right: -120,
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)",
    pointerEvents: "none"
  },
  heroInner: {
    position: "relative",
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "22px 24px clamp(2.5rem,5vw,3.5rem)",
    display: "flex",
    flexDirection: "column",
    gap: 16,
    alignItems: "flex-start"
  },
  crumbs: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13.5,
    color: "var(--text-on-dark-muted)"
  },
  crumbLink: {
    color: "var(--green-200)",
    fontWeight: 600
  },
  h1: {
    margin: 0,
    fontSize: "clamp(2.2rem,4.5vw,3.2rem)",
    fontWeight: 800,
    color: "#fff",
    letterSpacing: "var(--tracking-tight)",
    maxWidth: 720
  },
  lede: {
    margin: 0,
    fontSize: "var(--text-lg)",
    lineHeight: 1.6,
    color: "var(--text-on-dark-muted)",
    maxWidth: 660
  },
  ways: {
    background: "var(--color-bg)",
    padding: "clamp(2.5rem,6vw,5rem) 0"
  },
  waysInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    gap: 28,
    alignItems: "center"
  },
  waysGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    gap: 20,
    width: "100%"
  },
  wayIcon: {
    width: 52,
    height: 52,
    borderRadius: "var(--radius-md)",
    background: "var(--green-100)",
    color: "var(--green-700)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 14
  },
  wayT: {
    margin: "0 0 6px",
    fontSize: "var(--text-lg)",
    fontWeight: 700,
    color: "var(--text-strong)"
  },
  wayD: {
    margin: 0,
    fontSize: "var(--text-base)",
    lineHeight: 1.55,
    color: "var(--text-muted)"
  },
  contact: {
    background: "var(--color-surface)",
    padding: "clamp(2.5rem,6vw,5rem) 0",
    borderTop: "1px solid var(--color-border)"
  },
  contactInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    flexDirection: "column",
    gap: 24
  },
  branches: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20
  },
  branchHead: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "var(--green-700)",
    marginBottom: 8
  },
  branchName: {
    fontSize: "var(--text-lg)",
    fontWeight: 800,
    color: "var(--text-strong)"
  },
  branchAddr: {
    margin: 0,
    fontSize: "var(--text-base)",
    lineHeight: 1.55,
    color: "var(--text-body)"
  },
  contactRow: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  },
  contactPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    fontSize: 15,
    fontWeight: 600,
    color: "var(--green-800)",
    background: "var(--green-50)",
    border: "1px solid var(--color-border-leaf)",
    borderRadius: "var(--radius-pill)",
    padding: "10px 18px"
  }
};
window.SupportPage = SupportPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/SupportPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/Volunteer.jsx
try { (() => {
const {
  Button: VBtn,
  Input: VInput,
  SectionHeading: VSH
} = window.PrisaumSevaDesignSystem_cee68f;
function Volunteer() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  React.useEffect(() => {
    refreshIcons();
  }, [sent]);
  const submit = e => {
    e.preventDefault();
    setSent(true);
  };
  const ways = [{
    icon: "megaphone",
    t: "Share the message",
    d: "Raise awareness about child mental health."
  }, {
    icon: "clock",
    t: "Devote your time",
    d: "Volunteer at least 2 hours each week."
  }, {
    icon: "graduation-cap",
    t: "Educate & guide",
    d: "Mentor trainees and rediscover purpose."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "support",
    style: V.wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: V.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: V.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: V.left
  }, /*#__PURE__*/React.createElement(VSH, {
    onDark: true,
    eyebrow: "Get Involved",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Do you want to empower those with intellectual challenges?"),
    intro: "Join us as a volunteer, benefactor or partner. Every hour and every contribution helps a young adult move closer to independence."
  }), /*#__PURE__*/React.createElement("div", {
    style: V.ways
  }, ways.map(w => /*#__PURE__*/React.createElement("div", {
    key: w.t,
    style: V.way
  }, /*#__PURE__*/React.createElement("div", {
    style: V.wayIcon
  }, /*#__PURE__*/React.createElement(Ico, {
    name: w.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: V.wayT
  }, w.t), /*#__PURE__*/React.createElement("p", {
    style: V.wayD
  }, w.d)))))), /*#__PURE__*/React.createElement("div", {
    style: V.card
  }, !sent ? /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: V.formTitle
  }, "Register as a volunteer"), /*#__PURE__*/React.createElement("p", {
    style: V.formSub
  }, "We\u2019ll get in touch within two working days."), /*#__PURE__*/React.createElement(VInput, {
    label: "Full name",
    placeholder: "Your name",
    required: true,
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(VInput, {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    required: true
  }), /*#__PURE__*/React.createElement(VInput, {
    label: "Phone",
    placeholder: "98404 04752"
  }), /*#__PURE__*/React.createElement(VInput, {
    label: "How would you like to help?",
    as: "select",
    options: ["Volunteer (2 hrs/week)", "Become a benefactor", "Partner / CSR", "Spread the word"]
  }), /*#__PURE__*/React.createElement(VBtn, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 18
    }),
    type: "submit"
  }, "Submit registration"), /*#__PURE__*/React.createElement("p", {
    style: V.fine
  }, "By registering you agree to be contacted by Prisaum Empowerment Foundation.")) : /*#__PURE__*/React.createElement("div", {
    style: V.success
  }, /*#__PURE__*/React.createElement("div", {
    style: V.successIcon
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 30
  })), /*#__PURE__*/React.createElement("h3", {
    style: V.formTitle
  }, "Thank you", name ? `, ${name.split(" ")[0]}` : "", "!"), /*#__PURE__*/React.createElement("p", {
    style: V.formSub
  }, "Your interest means a great deal. Our team will reach out shortly to welcome you."), /*#__PURE__*/React.createElement(VBtn, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setName("");
    }
  }, "Register someone else")))));
}
const V = {
  wrap: {
    position: "relative",
    background: "var(--green-900)",
    color: "var(--text-on-dark)",
    overflow: "hidden",
    padding: "var(--section-pad-y) 0"
  },
  glow: {
    position: "absolute",
    bottom: -180,
    left: -100,
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)",
    pointerEvents: "none"
  },
  inner: {
    position: "relative",
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "1.05fr .95fr",
    gap: 48,
    alignItems: "center"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: 28
  },
  ways: {
    display: "flex",
    flexDirection: "column",
    gap: 16
  },
  way: {
    display: "flex",
    gap: 14,
    alignItems: "flex-start"
  },
  wayIcon: {
    flex: "none",
    width: 44,
    height: 44,
    borderRadius: "var(--radius-md)",
    background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.14)",
    color: "var(--green-300)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  wayT: {
    margin: 0,
    fontSize: 16,
    fontWeight: 700,
    color: "#fff"
  },
  wayD: {
    margin: "2px 0 0",
    fontSize: 14,
    color: "var(--text-on-dark-muted)"
  },
  card: {
    background: "var(--color-surface)",
    borderRadius: "var(--radius-xl)",
    padding: 30,
    boxShadow: "var(--shadow-xl)"
  },
  formTitle: {
    margin: 0,
    fontSize: "var(--text-2xl)",
    fontWeight: 800,
    color: "var(--text-strong)",
    letterSpacing: "var(--tracking-tight)"
  },
  formSub: {
    margin: "0 0 4px",
    fontSize: 14.5,
    color: "var(--text-muted)"
  },
  fine: {
    margin: 0,
    fontSize: 12,
    color: "var(--text-muted)",
    lineHeight: 1.5
  },
  success: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    gap: 12,
    padding: "20px 0"
  },
  successIcon: {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "var(--status-success-bg)",
    color: "var(--status-success-fg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
window.Volunteer = Volunteer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/Volunteer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/data.js
try { (() => {
/* Shared data + helpers for the Prisaum Seva website kit.
   Content drawn from prisaum.com; imagery is now self-hosted under /assets/site
   (migrated off HubSpot). */

// Resolve /assets/site/<file> relative to THIS script's own location, so the
// same map works from the homepage and from deeper /programs/ pages alike.
const _dataScript = document.currentScript && document.currentScript.src && document.currentScript || [...document.querySelectorAll("script")].find(s => s.src && /(^|\/)data\.js(\?|$)/.test(s.src));
const _ASSET_BASE = _dataScript ? new URL("../../assets/site/", _dataScript.src).href : "../../assets/site/";
function asset(file) {
  return _ASSET_BASE + file;
}
const IMG = {
  logoColor: asset("logo-color.png"),
  logoReversed: asset("logo-reversed.png"),
  hero: asset("hero.png"),
  howWeBegan: asset("how-we-began.png"),
  whomWeServe: asset("whom-we-serve.png"),
  whatWeOffer: asset("what-we-offer.png"),
  icGuidance: asset("ic-guidance.png"),
  icTraining: asset("ic-training.png"),
  icCert: asset("ic-cert.png"),
  icCareer: asset("ic-career.png")
};

// Vocational training programmes — every entry has a dedicated SEO page (slug).
const VOCATIONAL = [{
  icon: "cookie",
  title: "Baking & Confectionery",
  desc: "Baking, decoration, packaging and safe kitchen practice.",
  slug: "baking-confectionery"
}, {
  icon: "grid-3x3",
  title: "Weaving",
  desc: "Handloom skills that build focus and fine motor control.",
  slug: "weaving"
}, {
  icon: "sprout",
  title: "Gardening & Horticulture",
  desc: "Nursery, crop care and landscape maintenance.",
  slug: "gardening-horticulture"
}, {
  icon: "monitor",
  title: "Computer Skills",
  desc: "Digital literacy, data entry and online communication.",
  slug: "computer-skills"
}, {
  icon: "printer",
  title: "Printing & Merchandise",
  desc: "Print production and merchandise finishing.",
  slug: "printing-merchandise"
}, {
  icon: "sparkles",
  title: "Self Grooming & Hygiene",
  desc: "Personal care routines for confident daily living.",
  slug: "self-grooming-hygiene"
}, {
  icon: "house",
  title: "Housekeeping",
  desc: "Facility care and organised, independent living.",
  slug: "housekeeping"
}, {
  icon: "leaf",
  title: "Eco-Friendly Plate Making",
  desc: "Biodegradable plate production from natural material.",
  slug: "eco-friendly-plate-making"
}, {
  icon: "shirt",
  title: "Laundry & Fabric Care",
  desc: "Garment care, washing and pressing skills.",
  slug: "laundry-fabric-care"
}];

// Educational & therapeutic programmes — each with a dedicated SEO page (slug).
const THERAPEUTIC = [{
  icon: "book-open",
  title: "NIOS Support",
  desc: "Open-school coaching toward state certification.",
  slug: "nios-support"
}, {
  icon: "music",
  title: "Music & Expressive Arts Therapy",
  desc: "Expression and regulation through the arts.",
  slug: "music-arts-therapy"
}, {
  icon: "blocks",
  title: "Play Therapy",
  desc: "Structured play that builds social confidence.",
  slug: "play-therapy"
}, {
  icon: "smile",
  title: "Recreational Learning",
  desc: "Joyful, learner-led group activities.",
  slug: "recreational-learning"
}, {
  icon: "activity",
  title: "Occupational Therapy",
  desc: "Skill-building for everyday independence.",
  slug: "occupational-therapy"
}, {
  icon: "heart-handshake",
  title: "Life Skills Training",
  desc: "Social, communication and self-help skills.",
  slug: "life-skills-training"
}];

// Vocational services (uses the brand's own spot icons)
const SERVICES = [{
  img: "icGuidance",
  title: "Assessment & Vocational Guidance"
}, {
  img: "icTraining",
  title: "Educational & Vocational Training"
}, {
  img: "icCert",
  title: "NIOS / State Subjects Coaching"
}, {
  img: "icCareer",
  title: "Career Counselling for Trainees & Parents"
}];
const ABOUT = [{
  img: "howWeBegan",
  title: "How We Began",
  body: "This educational programme teaches vocational job-development skills while practising life and social skills, guided by our staff and professional artists."
}, {
  img: "whomWeServe",
  title: "Whom We Serve",
  body: "We support adults with intellectual disabilities who need a higher level of care, offering respite for caregivers through our centre-based service."
}, {
  img: "whatWeOffer",
  title: "What We Offer",
  body: "Professional care, personalised support and tailored interventions from our Allied Health team — building independence and well-being."
}];
const ADMISSIONS = ["Intellectual Disabilities", "Autism", "Mental Health Conditions", "Learning Disabilities (LD)", "Slow Learning Abilities", "Down Syndrome"];
function Ico({
  name,
  size = 20,
  ...rest
}) {
  return React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size,
      display: "inline-flex"
    },
    ...rest
  });
}
function refreshIcons() {
  if (window.lucide && window.lucide.createIcons) {
    window.lucide.createIcons({
      attrs: {
        "stroke-width": 2
      }
    });
  }
}
Object.assign(window, {
  asset,
  IMG,
  VOCATIONAL,
  THERAPEUTIC,
  SERVICES,
  ABOUT,
  ADMISSIONS,
  Ico,
  refreshIcons
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/programs/ProgramPage.jsx
try { (() => {
/* Reusable, SEO-structured programme page.
   Renders a compact header, breadcrumb, hero, content sections, FAQ and
   related links, and injects schema.org JSON-LD (Course + Breadcrumb + FAQ).
   Pages pass a slug; content comes from window.PROGRAM_CONTENT. */

const {
  Button: PgBtn,
  Tag: PgTag,
  Card: PgCard
} = window.PrisaumSevaDesignSystem_cee68f;
const HOME = "../index.html";
function injectJsonLd(c) {
  const base = "https://prisaum.com";
  const url = `${base}/programs/${c.slug}`;
  const graph = [{
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.h1,
    description: c.metaDescription,
    url,
    provider: {
      "@type": "EducationalOrganization",
      name: "Prisaum SEVA",
      url: base
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student"
    }
  }, {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: base + "/"
    }, {
      "@type": "ListItem",
      position: 2,
      name: "Programs",
      item: base + "/programs"
    }, {
      "@type": "ListItem",
      position: 3,
      name: c.h1,
      item: url
    }]
  }, {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faq.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a
      }
    }))
  }];
  let el = document.getElementById("ps-jsonld");
  if (!el) {
    el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "ps-jsonld";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(graph);
}
function SubHeader() {
  React.useEffect(() => {
    refreshIcons();
  });
  return /*#__PURE__*/React.createElement("header", {
    style: G.header
  }, /*#__PURE__*/React.createElement("div", {
    style: G.headerInner
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME,
    style: G.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG.logoReversed,
    alt: "Prisaum SEVA \u2014 home",
    style: {
      height: 84,
      width: "auto",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: G.nav,
    className: "ps-desktop-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME + "#about",
    style: G.navLink
  }, "About Us"), /*#__PURE__*/React.createElement("a", {
    href: HOME + "#programs",
    style: G.navLink
  }, "Our Programs"), /*#__PURE__*/React.createElement(PgBtn, {
    variant: "support",
    iconLeft: /*#__PURE__*/React.createElement(Ico, {
      name: "heart",
      size: 17
    }),
    href: HOME + "#support"
  }, "Support Us")), /*#__PURE__*/React.createElement("a", {
    href: HOME + "#programs",
    className: "ps-mobile-nav",
    style: {
      ...G.navLink,
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-left",
    size: 18
  }), " All programmes")));
}
function ProgramPage({
  slug
}) {
  const c = window.PROGRAM_CONTENT[slug];
  React.useEffect(() => {
    if (c) injectJsonLd(c);
  }, [slug]);
  React.useEffect(() => {
    refreshIcons();
  });
  if (!c) return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 60,
      textAlign: "center"
    }
  }, "Programme not found.");
  const relatedItems = (c.related || []).map(s => window.PROGRAM_CONTENT[s]).filter(Boolean);
  return /*#__PURE__*/React.createElement("div", {
    className: "ps-site"
  }, /*#__PURE__*/React.createElement(SubHeader, null), /*#__PURE__*/React.createElement("section", {
    style: G.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: G.glow
  }), /*#__PURE__*/React.createElement("div", {
    style: G.heroInner
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: G.crumbs
  }, /*#__PURE__*/React.createElement("a", {
    href: HOME,
    style: G.crumbLink
  }, "Home"), /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("a", {
    href: HOME + "#programs",
    style: G.crumbLink
  }, "Programs"), /*#__PURE__*/React.createElement(Ico, {
    name: "chevron-right",
    size: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: G.crumbCurrent
  }, c.h1)), /*#__PURE__*/React.createElement("div", {
    style: G.heroGrid
  }, /*#__PURE__*/React.createElement("div", {
    style: G.heroText
  }, /*#__PURE__*/React.createElement(PgTag, {
    tone: c.category === "Vocational Training" ? "leaf" : "info",
    variant: "solid",
    size: "lg"
  }, c.category), /*#__PURE__*/React.createElement("h1", {
    style: G.h1
  }, c.h1), /*#__PURE__*/React.createElement("p", {
    style: G.lede
  }, c.lede), /*#__PURE__*/React.createElement("div", {
    style: G.heroCtas
  }, /*#__PURE__*/React.createElement(PgBtn, {
    variant: "support",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 18
    }),
    href: HOME + "#support"
  }, "Enquire about admission"), /*#__PURE__*/React.createElement(PgBtn, {
    variant: "onDark",
    size: "lg",
    href: HOME + "#programs"
  }, "See all programmes"))), /*#__PURE__*/React.createElement("div", {
    style: G.heroMedia
  }, /*#__PURE__*/React.createElement("img", {
    src: asset(c.image),
    alt: c.h1,
    style: G.heroImg,
    onError: e => {
      e.currentTarget.style.display = 'none';
    }
  }))))), /*#__PURE__*/React.createElement("section", {
    style: G.body
  }, /*#__PURE__*/React.createElement("div", {
    style: G.bodyInner
  }, /*#__PURE__*/React.createElement("div", {
    style: G.main
  }, /*#__PURE__*/React.createElement("p", {
    style: G.intro
  }, c.intro), /*#__PURE__*/React.createElement("h2", {
    style: G.h2
  }, c.learnHeading), /*#__PURE__*/React.createElement("ul", {
    style: G.list
  }, c.learn.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: G.li
  }, /*#__PURE__*/React.createElement("span", {
    style: G.tick
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "check",
    size: 15
  })), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("h2", {
    style: G.h2
  }, c.whoHeading), /*#__PURE__*/React.createElement("p", {
    style: G.para
  }, c.who), /*#__PURE__*/React.createElement("h2", {
    style: G.h2
  }, c.outcomesHeading), /*#__PURE__*/React.createElement("ul", {
    style: G.list
  }, c.outcomes.map(l => /*#__PURE__*/React.createElement("li", {
    key: l,
    style: G.li
  }, /*#__PURE__*/React.createElement("span", {
    style: G.tick
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "sprout",
    size: 15
  })), /*#__PURE__*/React.createElement("span", null, l)))), /*#__PURE__*/React.createElement("h2", {
    style: G.h2
  }, "Frequently asked questions"), /*#__PURE__*/React.createElement("div", {
    style: G.faq
  }, c.faq.map(f => /*#__PURE__*/React.createElement("details", {
    key: f.q,
    style: G.faqItem
  }, /*#__PURE__*/React.createElement("summary", {
    style: G.faqQ
  }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement(Ico, {
    name: "plus",
    size: 18
  })), /*#__PURE__*/React.createElement("p", {
    style: G.faqA
  }, f.a))))), /*#__PURE__*/React.createElement("aside", {
    style: G.aside
  }, /*#__PURE__*/React.createElement(PgCard, {
    tone: "leaf",
    padding: "lg"
  }, /*#__PURE__*/React.createElement("h3", {
    style: G.sideTitle
  }, "Programme at a glance"), /*#__PURE__*/React.createElement("dl", {
    style: G.dl
  }, /*#__PURE__*/React.createElement("div", {
    style: G.dRow
  }, /*#__PURE__*/React.createElement("dt", {
    style: G.dt
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "users",
    size: 15
  }), " Ages"), /*#__PURE__*/React.createElement("dd", {
    style: G.dd
  }, c.age)), /*#__PURE__*/React.createElement("div", {
    style: G.dRow
  }, /*#__PURE__*/React.createElement("dt", {
    style: G.dt
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "calendar-days",
    size: 15
  }), " Format"), /*#__PURE__*/React.createElement("dd", {
    style: G.dd
  }, c.mode)), /*#__PURE__*/React.createElement("div", {
    style: G.dRow
  }, /*#__PURE__*/React.createElement("dt", {
    style: G.dt
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "clock",
    size: 15
  }), " Duration"), /*#__PURE__*/React.createElement("dd", {
    style: G.dd
  }, c.duration)), /*#__PURE__*/React.createElement("div", {
    style: G.dRow
  }, /*#__PURE__*/React.createElement("dt", {
    style: G.dt
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "map-pin",
    size: 15
  }), " Location"), /*#__PURE__*/React.createElement("dd", {
    style: G.dd
  }, "Chennai \xB7 2 campuses"))), /*#__PURE__*/React.createElement(PgBtn, {
    variant: "primary",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Ico, {
      name: "arrow-right",
      size: 18
    }),
    href: HOME + "#support"
  }, "Book a visit")), /*#__PURE__*/React.createElement("div", {
    style: G.contactBox
  }, /*#__PURE__*/React.createElement("p", {
    style: G.contactLine
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "phone",
    size: 15
  }), " ", /*#__PURE__*/React.createElement("span", {
    className: "ps-mono"
  }, "98404 04752")), /*#__PURE__*/React.createElement("p", {
    style: G.contactLine
  }, /*#__PURE__*/React.createElement(Ico, {
    name: "mail",
    size: 15
  }), " support@prisaum.com"))))), relatedItems.length > 0 && /*#__PURE__*/React.createElement("section", {
    style: G.related
  }, /*#__PURE__*/React.createElement("div", {
    style: G.relatedInner
  }, /*#__PURE__*/React.createElement("h2", {
    style: G.relatedHead
  }, "Related programmes"), /*#__PURE__*/React.createElement("div", {
    style: G.relatedGrid
  }, relatedItems.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.slug,
    href: `${r.slug}.html`,
    style: G.relCard
  }, /*#__PURE__*/React.createElement("span", {
    style: G.relIcon
  }, /*#__PURE__*/React.createElement(Ico, {
    name: r.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("span", {
    style: G.relTitle
  }, r.h1.replace(" for Special Needs", "")), /*#__PURE__*/React.createElement("span", {
    style: G.relMore
  }, "View programme ", /*#__PURE__*/React.createElement(Ico, {
    name: "arrow-right",
    size: 15
  }))))))), /*#__PURE__*/React.createElement(Footer, null));
}
const G = {
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    background: "var(--green-900)",
    boxShadow: "var(--shadow-md)"
  },
  headerInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "4px 24px",
    display: "flex",
    alignItems: "center",
    gap: 24
  },
  brand: {
    display: "inline-flex",
    alignItems: "center",
    flex: "none"
  },
  nav: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    marginLeft: "auto"
  },
  navLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 14px",
    fontSize: 15,
    fontWeight: 600,
    color: "var(--text-on-dark)",
    whiteSpace: "nowrap"
  },
  hero: {
    position: "relative",
    background: "var(--green-800)",
    color: "var(--text-on-dark)",
    overflow: "hidden"
  },
  glow: {
    position: "absolute",
    top: -160,
    right: -120,
    width: 480,
    height: 480,
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)",
    pointerEvents: "none"
  },
  heroInner: {
    position: "relative",
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "22px 24px clamp(2.5rem,5vw,4rem)"
  },
  crumbs: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    flexWrap: "wrap",
    fontSize: 13.5,
    color: "var(--text-on-dark-muted)",
    marginBottom: 22
  },
  crumbLink: {
    color: "var(--green-200)",
    fontWeight: 600
  },
  crumbCurrent: {
    color: "#fff",
    fontWeight: 600
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.1fr .9fr",
    gap: 40,
    alignItems: "center"
  },
  heroText: {
    display: "flex",
    flexDirection: "column",
    gap: 18,
    alignItems: "flex-start"
  },
  h1: {
    margin: 0,
    fontSize: "clamp(2rem,4vw,3rem)",
    fontWeight: 800,
    lineHeight: 1.08,
    letterSpacing: "var(--tracking-tight)",
    color: "#fff"
  },
  lede: {
    margin: 0,
    fontSize: "var(--text-lg)",
    lineHeight: 1.6,
    color: "var(--text-on-dark-muted)",
    maxWidth: 560
  },
  heroCtas: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginTop: 4
  },
  heroMedia: {
    borderRadius: "var(--radius-2xl)",
    overflow: "hidden",
    boxShadow: "var(--shadow-xl)",
    border: "1px solid rgba(255,255,255,.1)",
    aspectRatio: "4/3",
    background: "var(--green-700)"
  },
  heroImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  body: {
    background: "var(--color-bg)",
    padding: "clamp(2.5rem,6vw,5rem) 0"
  },
  bodyInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px",
    display: "grid",
    gridTemplateColumns: "1fr 340px",
    gap: 48,
    alignItems: "start"
  },
  main: {
    minWidth: 0
  },
  intro: {
    margin: "0 0 8px",
    fontSize: "var(--text-lg)",
    lineHeight: 1.7,
    color: "var(--text-body)"
  },
  h2: {
    margin: "32px 0 14px",
    fontSize: "var(--text-2xl)",
    fontWeight: 800,
    color: "var(--text-strong)",
    letterSpacing: "var(--tracking-tight)"
  },
  para: {
    margin: 0,
    fontSize: "var(--text-md)",
    lineHeight: 1.7,
    color: "var(--text-body)"
  },
  list: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  li: {
    display: "flex",
    gap: 12,
    alignItems: "flex-start",
    fontSize: "var(--text-md)",
    lineHeight: 1.5,
    color: "var(--text-body)"
  },
  tick: {
    flex: "none",
    width: 26,
    height: 26,
    borderRadius: "50%",
    background: "var(--green-100)",
    color: "var(--green-700)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 1
  },
  faq: {
    display: "flex",
    flexDirection: "column",
    gap: 10
  },
  faqItem: {
    background: "var(--color-surface)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-md)",
    padding: "4px 18px"
  },
  faqQ: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    cursor: "pointer",
    listStyle: "none",
    padding: "14px 0",
    fontSize: "var(--text-md)",
    fontWeight: 700,
    color: "var(--text-strong)"
  },
  faqA: {
    margin: "0 0 14px",
    fontSize: "var(--text-base)",
    lineHeight: 1.6,
    color: "var(--text-muted)"
  },
  aside: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    position: "sticky",
    top: 96
  },
  sideTitle: {
    margin: "0 0 14px",
    fontSize: "var(--text-lg)",
    fontWeight: 800,
    color: "var(--text-strong)"
  },
  dl: {
    margin: "0 0 18px",
    display: "flex",
    flexDirection: "column",
    gap: 12
  },
  dRow: {
    display: "flex",
    flexDirection: "column",
    gap: 2
  },
  dt: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontSize: 12.5,
    fontWeight: 700,
    letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase",
    color: "var(--color-primary)"
  },
  dd: {
    margin: 0,
    fontSize: 14.5,
    color: "var(--text-body)",
    fontWeight: 500
  },
  contactBox: {
    padding: "4px 6px",
    display: "flex",
    flexDirection: "column",
    gap: 8
  },
  contactLine: {
    margin: 0,
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 14,
    color: "var(--text-muted)"
  },
  related: {
    background: "var(--color-surface)",
    borderTop: "1px solid var(--color-border)",
    padding: "clamp(2.5rem,5vw,4rem) 0"
  },
  relatedInner: {
    maxWidth: "var(--container-max)",
    margin: "0 auto",
    padding: "0 24px"
  },
  relatedHead: {
    margin: "0 0 24px",
    fontSize: "var(--text-2xl)",
    fontWeight: 800,
    color: "var(--text-strong)",
    letterSpacing: "var(--tracking-tight)"
  },
  relatedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: 20
  },
  relCard: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    padding: 24,
    background: "var(--color-bg)",
    border: "1px solid var(--color-border)",
    borderRadius: "var(--radius-lg)",
    boxShadow: "var(--shadow-card)"
  },
  relIcon: {
    width: 52,
    height: 52,
    borderRadius: "var(--radius-md)",
    background: "var(--green-100)",
    color: "var(--green-700)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  relTitle: {
    fontSize: "var(--text-lg)",
    fontWeight: 700,
    color: "var(--text-strong)"
  },
  relMore: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    fontSize: 14,
    fontWeight: 700,
    color: "var(--color-primary)"
  }
};
window.ProgramPage = ProgramPage;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/programs/ProgramPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/programs/legacy-hash-redirect.js
try { (() => {
// legacy-hash-redirect.js
// Old HubSpot site put every programme as an anchor on a single /programs page
// (e.g. /programs#baking). Server 301s can't match a URL fragment (the part after
// "#" is never sent to the server), so we forward those legacy deep links here,
// on the /programs hub, to the new dedicated programme pages.
(function () {
  var map = {
    baking: "baking-confectionery",
    weaving: "weaving",
    gardening: "gardening-horticulture",
    computers: "computer-skills",
    printing: "printing-merchandise",
    housekeeping: "housekeeping",
    platemaking: "eco-friendly-plate-making",
    laundry: "laundry-fabric-care",
    nios: "nios-support",
    "music-therapy": "music-arts-therapy",
    "play-therapy": "play-therapy",
    occupational: "occupational-therapy"
  };
  var h = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (h && map[h]) {
    // production clean URL; in this prototype the page is <slug>.html
    var clean = "/programs/" + map[h];
    var proto = map[h] + ".html";
    location.replace(location.pathname.indexOf(".html") > -1 ? proto : clean);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/programs/legacy-hash-redirect.js", error: String((e && e.message) || e) }); }

// ui_kits/prisaum-website/programs/program-content.js
try { (() => {
/* Full SEO content for dedicated programme pages — one crawlable URL each.
   Images are filenames resolved against /assets/site via window.asset(). */

const PROGRAM_CONTENT = {
  /* ============== VOCATIONAL ============== */

  "baking-confectionery": {
    slug: "baking-confectionery",
    category: "Vocational Training",
    icon: "cookie",
    image: "hero.png",
    seoTitle: "Baking & Confectionery Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A hands-on baking and confectionery vocational programme for young adults with special needs in Chennai. Learn baking, decoration, packaging and safe kitchen skills that lead to real work and independence.",
    h1: "Baking & Confectionery Training for Special Needs",
    lede: "A supportive, hands-on baking programme in Chennai where young adults with intellectual and developmental disabilities learn real kitchen skills — building confidence, focus and a pathway to employment.",
    intro: "At Prisaum SEVA, our baking and confectionery training turns a warm, structured kitchen into a classroom. Trainees aged 12 and above learn to measure, mix, bake, decorate and package — at their own pace, with one-to-one guidance from trained instructors. Beyond the recipes, every session strengthens fine motor control, sequencing, hygiene and teamwork: the life skills that make independence possible.",
    age: "12 years and above",
    mode: "Vocational workshop · weekday programme",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Safe kitchen practice — hygiene, handling equipment and following steps", "Measuring, mixing and baking breads, cookies, cakes and confectionery", "Icing, decoration and finishing techniques", "Packaging, labelling and presenting products for sale", "Working as a team and following a recipe from start to finish"],
    whoHeading: "Who this programme is for",
    who: "Young adults and children (12+) with intellectual disabilities, autism, Down syndrome, learning disabilities or slow learning abilities who benefit from practical, repetitive, confidence-building work in a calm environment.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["A recognised vocational skill that supports real employment", "Greater independence in daily living and routines", "Improved focus, coordination and self-confidence", "Pathway toward certification in handicrafts and food preparation"],
    faq: [{
      q: "What age can my child join the baking programme?",
      a: "Admissions are open to learners aged 12 and above. We assess each learner individually to tailor goals to their pace and needs."
    }, {
      q: "Do trainees need prior experience?",
      a: "No prior experience is needed. We start from the basics — safety, measuring and simple recipes — and build up gradually with one-to-one support."
    }, {
      q: "Is the programme residential?",
      a: "Prisaum SEVA offers both day and residential options across our two Chennai campuses, including a hostel at Manapakkam. Contact us to discuss what suits your family."
    }, {
      q: "Does this lead to a certificate or employment?",
      a: "Yes. The programme builds toward certification in handicrafts and food preparation, and our career counselling team supports trainees and parents toward suitable work opportunities."
    }],
    related: ["weaving", "eco-friendly-plate-making", "life-skills-training"]
  },
  "weaving": {
    slug: "weaving",
    category: "Vocational Training",
    icon: "grid-3x3",
    image: "whom-we-serve.png",
    seoTitle: "Weaving & Handloom Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A calming handloom and weaving vocational programme for special needs young adults in Chennai. Build focus, fine motor skills and a marketable craft that supports independence and employment.",
    h1: "Weaving & Handloom Training for Special Needs",
    lede: "A calming, rhythmic handloom programme in Chennai where learners with special needs develop focus, fine motor control and a genuine craft they can be proud of.",
    intro: "Weaving is one of the most therapeutic vocational skills we teach. The steady rhythm of the handloom helps trainees with autism and intellectual disabilities regulate, concentrate and find flow. Step by step, learners progress from handling yarn to setting the loom and weaving finished pieces — developing patience, coordination and a marketable craft along the way, all under the guidance of skilled weavers and our support staff.",
    age: "12 years and above",
    mode: "Vocational workshop · weekday programme",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Handling and preparing yarn and threads", "Setting up and operating a handloom safely", "Basic to intermediate weaving patterns and techniques", "Finishing, quality-checking and presenting woven products", "Concentration, sequencing and fine motor coordination"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who respond well to calm, repetitive, sensory-friendly work — including those with autism, intellectual disabilities and slow learning abilities who benefit from a quiet, structured craft.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["A marketable handicraft skill and the focus to sustain it", "Noticeably improved fine motor control and attention", "A calming routine that supports self-regulation", "Pathway toward certification in handicrafts"],
    faq: [{
      q: "Is weaving suitable for a learner with autism?",
      a: "Yes — the calm, repetitive rhythm of the handloom is often especially well-suited to learners with autism, supporting focus and self-regulation."
    }, {
      q: "What age can my child start?",
      a: "Weaving is open to learners aged 12 and above, with individual goals set after an initial assessment."
    }, {
      q: "Are the woven products sold?",
      a: "Trainees learn to finish and present products to a sellable standard, which builds real-world skills and a sense of accomplishment."
    }, {
      q: "How much one-to-one support is provided?",
      a: "Each learner works to a tailored plan with guidance from skilled weavers and our support staff, alongside small-group sessions for social skills."
    }],
    related: ["baking-confectionery", "laundry-fabric-care", "occupational-therapy"]
  },
  "gardening-horticulture": {
    slug: "gardening-horticulture",
    category: "Vocational Training",
    icon: "sprout",
    image: "how-we-began.png",
    seoTitle: "Gardening & Horticulture Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A hands-on, outdoor gardening and horticulture programme for special needs young adults in Chennai. Learn nursery work, crop care and landscaping while building independence and well-being.",
    h1: "Gardening & Horticulture Training for Special Needs",
    lede: "An outdoor, sensory-rich horticulture programme in Chennai where learners with special needs grow plants — and confidence — through nursery work, crop care and landscaping.",
    intro: "Working with soil, seeds and seasons is grounding and rewarding. Our gardening and horticulture training gives trainees aged 12 and above a productive routine in the open air: sowing, watering, potting, pruning and maintaining green spaces. The work builds physical coordination, responsibility and patience, while the calm of the garden supports emotional well-being — a genuinely therapeutic vocation.",
    age: "12 years and above",
    mode: "Vocational workshop · outdoor sessions",
    duration: "Ongoing, aligned to growing seasons",
    learnHeading: "What trainees learn",
    learn: ["Sowing, watering, potting and transplanting", "Nursery management and plant care routines", "Basic crop care, composting and soil preparation", "Landscape and green-space maintenance", "Responsibility, routine and working safely with tools"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who thrive with active, outdoor, hands-on work — including those with autism, intellectual disabilities and slow learning abilities who benefit from routine and sensory engagement.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["A practical horticulture skill suited to real employment", "Improved physical coordination and stamina", "A calming, purposeful daily routine", "Pathway toward certification in gardening / horticulture"],
    faq: [{
      q: "Is the gardening programme suitable for sensory-sensitive learners?",
      a: "Yes — outdoor, hands-on horticulture is often calming and grounding. We tailor tasks and pacing to each learner's comfort and needs."
    }, {
      q: "What will my child actually do?",
      a: "Trainees take part in real nursery and garden work — sowing, watering, potting, pruning and maintaining green spaces — with full supervision."
    }, {
      q: "Does this lead to certification?",
      a: "Yes, the programme builds toward certification in gardening and horticulture, and our team guides next steps for employment."
    }, {
      q: "Is it safe?",
      a: "All sessions are supervised, with tools and tasks matched to each learner's ability and clear safety routines."
    }],
    related: ["eco-friendly-plate-making", "baking-confectionery", "occupational-therapy"]
  },
  "computer-skills": {
    slug: "computer-skills",
    category: "Vocational Training",
    icon: "monitor",
    image: "what-we-offer.png",
    seoTitle: "Computer Skills & Digital Literacy for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A supportive computer skills and digital literacy programme for special needs young adults in Chennai. Learn typing, data entry and online communication for greater independence and employability.",
    h1: "Computer Skills & Digital Literacy for Special Needs",
    lede: "A patient, step-by-step digital skills programme in Chennai that helps learners with special needs use computers confidently — opening doors to communication, learning and work.",
    intro: "Digital literacy is a gateway skill. Our computer programme introduces trainees aged 12 and above to the keyboard, mouse, files and the internet through clear, repeatable steps and plenty of one-to-one support. Learners build practical abilities — typing, data entry, email and safe online communication — that boost independence and make a real difference to employability.",
    age: "12 years and above",
    mode: "Vocational workshop · small-group & 1:1",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Keyboard, mouse and basic computer operation", "Typing, document creation and data entry", "Email and safe online communication", "Using the internet responsibly", "Following digital tasks step by step"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) with intellectual disabilities, autism, learning disabilities or slow learning abilities who benefit from structured, screen-based learning at their own pace.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["Confident, independent use of a computer", "Practical data-entry and communication skills", "A foundation for digital and office-based work", "Pathway toward certification in digital literacy"],
    faq: [{
      q: "Does my child need to read fluently to start?",
      a: "No. We meet each learner at their level and adapt tasks, using visual cues and repetition to build skills gradually."
    }, {
      q: "What software do trainees learn?",
      a: "Learners practise everyday tools — typing, documents, email and safe internet use — chosen to be practical and transferable."
    }, {
      q: "Can this lead to work?",
      a: "Yes. Digital literacy supports many roles; our career counselling team helps match skills to suitable opportunities."
    }, {
      q: "Is support one-to-one?",
      a: "Sessions blend small-group learning with one-to-one guidance, following each learner's personalised plan."
    }],
    related: ["printing-merchandise", "nios-support", "life-skills-training"]
  },
  "printing-merchandise": {
    slug: "printing-merchandise",
    category: "Vocational Training",
    icon: "printer",
    image: "hero.png",
    seoTitle: "Printing & Merchandise Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A practical printing and merchandise vocational programme for special needs young adults in Chennai. Learn print production and finishing skills that build independence and real employability.",
    h1: "Printing & Merchandise Training for Special Needs",
    lede: "A practical print-and-product workshop in Chennai where learners with special needs master print production and finishing — building a marketable, employable skill set.",
    intro: "Our printing and merchandise programme gives trainees aged 12 and above a real production routine: preparing designs, printing, and finishing merchandise to a sellable standard. The structured, step-by-step nature of print work suits many learners well, building sequencing, quality awareness and pride in a finished product they can hold in their hands.",
    age: "12 years and above",
    mode: "Vocational workshop · weekday programme",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Preparing artwork and materials for printing", "Operating printing equipment safely", "Merchandise finishing and assembly", "Quality-checking and packaging products", "Following a production process end to end"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who enjoy structured, hands-on production work — including those with intellectual disabilities, autism and slow learning abilities.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["A marketable print-production skill", "Strong sequencing and quality-awareness", "Pride and confidence from finished products", "Pathway toward certification in handicrafts"],
    faq: [{
      q: "What kind of products do trainees make?",
      a: "Learners work on printed merchandise — preparing, printing and finishing items to a sellable standard, with full supervision."
    }, {
      q: "Is the equipment safe for my child?",
      a: "Yes. All equipment is operated under supervision, with tasks matched to each learner's ability and clear safety routines."
    }, {
      q: "What age can my child start?",
      a: "The programme is open to learners aged 12 and above, following an initial assessment."
    }, {
      q: "Does this help with employment?",
      a: "Print production is a transferable skill; our career counselling team supports the path toward suitable work."
    }],
    related: ["computer-skills", "baking-confectionery", "housekeeping"]
  },
  "self-grooming-hygiene": {
    slug: "self-grooming-hygiene",
    category: "Vocational Training",
    icon: "sparkles",
    image: "whom-we-serve.png",
    seoTitle: "Self Grooming & Personal Hygiene Skills for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A caring self-grooming and personal hygiene programme for special needs young adults in Chennai. Build daily-living routines for confidence, dignity and independence.",
    h1: "Self Grooming & Personal Hygiene Skills",
    lede: "A gentle daily-living programme in Chennai that helps learners with special needs build personal-care routines — the foundation of confidence, dignity and independence.",
    intro: "Personal care is the cornerstone of independent living. Our self-grooming and hygiene programme guides trainees aged 12 and above through everyday routines — washing, grooming, dressing and presentation — using clear steps, visual supports and patient encouragement. Mastering these skills builds self-esteem and prepares learners to take part more fully in vocational training and community life.",
    age: "12 years and above",
    mode: "Life-skills sessions · 1:1 and small group",
    duration: "Ongoing, with individual goals",
    learnHeading: "What learners practise",
    learn: ["Daily washing and personal hygiene routines", "Grooming, dressing and presentation", "Building consistent self-care habits", "Independence in everyday routines", "Confidence in personal and social settings"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who are building independence in daily living — including those with intellectual disabilities, autism and Down syndrome who benefit from structured, supportive routine.",
    outcomesHeading: "Outcomes",
    outcomes: ["Independent personal-care routines", "Greater self-esteem and dignity", "Readiness for vocational and community participation", "Reduced reliance on caregivers for daily tasks"],
    faq: [{
      q: "Is this programme delivered sensitively?",
      a: "Yes. Personal care is taught with dignity, patience and privacy, using visual supports and gentle encouragement tailored to each learner."
    }, {
      q: "Can it be combined with vocational training?",
      a: "Absolutely — self-care skills underpin every vocational programme and are often built into a learner's wider weekly plan."
    }, {
      q: "Who delivers the sessions?",
      a: "Trained support staff deliver sessions one-to-one and in small groups, following each learner's personalised goals."
    }, {
      q: "What age is it for?",
      a: "The programme supports learners aged 12 and above."
    }],
    related: ["life-skills-training", "housekeeping", "occupational-therapy"]
  },
  "housekeeping": {
    slug: "housekeeping",
    category: "Vocational Training",
    icon: "house",
    image: "how-we-began.png",
    seoTitle: "Housekeeping & Facility Care Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A practical housekeeping and facility-care vocational programme for special needs young adults in Chennai. Build organised, independent-living and employable cleaning skills.",
    h1: "Housekeeping & Facility Care Training",
    lede: "A practical housekeeping programme in Chennai where learners with special needs master facility-care routines — building order, independence and a genuinely employable skill.",
    intro: "Housekeeping teaches structure, responsibility and pride in a well-kept space. Trainees aged 12 and above learn cleaning, organising and facility-care routines through clear, repeatable steps. These skills support independent living at home and open the door to real roles in hospitality and facility services, with our team guiding the way.",
    age: "12 years and above",
    mode: "Vocational workshop · weekday programme",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Cleaning and tidying routines, done safely", "Organising and maintaining spaces", "Using cleaning materials and tools correctly", "Following checklists and routines independently", "Care, responsibility and attention to detail"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who do well with active, routine-based work — including those with intellectual disabilities, autism and slow learning abilities.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["Independent-living and facility-care skills", "A clear pathway to hospitality / facility roles", "Strong routines and responsibility", "Improved confidence and self-reliance"],
    faq: [{
      q: "What does the housekeeping programme cover?",
      a: "Learners practise real cleaning, organising and facility-care routines using safe, step-by-step methods and checklists."
    }, {
      q: "Could this lead to a job?",
      a: "Yes — housekeeping skills are in demand in hospitality and facilities; our career counselling team supports the path to work."
    }, {
      q: "Is it suitable for my child's needs?",
      a: "We assess each learner individually and adapt tasks and pacing to suit their abilities and goals."
    }, {
      q: "Are cleaning products safe?",
      a: "All materials and tasks are supervised and matched to each learner's ability, with clear safety routines."
    }],
    related: ["self-grooming-hygiene", "laundry-fabric-care", "life-skills-training"]
  },
  "eco-friendly-plate-making": {
    slug: "eco-friendly-plate-making",
    category: "Vocational Training",
    icon: "leaf",
    image: "what-we-offer.png",
    seoTitle: "Eco-Friendly Plate Making Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A sustainable eco-friendly plate-making vocational programme for special needs young adults in Chennai. Learn biodegradable product making — a green, marketable, confidence-building skill.",
    h1: "Eco-Friendly Plate Making for Special Needs",
    lede: "A green, hands-on vocational programme in Chennai where learners with special needs make biodegradable plates from natural materials — a sustainable, marketable craft.",
    intro: "Making eco-friendly plates from natural materials is purposeful, repetitive and rewarding work. Trainees aged 12 and above learn to prepare materials, shape and press plates, and finish products to a sellable standard. The programme builds practical skill and environmental awareness, giving learners a real product — and a real sense of contribution — to be proud of.",
    age: "12 years and above",
    mode: "Vocational workshop · weekday programme",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Preparing natural, biodegradable materials", "Shaping and pressing eco-friendly plates", "Finishing and quality-checking products", "Packaging and presenting items for sale", "Sustainability awareness and careful, consistent work"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who enjoy hands-on, repetitive production — including those with intellectual disabilities, autism and slow learning abilities.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["A green, marketable production skill", "Environmental awareness and purpose", "Pride and confidence from finished products", "Pathway toward certification in handicrafts"],
    faq: [{
      q: "What materials are used?",
      a: "Plates are made from natural, biodegradable materials, supporting a sustainable, eco-friendly craft."
    }, {
      q: "Is the work suitable for my child?",
      a: "The repetitive, hands-on nature suits many learners well; we tailor tasks and pacing to each individual."
    }, {
      q: "Are the products sold?",
      a: "Trainees finish products to a sellable standard, which builds real-world skills and a sense of accomplishment."
    }, {
      q: "What age can my child start?",
      a: "The programme is open to learners aged 12 and above."
    }],
    related: ["gardening-horticulture", "baking-confectionery", "printing-merchandise"]
  },
  "laundry-fabric-care": {
    slug: "laundry-fabric-care",
    category: "Vocational Training",
    icon: "shirt",
    image: "whom-we-serve.png",
    seoTitle: "Laundry & Fabric Care Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "A practical laundry and fabric-care vocational programme for special needs young adults in Chennai. Learn washing, pressing and garment-care skills for independence and employability.",
    h1: "Laundry & Fabric Care Training",
    lede: "A structured laundry and garment-care programme in Chennai where learners with special needs master washing, pressing and fabric care — building independence and an employable skill.",
    intro: "Caring for clothes is an essential life skill and a real vocation. Trainees aged 12 and above learn to sort, wash, dry, press and fold garments through clear, repeatable routines. The step-by-step structure suits many learners well, building independence at home and opening the door to roles in laundry and hospitality services.",
    age: "12 years and above",
    mode: "Vocational workshop · weekday programme",
    duration: "Ongoing, with individual skill milestones",
    learnHeading: "What trainees learn",
    learn: ["Sorting, washing and drying garments", "Pressing, folding and finishing", "Caring for different fabrics safely", "Operating laundry equipment under supervision", "Following routines independently and carefully"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who do well with routine, practical tasks — including those with intellectual disabilities, autism and slow learning abilities.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["Independent garment-care skills for home", "A pathway to laundry / hospitality roles", "Strong, repeatable routines", "Improved confidence and self-reliance"],
    faq: [{
      q: "What does the laundry programme teach?",
      a: "Learners practise sorting, washing, drying, pressing and folding, plus caring for different fabrics — all with supervision."
    }, {
      q: "Is the equipment safe to use?",
      a: "Yes. Equipment is used under supervision, with tasks matched to each learner's ability and clear safety routines."
    }, {
      q: "Can this lead to employment?",
      a: "Laundry and fabric-care skills are in demand in hospitality; our career counselling team supports the path to work."
    }, {
      q: "What age is it for?",
      a: "The programme supports learners aged 12 and above."
    }],
    related: ["housekeeping", "weaving", "self-grooming-hygiene"]
  },
  /* ============== EDUCATIONAL & THERAPEUTIC ============== */

  "nios-support": {
    slug: "nios-support",
    category: "Educational & Therapeutic",
    icon: "book-open",
    image: "what-we-offer.png",
    seoTitle: "NIOS Coaching for Special Needs Students — Chennai | Prisaum SEVA",
    metaDescription: "Supportive NIOS open-school coaching for special needs students in Chennai. Personalised, flexible academic support toward state certification, with care for learners with autism, LD and intellectual disabilities.",
    h1: "NIOS Coaching & Academic Support for Special Needs",
    lede: "Flexible, personalised NIOS open-school coaching in Chennai that helps special needs students work toward recognised state certification — at a pace that respects how they learn.",
    intro: "The National Institute of Open Schooling (NIOS) gives students who learn differently a flexible route to formal qualifications. At Prisaum SEVA, our educators provide patient, one-to-one academic support toward NIOS and state subjects — adapting materials, pacing and methods to each learner. We pair academics with life and social skills so that certification comes alongside genuine independence.",
    age: "12 years and above",
    mode: "Academic & therapeutic · scheduled weekly",
    duration: "Aligned to NIOS enrolment and exam cycles",
    learnHeading: "What students work on",
    learn: ["NIOS and state-subject coursework adapted to each learner", "Personalised pacing, materials and teaching methods", "Exam readiness and confidence-building", "Literacy, numeracy and study routines", "Life and social skills woven into academic sessions"],
    whoHeading: "Who this programme is for",
    who: "Students (12+) with autism, learning disabilities, intellectual disabilities or slow learning abilities who need a flexible, supportive route to certification rather than a conventional classroom.",
    outcomesHeading: "Outcomes & certification",
    outcomes: ["Progress toward recognised NIOS / state certification", "Stronger literacy, numeracy and study confidence", "An academic path that fits the learner, not the other way round", "Guidance for parents on next steps and career options"],
    faq: [{
      q: "What is NIOS and why does it suit special needs learners?",
      a: "NIOS is the National Institute of Open Schooling — a flexible, recognised board that allows adapted pacing and subject choice, making formal certification achievable for students who learn differently."
    }, {
      q: "Do you adapt the material to my child's level?",
      a: "Yes. Every student works to a personalised plan, with materials, pacing and methods adapted to their needs and reviewed regularly."
    }, {
      q: "Can NIOS support be combined with vocational training?",
      a: "Absolutely — many learners combine NIOS coaching with a vocational programme such as baking or weaving for a balanced week of academics and skills."
    }, {
      q: "Do you support parents through the process?",
      a: "We guide parents through enrolment, expectations and next steps, and our career counselling team helps plan beyond certification."
    }],
    related: ["computer-skills", "life-skills-training", "recreational-learning"]
  },
  "music-arts-therapy": {
    slug: "music-arts-therapy",
    category: "Educational & Therapeutic",
    icon: "music",
    image: "hero.png",
    seoTitle: "Music & Expressive Arts Therapy for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "Music and expressive arts therapy for special needs young adults in Chennai. Support emotional expression, regulation and joy through the arts, guided by professional artists.",
    h1: "Music & Expressive Arts Therapy",
    lede: "A joyful, therapeutic programme in Chennai where learners with special needs explore music and the arts — supporting expression, emotional regulation and connection.",
    intro: "The arts reach where words sometimes can't. Our music and expressive arts therapy invites learners aged 12 and above to sing, play, move and create alongside professional artists and trained staff. Sessions support emotional expression and regulation, build communication and social confidence, and — above all — bring joy, helping each learner feel seen and celebrated.",
    age: "12 years and above",
    mode: "Therapeutic sessions · group & 1:1",
    duration: "Ongoing, scheduled weekly",
    learnHeading: "What sessions support",
    learn: ["Emotional expression through music and art", "Self-regulation and calm", "Communication and turn-taking", "Social confidence in group settings", "Creativity, play and joy"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) of all abilities — including those with autism, intellectual disabilities and mental-health conditions — who benefit from expressive, sensory and social engagement.",
    outcomesHeading: "Outcomes",
    outcomes: ["Healthier emotional expression and regulation", "Stronger communication and social skills", "Increased confidence and engagement", "Genuine joy and a sense of belonging"],
    faq: [{
      q: "Does my child need musical or artistic talent?",
      a: "Not at all. Sessions are about expression and connection, not performance — every learner takes part at their own level."
    }, {
      q: "Who leads the sessions?",
      a: "Professional artists work alongside our trained support staff to guide safe, supportive and joyful sessions."
    }, {
      q: "Is it group or one-to-one?",
      a: "Both — we blend group sessions for social skills with one-to-one support where it helps."
    }, {
      q: "Can it help with emotional regulation?",
      a: "Yes. Music and the arts are powerful tools for self-regulation, and sessions are designed with that in mind."
    }],
    related: ["play-therapy", "recreational-learning", "occupational-therapy"]
  },
  "play-therapy": {
    slug: "play-therapy",
    category: "Educational & Therapeutic",
    icon: "blocks",
    image: "how-we-began.png",
    seoTitle: "Play Therapy for Special Needs Children — Chennai | Prisaum SEVA",
    metaDescription: "Structured play therapy for special needs children and young adults in Chennai. Build social confidence, communication and emotional skills through guided, playful sessions.",
    h1: "Play Therapy for Special Needs",
    lede: "A warm, structured play-therapy programme in Chennai where learners with special needs build social confidence, communication and emotional skills — through the natural language of play.",
    intro: "Play is how we learn to connect. Our structured play-therapy sessions give learners aged 12 and above a safe, guided space to explore, take turns, solve problems and express feelings. Led by trained staff, the playful format gently builds social and emotional skills, reduces anxiety and helps each learner engage more confidently with others.",
    age: "12 years and above",
    mode: "Therapeutic sessions · group & 1:1",
    duration: "Ongoing, scheduled weekly",
    learnHeading: "What sessions support",
    learn: ["Social interaction and turn-taking", "Communication and self-expression", "Emotional understanding and regulation", "Problem-solving through guided play", "Confidence and reduced anxiety"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who build skills best through play and interaction — including those with autism, intellectual disabilities and mental-health conditions.",
    outcomesHeading: "Outcomes",
    outcomes: ["Stronger social and communication skills", "Better emotional understanding and regulation", "Increased confidence in group settings", "A safe space to express and grow"],
    faq: [{
      q: "Isn't play therapy just for young children?",
      a: "Structured play is a powerful, dignity-respecting tool across ages; we adapt activities to suit each learner aged 12 and above."
    }, {
      q: "What happens in a session?",
      a: "Trained staff guide playful, structured activities that build social, communication and emotional skills in a safe space."
    }, {
      q: "Is it one-to-one or group?",
      a: "We use both, blending group play for social skills with one-to-one support as needed."
    }, {
      q: "How does it help my child?",
      a: "Play reduces anxiety and opens up communication, helping learners connect and build confidence over time."
    }],
    related: ["music-arts-therapy", "recreational-learning", "life-skills-training"]
  },
  "recreational-learning": {
    slug: "recreational-learning",
    category: "Educational & Therapeutic",
    icon: "smile",
    image: "whom-we-serve.png",
    seoTitle: "Recreational Learning for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "Joyful, learner-led recreational learning for special needs young adults in Chennai. Build social skills, engagement and well-being through group activities and play.",
    h1: "Recreational Learning for Special Needs",
    lede: "A joyful, learner-led programme in Chennai where group activities and play build social skills, engagement and well-being for learners with special needs.",
    intro: "Learning is at its best when it's fun. Our recreational learning sessions bring learners aged 12 and above together for games, group activities and shared experiences that build friendships and social confidence. Light-hearted by design, the programme strengthens communication, cooperation and a sense of belonging — and gives every learner room to simply enjoy themselves.",
    age: "12 years and above",
    mode: "Group sessions · learner-led",
    duration: "Ongoing, scheduled weekly",
    learnHeading: "What sessions support",
    learn: ["Social interaction and friendship", "Cooperation and group participation", "Communication in relaxed settings", "Engagement, motivation and well-being", "Confidence and a sense of belonging"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) of all abilities who benefit from social, group-based engagement — including those with autism, intellectual disabilities and slow learning abilities.",
    outcomesHeading: "Outcomes",
    outcomes: ["Stronger friendships and social skills", "Greater engagement and motivation", "Improved communication and cooperation", "Happier, more connected learners"],
    faq: [{
      q: "What kind of activities are included?",
      a: "Sessions feature games, group activities and shared experiences chosen to be inclusive, fun and confidence-building."
    }, {
      q: "Is it structured or free?",
      a: "It's learner-led but gently structured, so every participant can take part comfortably and meaningfully."
    }, {
      q: "How does it help development?",
      a: "Recreation builds social skills, communication and well-being in a low-pressure, joyful setting."
    }, {
      q: "What age is it for?",
      a: "The programme supports learners aged 12 and above."
    }],
    related: ["play-therapy", "music-arts-therapy", "life-skills-training"]
  },
  "occupational-therapy": {
    slug: "occupational-therapy",
    category: "Educational & Therapeutic",
    icon: "activity",
    image: "what-we-offer.png",
    seoTitle: "Occupational Therapy for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "Occupational therapy for special needs young adults in Chennai. Build everyday-living skills, motor coordination and independence with personalised, professional support.",
    h1: "Occupational Therapy for Special Needs",
    lede: "Personalised occupational therapy in Chennai that helps learners with special needs build the everyday skills — motor, sensory and practical — that make independence possible.",
    intro: "Occupational therapy focuses on the skills people need for daily life. Our allied-health team works with learners aged 12 and above on motor coordination, sensory processing and practical everyday tasks, setting individual goals and adapting activities to each person. The result is steady, meaningful progress toward greater independence and well-being.",
    age: "12 years and above",
    mode: "Therapeutic sessions · 1:1, personalised",
    duration: "Ongoing, goal-reviewed regularly",
    learnHeading: "What therapy supports",
    learn: ["Fine and gross motor coordination", "Sensory processing and regulation", "Everyday practical and self-help tasks", "Individual goal-setting and progress", "Building independence step by step"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) who benefit from targeted skill-building — including those with autism, intellectual disabilities, Down syndrome and developmental needs.",
    outcomesHeading: "Outcomes",
    outcomes: ["Improved motor and sensory skills", "Greater independence in daily tasks", "Personalised, measurable progress", "Better participation in vocational and community life"],
    faq: [{
      q: "Who provides the occupational therapy?",
      a: "Sessions are delivered by our allied-health team, with personalised goals and regular review of progress."
    }, {
      q: "How is the therapy tailored?",
      a: "Each learner has individual goals, and activities are adapted to their motor, sensory and practical needs."
    }, {
      q: "Can it be combined with other programmes?",
      a: "Yes — occupational therapy often complements vocational and life-skills programmes within a learner's weekly plan."
    }, {
      q: "What age is it for?",
      a: "The programme supports learners aged 12 and above."
    }],
    related: ["life-skills-training", "self-grooming-hygiene", "music-arts-therapy"]
  },
  "life-skills-training": {
    slug: "life-skills-training",
    category: "Educational & Therapeutic",
    icon: "heart-handshake",
    image: "hero.png",
    seoTitle: "Life Skills Training for Special Needs — Chennai | Prisaum SEVA",
    metaDescription: "Life skills training for special needs young adults in Chennai. Build social, communication and self-help skills for confident, independent everyday living.",
    h1: "Life Skills Training for Special Needs",
    lede: "A practical life-skills programme in Chennai that helps learners with special needs build the social, communication and self-help abilities for confident, independent living.",
    intro: "Life skills tie everything together. Our programme helps learners aged 12 and above develop the social, communication and self-help abilities they use every day — from managing routines and money basics to interacting with others and solving everyday problems. Woven through all our training, life skills give each learner the confidence to participate more fully at home, at work and in the community.",
    age: "12 years and above",
    mode: "Life-skills sessions · group & 1:1",
    duration: "Ongoing, with individual goals",
    learnHeading: "What learners build",
    learn: ["Social and communication skills", "Self-help and daily-living routines", "Everyday problem-solving and decision-making", "Money and time basics", "Confidence and independence in the community"],
    whoHeading: "Who this programme is for",
    who: "Learners (12+) working toward greater independence — including those with intellectual disabilities, autism, Down syndrome and learning disabilities.",
    outcomesHeading: "Outcomes",
    outcomes: ["Confident, independent daily living", "Stronger social and communication skills", "Better problem-solving and self-reliance", "Fuller participation at home, work and community"],
    faq: [{
      q: "What does life skills training cover?",
      a: "It builds social, communication and self-help skills — routines, everyday problem-solving, money and time basics, and community participation."
    }, {
      q: "Is it a standalone programme?",
      a: "It can be standalone, but life skills are also woven through our vocational and therapeutic programmes."
    }, {
      q: "How is progress supported?",
      a: "Each learner works to individual goals with group and one-to-one support, reviewed regularly."
    }, {
      q: "What age is it for?",
      a: "The programme supports learners aged 12 and above."
    }],
    related: ["self-grooming-hygiene", "occupational-therapy", "nios-support"]
  }
};
window.PROGRAM_CONTENT = PROGRAM_CONTENT;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prisaum-website/programs/program-content.js", error: String((e && e.message) || e) }); }

__ds_ns.ProgramCard = __ds_scope.ProgramCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

})();
