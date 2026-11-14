// ====== EDITE AQUI ======
// Contatos. Para ativar o link direto do Telegram, preencha o usuário (sem @).
// Enquanto estiver vazio, os botões do Telegram levam ao QR code.
const CONTATO = {
  telegram: "lzfautomacao",     // -> https://t.me/lzfautomacao
  instagram: "https://instagram.com/lzf.automacaoia",
  discord: "lezan7",
  linkedin: "https://www.linkedin.com/in/leandro-lezan-b61462444",
  github: "https://github.com/leandrozgfernandes-prog"
};

// Textos do site em dois idiomas (pt e en)
const T = {
  pt: {
    title: "AXIOMI | Automação com IA",
    meta: "Leandro (Lezan). Automação com inteligência artificial para o seu negócio: atendimento 24h, agendamentos e processos automáticos.",
    nav_services: "Serviços", nav_solutions: "Soluções", nav_process: "Como funciona", nav_about: "Sobre", nav_faq: "Dúvidas", nav_quote: "Orçamento",
    eyebrow: "Disponível para novos projetos",
    h1: "Automação com IA <em>para o seu negócio.</em>",
    lead: "Sou o <b>Leandro (Lezan)</b>, estudante de ADS. Crio automações com IA que atendem seus clientes, organizam agendamentos e eliminam tarefas repetitivas, 24 horas por dia.",
    cta_tg: "Falar no Telegram", cta_sol: "Ver o que posso criar",
    b1: "Atendimento 24h", b2: "Sob medida", b3: "Integrado ao seu negócio",
    live: "no ar",
    serv_kicker: "O que eu faço", serv_title: "Serviços",
    sol_kicker: "Soluções", sol_title: "O que posso criar",
    proc_kicker: "Simples e sem enrolação", proc_title: "Como funciona",
    about_role: "Automação com IA e estudante de ADS", about_kicker: "Quem está por trás", about_title: "Menos tarefa manual, mais resultado.",
    about_p1: "Sou o Leandro, conhecido como Lezan, estudante de Análise e Desenvolvimento de Sistemas. Trabalho com automação e inteligência artificial para pequenos negócios: transformo tarefas repetitivas em processos automáticos para você ter mais tempo para vender e atender melhor.",
    about_p2: "Quando o negócio também precisa de presença online, desenvolvo sites e landing pages sob medida, integrados à automação.",
    faq_kicker: "Perguntas frequentes", faq_title: "Dúvidas",
    faq_cta: "Ainda tem dúvida?", faq_cta_link: "Fale comigo",
    req_kicker: "Para começar", req_title: "O que eu preciso de você",
    req_note: "Não tem algum desses itens? Sem problema, eu ajudo você a montar.",
    ct_kicker: "Vamos começar?", ct_title: "Quero automatizar o meu negócio",
    ct_lead: "Me chama e conta o que toma o seu tempo hoje. O orçamento é sem compromisso.",
    ct_tg_sub: "Chamar agora", ct_dc_sub: "lezan7 (toque para copiar)", ct_li_sub: "Perfil profissional", ct_gh_sub: "Meus projetos",
    qr_cap: "Aponte a câmera do celular para falar comigo no Telegram",
    foot_tag: "Automação com IA, landing pages e sistemas sob medida.",
    rights: "Todos os direitos reservados.", legal2: "É proibida a reprodução do conteúdo, da marca e do logotipo sem autorização.",
    credit: "Desenvolvido por Leandro (Lezan).",
    toast: "Usuário do Discord copiado: ",
    services: [
      { t: "Atendimento automático", d: "Assistentes com IA que respondem seus clientes no Telegram, Instagram e Discord, a qualquer hora do dia." },
      { t: "Agendamentos automáticos", d: "O cliente escolhe o horário sozinho e você recebe tudo organizado, com lembretes antes do compromisso." },
      { t: "Respostas inteligentes", d: "A IA aprende as informações do seu negócio, como preços, horários e serviços, e responde as dúvidas mais comuns." },
      { t: "Automação de processos", d: "Tarefas repetitivas viram rotina automática: avisos, cobranças, controle de planilhas e relatórios." },
      { t: "Integração de sistemas", d: "Conecto as ferramentas que você já usa para os dados circularem sem copiar e colar." },
      { t: "Conteúdo com IA", d: "Textos, legendas e ideias de posts gerados com IA no tom de voz da sua marca." }
    ],
    create: [
      { tag: "Automação", t: "Automação para o seu serviço", d: "Fluxos automáticos que cuidam de atendimento, agendamentos, cobranças e avisos, para o seu serviço funcionar quase sozinho." },
      { tag: "Landing page", t: "Landing page para o seu negócio", d: "Uma página rápida e bonita, pensada para transformar visitantes em clientes, com botão direto para o seu contato." },
      { tag: "Software como serviço", t: "SaaS", d: "Sistemas online que você oferece por assinatura: login de clientes, painel de controle e cobrança recorrente. A sua própria plataforma." },
      { tag: "Inteligência artificial", t: "Chatbots e assistentes com IA", d: "Assistentes que conversam com seus clientes no Telegram, Instagram e Discord, usando as informações do seu negócio." },
      { tag: "Sob medida", t: "Sistemas e painéis", d: "Controle de pedidos, agendas e relatórios feitos exatamente para a rotina da sua empresa." },
      { tag: "Presença online", t: "Sites institucionais", d: "Um site completo para a sua marca, com serviços, sobre e contato, integrado com toda a automação." }
    ],
    steps: [
      { t: "Conversa", d: "Você me conta como funciona o negócio e quais tarefas tomam o seu tempo. Sem compromisso." },
      { t: "Desenho", d: "Planejo o fluxo da automação e mostro como ela vai funcionar antes de construir." },
      { t: "Construção", d: "Monto a automação e configuro a IA com as informações do seu negócio." },
      { t: "No ar", d: "Coloco para funcionar, testo com você e acompanho os ajustes depois da entrega." }
    ],
    tech: ["Inteligência artificial", "Chatbots", "Automação de processos", "Integração via API", "Análise e Desenvolvimento de Sistemas"],
    faq: [
      { q: "Preciso entender de tecnologia?", a: "Não. Você me conta como funciona o seu negócio e eu cuido de toda a parte técnica, explicando tudo de forma simples." },
      { q: "O que preciso enviar para criar a minha landing page?", a: "Fotos do seu negócio, produtos ou serviços, a sua logo e as cores da marca (se tiver), os textos principais e os seus contatos. Se faltar algo, eu ajudo a montar. A lista completa está na seção \"O que eu preciso de você\"." },
      { q: "Em quais canais a automação funciona?", a: "Posso integrar com os canais que o seu cliente já usa, como Telegram, Instagram e Discord. Vemos juntos qual faz mais sentido." },
      { q: "A IA pode responder errado?", a: "Eu configuro a IA com as informações do seu negócio e defino o que ela pode ou não responder. Quando ela não souber, chama você." },
      { q: "Quanto tempo leva e quanto custa?", a: "Depende do tamanho do projeto. Conversamos sobre o que você precisa e eu passo prazo e valor antes de começar, sem compromisso." },
      { q: "Posso pedir alterações depois?", a: "Sim. Durante a criação você acompanha e pede ajustes, e depois da entrega eu acompanho as melhorias combinadas." },
      { q: "Meus dados e os dos meus clientes ficam seguros?", a: "Uso apenas as informações necessárias para o projeto funcionar e combino com você, antes de começar, o que será acessado. Nada é compartilhado sem a sua autorização." },
      { q: "Funciona para qualquer tipo de negócio?", a: "Funciona para a maioria dos pequenos negócios que atendem clientes ou têm tarefas repetitivas, como academias, barbearias, lojas, clínicas e prestadores de serviço. Conversamos para ver se faz sentido no seu caso." },
      { q: "Vou depender de você depois?", a: "Explico como tudo funciona e acompanho os ajustes depois da entrega, mas o projeto é seu." }
    ],
    req: [
      { t: "Landing page", items: ["Fotos do seu negócio, produtos ou serviços", "Sua logo e as cores da marca, se tiver", "Textos principais: quem você é, o que oferece e preços", "Seus contatos: Telegram, Instagram e outros", "Exemplos de sites que você gosta", "Domínio, se já tiver um. Se não tiver, eu ajudo"] },
      { t: "Automação com IA", items: ["Como funciona o seu atendimento hoje", "As perguntas que os clientes mais fazem", "Informações do negócio: serviços, preços e horários", "Canais que você usa: Telegram, Instagram, Discord", "Ferramentas que já usa, como planilhas e agendas", "Quais tarefas repetitivas você quer eliminar"] },
      { t: "SaaS e sistemas", items: ["A ideia do sistema e o problema que ele resolve", "Quem vai usar: clientes, equipe ou os dois", "As principais funções que você imagina", "Exemplos de sistemas parecidos", "Como pretende cobrar: assinatura, planos, etc.", "Identidade visual: logo e cores"] }
    ],
    marquee: ["AUTOMAÇÃO COM IA", "MELHORIA DE NEGÓCIO", "INTEGRAÇÕES", "PROCESSOS AUTOMATIZADOS"],
    intro: ["$ iniciar assistente-ia", "carregando modelo ......... ok", "conectando canais ......... ok", "automatizando tarefas ..... ok", "pronto. bem-vindo."],
    code: `<!-- seu site, do zero -->
<section class="hero">
  <h1>
    Seu negócio
    <em>no topo.</em>
  </h1>
  <p>Mais clientes,</p>
  <p>mais vendas.</p>
  <a href="#orcamento"
     class="btn">
    Quero meu site
  </a>
</section>
<script>
  site.publicar("no ar");
</script>`
  },
  en: {
    title: "AXIOMI | AI Automation",
    meta: "Leandro (Lezan). AI automation for your business: 24/7 customer service, scheduling and automated processes.",
    nav_services: "Services", nav_solutions: "Solutions", nav_process: "How it works", nav_about: "About", nav_faq: "FAQ", nav_quote: "Get a quote",
    eyebrow: "Available for new projects",
    h1: "AI automation <em>for your business.</em>",
    lead: "I'm <b>Leandro (Lezan)</b>, a Systems Analysis and Development student. I build AI automations that serve your customers, organize appointments and eliminate repetitive tasks, 24 hours a day.",
    cta_tg: "Message on Telegram", cta_sol: "See what I can build",
    b1: "24/7 support", b2: "Tailor-made", b3: "Integrated with your business",
    live: "live",
    serv_kicker: "What I do", serv_title: "Services",
    sol_kicker: "Solutions", sol_title: "What I can build",
    proc_kicker: "Simple and straightforward", proc_title: "How it works",
    about_role: "AI automation and Systems Analysis student", about_kicker: "Who is behind it", about_title: "Less manual work, better results.",
    about_p1: "I'm Leandro, known as Lezan, a Systems Analysis and Development student. I work with automation and artificial intelligence for small businesses: I turn repetitive tasks into automatic processes so you have more time to sell and serve your customers better.",
    about_p2: "When your business also needs an online presence, I build custom websites and landing pages integrated with the automation.",
    faq_kicker: "Frequently asked questions", faq_title: "Questions",
    faq_cta: "Still have questions?", faq_cta_link: "Talk to me",
    req_kicker: "To get started", req_title: "What I need from you",
    req_note: "Don't have some of these items? No problem, I'll help you put them together.",
    ct_kicker: "Shall we start?", ct_title: "I want to automate my business",
    ct_lead: "Message me and tell me what takes up your time today. The quote is free and non-binding.",
    ct_tg_sub: "Message me", ct_dc_sub: "lezan7 (tap to copy)", ct_li_sub: "Professional profile", ct_gh_sub: "My projects",
    qr_cap: "Point your phone camera to message me on Telegram",
    foot_tag: "AI automation, landing pages and custom systems.",
    rights: "All rights reserved.", legal2: "Reproduction of the content, brand and logo without permission is prohibited.",
    credit: "Built by Leandro (Lezan).",
    toast: "Discord username copied: ",
    services: [
      { t: "Automated support", d: "AI assistants that answer your customers on Telegram, Instagram and Discord, at any time of day." },
      { t: "Automatic scheduling", d: "Customers pick their own time and you get everything organized, with reminders before the appointment." },
      { t: "Smart answers", d: "The AI learns your business information, like prices, hours and services, and answers the most common questions." },
      { t: "Process automation", d: "Repetitive tasks become automatic routines: notices, billing, spreadsheet control and reports." },
      { t: "Systems integration", d: "I connect the tools you already use so data flows without copy and paste." },
      { t: "AI content", d: "Texts, captions and post ideas generated with AI in your brand's tone of voice." }
    ],
    create: [
      { tag: "Automation", t: "Automation for your service", d: "Automatic workflows that handle support, scheduling, billing and notices, so your service runs almost on its own." },
      { tag: "Landing page", t: "Landing page for your business", d: "A fast, good-looking page designed to turn visitors into customers, with a direct button to contact you." },
      { tag: "Software as a service", t: "SaaS", d: "Online systems you offer by subscription: customer login, control panel and recurring billing. Your own platform." },
      { tag: "Artificial intelligence", t: "AI chatbots and assistants", d: "Assistants that talk to your customers on Telegram, Instagram and Discord, using your business information." },
      { tag: "Tailor-made", t: "Systems and dashboards", d: "Order control, schedules and reports built exactly for your company's routine." },
      { tag: "Online presence", t: "Business websites", d: "A complete website for your brand, with services, about and contact, integrated with all the automation." }
    ],
    steps: [
      { t: "Talk", d: "You tell me how the business works and which tasks take your time. No commitment." },
      { t: "Design", d: "I plan the automation flow and show you how it will work before building it." },
      { t: "Build", d: "I build the automation and set up the AI with your business information." },
      { t: "Live", d: "I launch it, test it with you and follow up on adjustments after delivery." }
    ],
    tech: ["Artificial intelligence", "Chatbots", "Process automation", "API integration", "Systems Analysis and Development"],
    faq: [
      { q: "Do I need to understand technology?", a: "No. You tell me how your business works and I take care of the technical side, explaining everything in simple terms." },
      { q: "What do I need to send to build my landing page?", a: "Photos of your business, products or services, your logo and brand colors (if you have them), the main texts and your contacts. If something is missing, I help you put it together. The full list is in the \"What I need from you\" section." },
      { q: "Which channels does the automation work on?", a: "I can integrate with the channels your customers already use, like Telegram, Instagram and Discord. We decide together which makes the most sense." },
      { q: "Can the AI give wrong answers?", a: "I configure the AI with your business information and define what it can or cannot answer. When it doesn't know, it calls you." },
      { q: "How long does it take and how much does it cost?", a: "It depends on the size of the project. We talk about what you need and I give you the timeline and price before starting, with no commitment." },
      { q: "Can I ask for changes later?", a: "Yes. During the build you follow along and ask for adjustments, and after delivery I follow up on the agreed improvements." },
      { q: "Are my data and my customers' data safe?", a: "I only use the information needed for the project to work, and we agree beforehand on what will be accessed. Nothing is shared without your permission." },
      { q: "Does it work for any type of business?", a: "It works for most small businesses that serve customers or have repetitive tasks, like gyms, barbershops, shops, clinics and service providers. We talk to see if it makes sense in your case." },
      { q: "Will I depend on you afterwards?", a: "I explain how everything works and follow up on adjustments after delivery, but the project is yours." }
    ],
    req: [
      { t: "Landing page", items: ["Photos of your business, products or services", "Your logo and brand colors, if you have them", "Main texts: who you are, what you offer and prices", "Your contacts: Telegram, Instagram and others", "Examples of websites you like", "Domain, if you already have one. If not, I help"] },
      { t: "AI automation", items: ["How your customer service works today", "The questions customers ask the most", "Business information: services, prices and hours", "Channels you use: Telegram, Instagram, Discord", "Tools you already use, like spreadsheets and calendars", "Which repetitive tasks you want to eliminate"] },
      { t: "SaaS and systems", items: ["The idea of the system and the problem it solves", "Who will use it: customers, team or both", "The main features you imagine", "Examples of similar systems", "How you plan to charge: subscription, plans, etc.", "Visual identity: logo and colors"] }
    ],
    marquee: ["AI AUTOMATION", "BUSINESS IMPROVEMENT", "INTEGRATIONS", "AUTOMATED PROCESSES"],
    intro: ["$ start ai-assistant", "loading model ........... ok", "connecting channels ..... ok", "automating tasks ........ ok", "ready. welcome."],
    code: `<!-- your site, from scratch -->
<section class="hero">
  <h1>
    Your business
    <em>on top.</em>
  </h1>
  <p>More customers,</p>
  <p>more sales.</p>
  <a href="#quote"
     class="btn">
    Get my site
  </a>
</section>
<script>
  site.publish("live");
</script>`
  }
};
// ========================

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---- Idioma ---- */
// Segurança: valores do armazenamento do navegador só são aceitos se estiverem na lista permitida
const LANGS = ["pt", "en"], THEMES = ["red", "green", "blue"];
let LANG = (navigator.language || "pt").toLowerCase().startsWith("pt") ? "pt" : "en";
try {
  const s = localStorage.getItem("lang");
  if (LANGS.includes(s)) LANG = s;
} catch (e) {}
const t = (k) => T[LANG][k];

/* ---- Tema ---- */
let accentColor = "#e5121f";
function readAccent() { accentColor = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || accentColor; }
function setTheme(th) {
  if (!THEMES.includes(th)) th = "red";
  document.documentElement.setAttribute("data-theme", th);
  try { localStorage.setItem("theme", th); } catch (e) {}
  readAccent();
}
let savedTheme = "red";
try { const s = localStorage.getItem("theme"); if (THEMES.includes(s)) savedTheme = s; } catch (e) {}
setTheme(savedTheme);
$$(".dot").forEach((b) => b.addEventListener("click", () => setTheme(b.dataset.theme)));

/* ---- Realce de sintaxe (HTML) ---- */
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
function highlight(src) {
  return esc(src).replace(
    /(&lt;!--[\s\S]*?--&gt;)|(&lt;\/?[a-zA-Z0-9]+)|("[^"]*")|(\b(?:class|href)\b)|(\b(?:site|publicar|publish)\b)|(\/\/.*)/g,
    (m, cm, tag, str, attr, fn) =>
      cm ? `<span class="c">${m}</span>` :
      tag ? `<span class="t">${m}</span>` :
      str ? `<span class="s">${m}</span>` :
      attr ? `<span class="a">${m}</span>` :
      fn ? `<span class="p">${m}</span>` : `<span class="c">${m}</span>`
  );
}

/* ---- Título principal separado em palavras (para animar) ---- */
function renderTitle(animate) {
  const h1 = $(".hero h1");
  const tmp = document.createElement("div");
  tmp.innerHTML = t("h1");
  const wrap = (s) => s.trim().split(/\s+/).filter(Boolean).map((w) => '<span class="w"><span class="wi">' + w + "</span></span>").join(" ");
  h1.setAttribute("aria-label", tmp.textContent.replace(/\s+/g, " ").trim());
  h1.classList.remove("reveal", "in");
  h1.innerHTML = [...tmp.childNodes].map((n) => (n.nodeType === 3 ? wrap(n.textContent) : "<em>" + wrap(n.textContent) + "</em>")).join(" ");
  h1.querySelectorAll(".wi").forEach((w, k) => w.style.setProperty("--i", k)); // CSSOM: não precisa de style inline
  if (animate) { void h1.offsetWidth; h1.classList.add("in"); }
}

/* ---- Render das listas ---- */
let revealStarted = false;
function showNew(container) { if (revealStarted) container.querySelectorAll(".reveal").forEach((e) => e.classList.add("show")); }
function renderLists() {
  const L = T[LANG];
  $("#services").innerHTML = L.services.map((s) => `
    <article class="service reveal"><h3>${s.t}</h3><p>${s.d}</p></article>`).join("");
  $("#req").innerHTML = L.req.map((r) => `
    <article class="req-card reveal"><h3>${r.t}</h3><ul>${r.items.map((x) => `<li>${x}</li>`).join("")}</ul></article>`).join("");
  $("#projects").innerHTML = L.create.map((c) => `
    <article class="proj cc reveal">
      <span class="logo-img cc-logo" role="img" aria-label="AXIOMI"></span>
      <span class="cc-tag">${c.tag}</span>
      <h3>${c.t}</h3>
      <p>${c.d}</p>
    </article>`).join("");
  $("#steps").innerHTML = L.steps.map((s, i) => `
    <li class="step reveal"><div class="n">${i + 1}</div><h3>${s.t}</h3><p>${s.d}</p></li>`).join("");
  $("#tech").innerHTML = L.tech.map((x) => `<span>${x}</span>`).join("");
  $("#faq").innerHTML = L.faq.map((f, i) => `<details class="faq-item"${i === 0 ? " open" : ""}><summary><span class="faq-n">${String(i + 1).padStart(2, "0")}</span>${f.q}</summary><p>${f.a}</p></details>`).join("");
  $$("#faq details").forEach((d) => d.addEventListener("toggle", () => {
    if (d.open) $$("#faq details").forEach((o) => { if (o !== d) o.open = false; });
  }));
  ["#services", "#projects", "#steps", "#req"].forEach((s) => showNew($(s)));
  bindTilt();
}

/* ---- Letreiro: repete a lista até cobrir a tela, sem emenda ---- */
function buildMarquee() {
  const el = $("#mq1");
  const group = T[LANG].marquee.map((w) => `<span>${w}</span>`).join("");
  el.innerHTML = group;
  const gw = el.scrollWidth || 1;
  const n = Math.max(1, Math.ceil((innerWidth * 1.2) / gw));
  el.innerHTML = group.repeat(n * 2);
  el.style.animationDuration = (el.scrollWidth / 2 / 110).toFixed(1) + "s"; // velocidade constante em px/s
}

/* ---- Aplicar idioma ---- */
function applyLang() {
  document.documentElement.lang = LANG === "pt" ? "pt-BR" : "en";
  document.title = t("title");
  const meta = document.querySelector('meta[name="description"]'); if (meta) meta.content = t("meta");
  $$("[data-i18n]").forEach((el) => { const v = t(el.dataset.i18n); if (v !== undefined) el.textContent = v; });
  $$("[data-i18n-html]").forEach((el) => { el.innerHTML = t(el.dataset.i18nHtml); });
  $$("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === LANG)));
  renderLists();
  buildMarquee();
}
$$("[data-lang]").forEach((b) => b.addEventListener("click", () => {
  if (b.dataset.lang === LANG) return;
  LANG = b.dataset.lang;
  try { localStorage.setItem("lang", LANG); } catch (e) {}
  applyLang(); renderTitle(true); startHero();
}));

/* ---- Contatos ---- */
function wireContacts() {
  $$("[data-link=telegram]").forEach((a) => {
    if (CONTATO.telegram) { a.href = "https://t.me/" + CONTATO.telegram; a.target = "_blank"; a.rel = "noopener noreferrer"; }
  });
  $$("[data-link=instagram]").forEach((a) => { a.href = CONTATO.instagram; });
  // LinkedIn e GitHub: só aparecem quando o link está preenchido e é do site certo (segurança: aceita só https e o domínio esperado)
  const safeUrl = (u, host) => {
    try { const x = new URL(u); return x.protocol === "https:" && (x.hostname === host || x.hostname.endsWith("." + host)) ? x.href : ""; } catch (e) { return ""; }
  };
  [["linkedin", "linkedin.com"], ["github", "github.com"]].forEach(([k, host]) => {
    const url = safeUrl(CONTATO[k], host);
    $$("[data-link=" + k + "]").forEach((a) => { if (url) { a.href = url; a.hidden = false; } else { a.hidden = true; } });
  });
}
const toast = $("#toast");
let toastTimer;
function showToast(msg) {
  toast.textContent = msg; toast.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
}
$$("[data-copy]").forEach((el) => el.addEventListener("click", async () => {
  const v = CONTATO.discord;
  try { await navigator.clipboard.writeText(v); }
  catch (e) {
    const ta = document.createElement("textarea"); ta.value = v; document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); } catch (_) {} ta.remove();
  }
  showToast(t("toast") + v);
}));

/* ---- Botão flutuante ---- */
const dial = $("#dial"), dialMain = $("#dial-main");
function setDial(open) { dial.classList.toggle("open", open); dialMain.setAttribute("aria-expanded", String(open)); }
dialMain.addEventListener("click", () => setDial(!dial.classList.contains("open")));
document.addEventListener("click", (e) => { if (!dial.contains(e.target)) setDial(false); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") setDial(false); });
dial.querySelectorAll(".dial-item").forEach((i) => i.addEventListener("click", () => setDial(false)));

/* ---- Animação do topo: o código é digitado e o site se monta ---- */
let heroToken = 0;
async function startHero() {
  const my = ++heroToken, alive = () => my === heroToken;
  const pre = $("#code"), live = $("#live"), pv = $$(".pv");
  while (alive()) {
    pv.forEach((e) => e.classList.remove("show")); live.classList.remove("show"); pre.innerHTML = "";
    await sleep(500); if (!alive()) return;
    const code = t("code");
    for (let i = 1; i <= code.length; i++) {
      if (!alive()) return;
      pre.innerHTML = highlight(code.slice(0, i));
      const f = i / code.length;
      pv.forEach((e) => { if (f >= +e.dataset.at) e.classList.add("show"); });
      await sleep(code[i - 1] === "\n" ? 90 : 26);
    }
    live.classList.add("show");
    await sleep(5000);
  }
}

/* ---- Revelar ao rolar ---- */
function startReveal() {
  if (revealStarted) return; revealStarted = true;
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  $$(".reveal").forEach((el, i) => { el.style.transitionDelay = (i % 3) * 0.1 + "s"; io.observe(el); });
  startHero();
  setTimeout(watchPerf, 1200);
  const h1 = $(".hero h1");
  h1.classList.add("in");
}

/* ---- Intro ---- */
async function runIntro() {
  const intro = $("#intro");
  let seen = false;
  try { seen = sessionStorage.getItem("introSeen") === "1"; } catch (e) {}
  if (seen) { intro.remove(); return startReveal(); }
  document.body.classList.add("lock");
  let done = false;
  const finish = async () => {
    if (done) return; done = true;
    try { sessionStorage.setItem("introSeen", "1"); } catch (e) {}
    intro.classList.add("out");
    document.body.classList.remove("lock");
    startReveal();
    await sleep(1000); intro.remove();
  };
  $("#intro-skip").addEventListener("click", finish);
  setTimeout(finish, 9000);
  const lines = t("intro");
  const pre = $("#intro-code"), fill = $("#intro-fill");
  const total = lines.join("\n").length; let typed = 0, out = "";
  for (const line of lines) {
    for (const ch of line) {
      if (done) return;
      out += ch; typed++;
      pre.innerHTML = esc(out).replace(/^(\$ .*)$/gm, '<span class="p">$1</span>').replace(/\b(ok)\b/g, '<span class="t">$1</span>');
      fill.style.width = (typed / total) * 100 + "%";
      await sleep(ch === " " ? 8 : 20);
    }
    out += "\n"; typed++; await sleep(160);
  }
  await sleep(450); finish();
}

/* ---- Rede de partículas no fundo (leve) ---- */
(function network() {
  const cv = $("#rain"), ctx = cv.getContext("2d");
  let pts = [], W, H;
  const mouse = { x: -999, y: -999 };
  addEventListener("mousemove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive: true });
  function resize() {
    W = cv.width = innerWidth; H = cv.height = innerHeight;
    const n = Math.min(64, Math.floor((W * H) / 20000));
    pts = Array.from({ length: n }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.45, vy: (Math.random() - 0.5) * 0.45, r: Math.random() * 1.5 + 0.8
    }));
  }
  resize(); addEventListener("resize", resize);
  const hex = (c) => { const n = parseInt(c.slice(1), 16); return [(n >> 16) & 255, (n >> 8) & 255, n & 255]; };
  const LINK = 120, LINK2 = LINK * LINK, MOUSE2 = 160 * 160;
  let lastDraw = 0;
  function frame(now) {
    requestAnimationFrame(frame);
    if (document.hidden || LITE() || now - lastDraw < 28) return;
    lastDraw = now;
    ctx.clearRect(0, 0, W, H);
    const [r, g, b] = hex(accentColor.length === 7 ? accentColor : "#e5121f");
    ctx.fillStyle = `rgba(${r},${g},${b},.8)`;
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;
      const mx = p.x - mouse.x, my = p.y - mouse.y, dm2 = mx * mx + my * my;
      if (dm2 < 19600) { p.x += mx * 0.02; p.y += my * 0.02; }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
      for (let j = i + 1; j < pts.length; j++) {
        const q = pts[j], dx = p.x - q.x, dy = p.y - q.y, d2 = dx * dx + dy * dy;
        if (d2 < LINK2) {
          ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - d2 / LINK2) * 0.26})`;
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke();
        }
      }
      if (dm2 < MOUSE2) {
        ctx.strokeStyle = `rgba(${r},${g},${b},${(1 - dm2 / MOUSE2) * 0.45})`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
      }
    }
  }
  frame();
})();

/* ---- Fundo de código da faixa final ---- */
(function ctaCode() {
  const pre = $("#cta-code");
  if (!pre) return;
  const snippets = [
    'const bot = criarAssistente({ canais: ["telegram"] });', 'bot.aoReceber(async (msg) => responder(msg));',
    'agenda.novoHorario({ cliente, data, hora });', 'if (cliente.perguntou("preço")) { enviarTabela(); }',
    'lembrete.enviar(cliente, "amanhã às 15h");', 'const resposta = await ia.responder(pergunta);',
    'planilha.atualizar(pedido);', 'fluxo.quandoChegarMensagem(atender);', 'relatorio.gerarSemanal();',
    'git commit -m "novo fluxo de atendimento"', 'git push origin main', '// atendimento 24h, sem pausa',
    'async function atender(msg) { return ia.responder(msg); }', 'integracao.conectar("instagram");', 'integracao.conectar("discord");'
  ];
  let out = "";
  for (let i = 0; i < 60; i++) out += snippets[(i * 7) % snippets.length] + "\n";
  pre.textContent = out + out;
})();

/* ---- Economia: animações só rodam nas seções que estão na tela ---- */
(function pauseOffscreen() {
  const band = $("#contato");
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    e.target.classList.toggle("is-off", !e.isIntersecting);
    if (e.target === band) band.classList.toggle("in-view", e.isIntersecting);
  }), { rootMargin: "120px" });
  $$("main > section, main > .marquee, footer").forEach((s) => io.observe(s));
})();

/* ---- Menu mobile ---- */
const burger = $("#burger"), menu = $("#menu");
burger.addEventListener("click", () => { burger.classList.toggle("open"); menu.classList.toggle("open"); });
menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => { burger.classList.remove("open"); menu.classList.remove("open"); }));

/* ---- Inclinação 3D nos cards (mouse) ---- */
function bindTilt() {
  if (!matchMedia("(hover:hover)").matches) return;
  $$(".proj").forEach((c) => {
    c.addEventListener("mousemove", (e) => {
      const r = c.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      c.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-6px)`;
    });
    c.addEventListener("mouseleave", () => (c.style.transform = ""));
  });
}

/* ---- Modo leve automático: se o computador estiver lento, desliga os efeitos de fundo ---- */
function LITE() { return document.documentElement.classList.contains("lite"); }
function watchPerf() {
  const MEASURE_MS = 2500, MIN_FPS = 40;
  let frames = 0, start = 0, aborted = false;
  const onVis = () => { if (document.hidden) aborted = true; };
  document.addEventListener("visibilitychange", onVis);
  function tick(now) {
    if (aborted) { document.removeEventListener("visibilitychange", onVis); return; }
    if (!start) start = now;
    frames++;
    if (now - start < MEASURE_MS) return requestAnimationFrame(tick);
    document.removeEventListener("visibilitychange", onVis);
    const fps = (frames * 1000) / (now - start);
    if (fps < MIN_FPS) document.documentElement.classList.add("lite");
  }
  if (!document.hidden) requestAnimationFrame(tick);
}

/* ---- Início ---- */
$("#year").textContent = new Date().getFullYear();
wireContacts();
applyLang();
renderTitle(false);
runIntro();
