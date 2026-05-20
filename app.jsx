// ─────────────────────────────────────────────────────────────
// APP — Mar Comú
// ─────────────────────────────────────────────────────────────

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "editorial",
  "displayFont": "Instrument Serif",
  "showHeroArt": true,
  "accent": "#b7392a"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // apply theme to <html>
  useEffect(() => {
    document.documentElement.dataset.theme = t.theme;
  }, [t.theme]);

  // apply display font
  useEffect(() => {
    document.documentElement.style.setProperty("--display-font", `"${t.displayFont}"`);
    // Inject Google Font if not yet present
    if (t.displayFont !== "Instrument Serif" && !document.getElementById("dyn-font")) {
      const link = document.createElement("link");
      link.id = "dyn-font";
      link.rel = "stylesheet";
      const family = t.displayFont.replace(/ /g, "+");
      link.href = `https://fonts.googleapis.com/css2?family=${family}:ital@0;1&display=swap`;
      document.head.appendChild(link);
    } else if (t.displayFont !== "Instrument Serif") {
      const link = document.getElementById("dyn-font");
      const family = t.displayFont.replace(/ /g, "+");
      link.href = `https://fonts.googleapis.com/css2?family=${family}:ital@0;1&display=swap`;
    }
    // Override .display and .serif rules dynamically
    let style = document.getElementById("dyn-font-style");
    if (!style) {
      style = document.createElement("style");
      style.id = "dyn-font-style";
      document.head.appendChild(style);
    }
    style.textContent = `
      .serif, h1.display, h2.display, h3.display, .huge, .pull-quote,
      .cert-content h3, .cal-name strong, .compare-col h3, .compare-row .meta strong,
      .port-detail h4, .quiz-q, .quiz-result h3, .quiz-result .score-big,
      .step h4, .step .step-num, .guide-card h4, .recipe h4,
      .footer-brand, .pledge-item .pli-text, .pledge-thanks, .stat-cell .n,
      .topbar-brand, .eyebrow + div h1, .hero-meta-item span {
        font-family: "${t.displayFont}", "Times New Roman", serif !important;
      }
    `;
  }, [t.displayFont]);

  // apply accent color override
  useEffect(() => {
    if (t.theme === "editorial") {
      document.documentElement.style.setProperty("--accent", t.accent);
    } else {
      document.documentElement.style.removeProperty("--accent");
    }
  }, [t.accent, t.theme]);

  return (
    <>
      <TopBar />
      <Hero />
      <Problem />
      <Certifications />
      <HowTo />
      <Calendar />
      <Compare />
      <MapSection />
      <Quiz />
      <ShoppingGuide />
      <Recipes />
      <Pledge />
      <Footer />

      <TweaksPanel title="Tweaks · Mar Comú">
        <TweakSection label="Tema visual" />
        <TweakRadio
          label="Estil"
          value={t.theme}
          options={[
            { value: "editorial", label: "Editorial" },
            { value: "night",     label: "Nocturn" },
            { value: "newsprint", label: "Diari" },
          ]}
          onChange={(v) => setTweak("theme", v)}
        />

        <TweakSection label="Tipografia" />
        <TweakSelect
          label="Família display"
          value={t.displayFont}
          options={[
            "Instrument Serif",
            "DM Serif Display",
            "Cormorant Garamond",
            "EB Garamond",
            "Playfair Display",
            "Bodoni Moda",
          ]}
          onChange={(v) => setTweak("displayFont", v)}
        />

        <TweakSection label="Accent (només Editorial)" />
        <TweakColor
          label="Color"
          value={t.accent}
          options={["#b7392a", "#0a1f33", "#1b4332", "#a07a2c", "#5a3a8a"]}
          onChange={(v) => setTweak("accent", v)}
        />

        <TweakSection label="Hero" />
        <TweakToggle
          label="Mostra il·lustració de peix"
          value={t.showHeroArt}
          onChange={(v) => setTweak("showHeroArt", v)}
        />
      </TweaksPanel>

      <style>{`
        ${!t.showHeroArt ? '.hero svg { display: none !important; }' : ''}
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
