const services = [
  { number: '01', title: 'Recuperação de fachadas', text: 'Tratamento de fissuras, correção de superfícies e renovação completa para valorizar o seu imóvel.' },
  { number: '02', title: 'Pintura residencial', text: 'Acabamento cuidadoso para ambientes internos e externos, com proteção e beleza por muito mais tempo.' },
  { number: '03', title: 'Pintura comercial', text: 'Execução organizada e eficiente para renovar seu negócio com o mínimo de impacto na rotina.' },
];

const projects = [
  { src: '/trabalhos/pintura-piso-industrial-aplicacao-aprimorada.jpg', title: 'Aplicação de tinta para piso', category: 'Pintura industrial' },
  { src: '/trabalhos/piso-industrial-renovado-aprimorada.jpg', title: 'Piso industrial renovado', category: 'Acabamento profissional' },
  { src: '/trabalhos/acabamento-galpao-aprimorada.jpg', title: 'Acabamento em galpão', category: 'Pintura de grande área' },
  { src: '/trabalhos/area-industrial-revitalizada-aprimorada.jpg', title: 'Área industrial revitalizada', category: 'Renovação completa' },
  { src: '/trabalhos/execucao-pintura-piso-aprimorada.jpg', title: 'Execução do serviço', category: 'Preparação e pintura' },
  { src: '/trabalhos/pintura-residencial-externa-aprimorada.jpg', title: 'Pintura residencial externa', category: 'Proteção e acabamento' },
  { src: '/trabalhos/pintura-garagem-demarcacao.jpg', title: 'Pintura e demarcação de garagem', category: 'Piso e sinalização' },
  { src: '/trabalhos/recuperacao-parede-residencial.jpg', title: 'Recuperação de parede residencial', category: 'Preparação de superfície' },
  { src: '/trabalhos/acabamento-porta-janela.jpg', title: 'Acabamento em portas e janelas', category: 'Renovação residencial' },
  { src: '/trabalhos/pintura-interna-residencial.jpg', title: 'Pintura interna residencial', category: 'Textura e acabamento' },
];

const steps = [
  ['Visita técnica', 'Avaliamos o local e entendemos exatamente o que precisa ser feito.'],
  ['Orçamento claro', 'Você recebe uma proposta detalhada, sem surpresas durante a obra.'],
  ['Execução cuidadosa', 'Proteção do ambiente, organização e atenção a cada acabamento.'],
];

const whatsappUrl = 'https://wa.me/5521989990138?text=Olá%21%20Gostaria%20de%20solicitar%20um%20orçamento%20para%20pintura%20ou%20recuperação%20de%20fachada.';

export default function Home() {
  return <main>
    <header className="nav wrap">
      <a className="brand" href="#inicio" aria-label="Cruz e Castro, início"><img src="/logo-cruz-e-castro.png" alt="Cruz e Castro — Fachadas e Pinturas" /></a>
      <nav aria-label="Navegação principal"><a href="#servicos">Serviços</a><a href="#trabalhos">Trabalhos</a><a href="#processo">Como trabalhamos</a><a href={whatsappUrl} target="_blank" rel="noreferrer" className="navCta">Pedir orçamento</a></nav>
    </header>

    <section className="hero" id="inicio"><div className="wrap heroGrid"><div className="heroCopy"><p className="eyebrow">Recuperação de fachadas e pinturas em geral</p><h1>Seu imóvel renovado.<br/><em>Do jeito certo.</em></h1><p className="lead">Cuidado em cada detalhe, acabamento profissional e compromisso do início ao fim.</p><div className="actions"><a className="button light" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento <span>→</span></a><a className="textLink" href="#servicos">Conheça nossos serviços ↓</a></div></div><div className="facade" aria-label="Ilustração de uma fachada renovada"><div className="sun"/><div className="building back"><i/><i/><i/></div><div className="building front"><b>CRUZ E CASTRO</b><i/><i/><span/></div><div className="paintLine"/><div className="heroBadge"><strong>Qualidade</strong><span>que se vê no acabamento</span></div></div></div><div className="trust wrap"><span>✓ Avaliação personalizada</span><span>✓ Materiais de qualidade</span><span>✓ Limpeza e organização</span></div></section>

    <section className="services wrap" id="servicos"><div className="sectionHead"><div><p className="eyebrow dark">O que fazemos</p><h2>Soluções para renovar<br/>e proteger.</h2></div><p>Da preparação ao acabamento, cuidamos de cada etapa para entregar um resultado bonito, resistente e bem executado.</p></div><div className="serviceGrid">{services.map((s) => <article className="serviceCard" key={s.number}><span>{s.number}</span><div className="serviceIcon" aria-hidden="true">{s.number === '01' ? '▥' : s.number === '02' ? '⌂' : '▦'}</div><h3>{s.title}</h3><p>{s.text}</p><a href={whatsappUrl} target="_blank" rel="noreferrer">Quero um orçamento →</a></article>)}</div></section>

    <section className="portfolio" id="trabalhos"><div className="wrap"><div className="portfolioHead"><div><p className="eyebrow dark">Serviços realizados</p><h2>Nossos trabalhos</h2></div><p>Projetos reais executados com cuidado, organização e atenção a cada detalhe — da preparação ao acabamento final.</p></div><div className="galleryGrid">{projects.map((project) => <figure className="workCard" key={project.src}><img src={project.src} alt={project.title} loading="lazy"/><figcaption><span>{project.category}</span><strong>{project.title}</strong></figcaption></figure>)}</div></div></section>

    <section className="promise"><div className="wrap promiseGrid"><div className="colorBlock"><div className="roller">▰<span/></div><p>Uma nova aparência.<br/><strong>Uma nova impressão.</strong></p></div><div className="promiseCopy"><p className="eyebrow dark">Por que escolher a Cruz e Castro</p><h2>Confiança para transformar seu espaço.</h2><p>Sabemos que uma obra exige planejamento, respeito e transparência. Por isso, trabalhamos com comunicação direta e cuidado com o seu patrimônio.</p><ul><li><b>01</b><span><strong>Experiência e atenção</strong>Diagnóstico cuidadoso antes de começar.</span></li><li><b>02</b><span><strong>Acabamento profissional</strong>Preparação correta para um resultado duradouro.</span></li><li><b>03</b><span><strong>Compromisso com prazos</strong>Organização em todas as etapas do serviço.</span></li></ul></div></div></section>

    <section className="process wrap" id="processo"><p className="eyebrow dark">Simples e transparente</p><h2>Como trabalhamos</h2><div className="steps">{steps.map((step, i) => <article key={step[0]}><b>0{i+1}</b><span/><h3>{step[0]}</h3><p>{step[1]}</p></article>)}</div></section>

    <section className="contact" id="contato"><div className="wrap contactInner"><div><p className="eyebrow">Vamos conversar?</p><h2>Pronto para renovar<br/>seu imóvel?</h2><p>Solicite uma avaliação e receba um orçamento personalizado para o seu projeto.</p></div><a className="button light big" href={whatsappUrl} target="_blank" rel="noreferrer">Solicitar orçamento agora <span>→</span></a></div></section>

    <footer className="wrap"><a className="brand darkBrand" href="#inicio"><img src="/logo-cruz-e-castro.png" alt="Cruz e Castro — Fachadas e Pinturas" /></a><p>Recuperação de fachadas e pinturas em geral.</p><p>© 2026 Cruz e Castro. Todos os direitos reservados.</p><div className="developerCredit"><span>Desenvolvedor: <strong>Wendel Silva</strong></span><a href="mailto:djwendelrj@gmail.com">djwendelrj@gmail.com</a></div></footer>
  </main>;
}
