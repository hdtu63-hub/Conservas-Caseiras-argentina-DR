const checkout = {
  starter: "https://pay.hotmart.com/P106001411X?off=truzp9k2&checkoutMode=10",
  premium: "https://pay.hotmart.com/P106001411X?off=019uhvd0&checkoutMode=10",
};

const benefits = [
  ["Cocina una vez, come toda la semana", "Una tarde de domingo = comida rica de lunes a viernes sin estresarte."],
  ["100+ recetas", "Aptas para congelar, sin texturas raras y sin sacrificar lo nutritivo."],
  ["Calorías + macros", "Cada receta trae los números, las porciones y el rendimiento ya calculados."],
  ["Sin gluten + sin lácteos", "Bien marcaditas para que escojas rápido sin pensarlo tanto."],
  ["Guía de empacado", "Los recipientes correctos, etiquetas y trucos de almacenamiento, nivel pro y súper fácil."],
  ["Menos desperdicio, más plata en el bolsillo", "Planeación inteligente que te ahorra tiempo y dinero en el mercado."],
];

const chapters = [
  ["I", "Pollo y carne", "Alto en proteína"],
  ["II", "Pescado y mariscos", "Bajos en calorías"],
  ["III", "Acompañamientos", "Saluditos"],
  ["IV", "Snacks y picaditas", "Coge y come"],
  ["V", "Salsas y aliños", "Bombas de sabor"],
  ["VI", "Postres fit", "Sin culpa"],
];

const gallery = [
  "https://i.ibb.co/99QZWhwY/receitas-saudaveis-para-congelar.png",
  "https://i.ibb.co/YB4xqwRB/receitas-saudaveis-para-congelar-11.png",
  "https://i.ibb.co/m5GZ44gw/receitas-saudaveis-para-congelar-10.png",
  "https://i.ibb.co/G3MFN496/receitas-saudaveis-para-congelar-09.png",
  "https://i.ibb.co/mFghrhgS/receitas-saudaveis-para-congelar-08.png",
  "https://i.ibb.co/nM05GLW6/receitas-saudaveis-para-congelar-07.png",
  "https://i.ibb.co/mVMRNFnD/receitas-saudaveis-para-congelar-06.png",
  "https://i.ibb.co/JFtmzWcV/receitas-saudaveis-para-congelar-05.png",
  "https://i.ibb.co/r22DGNmF/receitas-saudaveis-para-congelar-04.png",
  "https://i.ibb.co/KpkJbfXP/receitas-saudaveis-para-congelar-03.png",
  "https://i.ibb.co/Gvj3Dgwy/receitas-saudaveis-para-congelar-02.png",
  "https://i.ibb.co/gZ21bfCB/receitas-saudaveis-para-congelar-01.png",
];

const bonuses = [
  {
    title: "Plan Inteligente de Meal Prep",
    image: "https://i.ibb.co/3mYyJwDg/marmitas-Me-dia.jpg",
    value: "$19",
    items: ["4 menús listos para copiar", "Más de 30 días de comidas ya planeadas", "Lista de mercado sin desperdicio"],
  },
  {
    title: "Menús Semanales Hechos Para Ti",
    image: "https://i.ibb.co/bjrM7hZp/cardapios-Me-dia.jpg",
    value: "$14",
    items: ["Semanas temáticas ya planeadas", "Comidas balanceadas", "Imprímelo o guárdalo en el celular"],
  },
  {
    title: "Guía de Organización del Congelador",
    image: "https://i.ibb.co/LXpbSLBb/organizacao-freezer-Me-dia.jpg",
    value: "$12",
    items: ["Trucos de almacenamiento nivel pro", "Etiquetas y control de fechas", "Lista de recipientes que sí vas a usar"],
  },
];

const testimonials = [
  ["Carolina Méndez", "Bogotá · Cundinamarca", "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200", "Hice el pollo al limón, lo congelé y nos rindió toda la semana. Sabía como si lo acabara de cocinar, nada de comida de congelador."],
  ["Paula Santos", "Medellín · Antioquia", "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200", "El plan de meal prep literalmente me cambió la vida. Llego del trabajo y la comida ya está lista. Cero estrés."],
  ["Mariana Castro", "Cali · Valle del Cauca", "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200", "Yo de cocina nada, pero las recetas son a prueba de bobos. Saqué toda la semana en una tarde de domingo."],
  ["Julia Olivera", "Barranquilla · Atlántico", "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200", "No he botado comida ni una sola vez desde que lo compré. Solo con la lista de mercado me ahorré un montón este mes."],
  ["Fernanda Lima", "Cartagena · Bolívar", "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200", "Soy intolerante a la lactosa y tener las etiquetas sin lácteos ahí mismo me hace la vida muchísimo más fácil."],
  ["Beatriz Álvarez", "Bucaramanga · Santander", "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200", "Bajé casi 4 kilos en un mes comiendo estas comidas. Saludable, fácil y de verdad muy ricas."],
];

const faqs = [
  ["¿Cómo recibo las recetas?", "Apenas se confirma tu pago, las recetas te llegan al correo. Es 100% digital, con entrega inmediata y acceso para siempre."],
  ["¿Tengo que saber cocinar?", "Para nada. Están hechas para mamás ocupadas, sin tiempo y sin experiencia en la cocina. Pasos súper sencillos, sin palabras raras de chef."],
  ["¿Las recetas sirven para dietas?", "Sí. Cada receta trae calorías y macros, y hay opciones bajas en carbohidratos, sin gluten y sin lácteos bien marcaditas."],
  ["¿Necesito utensilios especiales?", "Para nada. Todo funciona con lo que ya tienes en la cocina. La guía muestra cositas útiles, pero no necesitas comprar nada para empezar."],
  ["¿Cuánto duran las comidas en el congelador?", "Cada receta te dice exactamente cuánto se conserva, normalmente entre 30 y 90 días, y la mejor forma de descongelarla."],
  ["¿Y si no me gusta?", "Tienes 30 días de garantía. Si no te encantó, solicitas el reembolso por la plataforma de pago y te devolvemos el 100% de tu dinero."],
];

function ArrowButton({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={href}><span>{children}</span><b aria-hidden="true">→</b></a>;
}

export default function Home() {
  const ticker = ["Edición limitada · oferta válida solo por hoy", "Tuyo para siempre", "+100 recetas", "Garantía de 30 días", "Entrega digital inmediata"];
  return (
    <main>
      <div className="ticker" aria-label="Información de la oferta"><div>{[...ticker, ...ticker, ...ticker].map((item, i) => <span key={i} aria-hidden={i >= ticker.length}><i>✦</i>{item}</span>)}</div></div>

      <section className="hero paper">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">E-book + guías prácticas</p>
            <h1>Recetas<br/><em>saludables</em> <mark>para</mark><br/>congelar.</h1>
            <p className="hero-lead">No más cocinar desde cero todas las noches.</p>
            <div className="mobile-hero-media"><HeroImage /></div>
            <div className="hero-action"><ArrowButton href="#ofertas">Quiero las recetas</ArrowButton><div className="price"><del>$29</del><strong>$6.50</strong><small>solo hoy</small></div></div>
            <p className="hero-detail">Más de <strong>100 recetas</strong> que cocinas una vez, congelas y disfrutas toda la semana: ricas de verdad, nada de comida triste en tupper.</p>
            <div className="trust"><span>♢ Pago seguro</span><span>↻ Garantía de 30 días</span><span>∞ Tuyo para siempre</span></div>
          </div>
          <div className="desktop-hero-media"><HeroImage /></div>
        </div>
      </section>

      <section className="benefits paper section"><div className="container"><h2>Una cocina que <em>trabaja a tu favor</em> — no en tu contra.</h2><div className="benefit-grid">{benefits.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="dark-section section paper"><div className="container split"><div className="feature-image"><div/><img src="https://i.ibb.co/b5kfgWGx/PETIT-GATEAU-1.png" alt="Postre saludable listo para congelar" loading="lazy" /></div><div><p className="eyebrow warm">Sabor de verdad</p><h2>Las comidas congeladas no tienen que ser <em>aburridas.</em></h2><p className="intro">Con los trucos correctos, tu comida sale del congelador como si la acabaras de hacer.</p><ul className="editorial-list">{["Pollo al limón con hierbas, jugosito después de descongelar", "Snacks y postres fit ya porcionados", "Pescado al horno con hierbas, cargado de omega-3", "Carne molida sazonada para salvar cualquier cena", "Acompañamientos que conservan color, textura y sabor", "Sopas reconfortantes para esos días en que no puedes con la vida"].map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul><ArrowButton href="#ofertas" light>Lo quiero ya</ArrowButton></div></div></section>

      <section className="chapters paper section"><div className="container"><div className="section-heading"><h2>Seis <em>capítulos</em> dentro del libro.</h2><p>Cenas entre semana, almuerzos rápidos, onces para los niños y postres: todo organizado para que encuentres lo que necesitas al toque.</p></div><div className="chapter-grid">{chapters.map(([num, title, subtitle]) => <article key={num}><span>Cap. {num}</span><h3>{title}</h3><p>{subtitle}</p></article>)}</div><div className="gallery-heading"><h3>Un abrebocas de lo que hay adentro.</h3><span>Galería · 12 favoritas</span></div><div className="gallery">{gallery.map((src, i) => <figure key={src}><img src={src} alt={`Receta saludable ${i + 1}`} loading="lazy" /></figure>)}</div></div></section>

      <section className="bonus section paper"><div className="container"><p className="eyebrow">Y hay más</p><h2>Compra hoy y llévate <em>$45 en bonos.</em></h2><div className="bonus-grid">{bonuses.map((bonus, i) => <article key={bonus.title}><header><span>Bono {String(i + 1).padStart(2, "0")}</span><b>Gratis hoy</b></header><img src={bonus.image} alt={bonus.title} loading="lazy"/><h3>{bonus.title}</h3><ul>{bonus.items.map(item => <li key={item}>— {item}</li>)}</ul><footer><span>Valor</span><del>{bonus.value}</del></footer></article>)}</div><p className="fine-print">Ojo: estos bonos son parte de una promoción limitada y pueden desaparecer sin avisar.</p></div></section>

      <section className="pricing section paper" id="ofertas"><div className="container"><div className="center-heading"><p className="eyebrow">Elige tu edición</p><h2>Empieza hoy.</h2><p>Un solo pago, tuyo para siempre y 30 días de garantía.</p></div><div className="pricing-grid"><Offer title="Kit Inicial del Congelador" price="$6.50" oldPrice="$29" href={checkout.starter} features={["100+ recetas aptas para congelar", "Calorías y macros incluidos", "Guía de utensilios y recipientes", "Etiquetas sin gluten y sin lácteos", "Tuyo para siempre"]}/><Offer title="Congelador Inteligente Premium" price="$9.00" oldPrice="$49" href={checkout.premium} featured features={["100+ recetas aptas para congelar", "Plan Inteligente de Meal Prep (30+ días)", "Menús semanales hechos para ti", "Guía de organización del congelador", "Actualizaciones gratis de por vida"]}/></div></div></section>

      <section className="testimonials section paper"><div className="container"><h2>Lo que dicen las mamás que ya <em>cocinaron.</em></h2><div className="testimonial-grid">{testimonials.map(([name, city, image, quote]) => <figure key={name}><figcaption><img src={image} alt="" loading="lazy"/><div><strong>{name}</strong><span>{city}</span></div></figcaption><blockquote>“{quote}”</blockquote><div className="stars" aria-label="5 de 5 estrellas">★★★★★</div></figure>)}</div><div className="center-action"><ArrowButton href="#ofertas">Quiero mis recetas</ArrowButton></div></div></section>

      <section className="faq section paper"><div className="narrow"><p className="eyebrow">Antes de empezar</p><h2>Preguntas <em>rápidas.</em></h2><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question}><summary><span>{String(i + 1).padStart(2, "0")}</span><strong>{question}</strong><b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div></div></section>

      <footer className="site-footer paper"><div className="container"><div className="footer-grid"><h2>Comidas<br/><em>congeladas</em> <mark>fáciles</mark><br/>para mamás.</h2><div><span>El método</span><p>Más organización, menos desperdicio y comida saludable lista para toda la semana.</p></div><div><span>Acceso</span><p>Entrega digital inmediata. Tuyo para siempre, con garantía de devolución de 30 días.</p></div></div><div className="footer-bottom"><span>© 2026 · Todos los derechos reservados</span><span>Hecho con amor</span></div></div></footer>
    </main>
  );
}

function HeroImage() {
  return <div className="hero-image"><div className="image-shadow"/><img src="https://i.ibb.co/hR6R7KJT/banner-congelado.jpg" alt="Chef presentando comidas saludables para congelar"/><div className="seal"><i>nuevo</i><strong>100+</strong><span>recetas</span></div><p>Fig. 01 — método completo</p></div>;
}

function Offer({ title, price, oldPrice, href, features, featured = false }: { title: string; price: string; oldPrice: string; href: string; features: string[]; featured?: boolean }) {
  return <article className={`offer ${featured ? "featured" : ""}`}>{featured && <b className="popular">Más popular</b>}<span className="eyebrow">{featured ? "Edición completa" : "Edición inicial"}</span><h3>{title}</h3><ul>{features.map(item => <li key={item}><i>{featured ? "✦" : "—"}</i>{item}</li>)}</ul><div className="offer-bottom"><div><del>{oldPrice}</del><strong>{price}</strong><small>pago único</small></div><a href={href}>Lo quiero ya <b aria-hidden="true">→</b></a><p>Pago seguro · Garantía de 30 días</p></div></article>;
}
