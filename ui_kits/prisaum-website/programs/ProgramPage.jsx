/* Reusable, SEO-structured programme page.
   Renders a compact header, breadcrumb, hero, content sections, FAQ and
   related links, and injects schema.org JSON-LD (Course + Breadcrumb + FAQ).
   Pages pass a slug; content comes from window.PROGRAM_CONTENT. */

const { Button: PgBtn, Tag: PgTag, Card: PgCard } = window.PrisaumSevaDesignSystem_cee68f;
const HOME = "../index.html";

function injectJsonLd(c) {
  const base = "https://prisaum.com";
  const url = `${base}/programs/${c.slug}`;
  const graph = [
    {
      "@context": "https://schema.org", "@type": "Course",
      name: c.h1, description: c.metaDescription, url,
      provider: { "@type": "EducationalOrganization", name: "Prisaum SEVA", url: base },
      audience: { "@type": "EducationalAudience", educationalRole: "student" },
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
        { "@type": "ListItem", position: 2, name: "Programs", item: base + "/programs" },
        { "@type": "ListItem", position: 3, name: c.h1, item: url },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: c.faq.map((f) => ({
        "@type": "Question", name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  let el = document.getElementById("ps-jsonld");
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "ps-jsonld"; document.head.appendChild(el); }
  el.textContent = JSON.stringify(graph);
}

function SubHeader() {
  React.useEffect(() => { refreshIcons(); });
  return (
    <header style={G.header}>
      <div style={G.headerInner}>
        <a href={HOME} style={G.brand}>
          <img src={IMG.logoReversed} alt="Prisaum SEVA — home" style={{ height: 84, width: "auto", display: "block" }} />
        </a>
        <nav style={G.nav} className="ps-desktop-nav">
          <a href={HOME + "#about"} style={G.navLink}>About Us</a>
          <a href={HOME + "#programs"} style={G.navLink}>Our Programs</a>
          <PgBtn variant="support" iconLeft={<Ico name="heart" size={17} />} href={HOME + "#support"}>Support Us</PgBtn>
        </nav>
        <a href={HOME + "#programs"} className="ps-mobile-nav" style={{ ...G.navLink, marginLeft: "auto" }}>
          <Ico name="arrow-left" size={18} /> All programmes
        </a>
      </div>
    </header>
  );
}

function ProgramPage({ slug }) {
  const c = window.PROGRAM_CONTENT[slug];
  React.useEffect(() => { if (c) injectJsonLd(c); }, [slug]);
  React.useEffect(() => { refreshIcons(); });

  if (!c) return <div style={{ padding: 60, textAlign: "center" }}>Programme not found.</div>;

  const relatedItems = (c.related || [])
    .map((s) => window.PROGRAM_CONTENT[s])
    .filter(Boolean);

  return (
    <div className="ps-site">
      <SubHeader />

      {/* Hero */}
      <section style={G.hero}>
        <div style={G.glow} />
        <div style={G.heroInner}>
          <nav aria-label="Breadcrumb" style={G.crumbs}>
            <a href={HOME} style={G.crumbLink}>Home</a>
            <Ico name="chevron-right" size={14} />
            <a href={HOME + "#programs"} style={G.crumbLink}>Programs</a>
            <Ico name="chevron-right" size={14} />
            <span style={G.crumbCurrent}>{c.h1}</span>
          </nav>
          <div style={G.heroGrid}>
            <div style={G.heroText}>
              <PgTag tone={c.category === "Vocational Training" ? "leaf" : "info"} variant="solid" size="lg">{c.category}</PgTag>
              <h1 style={G.h1}>{c.h1}</h1>
              <p style={G.lede}>{c.lede}</p>
              <div style={G.heroCtas}>
                <PgBtn variant="support" size="lg" iconRight={<Ico name="arrow-right" size={18} />} href={HOME + "#support"}>Enquire about admission</PgBtn>
                <PgBtn variant="onDark" size="lg" href={HOME + "#programs"}>See all programmes</PgBtn>
              </div>
            </div>
            <div style={G.heroMedia}>
              <img src={asset(c.image)} alt={c.h1} style={G.heroImg} onError={(e)=>{e.currentTarget.style.display='none';}} />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section style={G.body}>
        <div style={G.bodyInner}>
          <div style={G.main}>
            <p style={G.intro}>{c.intro}</p>

            <h2 style={G.h2}>{c.learnHeading}</h2>
            <ul style={G.list}>
              {c.learn.map((l) => <li key={l} style={G.li}><span style={G.tick}><Ico name="check" size={15} /></span><span>{l}</span></li>)}
            </ul>

            <h2 style={G.h2}>{c.whoHeading}</h2>
            <p style={G.para}>{c.who}</p>

            <h2 style={G.h2}>{c.outcomesHeading}</h2>
            <ul style={G.list}>
              {c.outcomes.map((l) => <li key={l} style={G.li}><span style={G.tick}><Ico name="sprout" size={15} /></span><span>{l}</span></li>)}
            </ul>

            <h2 style={G.h2}>Frequently asked questions</h2>
            <div style={G.faq}>
              {c.faq.map((f) => (
                <details key={f.q} style={G.faqItem}>
                  <summary style={G.faqQ}><span>{f.q}</span><Ico name="plus" size={18} /></summary>
                  <p style={G.faqA}>{f.a}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside style={G.aside}>
            <PgCard tone="leaf" padding="lg">
              <h3 style={G.sideTitle}>Programme at a glance</h3>
              <dl style={G.dl}>
                <div style={G.dRow}><dt style={G.dt}><Ico name="users" size={15} /> Ages</dt><dd style={G.dd}>{c.age}</dd></div>
                <div style={G.dRow}><dt style={G.dt}><Ico name="calendar-days" size={15} /> Format</dt><dd style={G.dd}>{c.mode}</dd></div>
                <div style={G.dRow}><dt style={G.dt}><Ico name="clock" size={15} /> Duration</dt><dd style={G.dd}>{c.duration}</dd></div>
                <div style={G.dRow}><dt style={G.dt}><Ico name="map-pin" size={15} /> Location</dt><dd style={G.dd}>Chennai · 2 campuses</dd></div>
              </dl>
              <PgBtn variant="primary" fullWidth iconRight={<Ico name="arrow-right" size={18} />} href={HOME + "#support"}>Book a visit</PgBtn>
            </PgCard>
            <div style={G.contactBox}>
              <p style={G.contactLine}><Ico name="phone" size={15} /> <span className="ps-mono">98404 04752</span></p>
              <p style={G.contactLine}><Ico name="mail" size={15} /> support@prisaum.com</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      {relatedItems.length > 0 && (
        <section style={G.related}>
          <div style={G.relatedInner}>
            <h2 style={G.relatedHead}>Related programmes</h2>
            <div style={G.relatedGrid}>
              {relatedItems.map((r) => (
                <a key={r.slug} href={`${r.slug}.html`} style={G.relCard}>
                  <span style={G.relIcon}><Ico name={r.icon} size={24} /></span>
                  <span style={G.relTitle}>{r.h1.replace(" for Special Needs", "")}</span>
                  <span style={G.relMore}>View programme <Ico name="arrow-right" size={15} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

const G = {
  header: { position: "sticky", top: 0, zIndex: 100, background: "var(--green-900)", boxShadow: "var(--shadow-md)" },
  headerInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "4px 24px", display: "flex", alignItems: "center", gap: 24 },
  brand: { display: "inline-flex", alignItems: "center", flex: "none" },
  nav: { display: "flex", alignItems: "center", gap: 6, marginLeft: "auto" },
  navLink: { display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 14px", fontSize: 15, fontWeight: 600, color: "var(--text-on-dark)", whiteSpace: "nowrap" },

  hero: { position: "relative", background: "var(--green-800)", color: "var(--text-on-dark)", overflow: "hidden" },
  glow: { position: "absolute", top: -160, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)", pointerEvents: "none" },
  heroInner: { position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "22px 24px clamp(2.5rem,5vw,4rem)" },
  crumbs: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", fontSize: 13.5, color: "var(--text-on-dark-muted)", marginBottom: 22 },
  crumbLink: { color: "var(--green-200)", fontWeight: 600 },
  crumbCurrent: { color: "#fff", fontWeight: 600 },
  heroGrid: { display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 40, alignItems: "center" },
  heroText: { display: "flex", flexDirection: "column", gap: 18, alignItems: "flex-start" },
  h1: { margin: 0, fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "var(--tracking-tight)", color: "#fff" },
  lede: { margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--text-on-dark-muted)", maxWidth: 560 },
  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 },
  heroMedia: { borderRadius: "var(--radius-2xl)", overflow: "hidden", boxShadow: "var(--shadow-xl)", border: "1px solid rgba(255,255,255,.1)", aspectRatio: "4/3", background: "var(--green-700)" },
  heroImg: { width: "100%", height: "100%", objectFit: "cover" },

  body: { background: "var(--color-bg)", padding: "clamp(2.5rem,6vw,5rem) 0" },
  bodyInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 48, alignItems: "start" },
  main: { minWidth: 0 },
  intro: { margin: "0 0 8px", fontSize: "var(--text-lg)", lineHeight: 1.7, color: "var(--text-body)" },
  h2: { margin: "32px 0 14px", fontSize: "var(--text-2xl)", fontWeight: 800, color: "var(--text-strong)", letterSpacing: "var(--tracking-tight)" },
  para: { margin: 0, fontSize: "var(--text-md)", lineHeight: 1.7, color: "var(--text-body)" },
  list: { listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 },
  li: { display: "flex", gap: 12, alignItems: "flex-start", fontSize: "var(--text-md)", lineHeight: 1.5, color: "var(--text-body)" },
  tick: { flex: "none", width: 26, height: 26, borderRadius: "50%", background: "var(--green-100)", color: "var(--green-700)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1 },

  faq: { display: "flex", flexDirection: "column", gap: 10 },
  faqItem: { background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", padding: "4px 18px" },
  faqQ: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, cursor: "pointer", listStyle: "none", padding: "14px 0", fontSize: "var(--text-md)", fontWeight: 700, color: "var(--text-strong)" },
  faqA: { margin: "0 0 14px", fontSize: "var(--text-base)", lineHeight: 1.6, color: "var(--text-muted)" },

  aside: { display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 96 },
  sideTitle: { margin: "0 0 14px", fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--text-strong)" },
  dl: { margin: "0 0 18px", display: "flex", flexDirection: "column", gap: 12 },
  dRow: { display: "flex", flexDirection: "column", gap: 2 },
  dt: { display: "flex", alignItems: "center", gap: 7, fontSize: 12.5, fontWeight: 700, letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--color-primary)" },
  dd: { margin: 0, fontSize: 14.5, color: "var(--text-body)", fontWeight: 500 },
  contactBox: { padding: "4px 6px", display: "flex", flexDirection: "column", gap: 8 },
  contactLine: { margin: 0, display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "var(--text-muted)" },

  related: { background: "var(--color-surface)", borderTop: "1px solid var(--color-border)", padding: "clamp(2.5rem,5vw,4rem) 0" },
  relatedInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px" },
  relatedHead: { margin: "0 0 24px", fontSize: "var(--text-2xl)", fontWeight: 800, color: "var(--text-strong)", letterSpacing: "var(--tracking-tight)" },
  relatedGrid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 },
  relCard: { display: "flex", flexDirection: "column", gap: 10, padding: 24, background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-card)" },
  relIcon: { width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--green-100)", color: "var(--green-700)", display: "flex", alignItems: "center", justifyContent: "center" },
  relTitle: { fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-strong)" },
  relMore: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 14, fontWeight: 700, color: "var(--color-primary)" },
};

window.ProgramPage = ProgramPage;
