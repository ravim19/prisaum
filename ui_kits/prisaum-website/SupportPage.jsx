/* /support — standalone Support / Get-involved page. Composes SiteHeader + hero +
   the shared Volunteer band + ways-to-give + contact/visit + Footer. */
const { Button: SuBtn, Tag: SuTag, SectionHeading: SuSH, Card: SuCard } = window.PrisaumSevaDesignSystem_cee68f;

function injectSupportLd() {
  const base = "https://prisaum.com";
  const graph = [
    { "@context": "https://schema.org", "@type": "ContactPage", name: "Support Prisaum SEVA", url: base + "/support",
      about: { "@type": "EducationalOrganization", name: "Prisaum SEVA", url: base + "/",
        telephone: "+91-98404-04752", email: "support@prisaum.com" } },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: base + "/" },
      { "@type": "ListItem", position: 2, name: "Support Us", item: base + "/support" },
    ] },
  ];
  let el = document.getElementById("ps-jsonld");
  if (!el) { el = document.createElement("script"); el.type = "application/ld+json"; el.id = "ps-jsonld"; document.head.appendChild(el); }
  el.textContent = JSON.stringify(graph);
}

function SupportPage() {
  React.useEffect(() => { injectSupportLd(); refreshIcons(); });

  const ways = [
    { icon: "hand-heart", t: "Volunteer", d: "Give at least 2 hours each week to mentor and guide our trainees." },
    { icon: "gift", t: "Become a benefactor", d: "Fund a learner's training, materials or a programme for the year." },
    { icon: "handshake", t: "Partner / CSR", d: "Collaborate with us on skills, placements and awareness." },
    { icon: "megaphone", t: "Share the message", d: "Raise awareness about special education and child mental health." },
  ];
  const branches = [
    { name: "Branch 1", addr: "43 Saptha Giri Colony, 1st Street, Ashok Nagar, Chennai 600083, Tamil Nadu" },
    { name: "Branch 2 (Hostel)", addr: "1 Balaraman Garden Street, Parthasarathy Nagar, Manapakkam, Chennai 600125, Tamil Nadu" },
  ];

  return (
    <div className="ps-site">
      <SiteHeader current="support" />

      {/* Hero */}
      <section style={SU.hero}>
        <div style={SU.glow} />
        <div style={SU.heroInner}>
          <nav aria-label="Breadcrumb" style={SU.crumbs}>
            <a href="index.html" style={SU.crumbLink}>Home</a>
            <Ico name="chevron-right" size={14} />
            <span style={{ color: "#fff", fontWeight: 600 }}>Support Us</span>
          </nav>
          <SuTag tone="warning" variant="solid" size="lg">Get involved</SuTag>
          <h1 style={SU.h1}>Help every ability find its opportunity</h1>
          <p style={SU.lede}>Your time and generosity move a young adult closer to independence. Volunteer, become a
            benefactor, partner with us, or simply spread the word — every contribution counts.</p>
        </div>
      </section>

      {/* Ways to give */}
      <section style={SU.ways}>
        <div style={SU.waysInner}>
          <SuSH align="center" eyebrow="Ways to help" title="Four ways to make a difference" />
          <div style={SU.waysGrid}>
            {ways.map((w) => (
              <SuCard key={w.t} interactive>
                <div style={SU.wayIcon}><Ico name={w.icon} size={24} /></div>
                <h3 style={SU.wayT}>{w.t}</h3>
                <p style={SU.wayD}>{w.d}</p>
              </SuCard>
            ))}
          </div>
        </div>
      </section>

      {/* Shared volunteer registration band (with working form + success state) */}
      <Volunteer />

      {/* Visit / contact */}
      <section style={SU.contact}>
        <div style={SU.contactInner}>
          <SuSH eyebrow="Visit us" title="Come and see our work"
            intro="We'd love to welcome you to either campus. Call ahead and we'll arrange a visit." />
          <div style={SU.branches}>
            {branches.map((b) => (
              <SuCard key={b.name} tone="leaf" padding="lg">
                <div style={SU.branchHead}><Ico name="map-pin" size={18} /> <span style={SU.branchName}>{b.name}</span></div>
                <p style={SU.branchAddr}>{b.addr}</p>
              </SuCard>
            ))}
          </div>
          <div style={SU.contactRow}>
            <a href="tel:9840404752" style={SU.contactPill}><Ico name="phone" size={16} /> <span className="ps-mono">98404 04752</span></a>
            <a href="mailto:support@prisaum.com" style={SU.contactPill}><Ico name="mail" size={16} /> support@prisaum.com</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const SU = {
  hero: { position: "relative", background: "var(--green-800)", color: "var(--text-on-dark)", overflow: "hidden" },
  glow: { position: "absolute", top: -160, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)", pointerEvents: "none" },
  heroInner: { position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "22px 24px clamp(2.5rem,5vw,3.5rem)", display: "flex", flexDirection: "column", gap: 16, alignItems: "flex-start" },
  crumbs: { display: "flex", alignItems: "center", gap: 8, fontSize: 13.5, color: "var(--text-on-dark-muted)" },
  crumbLink: { color: "var(--green-200)", fontWeight: 600 },
  h1: { margin: 0, fontSize: "clamp(2.2rem,4.5vw,3.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "var(--tracking-tight)", maxWidth: 720 },
  lede: { margin: 0, fontSize: "var(--text-lg)", lineHeight: 1.6, color: "var(--text-on-dark-muted)", maxWidth: 660 },
  ways: { background: "var(--color-bg)", padding: "clamp(2.5rem,6vw,5rem) 0" },
  waysInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 28, alignItems: "center" },
  waysGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20, width: "100%" },
  wayIcon: { width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--green-100)", color: "var(--green-700)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 },
  wayT: { margin: "0 0 6px", fontSize: "var(--text-lg)", fontWeight: 700, color: "var(--text-strong)" },
  wayD: { margin: 0, fontSize: "var(--text-base)", lineHeight: 1.55, color: "var(--text-muted)" },
  contact: { background: "var(--color-surface)", padding: "clamp(2.5rem,6vw,5rem) 0", borderTop: "1px solid var(--color-border)" },
  contactInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 24 },
  branches: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 },
  branchHead: { display: "flex", alignItems: "center", gap: 8, color: "var(--green-700)", marginBottom: 8 },
  branchName: { fontSize: "var(--text-lg)", fontWeight: 800, color: "var(--text-strong)" },
  branchAddr: { margin: 0, fontSize: "var(--text-base)", lineHeight: 1.55, color: "var(--text-body)" },
  contactRow: { display: "flex", gap: 12, flexWrap: "wrap" },
  contactPill: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 15, fontWeight: 600, color: "var(--green-800)", background: "var(--green-50)", border: "1px solid var(--color-border-leaf)", borderRadius: "var(--radius-pill)", padding: "10px 18px" },
};

window.SupportPage = SupportPage;
