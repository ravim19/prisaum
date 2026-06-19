/* /about-us — standalone About page. Composes SiteHeader + hero + the shared
   About section + mission/admissions + Footer, with breadcrumb and JSON-LD. */
const { Button: AbBtn, Tag: AbTag, SectionHeading: AbSH, Card: AbCard } = window.PrisaumSevaDesignSystem_cee68f;

function injectAboutLd() {
  const base = "https://prisaum.com";
  const graph = [
    { "@context": "https://schema.org", "@type": "AboutPage", name: "About Prisaum SEVA", url: base + "/about-us",
      about: { "@type": "EducationalOrganization", name: "Prisaum SEVA", url: base + "/" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
      { "@type": "ListItem", position: 2, name: "About Us", item: base + "/about-us" },
    ] },
  ];
  let el = document.getElementById("ps-jsonld");
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "ps-jsonld"; document.head.appendChild(el); }
  el.textContent = JSON.stringify(graph);
}

function AboutPage() {
  React.useEffect(() => { injectAboutLd(); refreshIcons(); });
  return (
    <div className="ps-site">
      <SiteHeader current="about" />

      {/* Hero */}
      <section style={AB.hero}>
        <div style={AB.glow} />
        <div style={AB.heroInner}>
          <nav aria-label="Breadcrumb" style={AB.crumbs}>
            <a href="index.html" style={AB.crumbLink}>Home</a>
            <Ico name="chevron-right" size={14} />
            <span style={{ color: "#fff", fontWeight: 600 }}>About Us</span>
          </nav>
          <h1 style={AB.h1}>About Prisaum SEVA</h1>
          <p style={AB.lede}>A residential special-education and vocational academy in Chennai, run by the Prisaum
            Empowerment Foundation — helping young adults and children with special needs build job skills, life
            skills and independence, with dignity at the centre.</p>
          <div style={AB.heroCtas}>
            <AbTag tone="warning" variant="solid" size="lg">Recognised by Govt. of Tamil Nadu · 908/2025</AbTag>
          </div>
        </div>
      </section>

      {/* Shared About section (How We Began / Whom We Serve / What We Offer + services) */}
      <About />

      {/* Whom we serve — admissions detail */}
      <section style={AB.serve}>
        <div style={AB.serveInner}>
          <AbSH eyebrow="Admissions" title="Whom we serve"
            intro="We welcome learners aged 12 and above. Our programmes support a wide range of needs:" />
          <div style={AB.chips}>
            {ADMISSIONS.map((a) => (
              <span key={a} style={AB.chip}><Ico name="check" size={15} /> {a}</span>
            ))}
          </div>
          <AbCard tone="leaf" padding="lg" className="ps-mission">
            <h3 style={AB.missionH}>Our mission</h3>
            <p style={AB.missionP}>“Where every ability finds opportunity.” We pair vocational training with
              educational and therapeutic support — individual goals, tailored to each learner and guided by our
              staff and professional artists — so every trainee can move toward a more independent, dignified life.</p>
            <div style={AB.missionCtas}>
              <AbBtn variant="primary" size="lg" href="programs/index.html" iconRight={<Ico name="arrow-right" size={18} />}>Explore our programmes</AbBtn>
              <AbBtn variant="secondary" size="lg" href="support.html" iconLeft={<Ico name="heart" size={18} />}>Support us</AbBtn>
            </div>
          </AbCard>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const AB = {
  hero: { position: "relative", background: "var(--green-800)", color: "var(--text-on-dark)", overflow: "hidden" },
  glow: { position: "absolute", top: -160, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)", pointerEvents: "none" },
  heroInner: { position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "22px 24px clamp(2.5rem,5vw,3.5rem)" },
  crumbs: { display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "var(--text-on-dark-muted)", marginBottom: 20 },
  crumbLink: { color: "var(--green-200)", fontWeight: 600 },
  h1: { margin: "0 0 12px", fontSize: "clamp(2.2rem,4.5vw,3.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "var(--tracking-tight)" },
  lede: { margin: "0 0 18px", fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--text-on-dark-muted)", maxWidth: 660 },
  heroCtas: { display: "flex", gap: 12, flexWrap: "wrap" },
  serve: { background: "var(--color-surface)", padding: "clamp(2.5rem,6vw,5rem) 0", borderTop: "1px solid var(--color-border)" },
  serveInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 24 },
  chips: { display: "flex", flexWrap: "wrap", gap: 12 },
  chip: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--green-800)", background: "var(--green-50)", border: "1px solid var(--color-border-leaf)", borderRadius: "var(--radius-pill)", padding: "9px 16px" },
  missionH: { margin: "0 0 10px", fontSize: "var(--text-xl)", fontWeight: 800, color: "var(--text-strong)" },
  missionP: { margin: "0 0 18px", fontSize: "var(--text-lg)", lineHeight: 1.65, color: "var(--text-body)" },
  missionCtas: { display: "flex", gap: 12, flexWrap: "wrap" },
};

window.AboutPage = AboutPage;
