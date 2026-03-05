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
  {
    type: 'dev',
    zh: '代码修复闭环：Issue → 修复 → 测试 → PR',
    en: 'Code fix loop: Issue → Patch → Test → PR',
    inputZh: '输入：GitHub Issue + 失败日志',
    inputEn: 'Input: GitHub issue + failing logs',
    tools: 'read · exec · sessions_spawn(acp) · message',
    outputZh: '输出：可合并 PR + 测试报告 + 风险点',
    outputEn: 'Output: merge-ready PR + test report + risk notes'
  },
  {
    type: 'ops',
    zh: '舆情监控播报：多站点抓取 + 摘要 + 推送',
    en: 'Trend watch: crawl + summarize + push',
    inputZh: '输入：关键词 + 来源站点',
    inputEn: 'Input: keywords + sources',
    tools: 'web_fetch · web_search · summarize · message',
    outputZh: '输出：风险标签 + 每日播报卡片',
    outputEn: 'Output: risk tags + daily briefing card'
  },
  {
    type: 'ops',
    zh: '运维告警处理：告警 → 诊断 → 执行脚本 → 回传',
    en: 'Ops alert handling: alert → diagnose → run → report',
    inputZh: '输入：告警内容 + 主机信息',
    inputEn: 'Input: alert payload + host info',
    tools: 'exec · nodes.run · message',
    outputZh: '输出：处置结果 + 恢复建议',
    outputEn: 'Output: remediation result + recovery plan'
  },
  {
    type: 'personal',
    zh: '个人效率晨报：日历/待办/天气/邮件一页汇总',
    en: 'Morning brief: calendar/todos/weather/email',
    inputZh: '输入：当天计划',
    inputEn: 'Input: today plan',
    tools: 'skills + message + weather',
    outputZh: '输出：今日优先级 + 时间块建议',
    outputEn: 'Output: priorities + time-block suggestions'
  },
  {
    type: 'dev',
    zh: '需求到实现：需求描述 → 任务拆解 → 提交代码',
    en: 'Spec to code: requirement → tasks → commits',
    inputZh: '输入：一句话需求',
    inputEn: 'Input: one-line requirement',
    tools: 'sessions_spawn(acp) · exec · git',
    outputZh: '输出：实现代码 + 提交记录 + 验收清单',
    outputEn: 'Output: implementation + commits + checklist'
  },
  {
    type: 'personal',
    zh: '知识库问答增强：检索文档 → 回答并附引用',
    en: 'Knowledge-grounded QA with citations',
    inputZh: '输入：问题 + 文档链接',
    inputEn: 'Input: question + doc links',
    tools: 'feishu_doc · web_fetch · summarize',
    outputZh: '输出：结构化回答 + 引用来源',
    outputEn: 'Output: structured answer + citations'
  }
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
const demoScenario = document.getElementById('demoScenario');
const demoMetrics = document.getElementById('demoMetrics');
const demoResult = document.getElementById('demoResult');
const flowDetail = document.getElementById('flowDetail');
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
  container.innerHTML = filtered.map((x) => `
    <article class="card case-card">
      <h3>${lang === 'zh' ? x.zh : x.en}</h3>
      <p class="case-line">${lang === 'zh' ? x.inputZh : x.inputEn}</p>
      <p class="case-tools"><strong>Tools:</strong> ${x.tools}</p>
      <p class="case-line">${lang === 'zh' ? x.outputZh : x.outputEn}</p>
    </article>
  `).join('');
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

const demoScenarios = {
  news: {
    zh: {
      lines: [
        '> 任务: 抓取 OpenClaw 热点并推送 Telegram',
        '> Planner: 生成 5 步执行计划',
        '> Tool:web_fetch 拉取 7 篇来源 ... done',
        '> Tool:summarize 压缩成 6 条重点 ... done',
        '> Tool:message.send 推送到 @ruibin ... done',
        '> Verifier: 结果完整性通过 (6/6)',
        '> ✅ 完成，总耗时 9.4s'
      ],
      metrics: ['7 sources', '6 highlights', '9.4s'],
      result: '输出：热点摘要 + 风险标签 + 行动建议已发送。'
    },
    en: {
      lines: [
        '> Task: fetch OpenClaw trending updates and send to Telegram',
        '> Planner: generated 5-step execution plan',
        '> Tool:web_fetch pulled 7 sources ... done',
        '> Tool:summarize compressed into 6 highlights ... done',
        '> Tool:message.send delivered to @ruibin ... done',
        '> Verifier: integrity check passed (6/6)',
        '> ✅ Completed in 9.4s'
      ],
      metrics: ['7 sources', '6 highlights', '9.4s'],
      result: 'Output: trend digest + risk labels + action items delivered.'
    }
  },
  code: {
    zh: {
      lines: [
        '> 任务: 修复测试失败并提交 PR',
        '> Planner: 锁定失败用例 3 个',
        '> Tool:exec 运行测试矩阵 ... done',
        '> Tool:sessions_spawn(acp) 生成修复 patch ... done',
        '> Tool:exec 回归测试 42/42 通过',
        '> Tool:message.send 回传 PR 链接 ... done',
        '> ✅ 完成，总耗时 3m21s'
      ],
      metrics: ['3 failing tests', '42 passed', 'PR opened'],
      result: '输出：PR #128 + 回归测试报告 + 风险说明。'
    },
    en: {
      lines: [
        '> Task: fix failing tests and open a PR',
        '> Planner: identified 3 failing cases',
        '> Tool:exec ran test matrix ... done',
        '> Tool:sessions_spawn(acp) generated patch ... done',
        '> Tool:exec rerun complete 42/42 passed',
        '> Tool:message.send returned PR link ... done',
        '> ✅ Completed in 3m21s'
      ],
      metrics: ['3 failing tests', '42 passed', 'PR opened'],
      result: 'Output: PR #128 + regression report + risk notes.'
    }
  },
  daily: {
    zh: {
      lines: [
        '> 任务: 生成晨报并推送',
        '> Tool:calendar 读取今日行程 ... done',
        '> Tool:todo-tracker 汇总待办 ... done',
        '> Tool:weather 获取深圳天气 ... done',
        '> Tool:message.send 推送晨报到 Telegram ... done',
        '> ✅ 完成，总耗时 5.7s'
      ],
      metrics: ['4 meetings', '11 todos', '29°C'],
      result: '输出：今日优先级 + 时间块建议 + 风险提醒。'
    },
    en: {
      lines: [
        '> Task: generate and deliver morning brief',
        '> Tool:calendar loaded today schedule ... done',
        '> Tool:todo-tracker summarized todos ... done',
        '> Tool:weather fetched Shenzhen weather ... done',
        '> Tool:message.send delivered brief to Telegram ... done',
        '> ✅ Completed in 5.7s'
      ],
      metrics: ['4 meetings', '11 todos', '29°C'],
      result: 'Output: priorities + time blocks + risk alerts.'
    }
  }
};

function runConsoleDemo() {
  if (!liveConsole) return;
  const key = demoScenario?.value || 'news';
  const pack = demoScenarios[key]?.[lang] || demoScenarios.news.zh;
  const lines = pack.lines;
  liveConsole.textContent = '';
  if (demoMetrics) demoMetrics.innerHTML = pack.metrics.map((m) => `<span>${m}</span>`).join('');
  if (demoResult) demoResult.textContent = pack.result;
  let i = 0;
  const timer = setInterval(() => {
    liveConsole.textContent += `${lines[i]}\n`;
    i += 1;
    if (i >= lines.length) clearInterval(timer);
  }, 340);
}

const flowDescriptions = {
  zh: [
    ['Input', '接收自然语言目标，抽取约束与产出格式。'],
    ['Planner', '拆分任务步骤，分配执行顺序与失败回退策略。'],
    ['Skill Router', '根据场景匹配可用 skills 与工具。'],
    ['Tools', '并行执行 web_fetch / exec / message 等工具调用。'],
    ['Verifier', '校验结果完整性、链接可用性、格式一致性。'],
    ['Output', '输出可读结论，并推送到目标渠道。']
  ],
  en: [
    ['Input', 'Capture intent, constraints, and expected output format.'],
    ['Planner', 'Split into executable steps with fallback strategy.'],
    ['Skill Router', 'Match scenario to available skills and tools.'],
    ['Tools', 'Run web_fetch / exec / message in parallel where possible.'],
    ['Verifier', 'Check completeness, links, and output consistency.'],
    ['Output', 'Return final result and deliver to target channel.']
  ]
};

function animateFlow() {
  const nodes = Array.from(document.querySelectorAll('#flowGraph .flow-node'));
  if (!nodes.length) return;
  let idx = 0;
  setInterval(() => {
    nodes.forEach((n) => n.classList.remove('active'));
    const current = nodes[idx % nodes.length];
    current.classList.add('active');
    const d = (flowDescriptions[lang] || flowDescriptions.zh)[idx % nodes.length];
    if (flowDetail) flowDetail.innerHTML = `<h4>${d[0]}</h4><p>${d[1]}</p>`;
    idx += 1;
  }, 1100);
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
demoScenario?.addEventListener('change', runConsoleDemo);
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
