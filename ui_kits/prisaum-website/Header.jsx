const { Button: PSButton } = window.PrisaumSevaDesignSystem_cee68f;

function Header({ onNav }) {
  const [open, setOpen] = React.useState(false);       // mobile menu
  const [progOpen, setProgOpen] = React.useState(false); // programs dropdown
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  React.useEffect(() => { refreshIcons(); });

  const go = (id) => (e) => { e.preventDefault(); setOpen(false); setProgOpen(false); onNav(id); };
  const close = () => { setOpen(false); setProgOpen(false); };

  const links = [
    { id: "about", label: "About Us", href: "about-us.html" },
    { id: "programs", label: "Our Programs", href: "programs/index.html", dropdown: true },
    { id: "support", label: "Support Us", href: "support.html" },
  ];

  return (
    <header style={S.header(scrolled)}>
      <div style={S.utility}>
        <div style={S.utilityInner}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            <Ico name="badge-check" size={15} /> Recognised by Government of Tamil Nadu · Reg No: 908/2025
          </span>
          <span style={S.utilityContact}>
            <a href="tel:9840404752" style={S.utilityLink}><Ico name="phone" size={14} /> 98404 04752</a>
            <a href="mailto:support@prisaum.com" style={S.utilityLink}><Ico name="mail" size={14} /> support@prisaum.com</a>
          </span>
        </div>
      </div>

      <div style={S.barWrap}>
        <nav style={S.bar}>
          <a href="#top" onClick={go("top")} style={S.brand}>
            <span style={S.logoChip}>
              <img src={IMG.logoReversed} alt="Prisaum SEVA" style={{ height: 138, width: "auto", display: "block" }} />
            </span>
          </a>

          <div style={S.navLinks} className="ps-desktop-nav">
            {links.map((l) => (
              <div key={l.id}
                   style={{ position: "relative" }}
                   onMouseEnter={() => l.dropdown && setProgOpen(true)}
                   onMouseLeave={() => l.dropdown && setProgOpen(false)}>
                <a href={l.href} onClick={close} style={S.navLink}>
                  {l.label}
                  {l.dropdown && <Ico name="chevron-down" size={16} />}
                </a>
                {l.dropdown && progOpen && (
                  <div style={S.dropdown}>
                    <div style={S.ddCol}>
                      <p style={S.ddHead}>Vocational Training</p>
                      {VOCATIONAL.slice(0, 5).map((p) => (
                        <a key={p.title} href={`programs/${p.slug}.html`} onClick={close} style={S.ddItem}>{p.title}</a>
                      ))}
                    </div>
                    <div style={S.ddCol}>
                      <p style={S.ddHead}>Educational & Therapeutic</p>
                      {THERAPEUTIC.slice(0, 5).map((p) => (
                        <a key={p.title} href={`programs/${p.slug}.html`} onClick={close} style={S.ddItem}>{p.title}</a>
                      ))}
                    </div>
                    <a href="programs/index.html" onClick={close} style={S.ddAll}>View all programmes <Ico name="arrow-right" size={15} /></a>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="ps-desktop-nav">
            <PSButton variant="support" iconLeft={<Ico name="heart" size={17} />} href="support.html">Support Us</PSButton>
          </div>

          <button aria-label="Menu" onClick={() => setOpen(!open)} style={S.hamburger} className="ps-mobile-nav">
            <Ico name={open ? "x" : "menu"} size={26} />
          </button>
        </nav>
      </div>

      {open && (
        <div style={S.mobileMenu} className="ps-mobile-nav">
          {links.map((l) => (
            <a key={l.id} href={l.href} onClick={close} style={S.mobileLink}>{l.label}</a>
          ))}
          <div style={{ padding: "12px 20px" }}>
            <PSButton variant="support" fullWidth iconLeft={<Ico name="heart" size={17} />} href="support.html">Support Us</PSButton>
          </div>
        </div>
      )}
    </header>
  );
}

const S = {
  header: (sc) => ({ position: "sticky", top: 0, zIndex: 100, background: "var(--green-900)",
    boxShadow: sc ? "var(--shadow-md)" : "none", transition: "box-shadow var(--dur) var(--ease-out)" }),
  utility: { background: "var(--green-950)", color: "var(--text-on-dark-muted)", fontSize: 12.5 },
  utilityInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "7px 24px",
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" },
  utilityContact: { display: "flex", gap: 18, alignItems: "center" },
  utilityLink: { color: "var(--text-on-dark-muted)", display: "inline-flex", alignItems: "center", gap: 6, fontWeight: 500 },
  barWrap: { borderBottom: "1px solid rgba(255,255,255,.12)" },
  bar: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "4px 24px",
    display: "flex", alignItems: "center", gap: 24 },
  brand: { display: "inline-flex", alignItems: "center", flex: "none" },
  logoChip: { display: "inline-flex", alignItems: "center", background: "transparent", padding: 0 },
  navLinks: { display: "flex", alignItems: "center", gap: 4, marginLeft: "auto" },
  navLink: { display: "inline-flex", alignItems: "center", gap: 4, padding: "10px 14px",
    fontSize: 15, fontWeight: 600, color: "var(--text-on-dark)", borderRadius: "var(--radius-sm)", cursor: "pointer" },
  dropdown: { position: "absolute", top: "100%", left: 0, marginTop: 4, background: "var(--color-surface)",
    border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-lg)",
    padding: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, minWidth: 460 },
  ddCol: { display: "flex", flexDirection: "column", gap: 2, minWidth: 200 },
  ddHead: { margin: "0 0 6px", fontSize: 11, fontWeight: 800, letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase", color: "var(--color-primary)" },
  ddItem: { padding: "7px 8px", fontSize: 14, color: "var(--text-body)", borderRadius: "var(--radius-xs)", cursor: "pointer" },
  ddAll: { gridColumn: "1 / -1", marginTop: 6, paddingTop: 12, borderTop: "1px solid var(--color-border)",
    display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, fontWeight: 700, color: "var(--color-primary)" },
  hamburger: { marginLeft: "auto", background: "none", border: "none", color: "var(--text-on-dark)", cursor: "pointer", padding: 4 },
  mobileMenu: { borderTop: "1px solid rgba(255,255,255,.12)", background: "var(--green-900)", paddingBottom: 8 },
  mobileLink: { display: "block", padding: "14px 20px", fontSize: 16, fontWeight: 600,
    color: "var(--text-on-dark)", borderBottom: "1px solid rgba(255,255,255,.1)" },
};

window.Header = Header;
