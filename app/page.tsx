const checkout = {
  starter: "https://pay.hotmart.com/P106001411X?off=truzp9k2&checkoutMode=10",
  premium: "https://pay.hotmart.com/P106001411X?off=019uhvd0&checkoutMode=10",
};

const benefits = [
  ["Empieza desde cero", "Aprende preparación, esterilización, envasado y conservación paso a paso."],
  ["100+ recetas rentables", "Opciones variadas para preparar en casa, regalar o convertir en productos para vender."],
  ["30 recetas para comenzar", "Una selección práctica para dar tus primeros pasos sin sentirte abrumada."],
  ["Calcula cada precio", "Conoce tus costos, define el margen y cobra lo justo por cada frasco."],
  ["Conserva con seguridad", "Almacenamiento, tiempos, etiquetas y cuidados para proteger cada preparación."],
  ["Convierte frascos en ingresos", "Organiza tu producción y crea una oferta artesanal con potencial de ganancia."],
];

const modules = [
  ["I", "Fundamentos", "Preparación paso a paso"],
  ["II", "Esterilización", "Frascos y utensilios"],
  ["III", "100+ recetas", "Dulces, saladas y especiales"],
  ["IV", "Pimentones y ajíes", "Sabores artesanales"],
  ["V", "Costos y precios", "Vende con margen"],
  ["VI", "Almacenamiento", "Conserva por más tiempo"],
];

const deliverables = [
  "Guía Completa de Conservas Caseras",
  "Más de 100 recetas rentables",
  "30 recetas seleccionadas para comenzar",
  "Conservas Caseras Especiales",
  "Recetas de pimentones y ajíes artesanales",
  "Recetas variadas para preparar en casa o vender",
  "Guía de Almacenamiento y Conservación",
  "Manual de etiquetas listas para conservas",
  "Guía de esterilización de frascos",
  "Cómo calcular el precio de cada conserva",
  "Cómo vender mermeladas y conservas",
  "Guía de ventas para conservas artesanales",
  "Guía de precios y ganancias",
];

const bonuses = [
  { title: "Consejos para conservar mejor tus productos", label: "BONO 01", description: "Cuidados simples para mantener sabor, textura y calidad por más tiempo." },
  { title: "Tabla de Costos y Precios de Venta", label: "BONO 02", description: "Una herramienta práctica para calcular inversión, margen y precio final." },
  { title: "Guía Ganancias en un Frasco", label: "BONO 03", description: "Pasos para convertir tus recetas artesanales en una fuente de ingresos." },
];

const faqs = [
  ["¿Necesito experiencia previa?", "No. La guía comienza desde los fundamentos y explica cada proceso paso a paso, con un lenguaje sencillo."],
  ["¿Qué tipos de conservas voy a aprender?", "Encontrarás recetas dulces, saladas, encurtidos, mermeladas, pimentones, ajíes y preparaciones especiales."],
  ["¿Puedo usar las recetas para vender?", "Sí. El material incluye recetas rentables, tabla de costos, cálculo de precios y guías para organizar tus ventas."],
  ["¿Cómo recibo el material?", "Después de la confirmación del pago, recibes acceso digital al material para consultarlo desde tu celular o computadora."],
  ["¿El acceso vence?", "No. El acceso al material es de por vida para que avances a tu ritmo y vuelvas a consultarlo cuando quieras."],
  ["¿Qué pasa si no es para mí?", "Tu compra está protegida por una garantía de 30 días. Puedes solicitar el reembolso dentro de ese período."],
];

function ArrowButton({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={href}><span>{children}</span><b aria-hidden="true">→</b></a>;
}

function ProductVisual() {
  return <div className="product-visual" aria-label="Colección digital Conservas Caseras">
    <div className="visual-backdrop" />
    <div className="book-stack">
      <div className="guide-card guide-card-back"><span>100+</span><b>RECETAS RENTABLES</b></div>
      <div className="guide-card guide-card-main"><small>GUÍA COMPLETA</small><strong>Conservas<br/><em>Caseras</em></strong><p>Prepara · Conserva · Vende</p></div>
    </div>
    <div className="jar"><div className="jar-lid"/><div className="jar-body"><i/><i/><i/><i/></div><span>ARTESANAL</span></div>
    <div className="seal"><i>incluye</i><strong>13</strong><span>guías</span></div>
    <p>Fig. 01 — colección completa</p>
  </div>;
}

export default function Home() {
  const ticker = ["Edición limitada · oferta válida solo por hoy", "Acceso de por vida", "+100 recetas rentables", "Garantía de 30 días", "Entrega digital inmediata"];
  return <main>
    <div className="ticker" aria-label="Información de la oferta"><div>{[...ticker, ...ticker, ...ticker].map((item, i) => <span key={i} aria-hidden={i >= ticker.length}><i>✦</i>{item}</span>)}</div></div>

    <section className="hero paper"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Guías + recetas + herramientas de venta</p>
        <h1>Conservas<br/><em>caseras</em> <mark>para</mark><br/>crear y vender.</h1>
        <p className="hero-lead">De tu cocina al primer frasco rentable.</p>
        <div className="mobile-hero-media"><ProductVisual /></div>
        <div className="hero-action"><ArrowButton href="#ofertas">Quiero el material completo</ArrowButton><div className="price"><del>$29</del><strong>$6.50</strong><small>solo hoy</small></div></div>
        <p className="hero-detail">Aprende a preparar conservas artesanales con <strong>más de 100 recetas rentables</strong>, técnicas de almacenamiento y herramientas para calcular costos y vender con ganancia.</p>
        <div className="trust"><span>♢ Pago seguro</span><span>↻ Garantía de 30 días</span><span>∞ Acceso de por vida</span></div>
      </div>
      <div className="desktop-hero-media"><ProductVisual /></div>
    </div></section>

    <section className="benefits paper section"><div className="container"><h2>Todo lo que necesitas para pasar de la receta al <em>frasco terminado.</em></h2><div className="benefit-grid">{benefits.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="dark-section section paper"><div className="container split">
      <div className="feature-image jar-showcase"><div/><div className="shelf-jars" aria-hidden="true"><span className="preserve red"/><span className="preserve gold"/><span className="preserve green"/></div></div>
      <div><p className="eyebrow warm">Una habilidad que se disfruta y se vende</p><h2>Transforma ingredientes simples en <em>productos con valor.</em></h2><p className="intro">Domina cada parte del proceso: desde esterilizar el frasco hasta calcular cuánto cobrar por tu conserva terminada.</p><ul className="editorial-list">{["Preparación y esterilización explicadas paso a paso", "Más de 100 recetas dulces, saladas y especiales", "30 recetas seleccionadas para empezar con confianza", "Pimentones, ajíes y sabores artesanales", "Etiquetas, almacenamiento y conservación", "Costos, precios, ventas y margen de ganancia"].map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul><ArrowButton href="#ofertas" light>Quiero aprender</ArrowButton></div>
    </div></section>

    <section className="chapters paper section"><div className="container"><div className="section-heading"><h2>Un método completo en <em>seis áreas clave.</em></h2><p>No es solo un recetario. Es una colección práctica para preparar, conservar, calcular y vender productos artesanales desde casa.</p></div><div className="chapter-grid">{modules.map(([num, title, subtitle]) => <article key={num}><span>Mód. {num}</span><h3>{title}</h3><p>{subtitle}</p></article>)}</div><div className="gallery-heading"><h3>Todo lo que recibes.</h3><span>Colección digital · 13 guías</span></div><div className="deliverables-grid">{deliverables.map((item, i) => <article key={item}><span>{String(i + 1).padStart(2, "0")}</span><div className="mini-cover"><small>CONSERVAS</small><b>{item}</b></div><p>PDF digital</p></article>)}</div></div></section>

    <section className="bonus section paper"><div className="container"><p className="eyebrow">Bonos incluidos</p><h2>Más herramientas para <em>conservar y vender mejor.</em></h2><div className="bonus-grid">{bonuses.map((bonus) => <article key={bonus.title}><header><span>{bonus.label}</span><b>Incluido</b></header><div className="bonus-symbol">✦</div><h3>{bonus.title}</h3><p>{bonus.description}</p><footer><span>Acceso</span><strong>De por vida</strong></footer></article>)}</div><p className="fine-print">Todos los materiales son digitales y estarán disponibles después de la confirmación del pago.</p></div></section>

    <section className="pricing section paper" id="ofertas"><div className="container"><div className="center-heading"><p className="eyebrow">Elige tu edición</p><h2>Empieza tu colección hoy.</h2><p>Un solo pago, acceso de por vida y 30 días de garantía.</p></div><div className="pricing-grid">
      <Offer title="Guía Esencial de Conservas" price="$6.50" oldPrice="$29" href={checkout.starter} features={["Guía completa paso a paso", "100+ recetas rentables", "30 recetas para comenzar", "Conservas especiales", "Almacenamiento y conservación"]}/>
      <Offer title="Colección Conservas Rentables" price="$9.00" oldPrice="$49" href={checkout.premium} featured features={["Todo el material de recetas", "Pimentones y ajíes artesanales", "Tabla de costos y precios", "Guías de ventas y ganancias", "Consejos de conservación", "Acceso de por vida"]}/>
    </div></div></section>

    <section className="testimonials section paper"><div className="container"><h2>Una colección pensada para que puedas <em>hacerlo de verdad.</em></h2><div className="promise-grid"><article><span>01</span><h3>Aprende</h3><p>Sigue procesos claros para preparar y esterilizar correctamente.</p></article><article><span>02</span><h3>Practica</h3><p>Elige entre más de 100 recetas y comienza con una selección de 30.</p></article><article><span>03</span><h3>Calcula</h3><p>Define costos, precios y márgenes antes de ofrecer tus productos.</p></article><article><span>04</span><h3>Vende</h3><p>Presenta tus frascos artesanales con orden, seguridad y confianza.</p></article></div><div className="center-action"><ArrowButton href="#ofertas">Quiero mis guías</ArrowButton></div></div></section>

    <section className="faq section paper"><div className="narrow"><p className="eyebrow">Antes de empezar</p><h2>Preguntas <em>frecuentes.</em></h2><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question}><summary><span>{String(i + 1).padStart(2, "0")}</span><strong>{question}</strong><b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div></div></section>

    <footer className="site-footer paper"><div className="container"><div className="footer-grid"><h2>Conservas<br/><em>caseras</em> <mark>rentables</mark><br/>desde casa.</h2><div><span>La colección</span><p>Recetas, conservación, costos, precios y ventas reunidos en un solo material digital.</p></div><div><span>Acceso</span><p>Entrega digital inmediata. Tuyo para siempre, con garantía de devolución de 30 días.</p></div></div><div className="footer-bottom"><span>© 2026 · Todos los derechos reservados</span><span>Prepara · Conserva · Emprende</span></div></div></footer>
  </main>;
}

function Offer({ title, price, oldPrice, href, features, featured = false }: { title: string; price: string; oldPrice: string; href: string; features: string[]; featured?: boolean }) {
  return <article className={`offer ${featured ? "featured" : ""}`}>{featured && <b className="popular">Más completo</b>}<span className="eyebrow">{featured ? "Edición para vender" : "Edición inicial"}</span><h3>{title}</h3><ul>{features.map(item => <li key={item}><i>{featured ? "✦" : "—"}</i>{item}</li>)}</ul><div className="offer-bottom"><div><del>{oldPrice}</del><strong>{price}</strong><small>pago único</small></div><a href={href}>Quiero el material <b aria-hidden="true">→</b></a><p>Pago seguro · Garantía de 30 días</p></div></article>;
}
