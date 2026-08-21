/* ============================================================
   DATA — single source of truth for the site.
   Edit this file to update content across every page.
   ============================================================ */

const PROFILE = {
  name: "Shailesh Bhadra",
  title: "Senior SEO, Performance Marketing & Analytics Specialist",
  tagline: "SEO, E-commerce & AI-Driven Digital Problem Solving",
  subheading:
    "I work across SEO, Shopify, analytics, digital marketing, AI-assisted workflows and automation — to identify problems, build practical solutions, and improve measurable business outcomes.",
  email: "shaileshbhadra@gmail.com",
  phone: "+91-9913392756",
  linkedin: "https://www.linkedin.com/in/bhadra-shailesh/",
  github: "", // [ADD GITHUB URL]
  location: "Ahmedabad, India — Open to Remote Roles",
  yearsExperience: "9+",
  resumeFile: "assets/Shailesh_Bhadra_Resume.pdf",
  photo: "", // [ADD PROFILE PHOTO]
  summary:
    "Results-driven SEO & Digital Analytics Specialist with 9+ years of experience driving organic growth, improving search visibility, and maximizing ROI across eCommerce, SaaS, and service-based businesses. Hands-on across Technical SEO, GA4, server-side Google Tag Manager, paid media, Core Web Vitals, and emerging AI/Answer Engine Optimization. Delivered 25–60% improvements in conversions and organic traffic for clients across the UK, USA and UAE.",
  languages: ["English — Professional Proficiency", "Hindi — Native", "Gujarati — Native"],
};

const METRICS = [
  { value: "9+", label: "Years in SEO & Growth" },
  { value: "60%+", label: "Organic traffic lift, Neat Everyday" },
  { value: "25%", label: "Conversion lift, Equest Solutions" },
  { value: "30%", label: "CPA reduction, Atlas Softweb" },
];

const WORK_AREAS = [
  {
    tag: "SEO",
    title: "SEO & Organic Growth",
    description:
      "Technical SEO, keyword strategy, content, search visibility and organic growth.",
    href: "seo-lab.html",
  },
  {
    tag: "SHOPIFY",
    title: "Shopify & E-commerce",
    description:
      "Store optimization, product pages, theme improvements, tracking and conversion.",
    href: "projects.html?cat=Shopify",
  },
  {
    tag: "ANALYTICS",
    title: "Analytics & Tracking",
    description:
      "GA4, GTM (client & server-side), GSC, Clarity, dashboards, attribution and conversion tracking.",
    href: "skills.html",
  },
  {
    tag: "ADS",
    title: "Digital Marketing",
    description:
      "Google Ads, Meta Ads, campaign analysis, ROAS and performance optimization.",
    href: "skills.html",
  },
  {
    tag: "AI",
    title: "AI & Automation",
    description: "AI-assisted research, coding, analysis, workflows and automation.",
    href: "ai-automation.html",
  },
  {
    tag: "DEV",
    title: "Technical Problem Solving",
    description: "APIs, scripts, integrations, debugging and practical digital solutions.",
    href: "skills.html",
  },
];

const WORK_PATTERN = [
  { step: "Understand", detail: "Clarify the business objective and what success looks like." },
  { step: "Research", detail: "Gather context — market, competitors, prior data, constraints." },
  { step: "Audit", detail: "Inspect the current state: site, account, data, or codebase." },
  { step: "Analyse", detail: "Turn raw data into a diagnosis of what's actually happening." },
  { step: "Plan", detail: "Prioritise fixes by impact and effort; define the approach." },
  { step: "Implement", detail: "Build or configure the solution — using the right tools and AI to move faster." },
  { step: "Measure", detail: "Track the result against the original objective, not vanity metrics." },
  { step: "Improve", detail: "Iterate based on what the data shows after launch." },
];

const SKILLS = [
  {
    category: "SEO",
    tools: [
      { name: "Google Search Console", use: "Indexation monitoring, query analysis, and technical issue diagnosis." },
      { name: "SEMrush", use: "Keyword research, competitor analysis, and domain-level SEO opportunities." },
      { name: "Ahrefs", use: "Backlink analysis, content gap research, and rank tracking." },
      { name: "Screaming Frog", use: "Technical crawls — broken links, redirects, metadata, and site structure audits." },
      { name: "Google Merchant Center", use: "Product feed health and Shopping visibility for e-commerce SEO." },
    ],
  },
  {
    category: "Analytics",
    tools: [
      { name: "GA4", use: "Advanced e-commerce tracking, funnels, and cross-domain measurement." },
      { name: "Google Tag Manager (client & server-side)", use: "First-party tracking accuracy and data-privacy-compliant measurement." },
      { name: "Looker Studio", use: "Performance dashboards for stakeholder reporting." },
      { name: "Microsoft Clarity", use: "Session recordings and heatmaps for CRO diagnosis." },
    ],
  },
  {
    category: "E-commerce",
    tools: [
      { name: "Shopify", use: "Store management, theme customization, and product/collection optimization." },
      { name: "Google Merchant Center", use: "Product feed structure and Shopping campaign readiness." },
      { name: "GoKwik", use: "Checkout customization and cart-flow analysis." },
      { name: "Shiprocket", use: "Fulfilment and shipping operations context for e-commerce clients." },
    ],
  },
  {
    category: "Advertising",
    tools: [
      { name: "Google Ads", use: "Search, Shopping and Performance Max campaign management and ROAS optimization." },
      { name: "Meta Ads Manager", use: "Facebook/Instagram campaign management, retargeting, and creative performance analysis." },
    ],
  },
  {
    category: "Development",
    tools: [
      { name: "HTML / CSS / JavaScript", use: "Front-end fixes, theme customization, and site-side implementation." },
      { name: "Python / Flask", use: "Internal tools, automation scripts, and lightweight dashboards." },
      { name: "Git / GitHub", use: "Version control for code and configuration changes." },
      { name: "Render / Cloudflare", use: "Deployment and infrastructure for internal tools." },
    ],
  },
  {
    category: "AI",
    tools: [
      { name: "ChatGPT / Claude AI", use: "Research synthesis, coding assistance, debugging, and workflow automation — always validated before use." },
    ],
  },
];

const AI_WORKFLOWS = [
  {
    area: "Research",
    flow: ["AI", "Organize information", "Validate with reliable data"],
    note: "AI accelerates the first pass; the validation step is mine.",
  },
  {
    area: "SEO",
    flow: ["AI", "Generate research ideas", "Validate via GSC / SEMrush", "Build strategy"],
    note: "Ideas get tested against real search and traffic data before they become a plan.",
  },
  {
    area: "Development",
    flow: ["Problem", "AI-assisted investigation", "Code", "Test", "Debug", "Deploy"],
    note: "AI helps me move faster through unfamiliar territory — it doesn't skip testing.",
  },
  {
    area: "Content",
    flow: ["Research", "AI-assisted draft", "Factual validation", "SEO optimization", "Human review"],
    note: "Every draft is checked against facts and edited before it ships.",
  },
  {
    area: "Analytics",
    flow: ["Data", "AI-assisted interpretation", "Manual validation", "Business decision"],
    note: "AI helps me read patterns faster; the business call is still made by a person.",
  },
  {
    area: "Automation",
    flow: ["Trigger", "Logic", "API / Script", "Action", "Monitoring"],
    note: "Automations are built to be watched, not left to run blind.",
  },
];

const EXPERIENCE = [
  {
    company: "Neat Everyday (Mangalam Groups)",
    role: "Deputy SEO Manager",
    location: "Ahmedabad",
    dates: "Jan 2026 – Present",
    responsibilities: [
      "Lead integrated SEO and performance marketing strategy across multiple B2C client projects.",
      "Implemented GA4 advanced e-commerce tracking across multiple stores and cross-domain environments.",
      "Deployed server-side Google Tag Manager to improve first-party tracking accuracy and privacy compliance.",
      "Designed and optimized GA4 conversion funnels for e-commerce and lead generation.",
      "Delivered advanced reporting dashboards for C-level strategic decision-making.",
      "Managed and optimized Google Ads campaigns with custom performance reporting frameworks.",
      "Oversaw social media content strategy and paid advertising across Meta platforms.",
      "Began integrating AEO (Answer Engine Optimization) and schema markup for AI-driven search visibility.",
    ],
    achievement: "60%+ increase in organic traffic within the first months, via technical fixes, content strategy, and link building.",
    tools: ["GA4", "Server-side GTM", "Google Ads", "Meta Ads", "Schema markup", "Looker Studio"],
  },
  {
    company: "Equest Solutions",
    role: "Sr. SEO Analyst",
    location: "Ahmedabad",
    dates: "Jan 2025 – Nov 2025",
    responsibilities: [
      "Implemented GA4 advanced e-commerce tracking across multiple stores, including cross-domain environments.",
      "Deployed server-side GTM to improve first-party tracking accuracy and strengthen data privacy posture.",
      "Built and optimized GA4 conversion funnels for e-commerce and lead generation clients.",
      "Developed performance dashboards and analytics reports for data-driven client decisions.",
      "Managed and optimized Google Ads campaigns using custom reporting frameworks aligned to client KPIs.",
      "Executed technical SEO and analytics initiatives across multiple client projects simultaneously.",
    ],
    achievement: "25% improvement in client conversion rates through CRO, landing page optimization, and A/B testing.",
    tools: ["GA4", "Server-side GTM", "Google Ads", "CRO", "A/B Testing"],
  },
  {
    company: "ManekTech",
    role: "Sr. SEO Executive",
    location: "Ahmedabad",
    dates: "May 2023 – Mar 2024",
    responsibilities: [
      "Led SEO and analytics strategy for multiple internal websites.",
      "Deployed GA4 and GTM (client & server-side) for accurate conversion tracking and measurement.",
      "Improved landing page performance through CRO practices.",
      "Generated qualified leads via integrated SEO and paid campaigns (Google Ads & Meta Ads).",
      "Implemented technical SEO improvements — Core Web Vitals, site speed, structured data — reducing crawl errors.",
      "Delivered data-driven insights through GA4 dashboards and reports.",
    ],
    achievement: null,
    tools: ["GA4", "GTM", "Google Ads", "Meta Ads", "Core Web Vitals"],
  },
  {
    company: "Atlas Softweb Pvt Ltd",
    role: "Sr. Digital Marketing Executive",
    location: "Ahmedabad",
    dates: "Oct 2021 – Feb 2023",
    responsibilities: [
      "Developed and executed SEO and content strategies to improve keyword rankings and drive qualified conversions.",
      "Managed and optimized Google Ads, retargeting campaigns, and social media marketing.",
      "Created buyer personas and conversion funnels to enhance audience targeting.",
    ],
    achievement: "30% reduction in Cost Per Acquisition through audience segmentation and bid strategy optimization.",
    tools: ["Google Ads", "Retargeting", "SEO"],
  },
  {
    company: "Rivulet",
    role: "Sr. SEO Analyst",
    location: "Ahmedabad",
    dates: "Apr 2021 – Dec 2021",
    responsibilities: [
      "Led SEO campaigns targeting the USA market.",
      "Conducted comprehensive SEO audits and implemented technical fixes.",
      "Developed SEO content strategies and managed PPC campaigns (Google Ads & Meta Ads).",
    ],
    achievement: null,
    tools: ["SEO Audits", "Google Ads", "Meta Ads"],
  },
  {
    company: "Proactii",
    role: "Sr. SEO Executive",
    location: "Vapi",
    dates: "May 2020 – Oct 2021",
    responsibilities: [
      "Led e-commerce SEO and competitive strategy.",
      "Managed and optimized multi-channel paid campaigns (Google Ads, AdRoll, ShareChat).",
      "Improved conversion rates by aligning organic and paid strategies.",
    ],
    achievement: null,
    tools: ["E-commerce SEO", "Google Ads", "AdRoll"],
  },
  {
    company: "Xira Infotech",
    role: "SEO Executive",
    location: "Vapi",
    dates: "Mar 2018 – May 2020",
    responsibilities: [
      "Executed on-page and off-page SEO strategies.",
      "Optimized local SEO and Google Business Profile for local search presence.",
    ],
    achievement: null,
    tools: ["On-page SEO", "Local SEO", "GBP"],
  },
  {
    company: "Cears Infotech",
    role: "SEO Executive",
    location: "Surat",
    dates: "Apr 2017 – Mar 2018",
    responsibilities: [
      "Implemented on-page and off-page SEO initiatives, enhancing keyword rankings and organic traffic.",
    ],
    achievement: null,
    tools: ["On-page SEO", "Off-page SEO"],
  },
];

const EDUCATION = [
  { degree: "Master of Computer Applications (MCA)", school: "G.H. Patel College, Vidyanagar", year: "2016" },
  { degree: "Bachelor of Computer Applications (BCA)", school: "Rofel College, Vapi", year: "2013" },
];

const CERTIFICATIONS = [
  // [ADD CERTIFICATIONS] — none listed on resume yet
];

/* Projects — placeholders only. Replace with real case studies. */
const PROJECTS = [
  {
    slug: "neat-everyday-organic-growth",
    name: "Neat Everyday — Organic Traffic Growth",
    category: "SEO",
    summary: "Technical SEO, content and link-building program behind a 60%+ organic traffic increase.",
    challenge: "[ADD PROJECT DESCRIPTION — what was the starting state and business problem?]",
    role: "Deputy SEO Manager",
    tools: ["GA4", "Server-side GTM", "Google Search Console", "Schema markup"],
    approach: "[ADD APPROACH]",
    implementation: "[ADD IMPLEMENTATION DETAILS]",
    result: "60%+ increase in organic traffic within the first months.",
    learning: "[ADD KEY LEARNING]",
    screenshot: "",
  },
  {
    slug: "equest-cro-funnel",
    name: "Equest Solutions — Conversion Funnel Optimization",
    category: "Analytics",
    summary: "GA4 funnel rebuild and CRO testing program that lifted client conversion rates by 25%.",
    challenge: "[ADD PROJECT DESCRIPTION]",
    role: "Sr. SEO Analyst",
    tools: ["GA4", "Server-side GTM", "A/B Testing"],
    approach: "[ADD APPROACH]",
    implementation: "[ADD IMPLEMENTATION DETAILS]",
    result: "25% improvement in conversion rate.",
    learning: "[ADD KEY LEARNING]",
    screenshot: "",
  },
  {
    slug: "add-shopify-project",
    name: "[ADD PROJECT NAME]",
    category: "Shopify",
    summary: "[ADD PROJECT DESCRIPTION]",
    challenge: "[ADD PROJECT DESCRIPTION]",
    role: "[ADD ROLE]",
    tools: ["Shopify"],
    approach: "[ADD APPROACH]",
    implementation: "[ADD IMPLEMENTATION DETAILS]",
    result: "[ADD ACTUAL RESULT]",
    learning: "[ADD KEY LEARNING]",
    screenshot: "",
  },
  {
    slug: "add-ai-automation-project",
    name: "[ADD PROJECT NAME]",
    category: "AI",
    summary: "[ADD PROJECT DESCRIPTION]",
    challenge: "[ADD PROJECT DESCRIPTION]",
    role: "[ADD ROLE]",
    tools: ["AI-assisted workflow"],
    approach: "[ADD APPROACH]",
    implementation: "[ADD IMPLEMENTATION DETAILS]",
    result: "[ADD ACTUAL RESULT]",
    learning: "[ADD KEY LEARNING]",
    screenshot: "",
  },
];

const PROJECT_CATEGORIES = ["All", "SEO", "Shopify", "Analytics", "Marketing", "AI", "Automation", "Technical"];

/* SEO Lab topics — placeholders for future articles */
const SEO_LAB_TOPICS = [
  "Technical SEO", "Keyword Research", "Search Intent", "Keyword Cannibalization",
  "Internal Linking", "E-commerce SEO", "Schema", "Indexation",
  "Google Search Console", "Backlinks", "Competitor Analysis", "SEO Reporting",
];

/* Knowledge/blog articles — placeholders */
const ARTICLES = [
  {
    slug: "add-article-1",
    title: "[ADD ARTICLE TITLE]",
    category: "SEO",
    date: "",
    readingTime: "",
    excerpt: "[ADD ARTICLE SUMMARY]",
  },
  {
    slug: "add-article-2",
    title: "[ADD ARTICLE TITLE]",
    category: "AI",
    date: "",
    readingTime: "",
    excerpt: "[ADD ARTICLE SUMMARY]",
  },
];

const ARTICLE_CATEGORIES = ["All", "SEO", "Shopify", "Analytics", "Google Ads", "Meta Ads", "AI", "Automation", "E-commerce", "Technical"];

const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Skills & Tools", href: "skills.html" },
  { label: "AI & Automation", href: "ai-automation.html" },
  { label: "Projects", href: "projects.html" },
  { label: "SEO Lab", href: "seo-lab.html" },
  { label: "Knowledge", href: "knowledge.html" },
  { label: "Experience", href: "experience.html" },
  { label: "Contact", href: "contact.html" },
];
