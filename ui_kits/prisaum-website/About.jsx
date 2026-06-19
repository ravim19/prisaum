const { SectionHeading: ASH, Card: ACard } = window.PrisaumSevaDesignSystem_cee68f;

function About() {
  React.useEffect(() => { refreshIcons(); });
  return (
    <section id="about" style={A.wrap}>
      <div style={A.inner}>
        <ASH align="center" eyebrow="About Us"
          title="A caring path to independence"
          intro="We help young adults and children with special needs grow vocational, life and social skills — with dignity at the centre of everything we do." />

        <div style={A.cards}>
          {ABOUT.map((c) => (
            <ACard key={c.title} padding="none" interactive>
              <div style={A.media}>
                <img src={IMG[c.img]} alt={c.title} style={A.img}
                     onError={(e)=>{e.currentTarget.parentNode.style.background='var(--green-100)';e.currentTarget.style.display='none';}} />
              </div>
              <div style={{ padding: 22 }}>
                <h3 style={A.cardTitle}>{c.title}</h3>
                <p style={A.cardBody}>{c.body}</p>
              </div>
            </ACard>
          ))}
        </div>

        <div style={A.services}>
          <p style={A.servHead}>Vocational Services</p>
          <div style={A.servGrid}>
            {SERVICES.map((s) => (
              <div key={s.title} style={A.serv}>
                <div style={A.servIcon}><img src={IMG[s.img]} alt="" style={{ width: 44, height: 44, objectFit: "contain" }} /></div>
                <span style={A.servTitle}>{s.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const A = {
  wrap: { background: "var(--color-bg)", padding: "var(--section-pad-y) 0" },
  inner: { maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px",
    display: "flex", flexDirection: "column", gap: 44, alignItems: "center" },
  cards: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, width: "100%" },
  media: { aspectRatio: "16/10", overflow: "hidden", background: "var(--green-100)" },
  img: { width: "100%", height: "100%", objectFit: "cover" },
  cardTitle: { margin: "0 0 8px", fontSize: "var(--text-xl)", fontWeight: 700, color: "var(--text-strong)", letterSpacing: "var(--tracking-tight)" },
  cardBody: { margin: 0, fontSize: "var(--text-base)", lineHeight: "var(--leading-relaxed)", color: "var(--text-muted)" },
  services: { width: "100%", background: "var(--green-50)", border: "1px solid var(--color-border-leaf)",
    borderRadius: "var(--radius-xl)", padding: "32px 28px", display: "flex", flexDirection: "column", gap: 22 },
  servHead: { margin: 0, textAlign: "center", fontSize: "var(--text-2xl)", fontWeight: 800,
    color: "var(--text-strong)", letterSpacing: "var(--tracking-tight)" },
  servGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 },
  serv: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12 },
  servIcon: { width: 80, height: 80, borderRadius: "50%", background: "var(--color-surface)",
    display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--shadow-sm)" },
  servTitle: { fontSize: 14.5, fontWeight: 600, color: "var(--text-body)", maxWidth: 180, lineHeight: 1.4 },
};

window.About = About;
