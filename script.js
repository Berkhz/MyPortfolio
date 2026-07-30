/* ============================================================
   Portfólio — Kauan Bertalha
   i18n (PT/EN) + tema persistido + scroll reveal
   ============================================================ */

const I18N = {
  'pt-br': {
    'skip': 'Pular para o conteúdo',
    'nav.about': 'Sobre', 'nav.skills': 'Skills', 'nav.experience': 'Experiência',
    'nav.projects': 'Projetos', 'nav.education': 'Formação', 'nav.contact': 'Contato',

    'hero.eyebrow': 'Disponível para oportunidades remotas',
    'hero.role': 'Engenheiro de Software · Desenvolvedor Full-stack',
    'hero.lead': 'Desenvolvo aplicações full-stack com base sólida em back-end — C# / .NET, PostgreSQL e Redis — e front-end em React. Atualmente Desenvolvedor Pleno na Benner Sistemas, mirando uma carreira internacional.',
    'hero.ctaProjects': 'Ver projetos', 'hero.ctaContact': 'Entrar em contato',
    'hero.resume': 'Currículo ↓',

    'about.title': 'Sobre mim',
    'about.p1': 'Sou formado em Engenharia de Software pela UniCesumar (diploma em emissão) e desenvolvedor Pleno. Comecei a trabalhar aos 14 anos e nunca parei de aprender — hoje atuo com desenvolvimento de sistemas em produção.',
    'about.p2': 'Minha base é o back-end — APIs limpas, banco bem modelado, autenticação segura e deploy automatizado — e venho evoluindo como desenvolvedor full-stack, entregando também o front-end em React. Também fundei a Khrawk Labs, onde desenvolvo produtos próprios de ponta a ponta.',
    'about.factYears': 'anos codando', 'about.factStack': 'stack principal', 'about.factProd': 'em produção',

    'skills.title': 'Tecnologias',
    'skills.backend': 'Back-end', 'skills.data': 'Banco de Dados',
    'skills.frontend': 'Front-end', 'skills.devops': 'DevOps & Tools',

    'exp.title': 'Experiência',
    'exp.bennerRole': 'Desenvolvedor Pleno',
    'exp.bennerDesc': 'Desenvolvimento back-end de sistemas corporativos com C# / .NET e bancos Oracle, aplicando boas práticas de código, versionamento e trabalho em equipe.',
    'exp.khrawkRole': 'Fundador & Desenvolvedor',
    'exp.khrawkDesc': 'Iniciativa própria de tecnologia onde concebo e desenvolvo produtos de ponta a ponta — da arquitetura ao deploy.',

    'proj.title': 'Projetos em destaque',
    'proj.veloTag': 'SaaS · Full-stack',
    'proj.veloDesc': 'Plataforma SaaS multi-tenant para gestão de oficinas mecânicas: ordens de serviço, financeiro, controle de caixa, emissão de NFS-e e integração de pagamentos. Arquitetura de produção com deploy automatizado.',
    'proj.khrawkTag': 'Produto próprio',
    'proj.khrawkDesc': 'Minha empresa de tecnologia — vitrine e base para os produtos que desenvolvo.',
    'proj.live': 'Site ↗',
    'proj.more': 'Ver todos os repositórios no GitHub ↗',

    'edu.title': 'Formação & Certificados',
    'edu.acadTitle': 'Formação Acadêmica',
    'edu.degree': 'Bacharelado em Engenharia de Software',
    'edu.inprogress': 'concluído · aguardando diploma',
    'edu.certsTitle': 'Certificados',
    'edu.langsTitle': 'Idiomas',
    'lang.pt': 'Português', 'lang.ptLevel': 'Nativo',
    'lang.en': 'Inglês', 'lang.es': 'Espanhol',
    'lang.intermediate': 'Intermediário',

    'contact.title': 'Vamos conversar',
    'contact.lead': 'Aberto a oportunidades remotas e projetos desafiadores. Se meu perfil fizer sentido, me chame.',

    'footer.built': 'Feito com HTML, CSS e JavaScript',
  },
  'en': {
    'skip': 'Skip to content',
    'nav.about': 'About', 'nav.skills': 'Skills', 'nav.experience': 'Experience',
    'nav.projects': 'Projects', 'nav.education': 'Education', 'nav.contact': 'Contact',

    'hero.eyebrow': 'Open to remote opportunities',
    'hero.role': 'Software Engineer · Full-stack Developer',
    'hero.lead': 'I build full-stack applications on a solid back-end foundation — C# / .NET, PostgreSQL and Redis — with React on the front-end. Currently a Mid-Level Developer at Benner Sistemas, aiming for an international career.',
    'hero.ctaProjects': 'View projects', 'hero.ctaContact': 'Get in touch',
    'hero.resume': 'Resume ↓',

    'about.title': 'About me',
    'about.p1': "I hold a Software Engineering degree from UniCesumar (diploma being issued) and work as a Mid-Level Developer. I started working at 14 and never stopped learning — today I build systems running in production.",
    'about.p2': 'My foundation is the back-end — clean APIs, well-modeled databases, secure authentication and automated deployment — and I keep growing as a full-stack developer, also delivering the front-end in React. I also founded Khrawk Labs, where I build my own products end to end.',
    'about.factYears': 'years coding', 'about.factStack': 'main stack', 'about.factProd': 'in production',

    'skills.title': 'Technologies',
    'skills.backend': 'Back-end', 'skills.data': 'Databases',
    'skills.frontend': 'Front-end', 'skills.devops': 'DevOps & Tools',

    'exp.title': 'Experience',
    'exp.bennerRole': 'Mid-Level Developer',
    'exp.bennerDesc': 'Back-end development of enterprise systems with C# / .NET and Oracle databases, applying clean code practices, version control and teamwork.',
    'exp.khrawkRole': 'Founder & Developer',
    'exp.khrawkDesc': 'My own tech venture where I design and develop products end to end — from architecture to deployment.',

    'proj.title': 'Featured projects',
    'proj.veloTag': 'SaaS · Full-stack',
    'proj.veloDesc': 'Multi-tenant SaaS platform for auto-repair shop management: service orders, finance, cash control, electronic invoicing (NFS-e) and payment integration. Production architecture with automated deployment.',
    'proj.khrawkTag': 'Own product',
    'proj.khrawkDesc': 'My technology company — showcase and foundation for the products I build.',
    'proj.live': 'Live ↗',
    'proj.more': 'See all repositories on GitHub ↗',

    'edu.title': 'Education & Certificates',
    'edu.acadTitle': 'Academic Background',
    'edu.degree': "Bachelor's in Software Engineering",
    'edu.inprogress': 'completed · awaiting diploma',
    'edu.certsTitle': 'Certificates',
    'edu.langsTitle': 'Languages',
    'lang.pt': 'Portuguese', 'lang.ptLevel': 'Native',
    'lang.en': 'English', 'lang.es': 'Spanish',
    'lang.intermediate': 'Intermediate',

    'contact.title': "Let's talk",
    'contact.lead': "Open to remote opportunities and challenging projects. If my profile fits, reach out.",

    'footer.built': 'Built with HTML, CSS and JavaScript',
  }
};

const root = document.documentElement;

/* ---------- THEME ---------- */
function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}
function initTheme() {
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));
}
document.getElementById('themeToggle').addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ---------- LANGUAGE ---------- */
function applyLang(lang) {
  const dict = I18N[lang] || I18N['pt-br'];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });
  root.setAttribute('lang', lang);
  document.getElementById('langLabel').textContent = lang === 'en' ? 'PT' : 'EN';
  const resume = document.getElementById('resumeLink');
  if (resume) resume.setAttribute('href', lang === 'en' ? 'Kauan_Bertalha_Resume_EN.pdf' : 'Kauan_Bertalha_Curriculo.pdf');
  localStorage.setItem('lang', lang);
}
function initLang() {
  const saved = localStorage.getItem('lang');
  const browserEn = (navigator.language || '').toLowerCase().startsWith('en');
  applyLang(saved || (browserEn ? 'en' : 'pt-br'));
}
document.getElementById('langToggle').addEventListener('click', () => {
  applyLang(root.getAttribute('lang') === 'en' ? 'pt-br' : 'en');
});

/* ---------- SCROLL REVEAL ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('visible'));
    return;
  }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(el => obs.observe(el));
}

/* ---------- INIT ---------- */
initTheme();
initLang();
initReveal();
document.getElementById('year').textContent = new Date().getFullYear();
