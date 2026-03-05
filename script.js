const i18n = {
  zh: {
    navFeatures: '能力', navNews: '动态', navComparison: '对比', navScenes: '场景', navFaq: 'FAQ', docs: '文档', badge: 'AI Agent Runtime',
    heroTitle: '让 AI 不止会回答，<span>还能执行</span>', heroSubtitle: 'OpenClaw 让你的 AI 助手连接真实工具：文件、浏览器、消息、自动化工作流，从“对话”升级到“交付结果”。',
    s1: '+ 工具能力', s2: '+ 常见渠道', s3: '% 可扩展', ctaGithub: '查看 GitHub', ctaStart: '快速开始', ctaDemo: '看 Demo',
    whyTitle: '为什么用 OpenClaw', f1t: '工具可执行', f1d: '支持文件读写、Shell、Browser 自动化、消息发送等，真正把任务做完。',
    f2t: '可扩展技能', f2d: '通过 Skills 把常用能力沉淀为可复用工作流，越用越聪明。', f3t: '多渠道连接', f3d: '可接 Telegram / Discord / WhatsApp 等，让助手在你常用场景里工作。', f4t: '开发者友好', f4d: '本地优先、可观测、可审计，适合个人和团队持续迭代。',
    newsTitle: 'OpenClaw 热门动态', newsMeta: '来源：GitHub Releases / Commits / Issues', newsAll: '全部', statusRelease: '最新版本', statusCommit: '最新提交', statusIssue: '开放问题',
    cmpTitle: '和普通聊天 AI 的区别', cmpH1: '能力项', cmpH3: '普通聊天 AI', cmp1k: '文件读写与执行', cmp2k: '浏览器自动化', cmp3k: '跨渠道消息触达', cmp4k: '可审计工作流',
    sceneTitle: '按场景看能力', sceneAll: '全部', sceneDev: '开发', sceneOps: '运营', scenePersonal: '个人效率',
    demoTitle: '真实 Demo 场景', d1: '“抓取一个网页 → 总结重点 → 发到 Telegram”', d2: '“读代码仓库 → 修 Bug → 跑测试 → 提交 PR”', d3: '“每天早上自动汇总待办、天气和日历”',
    liveTitle: 'Live Console Demo', replay: '重播', flowTitle: 'Workflow Visualizer', playTitle: 'Prompt Playground', playScene: '场景', playChannel: '渠道',
    quickStart: '30 秒上手', copy: '复制', copied: '已复制', generatorTitle: '命令生成器', genLabel: '选择渠道：',
    roadmapTitle: 'Roadmap', r1: '多渠道连接与基础工具执行', r2: '技能市场与模板化工作流', r3: '多 Agent 协作与质量门禁',
    testimonialTitle: '他们怎么说', t1: '“以前是 AI 提建议，现在是 AI 直接帮我把事做完。”', t2: '“把重复工作自动化后，我每天能省 1~2 小时。”', t3: '“最香的是可扩展，今天能用，明天还能进化。”',
    faqTitle: 'FAQ', q1: 'OpenClaw 适合谁？', a1: '适合想让 AI 从“能聊”升级到“能干活”的开发者、个人创作者和小团队。', q2: '需要写很多代码吗？', a2: '不一定。你可以先用现成 Skills，再逐步扩展自己的自动化流程。', q3: '支持哪些渠道？', a3: '可连接 Telegram、Discord、WhatsApp 等常见消息渠道。'
  },
  en: {
    navFeatures: 'Features', navNews: 'News', navComparison: 'Comparison', navScenes: 'Scenarios', navFaq: 'FAQ', docs: 'Docs', badge: 'AI Agent Runtime',
    heroTitle: 'AI that doesn\'t just answer,<span> but executes</span>', heroSubtitle: 'OpenClaw connects your AI assistant to real tools: files, browser, messaging, and automation workflows — upgrading from chat to delivery.',
    s1: '+ tool capabilities', s2: '+ common channels', s3: '% extensible', ctaGithub: 'View GitHub', ctaStart: 'Quick Start', ctaDemo: 'See Demo',
    whyTitle: 'Why OpenClaw', f1t: 'Executable Tools', f1d: 'Real actions with files, shell, browser automation, and messaging.',
    f2t: 'Extensible Skills', f2d: 'Package recurring workflows as reusable skills.', f3t: 'Multi-channel', f3d: 'Connect Telegram, Discord, WhatsApp, and more.', f4t: 'Developer Friendly', f4d: 'Local-first, observable, auditable, and iteration-ready.',
    newsTitle: 'OpenClaw Trending Updates', newsMeta: 'Source: GitHub Releases / Commits / Issues', newsAll: 'All', statusRelease: 'Latest Release', statusCommit: 'Latest Commit', statusIssue: 'Open Issues',
    cmpTitle: 'How it differs from chat-only AI', cmpH1: 'Capability', cmpH3: 'Chat-only AI', cmp1k: 'Read/write & execute', cmp2k: 'Browser automation', cmp3k: 'Cross-channel delivery', cmp4k: 'Auditable workflows',
    sceneTitle: 'Capabilities by Scenario', sceneAll: 'All', sceneDev: 'Development', sceneOps: 'Operations', scenePersonal: 'Personal Productivity',
    demoTitle: 'Real Demo Scenarios', d1: '“Fetch a webpage → summarize → send to Telegram”', d2: '“Read repo → fix bug → run tests → open PR”', d3: '“Daily digest of todos, weather, and calendar”',
    liveTitle: 'Live Console Demo', replay: 'Replay', flowTitle: 'Workflow Visualizer', playTitle: 'Prompt Playground', playScene: 'Scenario', playChannel: 'Channel',
    quickStart: '30-sec Quick Start', copy: 'Copy', copied: 'Copied', generatorTitle: 'Command Generator', genLabel: 'Choose channel:',
    roadmapTitle: 'Roadmap', r1: 'Multi-channel integration + tool execution', r2: 'Skill marketplace + workflow templates', r3: 'Multi-agent collaboration + quality gates',
    testimonialTitle: 'What builders say', t1: '“AI used to suggest; now it actually completes work for me.”', t2: '“Automation saves me 1–2 hours every day.”', t3: '“Best part: it evolves with my workflow.”',
    faqTitle: 'FAQ', q1: 'Who is OpenClaw for?', a1: 'Developers, creators, and small teams that want AI to actually do work.', q2: 'Do I need lots of code?', a2: 'Not necessarily. Start with existing skills and extend gradually.', q3: 'Which channels are supported?', a3: 'Telegram, Discord, WhatsApp, and more.'
  }
};

const sceneData = [
  { type: 'dev', zh: '自动修复 lint/test 并提交 PR', en: 'Auto-fix lint/test and open a PR' },
  { type: 'dev', zh: '从 issue 生成实现计划并编码', en: 'Generate plan from issue and implement' },
  { type: 'ops', zh: '日报自动汇总并推送群聊', en: 'Auto-generate daily digest to group chat' },
  { type: 'ops', zh: '监控网站变更并告警', en: 'Monitor site changes and alert' },
  { type: 'personal', zh: '汇总待办+日历+天气早报', en: 'Morning brief: todos + calendar + weather' },
  { type: 'personal', zh: '自动整理长文并提炼重点', en: 'Summarize long docs into key points' }
];

const defaultNewsData = [
  {
    tag: 'Release',
    zh: '发布 v2026.3.2：最新稳定版上线。',
    en: 'Released v2026.3.2: latest stable version is live.',
    date: '2026-03-03',
    url: 'https://github.com/openclaw/openclaw/releases/tag/v2026.3.2'
  },
  {
    tag: 'Core Update',
    zh: 'ACP 新增 Discord/Telegram 持久会话绑定能力。',
    en: 'ACP added persistent session bindings for Discord/Telegram.',
    date: '2026-03-05',
    url: 'https://github.com/openclaw/openclaw/commit/6a705a37f2cf856a6237eac430210859914f67d7'
  },
  {
    tag: 'TTS',
    zh: 'OpenAI TTS 配置新增 baseUrl 支持。',
    en: 'OpenAI TTS config now supports baseUrl.',
    date: '2026-03-05',
    url: 'https://github.com/openclaw/openclaw/commit/2c8ee593b97213c6f72892fe56761d285aac5e26'
  },
  {
    tag: 'Docs',
    zh: 'Telegram 单用户机器人建议启用 allowlist 配置。',
    en: 'Docs now recommend allowlist for single-user Telegram bots.',
    date: '2026-03-05',
    url: 'https://github.com/openclaw/openclaw/commit/c522154771efa94c0524b856475f77e45ca04672'
  },
  {
    tag: 'Hot Issue',
    zh: '社区关注：dmScope=main 时 Telegram 回复广播异常。',
    en: 'Hot issue: Telegram replies broadcast unexpectedly when dmScope=main.',
    date: '2026-03-05',
    url: 'https://github.com/openclaw/openclaw/issues/35789'
  }
];

let newsData = [...defaultNewsData];
let newsFilter = 'all';
let statusData = { release: '-', commit: '-', issues: '-' };

let lang = localStorage.getItem('oc_lang') || 'zh';
const langToggle = document.getElementById('langToggle');
const themeToggle = document.getElementById('themeToggle');
const copyBtn = document.getElementById('copyCmd');
const copyGenBtn = document.getElementById('copyGenCmd');
const channelSelect = document.getElementById('channelSelect');
const menuToggle = document.getElementById('menuToggle');
const liveConsole = document.getElementById('liveConsole');
const replayConsole = document.getElementById('replayConsole');
const playSceneSelect = document.getElementById('playSceneSelect');
const playChannelSelect = document.getElementById('playChannelSelect');
const playPrompt = document.getElementById('playPrompt');
const copyPlayPrompt = document.getElementById('copyPlayPrompt');

function renderLang() {
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  langToggle.textContent = lang === 'zh' ? 'EN' : '中';
  localStorage.setItem('oc_lang', lang);
  renderScenes(document.querySelector('#sceneFilters .chip.active')?.dataset.scene || 'all');
  renderStatus();
  renderNews();
  renderGenCmd();
  renderPlayPrompt();
}

function renderScenes(type = 'all') {
  const container = document.getElementById('sceneCards');
  if (!container) return;
  const filtered = type === 'all' ? sceneData : sceneData.filter((x) => x.type === type);
  container.innerHTML = filtered.map((x) => `<article class="card"><p>${lang === 'zh' ? x.zh : x.en}</p></article>`).join('');
}

function renderStatus() {
  const el = document.getElementById('statusCards');
  if (!el) return;
  el.innerHTML = `
    <article class="card"><h3>${i18n[lang].statusRelease}</h3><p>${statusData.release}</p></article>
    <article class="card"><h3>${i18n[lang].statusCommit}</h3><p>${statusData.commit}</p></article>
    <article class="card"><h3>${i18n[lang].statusIssue}</h3><p>${statusData.issues}</p></article>
  `;
}

function renderNews() {
  const container = document.getElementById('newsCards');
  if (!container) return;
  const list = newsFilter === 'all' ? newsData : newsData.filter((n) => n.tag === newsFilter);
  container.innerHTML = list.map((n) => `
    <article class="card news-card">
      <div class="row-between">
        <span class="news-tag">${n.tag}</span>
        <small class="news-date">${n.date}</small>
      </div>
      <p>${lang === 'zh' ? n.zh : n.en}</p>
      <a href="${n.url}" target="_blank" rel="noreferrer">${lang === 'zh' ? '查看详情' : 'Read more'}</a>
    </article>
  `).join('');
}

const short = (s, n = 88) => (s && s.length > n ? `${s.slice(0, n - 1)}…` : s || '');
const dateOnly = (d) => (d ? new Date(d).toISOString().slice(0, 10) : '');

async function refreshNewsFromGitHub() {
  try {
    const base = 'https://api.github.com/repos/openclaw/openclaw';
    const [releasesRes, commitsRes, issuesRes] = await Promise.all([
      fetch(`${base}/releases?per_page=2`),
      fetch(`${base}/commits?per_page=2`),
      fetch(`${base}/issues?state=open&per_page=10`)
    ]);

    if (!releasesRes.ok || !commitsRes.ok || !issuesRes.ok) throw new Error('github-api-failed');

    const releases = await releasesRes.json();
    const commits = await commitsRes.json();
    const issuesRaw = await issuesRes.json();
    const pureIssues = issuesRaw.filter((x) => !x.pull_request);
    const hotIssue = pureIssues[0] || issuesRaw[0];

    statusData = {
      release: releases[0]?.tag_name || '-',
      commit: (commits[0]?.sha || '-').slice(0, 7),
      issues: String(pureIssues.length || 0)
    };

    const fresh = [];
    if (releases[0]) {
      fresh.push({
        tag: 'Release',
        zh: `发布 ${releases[0].tag_name}：${short(releases[0].name || '最新版本')}`,
        en: `Released ${releases[0].tag_name}: ${short(releases[0].name || 'latest version')}`,
        date: dateOnly(releases[0].published_at),
        url: releases[0].html_url
      });
    }
    if (commits[0]) {
      const msg = String(commits[0].commit?.message || '').split('\n')[0];
      fresh.push({
        tag: 'Commit',
        zh: `最新提交：${short(msg)}`,
        en: `Latest commit: ${short(msg)}`,
        date: dateOnly(commits[0].commit?.author?.date),
        url: commits[0].html_url
      });
    }
    if (releases[1]) {
      fresh.push({
        tag: 'Release',
        zh: `近期版本：${releases[1].tag_name}`,
        en: `Recent release: ${releases[1].tag_name}`,
        date: dateOnly(releases[1].published_at),
        url: releases[1].html_url
      });
    }
    if (commits[1]) {
      const msg2 = String(commits[1].commit?.message || '').split('\n')[0];
      fresh.push({
        tag: 'Commit',
        zh: `近期提交：${short(msg2)}`,
        en: `Recent commit: ${short(msg2)}`,
        date: dateOnly(commits[1].commit?.author?.date),
        url: commits[1].html_url
      });
    }
    if (hotIssue) {
      fresh.push({
        tag: 'Hot Issue',
        zh: `社区热议：${short(hotIssue.title)}`,
        en: `Community focus: ${short(hotIssue.title)}`,
        date: dateOnly(hotIssue.created_at),
        url: hotIssue.html_url
      });
    }

    if (fresh.length >= 3) {
      newsData = fresh.slice(0, 5);
      renderStatus();
      renderNews();
    }
  } catch {
    // fallback to defaultNewsData silently
  }
}

function renderGenCmd() {
  const cmd = document.getElementById('genCmd');
  if (!cmd) return;
  const channel = channelSelect?.value || 'Telegram';
  cmd.textContent = lang === 'zh'
    ? `帮我把这个网页总结后发到 ${channel}，并给出 3 条行动建议。`
    : `Summarize this webpage and send it to ${channel}, then give me 3 action items.`;
}

const demoLines = {
  zh: [
    '> 接收任务: 总结 openclaw 更新并发送 Telegram',
    '> 规划: web_fetch + summarize + message.send',
    '> 执行 web_fetch ... done',
    '> 生成摘要 ... done',
    '> 发送消息到 Telegram ... done',
    '> ✅ 任务完成，用时 8.2s'
  ],
  en: [
    '> Received task: summarize OpenClaw updates and send to Telegram',
    '> Plan: web_fetch + summarize + message.send',
    '> Running web_fetch ... done',
    '> Generating summary ... done',
    '> Sending message to Telegram ... done',
    '> ✅ Completed in 8.2s'
  ]
};

function runConsoleDemo() {
  if (!liveConsole) return;
  const lines = demoLines[lang] || demoLines.zh;
  liveConsole.textContent = '';
  let i = 0;
  const timer = setInterval(() => {
    liveConsole.textContent += `${lines[i]}\n`;
    i += 1;
    if (i >= lines.length) clearInterval(timer);
  }, 420);
}

function animateFlow() {
  const nodes = Array.from(document.querySelectorAll('#flowGraph .flow-node'));
  if (!nodes.length) return;
  let idx = 0;
  setInterval(() => {
    nodes.forEach((n) => n.classList.remove('active'));
    nodes[idx % nodes.length].classList.add('active');
    idx += 1;
  }, 900);
}

function renderPlayPrompt() {
  if (!playPrompt) return;
  const scene = playSceneSelect?.value || 'code';
  const channel = playChannelSelect?.value || 'Telegram';
  const map = {
    zh: {
      code: `帮我修复这个仓库的测试失败，提交修复说明并把结果发到 ${channel}。`,
      summary: `帮我抓取这个网页并总结成 5 条重点，然后发到 ${channel}。`,
      daily: `每天早上 9 点汇总待办、日历和天气，并推送到 ${channel}。`
    },
    en: {
      code: `Fix failing tests in this repo, summarize changes, and send the result to ${channel}.`,
      summary: `Fetch this webpage, extract 5 key points, and send them to ${channel}.`,
      daily: `Every morning at 9:00, summarize todos, calendar, and weather, then send to ${channel}.`
    }
  };
  playPrompt.textContent = map[lang][scene];
}

langToggle.addEventListener('click', () => { lang = lang === 'zh' ? 'en' : 'zh'; renderLang(); });
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const isLight = document.body.classList.contains('light');
  themeToggle.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('oc_theme', isLight ? 'light' : 'dark');
});
channelSelect?.addEventListener('change', renderGenCmd);
playSceneSelect?.addEventListener('change', renderPlayPrompt);
playChannelSelect?.addEventListener('change', renderPlayPrompt);
replayConsole?.addEventListener('click', runConsoleDemo);

document.getElementById('sceneFilters')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('#sceneFilters .chip').forEach((x) => x.classList.remove('active'));
  btn.classList.add('active');
  renderScenes(btn.dataset.scene);
});

document.getElementById('newsFilters')?.addEventListener('click', (e) => {
  const btn = e.target.closest('.chip');
  if (!btn) return;
  document.querySelectorAll('#newsFilters .chip').forEach((x) => x.classList.remove('active'));
  btn.classList.add('active');
  newsFilter = btn.dataset.news || 'all';
  renderNews();
});

menuToggle?.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.toggle('open');
});
document.querySelectorAll('#navLinks a').forEach((a) => a.addEventListener('click', () => {
  document.getElementById('navLinks')?.classList.remove('open');
}));

async function copyText(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    const original = i18n[lang].copy;
    btn.textContent = i18n[lang].copied;
    setTimeout(() => (btn.textContent = original), 1200);
  } catch {}
}
copyBtn?.addEventListener('click', () => copyText(document.getElementById('quickCmd')?.innerText || '', copyBtn));
copyGenBtn?.addEventListener('click', () => copyText(document.getElementById('genCmd')?.innerText || '', copyGenBtn));
copyPlayPrompt?.addEventListener('click', () => copyText(playPrompt?.innerText || '', copyPlayPrompt));

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')), { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

function animateCounters() {
  document.querySelectorAll('[data-count]').forEach((el) => {
    const target = Number(el.dataset.count || 0); let cur = 0; const step = Math.max(1, Math.round(target / 30));
    const timer = setInterval(() => { cur += step; if (cur >= target) { cur = target; clearInterval(timer); } el.textContent = String(cur); }, 25);
  });
}
const stats = document.querySelector('.stats');
if (stats) {
  const statsObs = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { animateCounters(); statsObs.disconnect(); } }), { threshold: 0.5 });
  statsObs.observe(stats);
}

const theme = localStorage.getItem('oc_theme');
if (theme === 'light') { document.body.classList.add('light'); themeToggle.textContent = '☀️'; }

renderLang();
runConsoleDemo();
animateFlow();
refreshNewsFromGitHub();
setInterval(refreshNewsFromGitHub, 30 * 60 * 1000);
