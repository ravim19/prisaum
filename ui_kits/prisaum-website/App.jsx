const { Header, Hero, About, Programs, Volunteer, Footer } = window;

// Responsive + helper CSS for the kit
if (!document.getElementById("ps-site-css")) {
  const el = document.createElement("style");
  el.id = "ps-site-css";
  el.textContent = `
  .ps-mobile-nav{ display:none; }
  @media (max-width: 920px){
    .ps-desktop-nav{ display:none !important; }
    .ps-mobile-nav{ display:block; }
    .ps-site section [style*="grid-template-columns: 1.05fr"]{ grid-template-columns:1fr !important; }
  }
  .ps-site a{ text-decoration:none; }
  .ps-site a:hover{ text-decoration:none; }
  html{ scroll-behavior:smooth; }
  `;
  document.head.appendChild(el);
}

function App() {
  const onNav = (id) => {
    if (id === "top") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  React.useEffect(() => { refreshIcons(); }, []);

  return (
    <div className="site ps-site">
      <Header onNav={onNav} />
      <Hero onNav={onNav} />
      <About />
      <Programs onNav={onNav} />
      <Volunteer />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
// icons render after the tree mounts
setTimeout(refreshIcons, 60);
