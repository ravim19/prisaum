const { SectionHeading: PSH, ProgramCard: PCard, Tag: PTag, Button: PBtn } = window.PrisaumSevaDesignSystem_cee68f;

// Homepage programmes section — cards link to real, crawlable programme pages.
function Programs({ onNav }) {
  const [tab, setTab] = React.useState("vocational");
  React.useEffect(() => { refreshIcons(); }, [tab]);

  const list = tab === "vocational" ? VOCATIONAL : THERAPEUTIC;
  const toneFor = tab === "vocational" ? "leaf" : "info";
  const tabs = [
    { id: "vocational", label: "Vocational Training", n: VOCATIONAL.length },
    { id: "therapeutic", label: "Educational & Therapeutic", n: THERAPEUTIC.length },
  ];

  // dedicated SEO page when a slug exists, else the programmes hub
  const hrefFor = (p) => (p.slug ? `programs/${p.slug}.html` : "programs/index.html");

  return (
    <section id="programs" style={P.wrap}>
      <div style={P.inner}>
        <PSH eyebrow="Our Programs"
          title="Skills that open real opportunities"
          intro="Hands-on vocational training paired with educational and therapeutic support — each programme tailored to the learner." />

        <div style={P.tabs}>
          {tabs.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={P.tab(tab === t.id)}>
              {t.label}
              <span style={P.tabCount(tab === t.id)}>{t.n}</span>
            </button>
          ))}
        </div>

        <div style={P.grid}>
          {list.map((p) => (
            <PCard key={p.title}
              icon={<Ico name={p.icon} size={26} />}
              title={p.title}
              description={p.desc}
              tag={<PTag tone={toneFor} size="sm">{tab === "vocational" ? "Vocational" : "Therapeutic"}</PTag>}
              href={hrefFor(p)}
              cta={p.slug ? "View programme" : "Learn more"} />
          ))}
        </div>

        <PBtn variant="secondary" size="lg" href="programs/index.html" iconRight={<Ico name="arrow-right" size={18} />}>
          View all programmes
        </PBtn>

        <div style={P.certs}>
          <p style={P.certHead}>We offer certifications in</p>
          <div style={P.certRow}>
            {["Digital Literacy", "Handicrafts", "Gardening / Horticulture", "Fashion Design & Garment Making"].map((c) => (
              <span key={c} style={P.cert}><Ico name="award" size={16} /> {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const P = {
  wrap: { background: "var(--color-surface)", padding: "var(--section-pad-y) 0" },
  inner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px",
    display: "flex", flexDirection: "column", gap: 28, alignItems: "center" },
  tabs: { display: "inline-flex", gap: 6, background: "var(--stone-100)", borderRadius: "var(--radius-pill)", padding: 6 },
  tab: (on) => ({ display: "inline-flex", alignItems: "center", gap: 8, border: "none", cursor: "pointer",
    padding: "10px 20px", borderRadius: "var(--radius-pill)", fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 700,
    color: on ? "#fff" : "var(--text-body)", background: on ? "var(--color-primary)" : "transparent",
    boxShadow: on ? "var(--shadow-sm)" : "none", transition: "all var(--dur) var(--ease-out)" }),
  tabCount: (on) => ({ fontSize: 12, fontWeight: 700, padding: "2px 8px", borderRadius: 999,
    background: on ? "rgba(255,255,255,.22)" : "var(--stone-200)", color: on ? "#fff" : "var(--text-muted)" }),
  grid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 22, width: "100%" },
  certs: { width: "100%", marginTop: 8, display: "flex", flexDirection: "column", gap: 16, alignItems: "center",
    borderTop: "1px dashed var(--color-border-strong)", paddingTop: 32 },
  certHead: { margin: 0, fontSize: 13, fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase", color: "var(--text-muted)" },
  certRow: { display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" },
  cert: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--green-800)",
    background: "var(--green-50)", border: "1px solid var(--color-border-leaf)", borderRadius: "var(--radius-pill)", padding: "9px 16px" },
};

window.Programs = Programs;
