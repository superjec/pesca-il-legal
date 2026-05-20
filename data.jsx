// ─────────────────────────────────────────────────────────────
// DATA — contingut educatiu sobre consum responsable de peix
// ─────────────────────────────────────────────────────────────
// Tots els segells representats són dissenys ORIGINALS d'aquest
// projecte ("Mar Comú"). Els noms genèrics de certificacions
// reals (MSC, ASC, Pesca de Proximitat, ecològic UE) es citen
// com a referència nominal — sense reproduir-ne els logotips.

const HERO_STATS = [
  { num: "1 de 5", label: "peixos capturats al món prové de pesca il·legal, no declarada o no reglamentada.", src: "FAO 2022" },
  { num: "34%", label: "de les poblacions pesqueres mundials estan sobreexplotades.", src: "FAO SOFIA 2024" },
  { num: "€10.000M", label: "de pèrdues anuals globals atribuïdes a la pesca il·legal.", src: "Europol estimació" },
  { num: "27 kg", label: "de peix consumeix de mitjana cada persona a l'Estat espanyol cada any.", src: "MAPA 2023" },
];

const CERTIFICATIONS = [
  {
    id: "msc",
    name: "Segell blau de pesca sostenible",
    refersTo: "Inspirat en el principi del MSC",
    tag: "Pesca extractiva · Mar obert",
    issued: "Vigent · Auditoria triennal",
    desc: "Acredita que el peix prové d'una pesqueria avaluada per un organisme independent segons criteris d'estoc saludable, mínim impacte sobre l'ecosistema i gestió eficaç.",
    extra: "Un dels més estesos a supermercats i grans superfícies. Es renova cada tres anys amb auditoria externa.",
    criteria: [
      "L'estoc es manté en nivells productius",
      "Es minimitza l'impacte ambiental sobre l'hàbitat i altres espècies",
      "Sistema de gestió actiu que respon a canvis",
      "Traçabilitat verificada de captura a comerç",
    ],
  },
  {
    id: "asc",
    name: "Aqüicultura responsable",
    refersTo: "Equivalent al concepte ASC",
    tag: "Aqüicultura · Piscifactories",
    issued: "Vigent · Auditoria anual",
    desc: "Certifica granges marines i piscifactories que limiten el seu impacte ambiental, controlen l'ús d'antibiòtics i garanteixen condicions laborals dignes.",
    extra: "Important per al consum responsable de salmó, llobarro, orada i lluç de cultiu.",
    criteria: [
      "Aigües residuals i química controlades",
      "Origen sostenible de pinso (sense pesca farratgera abusiva)",
      "Benestar animal i densitat limitada",
      "Drets laborals i comunitat local",
    ],
  },
  {
    id: "proximitat",
    name: "Pesca de Proximitat",
    refersTo: "Distintiu de la Generalitat de Catalunya",
    tag: "Catalunya · Flota artesanal",
    issued: "Vigent · Llei 2/2010",
    desc: "Identifica el peix venut a la mateixa llotja on s'ha desembarcat, en menys de 24 hores des de la captura. Garanteix traçabilitat curta i suport a la flota artesanal catalana.",
    extra: "Busca'l a peixateries de barri, llotges i alguns supermercats catalans.",
    criteria: [
      "Venda directa a llotja del port",
      "Menys de 24 hores des de la captura",
      "Embarcacions de l'arc català",
      "Etiqueta amb codi de llotja i barca",
    ],
  },
  {
    id: "bio",
    name: "Producció Ecològica",
    refersTo: "Reglament UE 2018/848",
    tag: "Aqüicultura ecològica · UE",
    issued: "Eurofulla · Vigent",
    desc: "Aplicat a l'aqüicultura ecològica: pinso d'origen biològic, densitats baixes, sense antibiòtics preventius ni OGM, i ús d'energies renovables a la granja.",
    extra: "L'Eurofulla verda apareix obligatòriament en tot producte ecològic certificat de la UE.",
    criteria: [
      "Pinso 100% d'origen ecològic o sostenible",
      "Prohibició d'antibiòtics preventius",
      "Densitat de cultiu limitada per espècie",
      "Energia renovable i mínim residu",
    ],
  },
  {
    id: "selectiu",
    name: "Captura selectiva",
    refersTo: "Bones pràctiques recomanades",
    tag: "Mètode de pesca · Baix impacte",
    issued: "Cooperatives i confraries",
    desc: "Reconeix arts de pesca que minimitzen la captura accessòria (bycatch): palangres horitzontals, encerclament selectiu, nansa, volantí i pesca a línia individual.",
    extra: "Pregunta a la peixateria pel mètode: si és «d'art» o «de línia», és bon senyal.",
    criteria: [
      "Bycatch inferior al 5% per pesquera",
      "Arts no contactants amb el fons marí",
      "Talla mínima respectada",
      "Devolució viva d'espècies no objectiu",
    ],
  },
  {
    id: "origen",
    name: "Origen i traçabilitat UE",
    refersTo: "Reglament UE 1379/2013",
    tag: "Etiquetatge obligatori",
    issued: "Norma vigent · Tot peix",
    desc: "No és un segell premium sinó l'etiqueta mínima legal: nom comercial i científic, mètode de producció (capturat / cultivat), zona FAO de captura i art de pesca.",
    extra: "Si falta algun d'aquests camps, no compris. És un dret del consumidor.",
    criteria: [
      "Nom comercial i científic clars",
      "Zona FAO i subzona indicades",
      "Mètode de producció especificat",
      "Art de pesca o sistema de cultiu",
    ],
  },
];

const STEPS = [
  { n: "01", title: "Llegeix l'etiqueta", body: "Tot peix ven a la UE ha de portar nom científic, zona FAO de captura i mètode. Si falta alguna dada, no és bon senyal." },
  { n: "02", title: "Mira la zona FAO", body: "27 = Atlàntic Nord-est. 37 = Mediterrani i Mar Negre. Tria proximitat i evita zones sobreexplotades." },
  { n: "03", title: "Respecta la temporada", body: "Hi ha mesos en què cada espècie es reprodueix. Consumir-la fora d'època compromet la població futura." },
  { n: "04", title: "Demana l'art de pesca", body: "Art menor, palangre, nansa o línia tenen menys impacte que arrossegament o encerclament massiu." },
];

const CALENDAR_SPECIES = [
  // 1=peak, 0=good, -1=avoid (reproduction/closed season), null=neutral
  { name: "Anxova",     lat: "Engraulis encrasicolus", months: [null,null,0,0,1,1,1,0,-1,-1,null,null] },
  { name: "Sardina",    lat: "Sardina pilchardus",     months: [-1,-1,null,null,1,1,1,1,1,0,0,null] },
  { name: "Verat",      lat: "Scomber scombrus",       months: [1,1,1,0,null,-1,-1,null,0,1,1,1] },
  { name: "Llobarro",   lat: "Dicentrarchus labrax",   months: [-1,-1,0,1,1,1,0,0,1,1,1,0] },
  { name: "Sorell",     lat: "Trachurus trachurus",    months: [0,0,1,1,1,1,0,0,1,1,1,0] },
  { name: "Moll roquer",lat: "Mullus surmuletus",      months: [0,0,0,1,1,1,1,1,1,0,0,0] },
  { name: "Sípia",      lat: "Sepia officinalis",      months: [1,1,1,0,-1,-1,null,null,0,1,1,1] },
  { name: "Pop roquer", lat: "Octopus vulgaris",       months: [null,null,1,1,0,0,0,0,1,1,1,null] },
];

const MONTHS = ["Gen","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Oct","Nov","Des"];

const COMPARE_GOOD = [
  { name: "Sardina",       lat: "Sardina pilchardus",     score: "A+", why: "Peix petit i pelàgic, ric en omega-3, amb cicle reproductiu curt i estoc mediterrani estable si es respecta la veda hivernal." },
  { name: "Verat",         lat: "Scomber scombrus",       score: "A",  why: "Pesquera ben gestionada a l'Atlàntic Nord-est, captura amb encerclament selectiu i molt assequible." },
  { name: "Anxova del Cantàbric", lat: "Engraulis encrasicolus", score: "A",  why: "Després de la moratòria 2005-2010, els estocs s'han recuperat amb gestió estricta de quotes." },
  { name: "Musclo de roca",lat: "Mytilus galloprovincialis", score: "A+", why: "Cultiu filtrador que millora la qualitat de l'aigua. Petjada de carboni gairebé inexistent." },
  { name: "Tonyina llistada",lat: "Katsuwonus pelamis",  score: "B+", why: "Alternativa més sostenible a la tonyina vermella si està pescada amb canya i no amb encerclament FAD." },
];

const COMPARE_BAD = [
  { name: "Tonyina vermella", lat: "Thunnus thynnus",      score: "C",  why: "Sobreexplotada durant dècades; només sostenible si prové de quota ICCAT estricta amb traçabilitat completa." },
  { name: "Salmó atlàntic salvatge", lat: "Salmo salar",   score: "D",  why: "Pràcticament desaparegut. Pràcticament tot el salmó al supermercat és de granja — comprova certificació." },
  { name: "Anguila europea", lat: "Anguilla anguilla",     score: "F",  why: "En perill crític d'extinció. Comerç internacional restringit per CITES. Evitar." },
  { name: "Lluç del Cap",    lat: "Merluccius capensis",   score: "C-", why: "Algunes pesqueres sobreexplotades a Sud-àfrica. Tria lluç de palangre certificat o lluç de la mar dels nostres." },
  { name: "Gamba vermella d'arrossegament", lat: "Aristaeomorpha foliacea", score: "D", why: "L'arrossegament a gran profunditat destrueix hàbitats fràgils. Tria gamba de Palamós o Vilanova de petites embarcacions." },
];

const PORTS = [
  // x/y in 0-100 over a stylised map of Catalonia coastline
  { id: "rosesa", x: 78, y: 12, name: "Roses",         coords: "42.27°N · 3.18°E", desc: "Llotja referent de l'anxova de l'Empordà i la sípia de la badia. Subhasta diària a les 16 h.",
    species: ["Anxova","Sípia","Sardina","Moll"] },
  { id: "palamos", x: 82, y: 26, name: "Palamós",      coords: "41.85°N · 3.13°E", desc: "Cèlebre per la gamba vermella, capturada per la petita flota d'arrossegament local amb veda anual a l'hivern.",
    species: ["Gamba","Lluç","Cap-roig","Polp"] },
  { id: "blanes", x: 80, y: 36, name: "Blanes",        coords: "41.67°N · 2.79°E", desc: "Confraria amb forta tradició de pesca artesanal d'arts menors: trasmall, palangre i nansa.",
    species: ["Llobarro","Sípia","Bonítol","Llagostí"] },
  { id: "arenys", x: 74, y: 46, name: "Arenys de Mar", coords: "41.58°N · 2.54°E", desc: "Una de les llotges més actives del Maresme. Coneguda per la sardina i el verat de proximitat.",
    species: ["Sardina","Verat","Sorell","Moll"] },
  { id: "barceloneta", x: 60, y: 54, name: "Barcelona",coords: "41.37°N · 2.18°E", desc: "Antic port pesquer urbà; manté la confraria amb desembarcaments diaris al moll del Rellotge.",
    species: ["Pop","Lluç","Maire","Galera"] },
  { id: "vilanova", x: 54, y: 62, name: "Vilanova i la G.", coords: "41.21°N · 1.72°E", desc: "Port arrossegador i d'encerclament. La seva flota proveeix bona part del peix blau del litoral central.",
    species: ["Seitó","Sardina","Verat","Gamba"] },
  { id: "cambrils", x: 38, y: 78, name: "Cambrils",    coords: "41.06°N · 1.05°E", desc: "Especialitzat en peix de roca i marisc. Pesca amb arts menors històricament associada al galip-galop.",
    species: ["Llagostí","Cigala","Galera","Rap"] },
  { id: "ametlla", x: 28, y: 90, name: "L'Ametlla de Mar", coords: "40.88°N · 0.80°E", desc: "Port amb fort component d'aqüicultura responsable de tonyina i d'arts artesanals com l'almadrava.",
    species: ["Tonyina","Sípia","Moll","Pagell"] },
];

const QUIZ = [
  {
    q: "Trobes a la peixateria un salmó sense indicació d'origen ni mètode. Què fas?",
    options: [
      { text: "El compro: el preu és bo.", correct: false },
      { text: "Pregunto al venedor i si no ho sap, no el compro.", correct: true },
      { text: "El compro però amb desconfiança." , correct: false },
      { text: "Compro el doble per estalviar viatges.", correct: false },
    ],
    explain: "La normativa UE (1379/2013) obliga a indicar nom científic, zona FAO i mètode de producció. Si la informació no és visible o ningú la sap, el peix no compleix el requisit mínim legal."
  },
  {
    q: "Quina espècie té un cicle reproductiu més robust per a un consum més freqüent?",
    options: [
      { text: <span style={{ color: "rgb(255, 249, 249)" }}>Tonyina vermella.</span>, correct: false },
      { text: "Anguila.", correct: false },
      { text: "Sardina del Mediterrani.", correct: true },
      { text: "Bacallà de l'Atlàntic Nord.", correct: false },
    ],
    explain: "Les espècies petites i pelàgiques com la sardina, el seitó o el verat tenen cicles reproductius curts i una alta capacitat de regeneració. Tonyina, anguila i bacallà són espècies de creixement lent i amb estocs vulnerables."
  },
  {
    q: "Què vol dir «FAO 27» en una etiqueta?",
    options: [
      { text: "Que el peix té 27 dies de vida.", correct: false },
      { text: "Que ve de la zona FAO Atlàntic Nord-est.", correct: true },
      { text: "Que pesa 27 grams.", correct: false },
      { text: "Que té certificat 27% ecològic.", correct: false },
    ],
    explain: "La FAO divideix els oceans en zones numerades. La 27 és l'Atlàntic Nord-est, la 37 el Mediterrani i Mar Negre. És un indicador clau d'origen i sostenibilitat."
  },
  {
    q: "Estàs al restaurant i a la carta hi ha «llobarro salvatge» al maig. Què és més probable?",
    options: [
      { text: "És de pesca local justa.", correct: false },
      { text: "Està en plena temporada.", correct: false },
      { text: "Pot ser un cas de pesca durant la veda reproductiva.", correct: true },
      { text: "És congelat de l'any passat.", correct: false },
    ],
    explain: "El llobarro es reprodueix entre gener i març al Mediterrani. Capturar-lo fora de granja durant aquest període compromet la població futura. Pregunta sempre si és de cultiu o salvatge i d'on prové."
  },
  {
    q: "Com identifiques peix de proximitat real a Catalunya?",
    options: [
      { text: "Si la peixateria és gran i moderna.", correct: false },
      { text: "Pel distintiu groc «Pesca de Proximitat» i el codi de llotja.", correct: true },
      { text: "Si el preu és més alt que la mitjana.", correct: false },
      { text: "Per la mida del peix.", correct: false },
    ],
    explain: "El distintiu «Pesca de Proximitat» de la Generalitat garanteix venda a llotja en menys de 24 h des de la captura, amb codi de barca i llotja visibles."
  },
];

const SHOPPING_TIPS = [
  {
    num: "01",
    title: "A la peixateria",
    body: "Demana sempre l'origen i el mètode de pesca, encara que no aparegui escrit. Un bon professional ho sap o ho consulta.",
    items: ["Mira els ulls: brillants i transparents", "Olor a mar net, mai amoniacal", "Carn ferma que torna a la posició", "Brànquies vermelloses, mai grises"],
  },
  {
    num: "02",
    title: "Al supermercat",
    body: "L'etiqueta és obligatòria. Si està incompleta, és un senyal d'alarma i tens dret a demanar la informació.",
    items: ["Nom comercial + científic", "Zona FAO de captura", "Art de pesca o cultiu", "Data d'envasament i lot"],
  },
  {
    num: "03",
    title: "Tria intel·ligent",
    body: "No tot el peix és igual de sostenible. Aplica la regla de 3: petit, local, de temporada.",
    items: ["Petit (peix blau abans que gros)", "Local (zona 37.1.1 abans que 27)", "De temporada (consulta el calendari)", "Sencer abans que filet"],
  },
];

const RECIPES = [
  { title: "Sardines a la planxa amb llimona i timó", time: "20 min", level: "Bàsic", desc: "El plat més senzill i un dels més sostenibles. Acompanya amb pa torrat fregat amb tomàquet madur.", color: "var(--accent-2)" },
  { title: "Sípia amb pèsols del Maresme", time: "45 min", level: "Mitjà",  desc: "Recepta de tardor amb sípia de Roses o Palamós i pèsols de proximitat. Cuina lenta amb ceba caramel·litzada.", color: "var(--gold)" },
  { title: "Suquet de peix blau del dia",  time: "60 min", level: "Mitjà", desc: "Versió mariner del suquet amb les espècies que tingui la llotja: verat, sorell o moll. Patata, all i pa fregit.", color: "var(--accent)" },
];

const PLEDGE_ITEMS = [
  "Compraré peix de temporada com a opció per defecte.",
  "Demanaré sempre l'origen i el mètode de captura.",
  "Variaré les espècies: triaré peix blau i menyspreat abans que grans depredadors.",
  "Recolzaré la flota artesanal i les peixateries de proximitat.",
  "Aprendré a llegir les etiquetes i a reconèixer els segells de qualitat.",
];

Object.assign(window, {
  HERO_STATS, CERTIFICATIONS, STEPS, CALENDAR_SPECIES, MONTHS,
  COMPARE_GOOD, COMPARE_BAD, PORTS, QUIZ, SHOPPING_TIPS, RECIPES, PLEDGE_ITEMS,
});
