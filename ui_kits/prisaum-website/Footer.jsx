const { Button: FBtn, Input: FInput } = window.PrisaumSevaDesignSystem_cee68f;

// Resolve links against THIS script's location (kit root), so the footer works
// from the homepage and from deeper /programs/ pages alike.
const _footerScript =
  (document.currentScript && document.currentScript.src && document.currentScript) ||
  [...document.querySelectorAll("script")].find((s) => s.src && /Footer\.jsx(\?|$)/.test(s.src));
const _KIT_ROOT = _footerScript ? new URL(".", _footerScript.src).href : "./";
function kpage(p) { return _KIT_ROOT + p; }

function Footer() {
  React.useEffect(() => { refreshIcons(); });
  const cols = [
    { h: "Programs", links: [
      { t: "Vocational Training", href: kpage("programs/index.html") },
      { t: "Educational & Therapeutic", href: kpage("programs/index.html") },
      { t: "NIOS Support", href: kpage("programs/nios-support.html") },
      { t: "All Programmes", href: kpage("programs/index.html") },
    ] },
    { h: "About", links: [
      { t: "How We Began", href: kpage("about-us.html") },
      { t: "Whom We Serve", href: kpage("about-us.html") },
      { t: "What We Offer", href: kpage("about-us.html") },
      { t: "About Us", href: kpage("about-us.html") },
    ] },
    { h: "Get Involved", links: [
      { t: "Volunteer", href: kpage("support.html") },
      { t: "Become a Benefactor", href: kpage("support.html") },
      { t: "Partner / CSR", href: kpage("support.html") },
      { t: "Support Us", href: kpage("support.html") },
    ] },
  ];
  const social = [
    { i: "facebook", href: "https://www.facebook.com/profile.php?id=61567174286850" },
    { i: "instagram", href: "https://www.instagram.com/prisaum.seva" },
    { i: "youtube", href: "https://www.youtube.com/@Prisaum-Seva" },
  ];

  return (
    <footer style={F.wrap}>
      <div style={F.top}>
        <div style={F.inner}>
          <div style={F.brandCol}>
            <a href={kpage("index.html")} style={{ display: "inline-flex" }}>
            <img src={IMG.logoReversed} alt="Prisaum SEVA" style={{ height: 76, width: "auto", marginBottom: 14 }} />
          </a>
            <p style={F.tagline}>Where every ability finds opportunity.</p>
            <div style={F.social}>
              {social.map((s) => (
                <a key={s.i} href={s.href} target="_blank" rel="noreferrer" style={F.socialBtn}><Ico name={s.i} size={18} /></a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.h} style={F.col}>
              <p style={F.colHead}>{c.h}</p>
              {c.links.map((l) => <a key={l.t} href={l.href} style={F.link}>{l.t}</a>)}
            </div>
          ))}

          <div style={F.contactCol}>
            <p style={F.colHead}>Visit Us</p>
            <p style={F.addr}><Ico name="map-pin" size={15} /> <span><b>Branch 1:</b> 43 Saptha Giri Colony, 1st Street, Ashok Nagar, Chennai 600083</span></p>
            <p style={F.addr}><Ico name="map-pin" size={15} /> <span><b>Branch 2 (Hostel):</b> 1 Balaraman Garden St, Parthasarathy Nagar, Manapakkam, Chennai 600125</span></p>
            <p style={F.addr}><Ico name="phone" size={15} /> <span className="ps-mono">98404 04752 · +91-44-4604 9575</span></p>
            <p style={F.addr}><Ico name="mail" size={15} /> support@prisaum.com</p>
          </div>
        </div>
      </div>

      <div style={F.bottom}>
        <div style={F.bottomInner}>
          <span>© 2025 Prisaum Empowerment Foundation. All rights reserved.</span>
          <span style={{ display: "flex", gap: 18 }}>
            <a href="#" onClick={(e)=>e.preventDefault()} style={F.legal}>Privacy Policy</a>
            <a href="#" onClick={(e)=>e.preventDefault()} style={F.legal}>Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

const F = {
  wrap: { background: "var(--green-950)", color: "var(--text-on-dark-muted)" },
  top: { borderBottom: "1px solid rgba(255,255,255,.1)" },
  inner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "52px 24px",
    display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1.6fr", gap: 32 },
  brandCol: { display: "flex", flexDirection: "column" },
  tagline: { margin: "0 0 16px", fontSize: 14.5, color: "var(--green-200)", maxWidth: 220, lineHeight: 1.5 },
  social: { display: "flex", gap: 10 },
  socialBtn: { width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.08)", color: "#fff",
    display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,.12)" },
  col: { display: "flex", flexDirection: "column", gap: 10 },
  colHead: { margin: "0 0 4px", fontSize: 12, fontWeight: 800, letterSpacing: "var(--tracking-eyebrow)",
    textTransform: "uppercase", color: "#fff" },
  link: { fontSize: 14.5, color: "var(--text-on-dark-muted)", lineHeight: 1.4 },
  contactCol: { display: "flex", flexDirection: "column", gap: 12 },
  addr: { margin: 0, fontSize: 13.5, lineHeight: 1.5, display: "flex", gap: 8, alignItems: "flex-start", color: "var(--text-on-dark-muted)" },
  bottom: {},
  bottomInner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "18px 24px",
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap", fontSize: 13 },
  legal: { color: "var(--green-200)" },
};

window.Footer = Footer;
