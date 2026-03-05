const i18n = {
  zh: {
    docs: '文档', badge: 'AI Agent Runtime', heroTitle: '让 AI 不止会回答，<span>还能执行</span>',
    heroSubtitle: 'OpenClaw 让你的 AI 助手连接真实工具：文件、浏览器、消息、自动化工作流，从“对话”升级到“交付结果”。',
    ctaGithub: '查看 GitHub', ctaStart: '快速开始', ctaDemo: '看 Demo',
    whyTitle: '为什么用 OpenClaw', f1t: '工具可执行', f1d: '支持文件读写、Shell、Browser 自动化、消息发送等，真正把任务做完。',
    f2t: '可扩展技能', f2d: '通过 Skills 把常用能力沉淀为可复用工作流，越用越聪明。',
    f3t: '多渠道连接', f3d: '可接 Telegram / Discord / WhatsApp 等，让助手在你常用场景里工作。',
    f4t: '开发者友好', f4d: '本地优先、可观测、可审计，适合个人和团队持续迭代。',
    demoTitle: '真实 Demo 场景', d1: '“抓取一个网页 → 总结重点 → 发到 Telegram”', d2: '“读代码仓库 → 修 Bug → 跑测试 → 提交 PR”', d3: '“每天早上自动汇总待办、天气和日历”',
    quickStart: '30 秒上手', faqTitle: 'FAQ', q1: 'OpenClaw 适合谁？', a1: '适合想让 AI 从“能聊”升级到“能干活”的开发者、个人创作者和小团队。',
    q2: '需要写很多代码吗？', a2: '不一定。你可以先用现成 Skills，再逐步扩展自己的自动化流程。',
    q3: '支持哪些渠道？', a3: '可连接 Telegram、Discord、WhatsApp 等常见消息渠道。'
  },
  en: {
    docs: 'Docs', badge: 'AI Agent Runtime', heroTitle: 'AI that doesn\'t just answer,<span> but executes</span>',
    heroSubtitle: 'OpenClaw connects your AI assistant to real tools: files, browser, messaging, and automation workflows — upgrading from chat to delivery.',
    ctaGithub: 'View GitHub', ctaStart: 'Quick Start', ctaDemo: 'See Demo',
    whyTitle: 'Why OpenClaw', f1t: 'Executable Tools', f1d: 'Real actions with files, shell, browser automation, and messaging.',
    f2t: 'Extensible Skills', f2d: 'Package recurring workflows as reusable skills.',
    f3t: 'Multi-channel', f3d: 'Connect Telegram, Discord, WhatsApp, and more.',
    f4t: 'Developer Friendly', f4d: 'Local-first, observable, auditable, and iteration-ready.',
    demoTitle: 'Real Demo Scenarios', d1: '“Fetch a webpage → summarize → send to Telegram”', d2: '“Read repo → fix bug → run tests → open PR”', d3: '“Daily digest of todos, weather, and calendar”',
    quickStart: '30-sec Quick Start', faqTitle: 'FAQ', q1: 'Who is OpenClaw for?', a1: 'Developers, creators, and small teams that want AI to actually do work.',
    q2: 'Do I need lots of code?', a2: 'Not necessarily. Start with existing skills and extend gradually.',
    q3: 'Which channels are supported?', a3: 'Telegram, Discord, WhatsApp, and more.'
  }
};

let lang = 'zh';
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');

function renderLang() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  langToggle.textContent = lang === 'zh' ? 'EN' : '中';
}

langToggle.addEventListener('click', () => {
  lang = lang === 'zh' ? 'en' : 'zh';
  renderLang();
});

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeToggle.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.08 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
renderLang();
