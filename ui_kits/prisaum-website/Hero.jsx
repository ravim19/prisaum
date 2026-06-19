const { Button: HBtn, Tag: HTag, StatCard: HStat } = window.PrisaumSevaDesignSystem_cee68f;

function Hero({ onNav }) {
  React.useEffect(() => { refreshIcons(); });
  const go = (id) => (e) => { e.preventDefault(); onNav(id); };

  return (
    <section id="top" style={H.wrap}>
      <div style={H.glow} />
      <div style={H.inner}>
        <div style={H.left}>
          <span style={H.eyebrow}>
            <Ico name="sparkles" size={15} /> Special Education &amp; Vocational Academy
          </span>
          <h1 style={H.title}>
            Boarding school with world-class infrastructure &amp; <span style={H.em}>vocational excellence</span>
          </h1>
          <p style={H.lead}>
            A residential vocational programme in Chennai where young adults with special needs build real job
            skills, independence and confidence — supported by caring staff and professional artists.
          </p>

          <div style={H.admit}>
            <HTag tone="warning" variant="solid" size="lg">Admissions · Age 12+</HTag>
            <div style={H.admitList}>
              {ADMISSIONS.map((a) => (
                <span key={a} style={H.admitItem}><Ico name="check" size={14} /> {a}</span>
              ))}
            </div>
          </div>

          <div style={H.ctas}>
            <HBtn variant="onDark" size="lg" iconRight={<Ico name="arrow-right" size={18} />} onClick={go("support")}>Enquire about admission</HBtn>
            <HBtn variant="support" size="lg" iconLeft={<Ico name="heart" size={18} />} onClick={go("support")}>Support Us</HBtn>
          </div>

        </div>

        <div style={H.right}>
          <div style={H.media}>
            <img src={IMG.hero} alt="A trainee learning at Prisaum Seva" style={H.img}
                 onError={(e)=>{e.currentTarget.style.display='none';}} />
            <a style={H.play} href="https://www.youtube.com/@Prisaum-Seva" target="_blank" rel="noreferrer" aria-label="Watch our intro video"><Ico name="play" size={22} /></a>
            <div style={H.badge}>
              <span style={H.badgeBig}>Prisaum Empowerment Foundation</span>
              <span style={H.badgeSm}>Where every ability finds opportunity</span>
            </div>
          </div>
          <div style={H.stats}>
            <HStat value="15" suffix="+" label="Skill programmes" onDark />
            <div style={H.div} />
            <HStat value="2" label="Chennai campuses" onDark />
            <div style={H.div} />
            <HStat value="12" suffix="+" label="Admissions from age" onDark />
          </div>
        </div>
      </div>
    </section>
  );
}

const H = {
  wrap: { position: "relative", background: "var(--green-800)", color: "var(--text-on-dark)", overflow: "hidden" },
  glow: { position: "absolute", top: -160, right: -120, width: 520, height: 520, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.45), transparent 70%)", pointerEvents: "none" },
  inner: { position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "clamp(2.5rem,6vw,5rem) 24px",
    display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "stretch" },
  left: { display: "flex", flexDirection: "column", gap: 22 },
  eyebrow: { display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13.5, fontWeight: 700,
    letterSpacing: "var(--tracking-eyebrow)", textTransform: "uppercase", color: "var(--green-300)" },
  title: { margin: 0, fontSize: "clamp(2.1rem,4.4vw,3.4rem)", fontWeight: 800, lineHeight: 1.08,
    letterSpacing: "var(--tracking-tight)", color: "#fff" },
  em: { color: "var(--green-300)" },
  lead: { margin: 0, fontSize: "var(--text-lg)", lineHeight: "var(--leading-relaxed)", color: "var(--text-on-dark-muted)", maxWidth: 540 },
  admit: { display: "flex", flexDirection: "column", gap: 12, background: "rgba(255,255,255,.05)",
    border: "1px solid rgba(255,255,255,.12)", borderRadius: "var(--radius-lg)", padding: 18 },
  admitList: { display: "flex", flexWrap: "wrap", gap: "8px 18px" },
  admitItem: { display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5, color: "#e9efe0", fontWeight: 500 },
  ctas: { display: "flex", gap: 12, flexWrap: "wrap" },
  stats: { display: "flex", alignItems: "center", justifyContent: "space-around", gap: 16,
    background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.12)",
    borderRadius: "var(--radius-lg)", padding: "16px 12px" },
  div: { width: 1, height: 38, background: "rgba(255,255,255,.16)" },
  right: { display: "flex", flexDirection: "column", gap: 18, justifyContent: "center",
    width: "100%", maxWidth: 480, marginLeft: "auto", marginRight: "auto" },
  media: { position: "relative", width: "100%", flex: "1 1 auto", minHeight: 340,
    borderRadius: "var(--radius-2xl)", overflow: "hidden", background: "var(--green-800)",
    boxShadow: "var(--shadow-xl)", border: "1px solid rgba(255,255,255,.1)" },
  img: { width: "100%", height: "100%", objectFit: "cover" },
  play: { position: "absolute", top: "42%", left: "50%", transform: "translate(-50%,-50%)",
    width: 64, height: 64, borderRadius: "50%", background: "rgba(255,255,255,.92)", color: "var(--green-800)",
    display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-lg)",
    cursor: "pointer", textDecoration: "none" },
  badge: { position: "absolute", left: 16, right: 16, bottom: 16, background: "rgba(29,42,29,.82)",
    backdropFilter: "blur(6px)", borderRadius: "var(--radius-md)", padding: "12px 16px", display: "flex", flexDirection: "column", gap: 2 },
  badgeBig: { fontSize: 14, fontWeight: 700, color: "#fff" },
  badgeSm: { fontSize: 12.5, color: "var(--green-200)" },
};

window.Hero = Hero;
