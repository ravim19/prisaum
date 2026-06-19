/* Shared multi-page site header for standalone pages (About, Support).
   `prefix` adjusts relative links by folder depth ("" at site root). */
const { Button: ShBtn } = window.PrisaumSevaDesignSystem_cee68f;

function SiteHeader({ prefix = "", current = "" }) {
  React.useEffect(() => { refreshIcons(); });
  const link = (p) => prefix + p;
  const items = [
    { id: "about", label: "About Us", href: link("about-us.html") },
    { id: "programs", label: "Our Programs", href: link("programs/index.html") },
  ];
  return (
    <header style={SH.header}>
      <div style={SH.utility}>
        <div style={SH.utilityInner}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Ico name="badge-check" size={15} /> Recognised by Government of Tamil Nadu · Reg No: 908/2025
          </span>
          <span style={SH.utilityContact}>
            <a href="tel:9840404752" style={SH.utilityLink}><Ico name="phone" size={14} /> 98404 04752</a>
            <a href="mailto:support@prisaum.com" style={SH.utilityLink}><Ico name="mail" size={14} /> support@prisaum.com</a>
          </span>
        </div>
      </div>
      <div style={SH.barWrap}>
        <nav style={SH.bar}>
          <a href={link("index.html")} style={SH.brand}>
            <img src={IMG.logoReversed} alt="Prisaum SEVA — home" style={{ height: 84, width: "auto", display: "block" }} />
          </a>
          <div style={SH.nav} className="ps-desktop-nav">
            {items.map((it) => (
              <a key={it.id} href={it.href} style={SH.navLink(current === it.id)}>{it.label}</a>
            ))}
            <ShBtn variant="support" iconLeft={<Ico name="heart" size={17} />} href={link("support.html")}>Support Us</ShBtn>
          </div>
          <a href={link("index.html")} className="ps-mobile-nav" style={{ ...SH.navLink(false), marginLeft: "auto" }}>
            <Ico name="arrow-left" size={18} /> Home
          </a>
        </nav>
      </div>
    </header>
  );
}

const SH = {
  header: { position: "sticky", top: 0, zIndex: 100, background: "var(--green-900)", boxShadow: "var(--shadow-md)" },
  utility: { background: "var(--green-950)", color: "var(--text-on-dark-muted)", fontSize: 12.5 },
  utilityInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "7px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" },
  utilityContact: { display: "flex", gap: 18, alignItems: "center" },
  utilityLink: { color: "var(--text-on-dark-muted)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 },
  barWrap: { borderBottom: "1px solid rgba(255,255,255,.12)" },
  bar: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "4px 24px", display: "flex", alignItems: "center", gap: 24 },
  brand: { display: "inline-flex", alignItems: "center", flex: "none" },
  nav: { display: "flex", alignItems: "center", gap: 6, marginLeft: "auto" },
  navLink: (on) => ({ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 14px", fontSize: 15, fontWeight: on ? 800 : 600, color: on ? "#fff" : "var(--text-on-dark)", whiteSpace: "nowrap", borderBottom: on ? "2px solid var(--green-300)" : "2px solid transparent" }),
};

window.SiteHeader = SiteHeader;
