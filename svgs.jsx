// ─────────────────────────────────────────────────────────────
// SVGs — il·lustracions geomètriques per Mar Comú
// Tot disseny original. No s'utilitzen logotips de marques reals.
// ─────────────────────────────────────────────────────────────

// — peix genèric geomètric (estilitzat amb cantonades) —
const FishGeneric = ({ size = 56, color = "currentColor" }) => (
  <svg width={size * 1.6} height={size} viewBox="0 0 100 60" fill="none" stroke={color} strokeWidth="1.4">
    <polygon points="6,30 20,12 70,12 88,22 92,30 88,38 70,48 20,48" />
    <polyline points="88,22 96,12 96,48 88,38" />
    <line x1="20" y1="12" x2="20" y2="48" />
    <line x1="70" y1="12" x2="70" y2="48" />
    <circle cx="80" cy="26" r="1.8" fill={color} stroke="none" />
    <polyline points="32,30 50,22 50,38 32,30" />
  </svg>
);

// — peix gran de hero —
const FishHero = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 600 360" fill="none" stroke={color} strokeWidth="1.2" style={{ width: "100%", height: "auto" }}>
    {/* outer body */}
    <polygon points="40,180 130,80 470,80 540,140 580,180 540,220 470,280 130,280" />
    {/* tail */}
    <polyline points="540,140 590,80 590,280 540,220" />
    {/* head line */}
    <line x1="130" y1="80" x2="130" y2="280" />
    {/* gill */}
    <line x1="180" y1="100" x2="180" y2="260" />
    {/* dorsal fins */}
    <polyline points="200,80 240,40 300,40 340,80" />
    <polyline points="360,80 400,50 440,80" />
    {/* anal fin */}
    <polyline points="220,280 260,320 320,320 360,280" />
    {/* eye */}
    <circle cx="155" cy="160" r="8" fill={color} stroke="none" />
    <circle cx="155" cy="160" r="14" />
    {/* scales pattern - subtle grid */}
    <g opacity="0.5">
      <polyline points="220,140 240,120 280,120 300,140" />
      <polyline points="320,140 340,120 380,120 400,140" />
      <polyline points="220,220 240,240 280,240 300,220" />
      <polyline points="320,220 340,240 380,240 400,220" />
      <polyline points="220,180 260,160 320,160 360,180" />
      <polyline points="220,180 260,200 320,200 360,180" />
    </g>
    {/* lateral line */}
    <line x1="180" y1="180" x2="470" y2="180" strokeDasharray="3 4" opacity="0.6" />
  </svg>
);

// — sardina (allargada) —
const FishSardina = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 120 40" fill="none" stroke={color} strokeWidth="1.2">
    <polygon points="8,20 24,8 95,8 108,16 116,20 108,24 95,32 24,32" />
    <polyline points="108,16 118,8 118,32 108,24" />
    <line x1="24" y1="8" x2="24" y2="32" />
    <circle cx="102" cy="17" r="1.3" fill={color} stroke="none" />
    <polyline points="40,20 60,14 60,26 40,20" opacity="0.5" />
  </svg>
);

// — tonyina (cos massiu) —
const FishTonyina = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 120 60" fill="none" stroke={color} strokeWidth="1.2">
    <polygon points="6,30 30,10 88,10 102,20 110,30 102,40 88,50 30,50" />
    <polyline points="102,20 118,4 118,56 102,40" />
    <polyline points="50,10 56,2 70,2 76,10" />
    <polyline points="50,50 56,58 70,58 76,50" />
    <line x1="30" y1="10" x2="30" y2="50" />
    <circle cx="98" cy="26" r="2" fill={color} stroke="none" />
  </svg>
);

// — anguila (forma serpentina) —
const FishAnguila = ({ color = "currentColor" }) => (
  <svg viewBox="0 0 120 30" fill="none" stroke={color} strokeWidth="1.2">
    <path d="M4 15 Q 24 4 44 15 T 84 15 T 112 15" />
    <path d="M4 19 Q 24 30 44 19 T 84 19 T 112 19" />
    <line x1="4" y1="15" x2="4" y2="19" />
    <circle cx="108" cy="16" r="1.2" fill={color} stroke="none" />
  </svg>
);

// — pop —
const Pop = ({ color = "currentColor", size = 60 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none" stroke={color} strokeWidth="1.2">
    <path d="M14 26 Q 14 8 30 8 T 46 26 L 46 36 L 14 36 Z" />
    <circle cx="24" cy="22" r="1.8" fill={color} stroke="none" />
    <circle cx="36" cy="22" r="1.8" fill={color} stroke="none" />
    <path d="M14 36 Q 8 44 6 56" />
    <path d="M22 36 Q 18 50 14 58" />
    <path d="M30 36 Q 30 52 30 58" />
    <path d="M38 36 Q 42 50 46 58" />
    <path d="M46 36 Q 52 44 54 56" />
  </svg>
);

// — musclo —
const Musclo = ({ color = "currentColor", size = 60 }) => (
  <svg width={size} height={size * 0.6} viewBox="0 0 100 60" fill="none" stroke={color} strokeWidth="1.2">
    <path d="M6 30 Q 6 6 50 6 Q 94 6 94 30 Q 94 54 50 54 Q 6 54 6 30 Z" />
    <line x1="50" y1="6" x2="50" y2="54" opacity="0.4" />
    <path d="M14 30 Q 30 12 50 12" opacity="0.4" />
    <path d="M14 30 Q 30 48 50 48" opacity="0.4" />
  </svg>
);

// ─── SEGELLS ORIGINALS ─────────────────────────────────────────
// Cadascun és un disseny propi: un cercle exterior amb text en
// arc, un símbol central geomètric i una banda inferior amb codi.
//
// NO reprodueixen logotips de MSC, ASC ni cap altra marca real.
// El text indica el concepte que representen ("PESCA SOSTENIBLE",
// "AQÜICULTURA RESPONSABLE", etc.) i la peça gràfica del centre
// és exclusiva d'aquesta pàgina.

const SealBase = ({ topText, bottomText, code, children, accent = "var(--accent)" }) => (
  <svg viewBox="0 0 200 200" fill="none" style={{ width: "100%", height: "100%" }}>
    <defs>
      <path id="circleTop" d="M 30,100 A 70,70 0 0 1 170,100" />
      <path id="circleBottom" d="M 30,100 A 70,70 0 0 0 170,100" />
    </defs>
    {/* outer ring */}
    <circle cx="100" cy="100" r="96" stroke="var(--ink)" strokeWidth="1.2" />
    <circle cx="100" cy="100" r="88" stroke="var(--ink)" strokeWidth="0.6" />
    <circle cx="100" cy="100" r="70" stroke={accent} strokeWidth="1.4" />
    {/* center white circle for clarity */}
    <circle cx="100" cy="100" r="56" fill="var(--paper)" stroke={accent} strokeWidth="0.6" />
    {/* arched text top */}
    <text fill="var(--ink)" fontFamily="JetBrains Mono, monospace" fontSize="9.5" letterSpacing="2">
      <textPath href="#circleTop" startOffset="50%" textAnchor="middle">{topText}</textPath>
    </text>
    {/* arched text bottom */}
    <text fill="var(--ink)" fontFamily="JetBrains Mono, monospace" fontSize="9.5" letterSpacing="2">
      <textPath href="#circleBottom" startOffset="50%" textAnchor="middle">{bottomText}</textPath>
    </text>
    {/* tick marks around inner ring */}
    {Array.from({ length: 24 }).map((_, i) => {
      const a = (i / 24) * Math.PI * 2;
      const x1 = 100 + Math.cos(a) * 72;
      const y1 = 100 + Math.sin(a) * 72;
      const x2 = 100 + Math.cos(a) * 76;
      const y2 = 100 + Math.sin(a) * 76;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ink)" strokeWidth="0.6" />;
    })}
    {/* central glyph */}
    <g transform="translate(100,100)">{children}</g>
    {/* code badge */}
    <g transform="translate(100,158)">
      <rect x="-30" y="-9" width="60" height="18" fill="var(--ink)" />
      <text x="0" y="4" fill="var(--paper)" fontFamily="JetBrains Mono, monospace" fontSize="9" letterSpacing="1.5" textAnchor="middle">{code}</text>
    </g>
    {/* star markers at sides */}
    <g fill={accent}>
      <polygon points="-90,0 -86,-3 -84,0 -86,3" transform="translate(100,100)" />
      <polygon points="90,0 86,-3 84,0 86,3" transform="translate(100,100)" />
    </g>
  </svg>
);

const SealSustainable = () => (
  <SealBase topText="★ PESCA SOSTENIBLE ★" bottomText="★ ESTOCS SALUDABLES ★" code="MC · 01">
    {/* stylised wave + fish */}
    <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
      <path d="M-30 6 Q -15 -6 0 6 T 30 6" />
      <polygon points="-22,-14 -8,-22 14,-22 22,-14 26,-10 22,-6 14,2 -8,2 -22,-6" fill="var(--accent)" stroke="var(--accent)" />
      <polyline points="22,-14 30,-22 30,-6 22,-6" fill="var(--accent)" stroke="var(--accent)" />
      <circle cx="16" cy="-12" r="1.2" fill="var(--paper)" stroke="none" />
    </g>
  </SealBase>
);

const SealAquaculture = () => (
  <SealBase topText="★ AQÜICULTURA RESPONSABLE ★" bottomText="★ GRANJA CERTIFICADA ★" code="MC · 02">
    <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
      {/* container with water and fish */}
      <rect x="-26" y="-18" width="52" height="36" />
      <line x1="-26" y1="-8" x2="26" y2="-8" />
      {/* water lines */}
      <path d="M-22 0 Q -16 -3 -10 0 T 2 0 T 14 0 T 22 0" />
      <path d="M-22 8 Q -16 5 -10 8 T 2 8 T 14 8 T 22 8" />
      {/* small fish */}
      <polygon points="-12,12 -6,9 4,9 10,12 4,15 -6,15" fill="var(--accent)" stroke="var(--accent)" />
    </g>
  </SealBase>
);

const SealProximity = () => (
  <SealBase topText="★ PESCA DE PROXIMITAT ★" bottomText="★ MENYS DE 24 HORES ★" code="MC · 03">
    <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
      {/* boat */}
      <polygon points="-26,8 -18,-2 18,-2 26,8" fill="var(--accent)" stroke="var(--accent)" />
      <line x1="-2" y1="-2" x2="-2" y2="-20" stroke="var(--ink)" />
      <polygon points="-2,-20 14,-12 -2,-4" fill="var(--ink)" />
      {/* waves */}
      <path d="M-28 14 Q -22 11 -16 14 T -4 14 T 8 14 T 20 14 T 30 14" />
      <path d="M-28 20 Q -22 17 -16 20 T -4 20 T 8 20 T 20 20 T 30 20" />
    </g>
  </SealBase>
);

const SealOrganic = () => (
  <SealBase topText="★ PRODUCCIÓ ECOLÒGICA ★" bottomText="★ SENSE ANTIBIÒTICS ★" code="MC · 04" accent="var(--accent-2)">
    <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
      {/* leaf shape */}
      <path d="M0 -22 Q 18 -10 14 8 Q 0 18 -14 8 Q -18 -10 0 -22 Z" fill="var(--accent-2)" stroke="var(--accent-2)" />
      <line x1="0" y1="-22" x2="0" y2="14" stroke="var(--paper)" strokeWidth="1.2" />
      <line x1="0" y1="-10" x2="8" y2="-4" stroke="var(--paper)" strokeWidth="1.2" />
      <line x1="0" y1="-2" x2="-8" y2="4" stroke="var(--paper)" strokeWidth="1.2" />
    </g>
  </SealBase>
);

const SealSelective = () => (
  <SealBase topText="★ CAPTURA SELECTIVA ★" bottomText="★ BAIX IMPACTE ★" code="MC · 05">
    <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
      {/* line and hook */}
      <line x1="0" y1="-22" x2="0" y2="6" />
      <path d="M0 6 Q -8 14 -2 18 Q 6 18 6 10" />
      <polygon points="-10,-8 -2,-12 12,-12 18,-8 12,-4 -2,-4" fill="var(--accent)" stroke="var(--accent)" />
      <circle cx="10" cy="-8" r="1" fill="var(--paper)" stroke="none" />
    </g>
  </SealBase>
);

const SealOrigin = () => (
  <SealBase topText="★ ORIGEN GARANTIT UE ★" bottomText="★ TRAÇABILITAT TOTAL ★" code="MC · 06">
    <g stroke="var(--ink)" strokeWidth="1.4" fill="none">
      {/* document */}
      <polygon points="-18,-20 14,-20 22,-12 22,18 -18,18" fill="var(--paper)" />
      <polyline points="14,-20 14,-12 22,-12" />
      <line x1="-12" y1="-8" x2="16" y2="-8" stroke="var(--ink)" />
      <line x1="-12" y1="-2" x2="16" y2="-2" stroke="var(--ink)" />
      <line x1="-12" y1="4" x2="10" y2="4" stroke="var(--ink)" />
      <rect x="-12" y="10" width="16" height="6" fill="var(--accent)" stroke="var(--accent)" />
    </g>
  </SealBase>
);

const SEALS = {
  msc: SealSustainable,
  asc: SealAquaculture,
  proximitat: SealProximity,
  bio: SealOrganic,
  selectiu: SealSelective,
  origen: SealOrigin,
};

// — Step icons —
const StepIcon = ({ kind }) => {
  const common = { width: 64, height: 64, viewBox: "0 0 64 64", fill: "none", stroke: "var(--accent)", strokeWidth: 1.4 };
  if (kind === "01") return (<svg {...common}><rect x="10" y="14" width="44" height="36" /><line x1="16" y1="22" x2="48" y2="22" /><line x1="16" y1="28" x2="48" y2="28" /><line x1="16" y1="34" x2="40" y2="34" /><line x1="16" y1="40" x2="44" y2="40" /></svg>);
  if (kind === "02") return (<svg {...common}><circle cx="32" cy="32" r="20" /><circle cx="32" cy="32" r="10" /><line x1="12" y1="32" x2="52" y2="32" /><line x1="32" y1="12" x2="32" y2="52" /><circle cx="32" cy="32" r="2" fill="var(--accent)" /></svg>);
  if (kind === "03") return (<svg {...common}><rect x="8" y="14" width="48" height="40" /><line x1="8" y1="24" x2="56" y2="24" /><line x1="20" y1="10" x2="20" y2="18" /><line x1="44" y1="10" x2="44" y2="18" /><rect x="14" y="32" width="6" height="6" fill="var(--accent)" stroke="var(--accent)" /></svg>);
  if (kind === "04") return (<svg {...common}><line x1="32" y1="6" x2="32" y2="36" /><circle cx="32" cy="44" r="8" /><path d="M32 6 L 40 14 L 24 14 Z" fill="var(--accent)" stroke="var(--accent)" /></svg>);
  return null;
};

// — Map of Catalonia (very stylised coastline) —
const CataloniaMap = () => (
  <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
    {/* sea background dotted */}
    <defs>
      <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.4" fill="var(--rule-2)" opacity="0.6" />
      </pattern>
    </defs>
    {/* coastline polygon - stylised */}
    <path d="M0 0 L 100 0 L 100 6 L 80 8 L 76 14 L 80 20 L 82 26 L 78 32 L 76 40 L 74 46 L 70 50 L 64 52 L 58 54 L 54 60 L 50 64 L 42 70 L 38 76 L 32 82 L 28 88 L 24 94 L 18 98 L 0 100 Z" fill="var(--bg-2)" stroke="var(--ink)" strokeWidth="0.3" />
    {/* sea */}
    <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
    {/* parallels */}
    <line x1="0" y1="20" x2="100" y2="20" stroke="var(--rule-2)" strokeWidth="0.2" strokeDasharray="1 2" />
    <line x1="0" y1="40" x2="100" y2="40" stroke="var(--rule-2)" strokeWidth="0.2" strokeDasharray="1 2" />
    <line x1="0" y1="60" x2="100" y2="60" stroke="var(--rule-2)" strokeWidth="0.2" strokeDasharray="1 2" />
    <line x1="0" y1="80" x2="100" y2="80" stroke="var(--rule-2)" strokeWidth="0.2" strokeDasharray="1 2" />
    {/* compass */}
    <g transform="translate(8,90)" stroke="var(--ink)" strokeWidth="0.3" fill="none">
      <circle r="3" />
      <line x1="0" y1="-4" x2="0" y2="4" />
      <line x1="-4" y1="0" x2="4" y2="0" />
      <text y="-5" fontSize="2" textAnchor="middle" fill="var(--ink)" stroke="none" fontFamily="JetBrains Mono, monospace">N</text>
    </g>
    {/* MAR / TERRA labels */}
    <text x="40" y="30" fontSize="3" fill="var(--muted)" stroke="none" fontFamily="JetBrains Mono, monospace" letterSpacing="0.8">MAR MEDITERRÀNIA</text>
    <text x="14" y="40" fontSize="2.5" fill="var(--muted)" stroke="none" fontFamily="JetBrains Mono, monospace" letterSpacing="0.6">CATALUNYA</text>
  </svg>
);

const RecipeArt = ({ idx }) => {
  if (idx === 0) return (
    <svg viewBox="0 0 200 150" stroke="var(--ink)" strokeWidth="1.2" fill="none">
      <rect x="0" y="0" width="200" height="150" fill="var(--bg-2)" />
      {/* plate */}
      <ellipse cx="100" cy="80" rx="74" ry="48" />
      <ellipse cx="100" cy="80" rx="64" ry="40" />
      {/* sardines */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${50 + i * 30}, ${60 + (i % 2) * 24}) rotate(${-15 + i * 12})`}>
          <polygon points="0,0 10,-6 36,-6 44,-2 50,0 44,2 36,6 10,6" fill="var(--accent)" stroke="var(--accent)" />
          <polyline points="44,-2 52,-8 52,8 44,2" fill="var(--accent)" stroke="var(--accent)" />
        </g>
      ))}
      {/* lemon */}
      <circle cx="142" cy="56" r="10" fill="var(--gold)" stroke="var(--ink)" />
      <line x1="132" y1="56" x2="152" y2="56" />
      <line x1="142" y1="46" x2="142" y2="66" />
    </svg>
  );
  if (idx === 1) return (
    <svg viewBox="0 0 200 150" stroke="var(--ink)" strokeWidth="1.2" fill="none">
      <rect x="0" y="0" width="200" height="150" fill="var(--bg-2)" />
      {/* casserole */}
      <ellipse cx="100" cy="86" rx="68" ry="14" />
      <path d="M32 86 L 32 110 Q 100 130 168 110 L 168 86" />
      {/* handle */}
      <line x1="32" y1="92" x2="20" y2="92" strokeWidth="2" />
      <line x1="168" y1="92" x2="180" y2="92" strokeWidth="2" />
      {/* peas */}
      {[60, 80, 100, 120, 140].map((cx, i) => (
        <circle key={i} cx={cx} cy={100 + (i % 2) * 4} r="3.4" fill="var(--accent-2)" stroke="var(--accent-2)" />
      ))}
      {/* sipia */}
      <ellipse cx="100" cy="100" rx="22" ry="8" fill="var(--gold)" stroke="var(--ink)" />
    </svg>
  );
  return (
    <svg viewBox="0 0 200 150" stroke="var(--ink)" strokeWidth="1.2" fill="none">
      <rect x="0" y="0" width="200" height="150" fill="var(--bg-2)" />
      {/* bowl */}
      <ellipse cx="100" cy="78" rx="74" ry="20" />
      <path d="M26 78 L 32 116 Q 100 130 168 116 L 174 78" />
      {/* broth */}
      <ellipse cx="100" cy="80" rx="64" ry="14" fill="var(--accent)" opacity="0.85" stroke="none" />
      {/* fish chunks */}
      <polygon points="60,76 72,68 92,68 100,76 92,84 72,84" fill="var(--paper)" stroke="var(--ink)" />
      <polygon points="108,82 120,74 138,74 146,82 138,90 120,90" fill="var(--paper)" stroke="var(--ink)" />
      {/* potato */}
      <ellipse cx="130" cy="72" rx="10" ry="6" fill="var(--gold)" stroke="var(--ink)" />
    </svg>
  );
};

Object.assign(window, {
  FishGeneric, FishHero, FishSardina, FishTonyina, FishAnguila, Pop, Musclo,
  SEALS, StepIcon, CataloniaMap, RecipeArt,
});
