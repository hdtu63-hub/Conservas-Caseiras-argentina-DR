const checkout = {
  starter: "https://pay.hotmart.com/P106001411X?off=truzp9k2&checkoutMode=10",
  premium: "https://pay.hotmart.com/P106001411X?off=019uhvd0&checkoutMode=10",
};

const benefits = [
  ["Cozinhe uma vez, coma a semana toda", "Uma tarde de domingo vira comida gostosa de segunda a sexta, sem estresse."],
  ["100+ receitas", "Próprias para congelar, sem texturas estranhas e sem abrir mão do sabor."],
  ["Calorias + macros", "Cada receita traz porções, rendimento e informações nutricionais já calculadas."],
  ["Sem glúten + sem lactose", "Tudo bem sinalizado para você escolher rápido e cozinhar com segurança."],
  ["Guia de armazenamento", "Recipientes, etiquetas e truques de conservação explicados sem complicação."],
  ["Menos desperdício", "Planejamento inteligente para economizar tempo e dinheiro no mercado."],
];

const chapters = [
  ["I", "Frango e carnes", "Ricos em proteína"],
  ["II", "Peixes e frutos do mar", "Leves e nutritivos"],
  ["III", "Acompanhamentos", "Coloridos e saudáveis"],
  ["IV", "Lanches e petiscos", "Pegue e coma"],
  ["V", "Molhos e temperos", "Muito mais sabor"],
  ["VI", "Sobremesas fit", "Sem culpa"],
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
    title: "Plano inteligente de meal prep",
    image: "https://i.ibb.co/3mYyJwDg/marmitas-Me-dia.jpg",
    value: "R$ 97",
    items: ["4 cardápios prontos para copiar", "Mais de 30 dias de refeições planejadas", "Lista de compras sem desperdício"],
  },
  {
    title: "Cardápios semanais prontos",
    image: "https://i.ibb.co/bjrM7hZp/cardapios-Me-dia.jpg",
    value: "R$ 67",
    items: ["Semanas temáticas já planejadas", "Refeições balanceadas", "Versão para imprimir ou salvar no celular"],
  },
  {
    title: "Guia de organização do freezer",
    image: "https://i.ibb.co/LXpbSLBb/organizacao-freezer-Me-dia.jpg",
    value: "R$ 47",
    items: ["Armazenamento sem mistério", "Etiquetas e controle de datas", "Lista dos recipientes que valem a pena"],
  },
];

const testimonials = [
  ["Carolina Mendes", "São Paulo · SP", "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200", "Fiz o frango com limão, congelei e tivemos almoço para a semana inteira. O sabor parecia de comida feita na hora."],
  ["Paula Santos", "Belo Horizonte · MG", "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=200", "O plano de meal prep mudou minha rotina. Chego do trabalho e a comida já está pronta. Zero estresse."],
  ["Mariana Castro", "Curitiba · PR", "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200", "Eu não sabia cozinhar quase nada, mas as receitas são muito fáceis. Resolvi a semana inteira em uma tarde."],
  ["Júlia Oliveira", "Salvador · BA", "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200", "Parei de jogar comida fora. Só a lista de compras já fez uma diferença enorme no orçamento do mês."],
  ["Fernanda Lima", "Recife · PE", "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200", "Sou intolerante à lactose e as etiquetas tornam tudo muito mais simples. Encontro as opções certas de primeira."],
  ["Beatriz Alves", "Goiânia · GO", "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200", "Comida saudável, fácil e realmente gostosa. Hoje meu freezer trabalha a meu favor."],
];

const faqs = [
  ["Como recebo as receitas?", "Assim que o pagamento é confirmado, o material chega por e-mail. É 100% digital, com acesso imediato e vitalício."],
  ["Preciso saber cozinhar?", "Não. As receitas foram pensadas para quem tem pouco tempo e pouca experiência. Os passos são curtos, claros e sem termos complicados."],
  ["As receitas servem para dietas?", "Cada receita inclui calorias e macros. Há também opções com baixo teor de carboidratos, sem glúten e sem lactose, todas identificadas."],
  ["Preciso de utensílios especiais?", "Não. Você consegue começar com o que já tem em casa. O guia mostra recipientes úteis, mas nenhuma compra extra é obrigatória."],
  ["Quanto tempo a comida dura congelada?", "Cada receita informa o prazo ideal de conservação, normalmente entre 30 e 90 dias, além da melhor forma de descongelar."],
  ["E se eu não gostar?", "Você tem 30 dias de garantia. Dentro desse período, basta solicitar o reembolso pela plataforma de pagamento."],
];

function ArrowButton({ href, children, light = false }: { href: string; children: React.ReactNode; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={href}><span>{children}</span><b aria-hidden="true">→</b></a>;
}

export default function Home() {
  const ticker = ["Edição limitada · oferta válida hoje", "Acesso vitalício", "+100 receitas", "Garantia de 30 dias", "Entrega digital imediata"];
  return (
    <main>
      <div className="ticker" aria-label="Informações da oferta"><div>{[...ticker, ...ticker, ...ticker].map((item, i) => <span key={i} aria-hidden={i >= ticker.length}><i>✦</i>{item}</span>)}</div></div>

      <section className="hero paper">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">E-book + guias práticos</p>
            <h1>Receitas<br/><em>saudáveis</em> <mark>para</mark><br/>congelar.</h1>
            <p className="hero-lead">Chega de cozinhar do zero toda noite.</p>
            <div className="mobile-hero-media"><HeroImage /></div>
            <div className="hero-action"><ArrowButton href="#ofertas">Quero as receitas</ArrowButton><div className="price"><del>R$ 147</del><strong>R$ 18,90</strong><small>à vista</small></div></div>
            <p className="hero-detail">Mais de <strong>100 receitas</strong> de refeições saudáveis, práticas e deliciosas para você cozinhar uma vez e comer bem a semana inteira.</p>
            <div className="trust"><span>♢ Compra segura</span><span>↻ Garantia de 30 dias</span><span>∞ Acesso vitalício</span></div>
          </div>
          <div className="desktop-hero-media"><HeroImage /></div>
        </div>
      </section>

      <section className="benefits paper section"><div className="container"><h2>Uma cozinha que <em>trabalha a seu favor</em> — não contra você.</h2><div className="benefit-grid">{benefits.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="dark-section section paper"><div className="container split"><div className="feature-image"><div/><img src="https://i.ibb.co/b5kfgWGx/PETIT-GATEAU-1.png" alt="Sobremesa saudável pronta para congelar" loading="lazy" /></div><div><p className="eyebrow warm">Sabor de verdade</p><h2>Comida congelada não precisa ser <em>sem graça.</em></h2><p className="intro">Com os truques certos, sua comida sai do freezer como se tivesse acabado de ser feita.</p><ul className="editorial-list">{["Frango ao limão com ervas, suculento depois de descongelar", "Lanches e sobremesas fit já porcionados", "Peixes assados ricos em ômega-3", "Carnes temperadas para salvar qualquer jantar", "Acompanhamentos que preservam cor, textura e sabor", "Sopas reconfortantes para os dias corridos"].map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, "0")}</span>{item}</li>)}</ul><ArrowButton href="#ofertas" light>Quero começar</ArrowButton></div></div></section>

      <section className="chapters paper section"><div className="container"><div className="section-heading"><h2>Seis <em>capítulos</em> dentro do livro.</h2><p>Jantares, almoços rápidos, lanches para as crianças e sobremesas: tudo organizado para você encontrar o que precisa em segundos.</p></div><div className="chapter-grid">{chapters.map(([num, title, subtitle]) => <article key={num}><span>Cap. {num}</span><h3>{title}</h3><p>{subtitle}</p></article>)}</div><div className="gallery-heading"><h3>Um aperitivo do que tem lá dentro.</h3><span>Galeria · 12 favoritas</span></div><div className="gallery">{gallery.map((src, i) => <figure key={src}><img src={src} alt={`Receita saudável ${i + 1}`} loading="lazy" /></figure>)}</div></div></section>

      <section className="bonus section paper"><div className="container"><p className="eyebrow">E tem mais</p><h2>Compre hoje e leve <em>R$ 211 em bônus.</em></h2><div className="bonus-grid">{bonuses.map((bonus, i) => <article key={bonus.title}><header><span>Bônus {String(i + 1).padStart(2, "0")}</span><b>Grátis hoje</b></header><img src={bonus.image} alt={bonus.title} loading="lazy"/><h3>{bonus.title}</h3><ul>{bonus.items.map(item => <li key={item}>— {item}</li>)}</ul><footer><span>Valor</span><del>{bonus.value}</del></footer></article>)}</div><p className="fine-print">Os bônus fazem parte de uma condição especial e podem sair da oferta sem aviso.</p></div></section>

      <section className="pricing section paper" id="ofertas"><div className="container"><div className="center-heading"><p className="eyebrow">Escolha o seu acesso</p><h2>Comece hoje.</h2><p>Pagamento único, acesso para sempre e 30 dias de garantia.</p></div><div className="pricing-grid"><Offer title="Kit essencial" price="R$ 18,90" oldPrice="R$ 147" href={checkout.starter} features={["100+ receitas próprias para congelar", "Calorias e macros", "Guia de utensílios e recipientes", "Opções sem glúten e sem lactose", "Acesso vitalício"]}/><Offer title="Método completo" price="R$ 27,90" oldPrice="R$ 247" href={checkout.premium} featured features={["Tudo do Kit Essencial", "Plano de meal prep para 30+ dias", "Cardápios semanais prontos", "Guia de organização do freezer", "Atualizações gratuitas"]}/></div></div></section>

      <section className="testimonials section paper"><div className="container"><h2>O que dizem as mulheres que já <em>cozinharam.</em></h2><div className="testimonial-grid">{testimonials.map(([name, city, image, quote]) => <figure key={name}><figcaption><img src={image} alt="" loading="lazy"/><div><strong>{name}</strong><span>{city}</span></div></figcaption><blockquote>“{quote}”</blockquote><div className="stars" aria-label="5 de 5 estrelas">★★★★★</div></figure>)}</div><div className="center-action"><ArrowButton href="#ofertas">Quero minhas receitas</ArrowButton></div></div></section>

      <section className="faq section paper"><div className="narrow"><p className="eyebrow">Antes de começar</p><h2>Perguntas <em>rápidas.</em></h2><div className="faq-list">{faqs.map(([question, answer], i) => <details key={question}><summary><span>{String(i + 1).padStart(2, "0")}</span><strong>{question}</strong><b aria-hidden="true">+</b></summary><p>{answer}</p></details>)}</div></div></section>

      <footer className="site-footer paper"><div className="container"><div className="footer-grid"><h2>Comidas<br/><em>congeladas</em> <mark>fáceis</mark><br/>para você.</h2><div><span>O método</span><p>Mais organização, menos desperdício e comida saudável pronta para toda a semana.</p></div><div><span>Acesso</span><p>Entrega digital imediata. Seu para sempre, com garantia de 30 dias.</p></div></div><div className="footer-bottom"><span>© 2026 · Todos os direitos reservados</span><span>Feito com carinho</span></div></div></footer>
    </main>
  );
}

function HeroImage() {
  return <div className="hero-image"><div className="image-shadow"/><img src="https://i.ibb.co/hR6R7KJT/banner-congelado.jpg" alt="Chef apresentando refeições saudáveis congeladas"/><div className="seal"><i>novo</i><strong>100+</strong><span>receitas</span></div><p>Fig. 01 — método completo</p></div>;
}

function Offer({ title, price, oldPrice, href, features, featured = false }: { title: string; price: string; oldPrice: string; href: string; features: string[]; featured?: boolean }) {
  return <article className={`offer ${featured ? "featured" : ""}`}>{featured && <b className="popular">Mais popular</b>}<span className="eyebrow">{featured ? "Edição completa" : "Edição inicial"}</span><h3>{title}</h3><ul>{features.map(item => <li key={item}><i>{featured ? "✦" : "—"}</i>{item}</li>)}</ul><div className="offer-bottom"><div><del>{oldPrice}</del><strong>{price}</strong><small>pagamento único</small></div><a href={href}>Quero agora <b aria-hidden="true">→</b></a><p>Pagamento seguro · Garantia de 30 dias</p></div></article>;
}
