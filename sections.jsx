// ─────────────────────────────────────────────────────────────
// SECTIONS — Mar Comú
// ─────────────────────────────────────────────────────────────

const { useState, useEffect, useRef, useMemo } = React;

// ── Reveal on scroll helper ─────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("in")),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// ── TopBar ──────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-brand">
          <span className="dot"></span>
          <span>Mar Comú</span>
        </div>
        <nav className="topbar-nav">
          <a href="#problema">El problema</a>
          <a href="#segells">Segells</a>
          <a href="#calendari">Temporada</a>
          <a href="#mapa">Ports</a>
          <a href="#quiz">Quiz</a>
          <a href="#guia">Guia</a>
          <a href="#compromis">Compromís</a>
        </nav>
        <div className="topbar-meta">EDICIÓ N° 01 · TARDOR 2026</div>
      </div>
    </div>
  );
}

// ── Hero ────────────────────────────────────────────────────
function Hero() {
  const ref = useReveal();
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="eyebrow">N° 01 · Consum responsable d'aliments del mar</div>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "48px", alignItems: "end", marginTop: 32 }}>
            <div>
              <h1 className="display">
                El peix<br/>
                que mengem<br/>
                <span className="serif italic" style={{ color: "var(--accent)" }}>importa.</span>
              </h1>
              <p className="lede" style={{ marginTop: 32 }}>
                Una guia per a estudiants, famílies i menjadors curiosos. Per què la pesca il·legal és un problema global, com llegir l'etiqueta del peix, i com escollir consumir-ne d'una manera responsable amb el mar i amb qui viu d'ell.
              </p>
            </div>
            <figure className="hero-photo">
              <img
                src="https://loremflickr.com/900/1100/fish,fishmonger,market?lock=2"
                alt="Peix fresc en una llotja"
                loading="lazy"
              />
              <figcaption>Llotja de peix fresc · Mediterrani occidental</figcaption>
            </figure>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item"><small>Edició</small><span>Tardor 2026</span></div>
            <div className="hero-meta-item"><small>Format</small><span>Web educatiu</span></div>
            <div className="hero-meta-item"><small>Lectura</small><span>12 minuts</span></div>
            <div className="hero-meta-item"><small>Difusió</small><span>Aula i casa</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Problem / Stats ─────────────────────────────────────────
function Problem() {
  const ref = useReveal();
  return (
    <section id="problema" data-screen-label="02 El problema">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 01 · El problema</div>
              <h2 className="display" style={{ marginTop: 18 }}>Pescat fora<br/><span className="italic" style={{ color: "var(--accent)" }}>de la llei</span>.</h2>
            </div>
            <p className="right">
              La pesca il·legal, no declarada i no reglamentada (IUU per les seves sigles en anglès) treu del mar una de cada cinc captures globals. No paga llicències, no respecta vedes ni talles mínimes, ni s'inscriu a cap quota. Trenca l'equilibri d'estocs i fa la competència deslleial a la flota legal i artesanal.
            </p>
          </div>

          <div className="stats-grid">
            {HERO_STATS.map((s, i) => (
              <div key={i} className="stat-cell">
                <span className="n serif">{s.num}</span>
                <div className="label">{s.label}</div>
                <div className="src">→ {s.src}</div>
              </div>
            ))}
          </div>

          <div className="cols-2" style={{ marginTop: 80 }}>
            <div className="col-left">
              <h3 className="display" style={{ marginBottom: 24 }}>Per què passa.</h3>
              <p className="body-text drop-cap">
                La demanda mundial de proteïna marina creix més ràpid que la capacitat del mar per regenerar-se. Davant la pressió, una part del sector opta per capturar més enllà de les quotes, en aigües d'altres països o en zones protegides. Sovint el peix entra al circuit comercial sense ser declarat, es barreja amb captures legals i acaba al plat sense rastre de la seva procedència.
              </p>
              <p className="body-text" style={{ marginTop: 14 }}>
                Detectar-ho és difícil: el peix viatja milers de quilòmetres, canvia de mans diverses vegades i molt sovint surt a la venda sense la informació mínima que la llei europea obliga a declarar. Per això la cadena de consum — peixater, restaurador, consumidor — té un paper crucial.
              </p>
            </div>
            <div>
              <div className="pull-quote">
                Cada plat de peix és una decisió política i ecològica que es repeteix 200 vegades a l'any.
              </div>
              <p className="body-text">
                A escola, a casa o al restaurant. La diferència entre suport a la flota artesanal o a la pesca depredadora és, en molts casos, una pregunta al venedor i una mirada a l'etiqueta. Aquesta pàgina existeix per fer aquesta pregunta més fàcil.
              </p>
            </div>
          </div>

          <figure className="problem-photo">
            <img
              src="https://loremflickr.com/1600/600/fishing,trawler,net?lock=21"
              alt="Vaixell pesquer amb xarxes"
              loading="lazy"
            />
            <div className="caption">Pesca d'arrossegament · Mediterrani</div>
          </figure>
        </div>
      </div>
    </section>
  );
}

// ── How to identify (4 steps) ───────────────────────────────
function HowTo() {
  const ref = useReveal();
  return (
    <section data-screen-label="03 Identifica peix sostenible">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 02 · A peu de peixateria</div>
              <h2 className="display" style={{ marginTop: 18 }}>Com identificar<br/><span className="italic">peix sostenible</span>.</h2>
            </div>
            <p className="right">
              Quatre passes per anar de l'aparador a la cistella sabent què et portes a casa. No requereixen experiència — només una mica d'atenció i el costum de mirar l'etiqueta abans del preu.
            </p>
          </div>

          <div className="steps">
            {STEPS.map((s) => (
              <div key={s.n} className="step">
                <div className="step-icon"><StepIcon kind={s.n} /></div>
                <div className="step-num serif">{s.n}</div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Certifications selector ─────────────────────────────────
function Certifications() {
  const ref = useReveal();
  const [active, setActive] = useState(CERTIFICATIONS[0].id);
  const cert = CERTIFICATIONS.find((c) => c.id === active);
  const Seal = SEALS[active];

  return (
    <section id="segells" data-screen-label="04 Segells de qualitat">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 03 · Segells i certificacions</div>
              <h2 className="display" style={{ marginTop: 18 }}>Llegir<br/><span className="italic" style={{ color: "var(--accent)" }}>la lletra petita.</span></h2>
            </div>
            <p className="right">
              Selecciona un segell per saber què garanteix, qui l'emet i quins criteris compleix una pesquera per obtenir-lo. Tots els segells representats aquí són dissenys originals d'aquesta pàgina amb finalitat educativa — fan referència als esquemes reals però no en reprodueixen els logotips.
            </p>
          </div>

          <div className="cert-grid">
            <div className="cert-list">
              {CERTIFICATIONS.map((c, i) => (
                <button
                  key={c.id}
                  className="cert-tab"
                  data-active={c.id === active}
                  onClick={() => setActive(c.id)}
                >
                  <span className="num">0{i + 1}</span>
                  <span className="name serif" style={{ fontSize: 19 }}>{c.name}</span>
                  <span className="arrow mono">→</span>
                </button>
              ))}
            </div>
            <div className="cert-panel">
              <div className="cert-seal-wrap">
                <div className="cert-seal"><Seal /></div>
                <div className="cert-issue">{cert.issued}</div>
              </div>
              <div className="cert-content">
                <h3>{cert.name}</h3>
                <div className="tag">{cert.tag} · {cert.refersTo}</div>
                <p>{cert.desc}</p>
                <p style={{ color: "var(--muted)", fontSize: 13 }}>{cert.extra}</p>
                <ul className="cert-criteria">
                  {cert.criteria.map((cr, i) => <li key={i}>{cr}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Calendar of seasons ─────────────────────────────────────
function Calendar() {
  const ref = useReveal();
  return (
    <section id="calendari" data-screen-label="05 Calendari de temporada">
      <div className="container-wide">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 04 · Calendari de temporada</div>
              <h2 className="display" style={{ marginTop: 18 }}>Quan és<br/><span className="italic">el seu moment</span>.</h2>
            </div>
            <p className="right">
              Una espècie pescada en plena època de reproducció no es renova. El calendari mostra, per a vuit espècies habituals del litoral català, quan és el seu moment òptim de consum, quan és acceptable i quan és millor evitar-la.
            </p>
          </div>

          <div className="calendar">
            <div className="cal-row cal-head">
              <div>Espècie</div>
              {MONTHS.map((m) => <div key={m}>{m}</div>)}
            </div>
            {CALENDAR_SPECIES.map((sp) => (
              <div key={sp.name} className="cal-row">
                <div className="cal-name">
                  <strong>{sp.name}</strong>
                  <em>{sp.lat}</em>
                </div>
                {sp.months.map((v, i) => {
                  const state = v === 1 ? "peak" : v === 0 ? "good" : v === -1 ? "avoid" : "none";
                  return <div key={i} className="cal-cell" data-state={state}></div>;
                })}
              </div>
            ))}
            <div className="cal-legend">
              <span><span className="swatch peak"></span>Plena temporada</span>
              <span><span className="swatch good"></span>Bo per consumir</span>
              <span><span className="swatch avoid"></span>Període reproductiu — evita</span>
              <span style={{ marginLeft: "auto", color: "var(--muted)", fontSize: 11, fontFamily: "JetBrains Mono, monospace", letterSpacing: "0.06em" }}>Font · Cofradies del litoral català, IEO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Compare good vs bad ─────────────────────────────────────
function Compare() {
  const ref = useReveal();
  const [openId, setOpenId] = useState("Sardina");

  const fishIcon = (name) => {
    if (name.includes("Sardin") || name.includes("Anxova") || name.includes("Verat")) return <FishSardina />;
    if (name.includes("Tonyina")) return <FishTonyina />;
    if (name.includes("Anguila")) return <FishAnguila />;
    if (name.includes("Musclo")) return <Musclo size={48} />;
    return <FishGeneric size={32} />;
  };

  const Row = ({ item, side }) => (
    <div
      className="compare-row"
      data-open={openId === item.name}
      onClick={() => setOpenId(openId === item.name ? null : item.name)}
    >
      <div className="fish-icon">{fishIcon(item.name)}</div>
      <div className="meta">
        <strong>{item.name}</strong>
        <em>{item.lat}</em>
      </div>
      <div className="score">{item.score}</div>
      <div className="why">{item.why}</div>
    </div>
  );

  return (
    <section data-screen-label="06 Comparador d'espècies">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 05 · Comparador d'espècies</div>
              <h2 className="display" style={{ marginTop: 18 }}>Tria<br/><span className="italic">amb criteri.</span></h2>
            </div>
            <p className="right">
              Cap espècie és «bona» o «dolenta» en absolut: depèn del mètode, l'origen i el moment. Aquesta llista és una guia general per al consumidor català, basada en l'estat actual dels estocs i les recomanacions d'organitzacions independents. Clica una fila per llegir-ne el motiu.
            </p>
          </div>

          <div className="compare-grid">
            <div className="compare-col good">
              <div className="col-tag">↗ Recomanades</div>
              <h3>Cap a la cistella</h3>
              <div style={{ marginTop: 24 }}>
                {COMPARE_GOOD.map((it) => <Row key={it.name} item={it} side="good" />)}
              </div>
            </div>
            <div className="compare-col bad">
              <div className="col-tag">↘ A evitar o moderar</div>
              <h3>Pensa-t'ho dues vegades</h3>
              <div style={{ marginTop: 24 }}>
                {COMPARE_BAD.map((it) => <Row key={it.name} item={it} side="bad" />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Map of local ports ──────────────────────────────────────
function MapSection() {
  const ref = useReveal();
  const [active, setActive] = useState("palamos");
  const port = PORTS.find((p) => p.id === active);

  return (
    <section id="mapa" data-screen-label="07 Mapa de ports">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 06 · Mapa de pesca local</div>
              <h2 className="display" style={{ marginTop: 18 }}>Llotges<br/><span className="italic" style={{ color: "var(--accent)" }}>del litoral.</span></h2>
            </div>
            <p className="right">
              Vuit ports tradicionals del litoral català on encara desembarca diàriament la flota artesanal. Clica una llotja per veure les espècies característiques que s'hi venen i quan és millor anar-hi.
            </p>
          </div>

          <div className="map-wrap">
            <div className="map-canvas">
              <CataloniaMap />
              {PORTS.map((p) => (
                <div
                  key={p.id}
                  className="map-port"
                  data-active={p.id === active}
                  style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  onClick={() => setActive(p.id)}
                >
                  <div className="pin"></div>
                  <div className="name">{p.name}</div>
                </div>
              ))}
            </div>
            <div className="port-detail">
              <div className="port-photo">
                <img
                  src={`https://loremflickr.com/600/400/fishing,port,harbour?lock=${port.id.length + 30}`}
                  alt={`Port de ${port.name}`}
                  loading="lazy"
                />
              </div>
              <h4>{port.name}</h4>
              <div className="coords">{port.coords}</div>
              <p>{port.desc}</p>
              <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--muted)", marginBottom: 8, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Espècies característiques
              </div>
              <div className="port-species">
                {port.species.map((s) => <span key={s} className="chip">{s}</span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Quiz ────────────────────────────────────────────────────
function Quiz() {
  const ref = useReveal();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const total = QUIZ.length;
  const done = step >= total;

  if (done) {
    const score = answers.filter(Boolean).length;
    const pct = Math.round((score / total) * 100);
    const verdict =
      score === total ? "Sostenible Major" :
      score >= total - 1 ? "Consumidor exemplar" :
      score >= total - 2 ? "Anem pel bon camí" :
      "Hi ha feina, però comença avui";
    const message =
      score === total
        ? "Coneixes l'etiqueta, l'estoc i la temporada. Ets de les que pregunten al venedor i no es deixen enredar pel preu."
        : score >= total - 1
        ? "Una resposta fora però vas pel bon camí. La pràctica acabarà fent la resta — sobretot mirar l'etiqueta i preguntar pel mètode."
        : "Algunes preguntes encara t'han enxampat. Torna a la secció de segells i al calendari de temporada: són la base.";

    return (
      <section id="quiz" data-screen-label="08 Quiz">
        <div className="container-narrow">
          <div ref={ref} className="reveal">
            <div className="section-head">
              <div>
                <div className="eyebrow">§ 07 · Quiz</div>
                <h2 className="display" style={{ marginTop: 18 }}>Resultat.</h2>
              </div>
              <p className="right">Aquí tens com t'ha anat. Pots tornar a fer el qüestionari si vols.</p>
            </div>
            <div className="quiz">
              <div className="quiz-result">
                <div className="score-label">Puntuació</div>
                <div className="score-big">{score}<span style={{ fontSize: "0.45em", color: "var(--muted)" }}>/{total}</span></div>
                <h3>{verdict}</h3>
                <p>{message}</p>
                <button className="quiz-next" onClick={() => { setStep(0); setAnswers([]); setSelected(null); }}>
                  ↺ Tornar a començar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const cur = QUIZ[step];
  const answered = selected !== null;

  const choose = (i) => {
    if (answered) return;
    setSelected(i);
  };
  const next = () => {
    const ok = cur.options[selected].correct;
    setAnswers([...answers, ok]);
    setSelected(null);
    setStep(step + 1);
  };

  return (
    <section id="quiz" data-screen-label="08 Quiz">
      <div className="container-narrow">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 07 · Quiz · Sostenible o no?</div>
              <h2 className="display" style={{ marginTop: 18 }}>Posa-t'hi<br/><span className="italic">a prova.</span></h2>
            </div>
            <p className="right">Cinc preguntes ràpides sobre el que has llegit. Pensa abans de respondre — la peixateria del cap de setmana et necessita atenta.</p>
          </div>

          <div className="quiz">
            <div className="quiz-side">
              <div>
                <div className="quiz-progress">
                  {QUIZ.map((_, i) => <span key={i} data-done={i < step}></span>)}
                </div>
                <div className="quiz-q-num">Pregunta {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</div>
                <div className="quiz-q">{cur.q}</div>
              </div>
              <div className="quiz-context">
                Llegeix amb calma cada opció. No hi ha temps límit, i sempre pots tornar enrere a la guia de segells o al calendari per refrescar la memòria.
              </div>
            </div>
            <div className="quiz-options">
              {cur.options.map((opt, i) => {
                let result = "";
                if (answered) {
                  if (i === selected && opt.correct) result = "correct";
                  else if (i === selected && !opt.correct) result = "wrong";
                  else if (opt.correct) result = "missed";
                }
                return (
                  <button
                    key={i}
                    className="quiz-opt"
                    data-result={result}
                    onClick={() => choose(i)}
                    disabled={answered}
                  >
                    <span className="key">{String.fromCharCode(65 + i)}</span>
                    <span className="opt-label">{opt.text}</span>
                  </button>
                );
              })}
              {answered && (
                <>
                  <div className="quiz-explanation">
                    <strong>{cur.options[selected].correct ? "Correcte." : "No exactament."}</strong>
                    {cur.explain}
                  </div>
                  <button className="quiz-next" onClick={next}>
                    {step + 1 === total ? "Veure el resultat →" : "Següent pregunta →"}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Shopping guide ──────────────────────────────────────────
function ShoppingGuide() {
  const ref = useReveal();
  return (
    <section id="guia" data-screen-label="09 Guia de compra">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 08 · Guia de compra</div>
              <h2 className="display" style={{ marginTop: 18 }}>A l'hora<br/><span className="italic">de comprar.</span></h2>
            </div>
            <p className="right">Tres situacions habituals: la peixateria de barri, el supermercat i la decisió a casa abans de sortir. Petits gestos repetibles per fer una compra més responsable sense que es noti la diferència al pressupost.</p>
          </div>

          <div className="guide-grid">
            {SHOPPING_TIPS.map((g) => (
              <div key={g.num} className="guide-card">
                <div className="gc-num">N° {g.num}</div>
                <h4>{g.title}</h4>
                <p>{g.body}</p>
                <ul>{g.items.map((it, i) => <li key={i}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Recipes ─────────────────────────────────────────────────
function Recipes() {
  const ref = useReveal();
  return (
    <section data-screen-label="10 Receptes">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow">§ 09 · A taula</div>
              <h2 className="display" style={{ marginTop: 18 }}>Receptes<br/><span className="italic" style={{ color: "var(--accent)" }}>de proximitat.</span></h2>
            </div>
            <p className="right">Tres receptes pensades per espècies abundants i de temporada al litoral català. Senzilles, econòmiques i pensades per acompanyar el canvi d'hàbit sense esforç.</p>
          </div>

          <div className="recipes-grid">
            {RECIPES.map((r, i) => {
              const photo = [
                "https://loremflickr.com/800/600/sardines,grilled?lock=11",
                "https://loremflickr.com/800/600/cuttlefish,stew?lock=12",
                "https://loremflickr.com/800/600/fish,soup,mediterranean?lock=13",
              ][i];
              return (
                <article key={r.title} className="recipe">
                  <div className="recipe-cover">
                    <img src={photo} alt={r.title} loading="lazy" />
                  </div>
                  <div className="recipe-meta">
                    <span>{r.level}</span>
                    <span>{r.time}</span>
                  </div>
                  <h4>{r.title}</h4>
                  <p>{r.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Pledge ──────────────────────────────────────────────────
function Pledge() {
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
  };

  return (
    <section id="compromis" className="pledge" data-screen-label="11 Compromís">
      <div className="container">
        <div ref={ref} className="reveal">
          <div className="section-head">
            <div>
              <div className="eyebrow" style={{ color: "color-mix(in oklab, var(--paper) 60%, transparent)" }}>§ 10 · Compromís</div>
              <h2 className="display" style={{ marginTop: 18 }}>Em comprometo<br/><span className="italic" style={{ color: "var(--accent)" }}>amb el mar.</span></h2>
            </div>
            <p className="lede right" style={{ color: "color-mix(in oklab, var(--paper) 80%, transparent)" }}>
              Un compromís senzill — cinc gestos que canvien el resultat. Signa per rebre la guia imprimible per a l'aula i un recordatori mensual de l'espècie de temporada.
            </p>
          </div>

          <div className="pledge-list">
            {PLEDGE_ITEMS.map((it, i) => (
              <div key={i} className="pledge-item">
                <div className="pli-num">N° 0{i + 1}</div>
                <div className="pli-text">{it}</div>
              </div>
            ))}
          </div>

          {!sent ? (
            <form className="pledge-form" onSubmit={submit}>
              <input
                type="email"
                placeholder="el teu correu electrònic"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">M'hi comprometo →</button>
            </form>
          ) : (
            <div className="pledge-thanks">
              Gràcies. Ja ets part del Mar Comú. T'enviem la guia imprimible al teu correu.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Footer ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">Mar Comú</div>
            <p>Pàgina educativa sobre el consum responsable d'aliments del mar. Pensada per a l'aula i per a famílies que volen entendre què hi ha rere l'etiqueta.</p>
            <p style={{ marginTop: 12, fontSize: 12 }}>Aquest projecte és independent i no comercial. Les imatges i segells són dissenys originals amb finalitat educativa.</p>
          </div>
          <div>
            <h5>Continguts</h5>
            <ul>
              <li><a href="#problema">El problema</a></li>
              <li><a href="#segells">Segells</a></li>
              <li><a href="#calendari">Temporada</a></li>
              <li><a href="#mapa">Ports</a></li>
              <li><a href="#quiz">Quiz</a></li>
              <li><a href="#guia">Guia de compra</a></li>
            </ul>
          </div>
          <div>
            <h5>Fonts</h5>
            <ul>
              <li>FAO · SOFIA 2024</li>
              <li>Generalitat de Catalunya</li>
              <li>Confraries del litoral català</li>
              <li>IEO · Institut Espanyol d'Oceanografia</li>
              <li>Reglament UE 1379/2013</li>
            </ul>
          </div>
          <div>
            <h5>Contacta</h5>
            <ul>
              <li>hola@marcomu.cat</li>
              <li>Aula · materials gratuïts</li>
              <li>Pòsters imprimibles</li>
              <li>Visites guiades a llotja</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 MAR COMÚ · CC BY-NC-SA 4.0</span>
          <span>↑ TORNAR A DALT</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, {
  TopBar, Hero, Problem, HowTo, Certifications, Calendar, Compare,
  MapSection, Quiz, ShoppingGuide, Recipes, Pledge, Footer,
});
