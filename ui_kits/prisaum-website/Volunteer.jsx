const { Button: VBtn, Input: VInput, SectionHeading: VSH } = window.PrisaumSevaDesignSystem_cee68f;

function Volunteer() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  React.useEffect(() => { refreshIcons(); }, [sent]);

  const submit = (e) => { e.preventDefault(); setSent(true); };

  const ways = [
    { icon: "megaphone", t: "Share the message", d: "Raise awareness about child mental health." },
    { icon: "clock", t: "Devote your time", d: "Volunteer at least 2 hours each week." },
    { icon: "graduation-cap", t: "Educate & guide", d: "Mentor trainees and rediscover purpose." },
  ];

  return (
    <section id="support" style={V.wrap}>
      <div style={V.glow} />
      <div style={V.inner}>
        <div style={V.left}>
          <VSH onDark eyebrow="Get Involved"
            title={<>Do you want to empower those with intellectual challenges?</>}
            intro="Join us as a volunteer, benefactor or partner. Every hour and every contribution helps a young adult move closer to independence." />
          <div style={V.ways}>
            {ways.map((w) => (
              <div key={w.t} style={V.way}>
                <div style={V.wayIcon}><Ico name={w.icon} size={20} /></div>
                <div>
                  <p style={V.wayT}>{w.t}</p>
                  <p style={V.wayD}>{w.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={V.card}>
          {!sent ? (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h3 style={V.formTitle}>Register as a volunteer</h3>
              <p style={V.formSub}>We’ll get in touch within two working days.</p>
              <VInput label="Full name" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
              <VInput label="Email" type="email" placeholder="you@example.com" required />
              <VInput label="Phone" placeholder="98404 04752" />
              <VInput label="How would you like to help?" as="select"
                options={["Volunteer (2 hrs/week)", "Become a benefactor", "Partner / CSR", "Spread the word"]} />
              <VBtn variant="primary" size="lg" fullWidth iconRight={<Ico name="arrow-right" size={18} />} type="submit">
                Submit registration
              </VBtn>
              <p style={V.fine}>By registering you agree to be contacted by Prisaum Empowerment Foundation.</p>
            </form>
          ) : (
            <div style={V.success}>
              <div style={V.successIcon}><Ico name="check" size={30} /></div>
              <h3 style={V.formTitle}>Thank you{name ? `, ${name.split(" ")[0]}` : ""}!</h3>
              <p style={V.formSub}>Your interest means a great deal. Our team will reach out shortly to welcome you.</p>
              <VBtn variant="secondary" onClick={() => { setSent(false); setName(""); }}>Register someone else</VBtn>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const V = {
  wrap: { position: "relative", background: "var(--green-900)", color: "var(--text-on-dark)", overflow: "hidden",
    padding: "var(--section-pad-y) 0" },
  glow: { position: "absolute", bottom: -180, left: -100, width: 480, height: 480, borderRadius: "50%",
    background: "radial-gradient(circle, rgba(124,154,85,.4), transparent 70%)", pointerEvents: "none" },
  inner: { position: "relative", maxWidth: "var(--container-max)", margin: "0 auto", padding: "0 24px",
    display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 48, alignItems: "center" },
  left: { display: "flex", flexDirection: "column", gap: 28 },
  ways: { display: "flex", flexDirection: "column", gap: 16 },
  way: { display: "flex", gap: 14, alignItems: "flex-start" },
  wayIcon: { flex: "none", width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(255,255,255,.08)",
    border: "1px solid rgba(255,255,255,.14)", color: "var(--green-300)", display: "flex", alignItems: "center", justifyContent: "center" },
  wayT: { margin: 0, fontSize: 16, fontWeight: 700, color: "#fff" },
  wayD: { margin: "2px 0 0", fontSize: 14, color: "var(--text-on-dark-muted)" },
  card: { background: "var(--color-surface)", borderRadius: "var(--radius-xl)", padding: 30, boxShadow: "var(--shadow-xl)" },
  formTitle: { margin: 0, fontSize: "var(--text-2xl)", fontWeight: 800, color: "var(--text-strong)", letterSpacing: "var(--tracking-tight)" },
  formSub: { margin: "0 0 4px", fontSize: 14.5, color: "var(--text-muted)" },
  fine: { margin: 0, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.5 },
  success: { display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 12, padding: "20px 0" },
  successIcon: { width: 64, height: 64, borderRadius: "50%", background: "var(--status-success-bg)",
    color: "var(--status-success-fg)", display: "flex", alignItems: "center", justifyContent: "center" },
};

window.Volunteer = Volunteer;
