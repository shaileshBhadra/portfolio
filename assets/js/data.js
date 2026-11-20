/* ============================================================
   DATA — single source of truth for the site.
   Edit this file to update content across every page.
   ============================================================ */

const PROFILE = {
  name: "Shailesh Bhadra",
  title: "Senior SEO & Digital Marketing Specialist",
  tagline: "SEO, Paid Media & Digital Marketing Specialist",
  subheading:
    "I help businesses solve SEO, analytics and digital growth problems — from technical issues and search visibility to tracking, conversion and acquisition. 9+ years across technical SEO, funnel strategy, GA4 and server-side GTM, Looker Studio, Google Ads and Meta Ads, content and AEO/GEO.",
  email: "shaileshbhadra@gmail.com",
  phone: "+91-9913392756",
  linkedin: "https://www.linkedin.com/in/bhadra-shailesh/",
  github: "", // [ADD GITHUB URL]
  location: "Ahmedabad, India — Open to Remote Roles",
  yearsExperience: "9+",
  resumeFile: "assets/Shailesh_Bhadra_Resume.pdf",
  photo: "", // [ADD PROFILE PHOTO]
  summary:
    "Senior SEO and digital marketing specialist with 9+ years across technical SEO, GA4 and server-side GTM, Looker Studio and Google Cloud API reporting, TOFU/MOFU/BOFU funnel strategy, Google and Meta Ads, and AEO/GEO. Worked on 50+ client websites across eCommerce, education, beauty and wellness, B2B manufacturing, pet products, home services and real estate, in India, the USA, the UK, Australia and the UAE. Has led and mentored SEO and paid-media teams of 2–3.",
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
    href: "/skills",
  },
  {
    tag: "SHOPIFY",
    title: "Shopify & E-commerce",
    description:
      "Store optimization, product pages, theme improvements, tracking and conversion.",
    href: "/work",
  },
  {
    tag: "ANALYTICS",
    title: "Analytics & Tracking",
    description:
      "GA4, GTM (client & server-side), GSC, Clarity, dashboards, attribution and conversion tracking.",
    href: "/skills",
  },
  {
    tag: "ADS",
    title: "Digital Marketing",
    description:
      "Google Ads, Meta Ads, campaign analysis, ROAS and performance optimization.",
    href: "/skills",
  },
  {
    tag: "DEV",
    title: "Technical Problem Solving",
    description: "APIs, scripts, integrations, debugging and practical digital solutions — with AI as a research and build accelerant, never a replacement for judgment.",
    href: "/about",
  },
];

const SKILLS = [
  {
    category: "SEO",
    tools: [
      { name: "Google Search Console", tier: "Free", use: "Indexation monitoring, query analysis, and technical issue diagnosis — the first-party source of truth for every audit." },
      { name: "SEMrush", tier: "Paid", use: "Keyword research, competitor analysis, site audits, and domain-level SEO opportunities." },
      { name: "Ahrefs", tier: "Paid", use: "Backlink analysis, content gap research, and rank tracking." },
      { name: "Ahrefs Webmaster Tools", tier: "Free", use: "Free-tier technical site audit and backlink checks for smaller sites and quick sanity checks." },
      { name: "Screaming Frog", tier: "Free & Paid", use: "Technical crawls — broken links, redirects, metadata, and site structure audits. Free tier covers up to 500 URLs; licensed for larger crawls." },
      { name: "Keyword Hero", tier: "Paid", use: "Recovering 'not provided' keyword data by matching GSC queries to GA4 sessions for more accurate keyword-level attribution." },
      { name: "Google Keyword Planner", tier: "Free", use: "Baseline search volume and CPC data for keyword research and paid/organic overlap." },
      { name: "Google Trends", tier: "Free", use: "Seasonality checks and rising-query discovery to time content and campaign pushes." },
      { name: "Bing Webmaster Tools", tier: "Free", use: "Indexing on Bing — increasingly relevant since Bing's index feeds Microsoft Copilot's answers." },
      { name: "PageSpeed Insights / Lighthouse", tier: "Free", use: "Core Web Vitals diagnostics, lab + field data, ahead of performance fixes." },
      { name: "Schema Markup Validator / Rich Results Test", tier: "Free", use: "Validating structured data before and after deployment to catch schema errors that block rich results." },
      { name: "Google Merchant Center", tier: "Free", use: "Product feed health and Shopping visibility for e-commerce SEO." },
    ],
  },
  {
    category: "Analytics",
    tools: [
      { name: "GA4", tier: "Free", use: "Advanced e-commerce tracking, funnels, and cross-domain measurement." },
      { name: "Google Tag Manager (client & server-side)", tier: "Free", use: "First-party tracking accuracy and data-privacy-compliant measurement." },
      { name: "Looker Studio", tier: "Free", use: "Performance dashboards for stakeholder reporting, blending GA4, Ads and Search Console data." },
      { name: "Google Cloud APIs (GA4, Search Console, YouTube)", tier: "Free", use: "Custom reports pulled directly from the GA4, Search Console and YouTube APIs when standard connectors fall short." },
      { name: "Microsoft Clarity", tier: "Free", use: "Session recordings and heatmaps for CRO diagnosis." },
    ],
  },
  {
    category: "E-commerce",
    tools: [
      { name: "Shopify", tier: "Paid", use: "Store management, theme customization, and product/collection optimization." },
      { name: "Google Merchant Center", tier: "Free", use: "Product feed structure and Shopping campaign readiness." },
      { name: "GoKwik", tier: "Paid", use: "Checkout customization and cart-flow analysis." },
      { name: "Shiprocket", tier: "Paid", use: "Fulfilment and shipping operations context for e-commerce clients." },
    ],
  },
  {
    category: "Advertising",
    tools: [
      { name: "Google Ads", tier: "Paid", use: "Search, Display, Shopping and Performance Max campaign management and ROAS optimization." },
      { name: "Meta Ads Manager", tier: "Paid", use: "Facebook/Instagram campaign management, retargeting, and creative performance analysis." },
      { name: "ShareChat Ads and AdRoll", tier: "Paid", use: "Regional-language reach and retargeting campaigns, run at Atlas Softweb and Proactii." },
      { name: "Meta Conversions API", tier: "Free", use: "Server-side event delivery to recover conversions lost to browser/iOS tracking restrictions and Meta's 2026 attribution changes." },
    ],
  },
  {
    category: "Development",
    tools: [
      { name: "HTML / CSS / JavaScript", tier: "Free", use: "Front-end fixes, theme customization, and site-side implementation." },
      { name: "Python / Flask", tier: "Free", use: "Internal tools, automation scripts, and lightweight dashboards." },
      { name: "Git / GitHub", tier: "Free", use: "Version control for code and configuration changes." },
      { name: "Render / Cloudflare", tier: "Free & Paid", use: "Deployment and infrastructure for internal tools." },
      { name: "Cross-browser & Functional QA Testing", tier: "—", use: "Manual functional and cross-browser testing on every build and deploy, plus basic Android app QA passes — integrated into implementation work, not a standalone QA role." },
      { name: "CMS Platforms (WordPress, Shopify + others)", tier: "—", use: "Building, editing and troubleshooting on WordPress and Shopify, and adapting quickly to other CMS/e-commerce platforms as client stacks require." },
    ],
  },
  {
    category: "AI Tools",
    tools: [
      { name: "ChatGPT", tier: "Free & Paid", use: "First-pass research, brainstorming content angles, and checking how a brand/topic currently gets described in AI answers." },
      { name: "Claude", tier: "Free & Paid", use: "Longer technical work — debugging code, drafting audits and reports, and reasoning through multi-step SEO/tracking problems." },
      { name: "Perplexity", tier: "Free & Paid", use: "Source-backed research with citations, and checking how a topic or brand is being surfaced in AI-native search." },
      { name: "Google Gemini", tier: "Free & Paid", use: "Quick checks inside the Google ecosystem, and testing how content performs in Google's own AI Overviews." },
      { name: "AI tools generally", tier: "—", use: "Used to speed up research and drafting, never as a substitute for validating data or judgment calls — every output is checked before it ships." },
    ],
  },
];


const EXPERIENCE = [
  {
    company: "Neat Everyday (Mangalam Groups)",
    role: "Deputy SEO Manager",
    location: "Ahmedabad",
    dates: "Jan 2026 – Present",
    responsibilities: [
      "Own SEO strategy for neateveryday.com, including TOFU, MOFU and BOFU funnel planning across content, landing pages and conversion paths.",
      "Increased organic traffic 60%+ since joining through technical fixes, content strategy and link building.",
      "Layering AEO and schema markup to improve visibility in AI-driven search.",
      "Building GA4 eCommerce funnels, Looker Studio dashboards and custom reports through Google Cloud APIs (GA4, Search Console, YouTube).",
      "Implemented server-side GTM for more accurate first-party tracking.",
      "Manage a ₹10L/month Meta and Google Ads budget alongside organic.",
    ],
    achievement: "60%+ increase in organic traffic since joining.",
    tools: ["GA4", "Server-side GTM", "Looker Studio", "Google Cloud APIs", "Schema markup", "Google Ads", "Meta Ads"],
  },
  {
    company: "Equest Solutions",
    role: "Sr. SEO Analyst",
    location: "Ahmedabad",
    dates: "Jan 2025 – Nov 2025",
    responsibilities: [
      "Built TOFU, MOFU and BOFU funnels and GA4 conversion tracking from scratch for unmeasured stores.",
      "Ran landing page optimization and A/B tests against the rebuilt funnel data.",
      "Ran Meta and Google paid media for Meal Prep Sunday Service, with SEO and paid media for clients in the USA, UK and Australia.",
      "Delivered SEO and paid media for HEALiX Infrared and Security Risk Specialists (UK).",
      "Led and mentored a 2-person team.",
    ],
    achievement: "25% conversion improvement in the first quarter.",
    tools: ["GA4", "Server-side GTM", "A/B Testing", "CRO", "Google Ads", "Meta Ads"],
  },
  {
    company: "Rivulet",
    role: "Sr. SEO Analyst",
    location: "Ahmedabad",
    dates: "Mar 2024 – Jan 2025",
    responsibilities: [
      "Diagnosed and fixed tracking and technical SEO issues across Shopify, WordPress, BigCommerce, React and Vue.js sites for US-based projects.",
      "Set up GTM tracking, custom tracking events, and Meta Ads and Google Ads conversion tracking so paid campaigns could be measured accurately.",
    ],
    achievement: null,
    tools: ["Technical SEO audits", "GTM", "Custom events", "Meta Ads tracking", "Google Ads tracking", "Shopify", "WordPress", "BigCommerce", "React", "Vue.js"],
  },
  {
    company: "ManekTech",
    role: "Sr. SEO Executive",
    location: "Ahmedabad",
    dates: "May 2023 – Mar 2024",
    responsibilities: [
      "Led SEO, analytics and TOFU, MOFU and BOFU funnels for lead-generation sites of a Texas-based client and sister sites.",
      "Deployed GA4 and GTM (client and server-side) for conversion tracking.",
      "Ran technical SEO work: Core Web Vitals, site speed, structured data and crawl-error fixes.",
      "Led a 3-person team.",
    ],
    achievement: null,
    tools: ["GA4", "GTM", "Funnel strategy", "Core Web Vitals", "Technical SEO"],
  },
  {
    company: "Atlas Softweb Pvt Ltd",
    role: "Sr. Digital Marketing Executive",
    location: "Ahmedabad",
    dates: "Oct 2021 – Feb 2023",
    responsibilities: [
      "Led a 3-person team across SEO, paid media and content writing, coordinating with design and development.",
      "Ran paid media for St. Xavier's College and Nirma University.",
      "Delivered SEO and paid media (Meta Ads, Google Search and Display Ads, ShareChat, AdRoll) for Australian and US brands including Salty Crush, Bakslap, Kidney C.O.P., Glitzy Girlz and The Laundry Lady.",
      "Delivered SEO for The Dog Bakery and Rocky Kanaka.",
    ],
    achievement: "30% CPA reduction within two quarters.",
    tools: ["Google Ads", "Retargeting", "SEO", "Content strategy"],
  },
  {
    company: "Proactii",
    role: "Sr. SEO Executive",
    location: "Vapi",
    dates: "Jul 2020 – Jul 2021",
    responsibilities: [
      "Grew Kesariya Farm, a B2C A2 cow-milk brand delivering across India, from ₹50K to ₹5L monthly revenue in 7 months.",
      "Ran Google Ads and Meta Ads campaigns alongside organic SEO on the same account.",
      "Delivered SEO for FG Glass, a Mumbai architectural-glass manufacturer serving commercial projects.",
    ],
    achievement: "₹50K to ₹5L monthly revenue in 7 months (Kesariya Farm).",
    tools: ["SEO", "Google Ads", "Meta Ads"],
  },
  {
    company: "Xira Infotech",
    role: "SEO Executive",
    location: "Vapi",
    dates: "Mar 2018 – May 2020",
    responsibilities: [
      "Executed on-page and off-page SEO for VitaWIN, Miracle Beauty Salon (Atlanta), Bombay Salon & Spa and Neo Paints.",
      "Optimized local SEO and Google Business Profile for salon clients, targeting local and nearby-area search.",
    ],
    achievement: null,
    tools: ["On-page SEO", "Off-page SEO", "Local SEO", "GBP"],
  },
  {
    company: "Cears Infotech",
    role: "SEO Executive",
    location: "Surat",
    dates: "Apr 2017 – Mar 2018",
    responsibilities: [
      "Implemented on-page and off-page SEO initiatives to improve keyword rankings and organic traffic.",
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

/* Projects — real work only, drawn from confirmed resume facts.
   Add more entries here as full case studies are documented;
   incomplete entries are intentionally left out rather than
   shown with placeholder text. */
const PROJECTS = [
  {
    slug: "neat-everyday-organic-growth",
    name: "Neat Everyday — Organic Growth, Funnels and Custom Reporting",
    role: "Deputy SEO Manager",
    company: "Neat Everyday (Mangalam Groups)",
    summary: "Full-funnel SEO, AEO and reporting ownership for neateveryday.com, a D2C Ayurvedic wellness store.",
    challenge: "One store, one brand, and one person owning organic, paid and reporting. Search growth had to be built alongside accurate measurement and a funnel that moved visitors from discovery to purchase.",
    approach: "Started with measurement: GA4 eCommerce tracking and server-side GTM, so decisions rested on first-party data. Then mapped the content and landing pages to TOFU, MOFU and BOFU stages.",
    implementation: "Technical SEO fixes, content and internal-linking strategy, link building, schema markup and early AEO work. Built Looker Studio dashboards and custom reports through Google Cloud APIs for GA4, Search Console and YouTube. Manage a ₹10L/month Meta and Google Ads budget alongside organic.",
    result: "60%+ increase in organic traffic since joining.",
    learning: "Measurement has to come before optimization. You can't reliably improve what you can't attribute.",
    why: "Fixing tracking first meant every later SEO, content and funnel decision was judged against real numbers.",
    next: "Expand schema and AEO coverage as AI-driven search becomes a larger share of discovery.",
    tools: ["GA4", "Server-side GTM", "Looker Studio", "Google Cloud APIs", "Schema markup", "AEO", "Funnel strategy"],
  },
  {
    slug: "kesariya-farm-growth",
    name: "Kesariya Farm — From ₹50K to ₹5L Monthly Revenue",
    role: "Sr. SEO Executive",
    company: "Proactii",
    summary: "SEO plus Google Ads and Meta Ads on one account for a B2C A2 cow-milk brand delivering across India.",
    challenge: "A niche B2C A2 milk brand shipping to customers all over India, wherever delivery was possible, needed to be found by buyers searching for it and reached by people who didn't yet know the category.",
    approach: "Treated organic and paid as one system rather than two channels, so search demand and paid reach supported each other.",
    implementation: "Ran SEO, Google Ads and Meta Ads campaigns together on the same account.",
    result: "Monthly revenue grew from ₹50K to ₹5L in 7 months.",
    learning: "Paid and organic work better when one person owns both and can see where each one is picking up the other's demand.",
    why: "Running both on one account kept targeting, messaging and landing pages consistent.",
    next: "Add funnel-stage content and tracking to see which stage drives repeat orders.",
    tools: ["SEO", "Google Ads", "Meta Ads", "eCommerce"],
  },
  {
    slug: "equest-cro-funnel",
    name: "Equest Solutions — Building Funnels and Tracking from Scratch",
    role: "Sr. SEO Analyst",
    company: "Equest Solutions",
    summary: "TOFU, MOFU and BOFU funnels, GA4 conversion tracking and CRO for client stores that had no measurement.",
    challenge: "Several client stores had no reliable conversion measurement, so nobody could say which part of the journey was losing customers.",
    approach: "Built GA4 conversion tracking and mapped each store's journey into TOFU, MOFU and BOFU stages before testing anything.",
    implementation: "Funnel and tracking build, then landing page optimization and A/B tests validated against the new funnel data. Led a 2-person team.",
    result: "25% conversion improvement in the first quarter.",
    learning: "Most CRO gains come from fixing measurement first. Once funnel data was trustworthy, the right tests became obvious.",
    why: "Tests are only as good as the data behind them.",
    next: "Apply the same funnel-before-testing step to every new account.",
    tools: ["GA4", "Server-side GTM", "Funnel strategy", "A/B Testing", "CRO"],
  },
  {
    slug: "atlas-paid-media",
    name: "Atlas Softweb — Paid Media and Content Across Education, eCommerce and Services",
    role: "Sr. Digital Marketing Executive",
    company: "Atlas Softweb",
    summary: "Led a 3-person SEO, paid media and content team. Paid media for St. Xavier's College and Nirma University; SEO and paid media for Australian and US brands.",
    challenge: "Different clients needed different mixes: education institutions needed paid acquisition only, while brands in Australia and the US needed SEO and paid media together, and pet and personal-brand sites needed SEO.",
    approach: "Split work by client need. Paid media only for the two education institutions. SEO plus paid media for Salty Crush, Bakslap, Kidney C.O.P., Glitzy Girlz (USA) and The Laundry Lady, with Meta Ads, Google Search and Display Ads, ShareChat and AdRoll. SEO for The Dog Bakery and Rocky Kanaka.",
    implementation: "Audience segmentation, bid strategy and retargeting on Google Ads, Meta Ads, ShareChat and AdRoll, with SEO and content briefs run by the team's content writer, coordinating with design and development.",
    result: "30% CPA reduction within two quarters.",
    learning: "Audience segmentation and bid strategy usually move CPA faster than creative changes alone.",
    why: "Segmenting audiences stopped budget being spent on the lowest-intent clicks.",
    next: "Add funnel-stage reporting so content and paid performance are read together.",
    tools: ["Google Ads", "Retargeting", "SEO", "Content strategy", "Team leadership"],
  },
  {
    slug: "manektech-lead-gen-funnels",
    name: "ManekTech — Lead-Generation Funnels for a Texas-Based Client",
    role: "Sr. SEO Executive",
    company: "ManekTech",
    summary: "SEO, analytics and TOFU, MOFU and BOFU funnels for lead-generation sites of a Texas-based client and its sister sites.",
    challenge: "Lead-generation sites need more than traffic. Visitors had to move from awareness to enquiry and be measurable at each step.",
    approach: "Mapped content and landing pages to funnel stages and set up conversion tracking so each stage could be read separately.",
    implementation: "Deployed GA4 and GTM (client and server-side), Core Web Vitals and site speed work, structured data and crawl-error fixes. Led a 3-person team.",
    result: "Lead-generation funnels with end-to-end conversion tracking across the client's sites.",
    learning: "A funnel is only useful if every stage is tracked.",
    why: "Stage-level tracking shows where leads drop off, not just how many arrive.",
    next: "Feed funnel-stage data into reporting dashboards for the client team.",
    tools: ["GA4", "GTM", "Funnel strategy", "Technical SEO", "Core Web Vitals"],
  },
  {
    slug: "rivulet-tracking-and-audits",
    name: "Rivulet — Fixing Tracking and Technical Issues Across Shopify, WordPress, BigCommerce, React and Vue.js",
    role: "Sr. SEO Analyst",
    company: "Rivulet",
    summary: "Tracking and technical SEO problem-solving across five platforms, including GTM, custom events, and Meta and Google Ads conversion tracking.",
    challenge: "US client sites on Shopify, WordPress, BigCommerce, React and Vue.js had broken or missing tracking and technical SEO issues. Paid campaigns couldn't be judged and organic problems went undiagnosed.",
    approach: "Audited each site for technical SEO problems, then checked what GTM, GA4, Meta and Google Ads were actually recording against what should have been tracked.",
    implementation: "Resolved the technical issues found, set up GTM tracking and custom tracking events, and implemented Meta Ads and Google Ads conversion tracking on each platform, including JavaScript-framework sites where standard tags don't fire correctly.",
    result: "Technical audits delivered, issues resolved, and working GTM, custom-event, Meta Ads and Google Ads tracking across the US-based projects handled.",
    learning: "Platforms break tracking in different ways. Shopify, WordPress and BigCommerce need different fixes from client-rendered React and Vue.js sites.",
    why: "Paid and organic results can only be trusted once the tracking underneath them is verified on every platform.",
    next: "Turn each audit into an ongoing SEO and paid media roadmap built on the verified data.",
    tools: ["GTM", "Custom event tracking", "Meta Ads tracking", "Google Ads tracking", "Technical SEO audits", "Shopify", "WordPress", "BigCommerce", "React", "Vue.js"],
  },
];

/* Case studies are the PROJECTS above (real engagements, verified facts only). */
const CASE_STUDIES = [];

/* Client work — real sites worked on, mapped to employer and the services delivered.
   No performance figures are shown here; only what was actually done. */
const CLIENT_WORK = [
  { name: "Neat Everyday", url: "https://www.neateveryday.com/", employer: "Neat Everyday", sector: "D2C Ayurvedic wellness", services: ["SEO", "Paid Media", "Funnels", "Reporting"] },
  { name: "Kesariya Farm", url: "https://kesariyafarm.com/", employer: "Proactii", sector: "A2 cow-milk brand · B2C eCommerce delivering across India", market: "Pan-India", services: ["SEO", "Google Ads", "Meta Ads"] },
  { name: "FG Glass", url: "https://fgglass.com/", employer: "Proactii", sector: "Architectural glass, Mumbai", services: ["SEO"] },
  { name: "Meal Prep Sunday Service", url: "https://mealprepsundayservice.com/", employer: "Equest Solutions", sector: "Meal prep", services: ["Paid Media"] },
  { name: "HEALiX Infrared", url: "https://www.healixinfrared.com/", employer: "Equest Solutions", sector: "Infrared wellness, Shopify", market: "USA", services: ["SEO", "Paid Media"] },
  { name: "Security Risk Specialists", url: "https://srslondon.co.uk/", employer: "Equest Solutions", sector: "Security services", market: "UK", services: ["SEO", "Paid Media"] },
  { name: "St. Xavier's College", url: "https://sxca.edu.in/", employer: "Atlas Softweb", sector: "Education", services: ["Paid Media"] },
  { name: "Nirma University", url: "https://nirmauni.ac.in/", employer: "Atlas Softweb", sector: "Education", services: ["Paid Media"] },
  { name: "Salty Crush", url: "https://saltycrush.com/", employer: "Atlas Softweb", sector: "Fashion", market: "Australia", services: ["SEO", "Paid Media"] },
  { name: "Bakslap", url: "https://bakslap.com/", employer: "Atlas Softweb", sector: "Skincare tools", market: "Australia", services: ["SEO", "Paid Media"] },
  { name: "The Laundry Lady", url: "https://thelaundrylady.com.au/", employer: "Atlas Softweb", sector: "Home services", market: "Australia", services: ["SEO", "Paid Media"] },
  { name: "Kidney C.O.P.", url: "https://kidneycop.com/", employer: "Atlas Softweb", sector: "Supplements", market: "USA", services: ["SEO", "Paid Media"] },
  { name: "Glitzy Girlz", url: "https://www.glitzygirlz.com/", employer: "Atlas Softweb", sector: "Fashion eCommerce", market: "USA", services: ["SEO", "Meta Ads", "Google Search Ads", "Display Ads"] },
  { name: "The Dog Bakery", url: "https://www.thedogbakery.com/", employer: "Atlas Softweb", sector: "Pet products", services: ["SEO"] },
  { name: "Rocky Kanaka", url: "https://rockykanaka.com/", employer: "Atlas Softweb", sector: "Pet products", services: ["SEO"] },
  { name: "VitaWIN", url: "https://vitawin.co.in/", employer: "Xira Infotech", sector: "Health and wellness", services: ["SEO"] },
  { name: "Miracle Beauty Salon", url: "https://miraclebeautysalonatl.com/", employer: "Xira Infotech", sector: "Beauty salon", market: "Atlanta, USA · local & nearby area", services: ["Local SEO", "Google Business Profile"] },
  { name: "Bombay Salon & Spa", url: "https://bombaysalonspa.com/", employer: "Xira Infotech", sector: "Salon and spa", market: "Local & nearby area", services: ["Local SEO", "Google Business Profile"] },
  { name: "Neo Paints", url: "https://www.neopaints.co.in/", employer: "Xira Infotech", sector: "B2B paints manufacturer", services: ["SEO"] },
];

/* Six-step framework — shared by the homepage teaser and Approach
   page section 02. Each step is intentionally one sentence. */

const PROCESS_STEPS = [
  { n: "01", title: "Understand", subtitle: "Business & Growth Context", copy: "Understand the business model, target audience, commercial priorities and what success actually means." },
  { n: "02", title: "Diagnose", subtitle: "Audit the Current System", copy: "Analyse technical SEO, search performance, analytics, tracking, content, paid media and conversion behaviour." },
  { n: "03", title: "Prioritise", subtitle: "Find What Matters Most", copy: "Separate high-impact opportunities from low-value tasks using business impact, opportunity, confidence and implementation effort." },
  { n: "04", title: "Plan", subtitle: "Build the Roadmap", copy: "Turn findings into a practical roadmap with clear priorities, dependencies, owners and measurable outcomes." },
  { n: "05", title: "Implement", subtitle: "Execute & Validate", copy: "Work with development, content, design and marketing teams to implement changes and validate that they work as expected." },
  { n: "06", title: "Measure", subtitle: "Prove the Outcome", copy: "Track visibility, traffic, engagement, leads, transactions and revenue to understand whether the work created meaningful business value." },
];

/* ============================================================
   CONSULTING SITE — homepage, services.html, insights.html,
   contact.html content. Repositions the site from portfolio to
   SEO/Analytics/Growth consulting. No invented results anywhere:
   category labels and real project links stand in for metrics
   that aren't publicly available.
   ============================================================ */

const TRUST_STRIP = [
  { value: "9+ Years", label: "SEO & Digital Marketing" },
  { value: "50+ Websites", label: "eCommerce · Education · B2B · Services" },
  { value: "Markets", label: "India · USA · UK · UAE · Australia" },
  { value: "Full-Funnel", label: "SEO · Analytics · Paid Media · Content" },
];

const PROBLEM_CARDS_INTRO = "Most digital problems don't start with a lack of tools. They start with not knowing what is actually wrong.";

const PROBLEM_CARDS = [
  { title: "Organic traffic isn't growing.", copy: "Technical issues, content gaps, search intent, competition or changing demand may be hiding the real problem.", ctaLabel: "Explore SEO →", ctaHref: "/services#technical-seo" },
  { title: "Your data can't be trusted.", copy: "GA4, GTM, advertising platforms and business data don't tell the same story.", ctaLabel: "Explore Analytics →", ctaHref: "/services#ga4-gtm" },
  { title: "Traffic isn't becoming leads.", copy: "You have visibility, but the visitors aren't taking the actions that matter.", ctaLabel: "Explore Conversion →", ctaHref: "/services#conversion-tracking" },
  { title: "You don't know what to fix first.", copy: "Your audit has dozens of recommendations but no clear business priority.", ctaLabel: "Explore Strategy →", ctaHref: "/approach#prioritize" },
  { title: "Your SEO work isn't moving the business.", copy: "You have rankings, reports and activity — but no clear connection between SEO work and leads, revenue or meaningful business outcomes.", ctaLabel: "Explore Growth →", ctaHref: "/approach" },
  { title: "Your site has grown faster than its structure.", copy: "New pages, products or markets have created technical debt, weak architecture or competing URLs that make search performance harder to scale.", ctaLabel: "Explore Technical SEO →", ctaHref: "/services#technical-seo" },
];

const WHAT_I_BRING = [
  { title: "Diagnose", copy: "Find the technical, search, measurement or acquisition problems limiting performance." },
  { title: "Prioritize", copy: "Separate high-impact opportunities from issues that simply look important in an audit." },
  { title: "Execute", copy: "Turn strategy into implementation across SEO, analytics, tracking, content and paid acquisition." },
  { title: "Measure", copy: "Connect the work to the metrics that matter — visibility, qualified traffic, leads, conversions and revenue." },
  { title: "Improve", copy: "Use performance data to refine the strategy, identify the next opportunity and keep growth moving." },
];

const HOME_PROCESS_STEPS = [
  { n: "01", title: "Understand", copy: "Start with the business, customer, market and growth objective." },
  { n: "02", title: "Diagnose", copy: "Find what is actually limiting performance." },
  { n: "03", title: "Prioritize", copy: "Focus resources on opportunities with the highest potential impact." },
  { n: "04", title: "Strategize", copy: "Turn findings into a practical roadmap." },
  { n: "05", title: "Execute", copy: "Move recommendations into implementation." },
  { n: "06", title: "Measure", copy: "Connect changes to meaningful performance metrics." },
  { n: "07", title: "Improve", copy: "Learn from the data and identify the next opportunity." },
];

const CAPABILITIES = [
  { title: "Technical SEO", items: ["Technical audits", "Crawling & indexation", "Site architecture", "Core Web Vitals", "Structured data", "Migration SEO"] },
  { title: "SEO Strategy", items: ["Search strategy", "Keyword research", "Competitor analysis", "Content opportunities", "SEO roadmaps", "Growth planning"] },
  { title: "Analytics & Measurement", items: ["GA4", "Google Tag Manager", "Google Search Console", "Conversion tracking", "Measurement QA", "Data validation"] },
  { title: "Paid Media", items: ["Google Search & Display Ads", "Meta Ads", "ShareChat & AdRoll", "Retargeting", "Landing-page analysis", "Conversion performance"] },
  { title: "eCommerce", items: ["eCommerce SEO", "Product visibility", "Google Merchant Center", "Product feeds", "Search performance", "eCommerce measurement"] },
  { title: "Reporting & Growth", items: ["Looker Studio dashboards", "Google Cloud API reports", "TOFU, MOFU, BOFU funnels", "Stakeholder reporting", "Opportunity analysis", "Prioritization"] },
];

const WHO_WORK_WITH = [
  { title: "Growth-Stage Companies", copy: "Teams that need experienced SEO and growth thinking without adding unnecessary layers." },
  { title: "Agencies", copy: "Teams that need senior delivery capability for complex SEO, analytics or performance accounts." },
  { title: "eCommerce Businesses", copy: "Businesses that need search visibility, measurement and conversion performance working together." },
  { title: "Education & Services", copy: "Institutions and service businesses that need paid acquisition, local SEO and lead-generation funnels." },
];

/* Full service catalogue — services.html renders all 9.
   Homepage renders a curated subset (see HOME_SERVICE_SLUGS). */
const SERVICES = [
  {
    slug: "technical-seo",
    name: "Technical SEO",
    category: "Technical SEO",
    outcomes: ["Faster, cleaner crawling", "More pages properly indexed", "Fewer duplicate/thin-content flags", "A site structure that scales"],
    short: "Find and fix the technical barriers affecting crawling, indexing, architecture and search visibility.",
    headline: "Find what's preventing your website from being understood by search engines.",
    copy: "Technical SEO is the infrastructure behind search visibility. I identify and prioritise issues affecting crawling, indexation, architecture, internal linking and search accessibility.",
    includes: ["Crawlability", "Indexation", "Canonicalisation", "Redirects", "Sitemaps", "Robots.txt", "JavaScript SEO", "Internal linking", "Structured data", "Core Web Vitals", "Migration support"],
    deliverable: "Prioritised technical roadmap with implementation guidance.",
    whoFor: "Sites with crawl, indexation or architecture problems capping otherwise-solid content.",
    ctaLabel: "See Related Work",
    caseStudySlug: "neat-everyday-organic-growth",
  },
  {
    slug: "seo-audit",
    name: "SEO Audit",
    category: "Technical SEO",
    outcomes: ["A ranked priority list, not 100 flat items", "Clarity on what to fix first", "A defensible plan to show stakeholders", "No wasted effort on low-impact fixes"],
    short: "A prioritised audit that tells you what matters, why it matters, and what to do next — not a 100-item checklist.",
    headline: "Stop guessing what is wrong with your SEO.",
    copy: "A useful SEO audit should not be a list of 100 problems. It should explain what matters, why it matters and what should happen next.",
    includes: ["Technical SEO", "Search Console", "Content", "On-page", "Architecture", "Internal linking", "Competitors", "Search intent", "Conversion opportunities"],
    deliverable: "Prioritised audit + action roadmap.",
    whoFor: "Businesses that need clarity before investing in ongoing SEO.",
    ctaLabel: "Request an SEO Audit",
    caseStudySlug: "rivulet-tracking-and-audits",
  },
  {
    slug: "seo-strategy",
    name: "SEO Strategy",
    category: "Strategy",
    outcomes: ["A roadmap tied to business impact", "Keyword targets worth the effort", "Clear content and technical priorities", "A plan you can actually execute"],
    short: "Turn search demand, competition and business priorities into a practical SEO roadmap.",
    headline: "Turn search opportunity into a practical growth roadmap.",
    copy: "Strategy that starts with the business, not a keyword list — so the roadmap reflects what will actually move revenue, not just rankings.",
    includes: ["Business analysis", "Keyword research", "Search intent", "Competitor analysis", "Content opportunities", "Information architecture", "Internal linking", "Technical priorities", "Conversion opportunities", "Measurement"],
    deliverable: "Prioritised SEO roadmap.",
    whoFor: "Teams that have data but no clear plan for what to do with it.",
    ctaLabel: "Build My SEO Strategy",
    caseStudySlug: "atlas-paid-media",
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    category: "Strategy",
    outcomes: ["Content built around real search intent", "Fewer pages competing with each other", "Briefs your writers can actually use", "Content that supports conversion, not just traffic"],
    short: "Create content because your audience needs it — not simply because a keyword tool suggested it.",
    headline: "Create content your audience actually needs.",
    copy: "Content should solve a real problem, demonstrate expertise and support the customer journey — not simply exist because a keyword has search volume.",
    includes: ["Search intent", "Topic research", "Content gaps", "Content briefs", "Content optimisation", "Topic clusters", "Commercial content", "Expert-led content"],
    deliverable: "Prioritised content roadmap with briefs.",
    whoFor: "Sites publishing content that isn't ranking or converting.",
    ctaLabel: "See Related Work",
    caseStudySlug: "kesariya-farm-growth",
  },
  {
    slug: "ga4-gtm",
    name: "GA4 & GTM",
    category: "Analytics",
    outcomes: ["GA4 numbers you can trust", "Clean, documented tag setup", "Fewer discrepancies vs Ads/CRM", "A tracking QA process going forward"],
    short: "Build a measurement system you can actually trust.",
    headline: "Build a measurement system you can trust.",
    copy: "Most 'attribution problems' are broken or duplicated tags, not modeling issues. I audit the measurement layer end to end before touching strategy.",
    includes: ["GA4 audit", "GTM audit", "Events", "Parameters", "Conversions", "Data layer", "Cross-domain tracking", "Ecommerce tracking", "Tracking QA", "Documentation"],
    deliverable: "Documented, auditable tracking setup.",
    whoFor: "Teams whose GA4, Ads and CRM numbers don't agree.",
    ctaLabel: "Fix My Analytics",
    caseStudySlug: "rivulet-tracking-and-audits",
  },
  {
    slug: "conversion-tracking",
    name: "Conversion Tracking",
    category: "Analytics",
    outcomes: ["Every meaningful action captured as an event", "Clear channel-level attribution", "Confidence in what's actually converting", "A foundation for smarter budget decisions"],
    short: "Know what happens after someone finds your website.",
    headline: "Know what happens after someone finds your website.",
    copy: "Forms, calls, WhatsApp clicks, bookings and purchases all need to be captured as real events — not assumed from session counts.",
    includes: ["Forms", "Calls", "WhatsApp", "Email clicks", "Bookings", "Purchases", "Sign-ups", "Downloads", "Key interactions"],
    deliverable: "Verified, event-level conversion tracking.",
    whoFor: "Businesses that can't currently say which channel drove a lead.",
    ctaLabel: "Set Up Conversion Tracking",
    caseStudySlug: "manektech-lead-gen-funnels",
  },
  {
    slug: "ecommerce-seo",
    name: "eCommerce SEO",
    category: "eCommerce",
    outcomes: ["Cleaner, indexable category structure", "Less thin/duplicate product content", "Better commercial-intent visibility", "A roadmap prioritised by revenue impact"],
    short: "Improve visibility across category, product and commercial search while removing technical barriers to discovery.",
    headline: "Turn product discovery into organic growth.",
    copy: "Faceted navigation, duplicate variants and thin category templates are the most common ceilings on e-commerce organic growth — usually one root cause, not hundreds of individual page problems.",
    includes: ["Category architecture", "Product pages", "Faceted navigation", "Indexation", "Internal linking", "Structured data", "Search Console analysis", "Commercial intent", "Conversion analysis"],
    deliverable: "Prioritised e-commerce SEO roadmap.",
    whoFor: "Online stores with index bloat, thin PDPs, or stalled category rankings.",
    ctaLabel: "See Related Work",
    caseStudySlug: "kesariya-farm-growth",
  },
  {
    slug: "google-ads",
    name: "Google Ads",
    category: "Paid Media",
    outcomes: ["Account structure aligned to real intent", "Verified conversion tracking", "Spend judged by outcomes, not vanity ROAS", "A prioritised list of account fixes"],
    short: "Connect paid search to measurable outcomes, not platform-reported vanity metrics.",
    headline: "Connect paid search to measurable outcomes.",
    copy: "Performance Max and automated bidding still need real signal quality behind them. I audit account structure and tracking before touching budget.",
    includes: ["Account audit", "Campaign structure", "Search terms", "Conversion tracking", "Landing pages", "Performance analysis", "Budget allocation"],
    deliverable: "Account audit + prioritised fix list.",
    whoFor: "Accounts where reported ROAS and real business results have drifted apart.",
    ctaLabel: "See Related Work",
    caseStudySlug: "atlas-paid-media",
  },
  {
    slug: "seo-analytics-consulting",
    name: "SEO & Analytics Strategy",
    category: "Strategy",
    outcomes: ["A clear channel plan tied to business goals", "Regular reviews of SEO, paid and tracking data", "Faster unblocking of technical issues", "Reports leadership can act on"],
    short: "Owning SEO and analytics strategy for a team: planning, reviewing the data and unblocking the work.",
    headline: "Own the strategy, then follow it through.",
    copy: "In a team, I set the SEO and analytics plan, review results with the data, and unblock technical work with developers, writers and designers. Roadmaps are checked against the numbers so priorities change when the data does.",
    includes: ["Channel planning", "Technical review", "Analytics oversight", "Roadmap reviews", "Cross-team coordination", "Leadership reporting"],
    deliverable: "A working roadmap, regular performance reviews and clear reports.",
    whoFor: "Teams that need someone to own SEO and analytics strategy and coordinate the people doing the work.",
    ctaLabel: "See Related Work",
    caseStudySlug: "rivulet-tracking-and-audits",
  },
  {
    slug: "funnel-strategy",
    name: "Funnel Strategy (TOFU, MOFU, BOFU)",
    category: "Strategy",
    outcomes: ["Content and pages mapped to buyer stage", "Conversion tracking at every stage", "Clear view of where visitors drop off", "Reports your team can act on"],
    short: "Map content, landing pages and tracking to the awareness, consideration and decision stages.",
    headline: "Know which stage of the funnel is losing customers.",
    copy: "Build TOFU, MOFU and BOFU funnels where each stage has the right content, the right page and measurable conversion events, so growth decisions are based on stage-level data.",
    includes: ["TOFU, MOFU, BOFU mapping", "GA4 funnel exploration", "Conversion events", "Landing pages", "Looker Studio funnel reports", "A/B tests"],
    deliverable: "Funnel map with tracking plan and reporting dashboard.",
    whoFor: "eCommerce and lead-generation sites that get traffic but can't see where it drops off.",
    ctaLabel: "See Related Work",
    caseStudySlug: "equest-cro-funnel",
  },
  {
    slug: "local-seo",
    name: "Local SEO & Google Business Profile",
    category: "Technical SEO",
    outcomes: ["Stronger local search presence", "Optimized Google Business Profile", "Consistent business information"],
    short: "Local search visibility for salons, home services and other location-based businesses.",
    headline: "Be found by customers searching nearby.",
    copy: "Optimize Google Business Profile, local pages and citations so location-based businesses show up for the searches that lead to calls and visits.",
    includes: ["Google Business Profile", "Local landing pages", "Citations", "Reviews", "On-page SEO"],
    deliverable: "Local SEO setup and ongoing optimization plan.",
    whoFor: "Salons, home services and other businesses that serve a local area.",
    ctaLabel: "See Related Work",
    caseStudySlug: "atlas-paid-media",
  },
  {
    slug: "meta-ads",
    name: "Meta Ads & Paid Social",
    category: "Paid Media",
    outcomes: ["Campaigns tied to funnel stage", "Audience segmentation and retargeting", "Reporting tied to business goals"],
    short: "Meta Ads alongside Google Ads, run as part of one acquisition system.",
    headline: "Run paid social as part of the funnel.",
    copy: "Plan and run Meta Ads and retargeting alongside Google Ads and SEO, with tracking and reporting that show what each channel contributes.",
    includes: ["Meta Ads", "Audience segmentation", "Retargeting", "Creative testing", "Conversion tracking", "Reporting"],
    deliverable: "Campaign structure, tracking setup and reporting.",
    whoFor: "eCommerce and lead-generation brands running paid social and search together.",
    ctaLabel: "See Related Work",
    caseStudySlug: "kesariya-farm-growth",
  },
];

const HOME_SERVICE_SLUGS = ["technical-seo", "seo-strategy", "content-strategy", "funnel-strategy", "ga4-gtm", "google-ads"];

/* Lucide icon names — loaded via CDN, one semantic icon per service/capability,
   matching the exact mapping requested (no duplicate icons for unrelated items). */
/* Self-hosted Lucide icon SVGs — extracted from the lucide-static npm
   package rather than loaded from a CDN at runtime. A CDN dependency
   (unpkg.com) for something as basic as icons is fragile: ad-blockers,
   corporate firewalls, and transient outages all silently break it,
   leaving empty icon badges for real visitors. This removes that
   single point of failure entirely — icons are just part of the page. */
const LUCIDE_SVGS = {
  "search-code": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="m13 13.5 2-2.5-2-2.5" /> <path d="m21 21-4.3-4.3" /> <path d="M9 8.5 7 11l2 2.5" /> <circle cx="11" cy="11" r="8" /> </svg>`,
  "scan-search": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M3 7V5a2 2 0 0 1 2-2h2" /> <path d="M17 3h2a2 2 0 0 1 2 2v2" /> <path d="M21 17v2a2 2 0 0 1-2 2h-2" /> <path d="M7 21H5a2 2 0 0 1-2-2v-2" /> <circle cx="12" cy="12" r="3" /> <path d="m16 16-1.9-1.9" /> </svg>`,
  "route": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <circle cx="6" cy="19" r="3" /> <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" /> <circle cx="18" cy="5" r="3" /> </svg>`,
  "file-search": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /> <path d="M14 2v5a1 1 0 0 0 1 1h5" /> <circle cx="11.5" cy="14.5" r="2.5" /> <path d="M13.3 16.3 15 18" /> </svg>`,
  "chart-no-axes-combined": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M12 16v5" /> <path d="M16 14.639V21" /> <path d="M20 10.656V21" /> <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" /> <path d="M4 18.463V21" /> <path d="M8 14.656V21" /> </svg>`,
  "trending-up": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M16 7h6v6" /> <path d="m22 7-8.5 8.5-5-5L2 17" /> </svg>`,
  "shopping-bag": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M16 10a4 4 0 0 1-8 0" /> <path d="M3.103 6.034h17.794" /> <path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z" /> </svg>`,
  "mouse-pointer-click": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M14 4.1 12 6" /> <path d="m5.1 8-2.9-.8" /> <path d="m6 12-1.9 2" /> <path d="M7.2 2.2 8 5.1" /> <path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z" /> </svg>`,
  "users-round": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M18 21a8 8 0 0 0-16 0" /> <circle cx="10" cy="8" r="5" /> <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /> </svg>`,
  "chart-spline": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M3 3v16a2 2 0 0 0 2 2h16" /> <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7" /> </svg>`,
  "presentation": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M2 3h20" /> <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" /> <path d="m7 21 5-5 5 5" /> </svg>`,
  "wrench": `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" > <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z" /> </svg>`,
};

const SERVICE_ICON_NAMES = {
  "technical-seo": "search-code",
  "seo-audit": "scan-search",
  "seo-strategy": "route",
  "content-strategy": "file-search",
  "ga4-gtm": "chart-no-axes-combined",
  "conversion-tracking": "trending-up",
  "ecommerce-seo": "shopping-bag",
  "google-ads": "mouse-pointer-click",
  "seo-analytics-consulting": "users-round",
  "funnel-strategy": "route",
  "local-seo": "search-code",
  "meta-ads": "mouse-pointer-click",
  "linkedin-ads": "mouse-pointer-click",
  "woocommerce-technical": "shopping-bag",
  "magento-seo": "shopping-bag",
  "aeo-geo": "search-code",
};

const CAPABILITY_ICON_NAMES = {
  "Technical SEO": "search-code",
  "SEO Strategy": "route",
  "Analytics & Measurement": "chart-spline",
  "Performance": "mouse-pointer-click",
  "eCommerce": "shopping-bag",
  "Reporting & Growth": "presentation",
};

const HOME_SERVICE_VALUE_PROPS = {
  "technical-seo": "Fix what's blocking search engines from understanding your site.",
  "seo-strategy": "Turn search demand into a roadmap worth acting on.",
  "content-strategy": "Content built for intent, not keyword volume.",
  "ga4-gtm": "A measurement setup you can actually trust.",
  "ecommerce-seo": "Remove the technical ceiling on product visibility.",
  "google-ads": "Paid search judged by outcomes, not platform metrics.",
  "funnel-strategy": "TOFU, MOFU and BOFU, tracked stage by stage.",
};

const ENGAGEMENT_MODELS = [
  { title: "Audit", copy: "One-time diagnosis and prioritised recommendations.", bestFor: "Businesses that need clarity before investing in ongoing SEO.", whatYouGet: ["Technical/search/measurement diagnosis", "Prioritized findings", "Action roadmap"], ctaLabel: "Request an Audit →" },
  { title: "Project", copy: "Strategy and implementation around a specific growth problem.", bestFor: "Businesses with a defined SEO, analytics or acquisition challenge.", whatYouGet: ["Defined scope", "Implementation roadmap", "Measurement framework"], ctaLabel: "Discuss a Project →" },
  { title: "Consulting", copy: "Senior SEO, analytics or technical expertise when your internal team needs support.", bestFor: "Marketing teams that need specialist guidance without a full-time hire.", whatYouGet: ["Expert diagnosis", "Strategic guidance", "Team collaboration"], ctaLabel: "Book a Consultation →" },
  { title: "Ongoing", copy: "Continuous strategic and technical support across SEO, analytics and digital acquisition.", bestFor: "Businesses looking for an experienced long-term partner.", whatYouGet: ["Ongoing prioritization", "Performance reviews", "Strategic and technical support"], ctaLabel: "Let's Talk →" },
];

/* Insights — teaser topics with a real, specific angle each.
   Full-length articles aren't written yet; each teaser is honest
   about that rather than faking a publish date or word count. */
const INSIGHTS_ARTICLES = [
  { title: "Why Organic Traffic Can Decline Even When Your Website Hasn't Changed", category: "SEO", teaser: "Search demand shifts, competitors move, and algorithm environments change independently of anything on your own site — the first diagnostic step is ruling those out before touching the site itself." },
  { title: "Technical SEO Audit: What Actually Deserves Your Attention?", category: "Technical SEO", teaser: "Most audits generate 100+ line items. Most of the actual impact comes from 5–10 of them — usually the ones tied to a shared template, not a one-off page." },
  { title: "Why GA4 Data Doesn't Always Match Your Business Data", category: "Analytics", teaser: "Different attribution windows and event definitions across GA4, Ads and a CRM will rarely agree exactly — the goal is knowing which gaps are normal and which ones mean a tag is broken." },
  { title: "SEO Traffic vs Qualified Traffic: Why the Difference Matters", category: "SEO Strategy", teaser: "A traffic increase that doesn't shift leads or revenue is usually a sign the ranking gains landed on the wrong intent, not that SEO 'stopped working.'" },
  { title: "How to Prioritise 100 SEO Recommendations", category: "SEO Strategy", teaser: "Business impact, search opportunity, confidence and implementation effort — in that order — turn an overwhelming audit into a roadmap a team can actually execute." },
  { title: "What AI Search Actually Changes for SEO — And What It Doesn't", category: "AI Search", teaser: "AI Overviews and answer engines change where clicks come from, not the underlying requirement to be discoverable, well-structured and genuinely authoritative." },
  { title: "Why Ranking #1 Doesn't Always Mean More Business", category: "SEO Strategy", teaser: "A top ranking on a query with the wrong intent, low commercial value, or a broken conversion path underneath it won't move revenue — rank tracking alone can't tell you which is which." },
  { title: "GA4 + GTM: The Measurement Foundation Most Marketing Teams Underestimate", category: "Analytics", teaser: "Every channel decision downstream — SEO, paid, CRO — inherits whatever errors exist in the tracking layer. It's usually the least glamorous fix with the highest leverage." },
];

const INQUIRY_TYPES = ["Job Opportunity", "Interview / Call", "SEO / Technical SEO", "Paid Media", "Analytics / GA4 / GTM", "Funnel Strategy", "Content", "Other"];

/* ============================================================
   APPROACH v2 — "how I think" page. Distinct from PLAYBOOK/
   SERVICES: no service scope, no tool lists — just the reasoning.
   ============================================================ */

const UNDERSTAND_BUSINESS = {
  lead: "I start with the fundamentals.",
  items: ["Business model", "Revenue and conversion goals", "Target customers", "Markets", "Acquisition channels", "Search demand", "Competitive environment", "Existing performance"],
  closing: "The goal is to understand what success actually means before deciding what to optimize.",
};

const DIAGNOSE_LEAD = "Find what is actually limiting performance.";
const DIAGNOSE_GROUPS = [
  { title: "SEO", items: ["Technical health", "Crawlability", "Indexation", "Architecture", "Content", "Search demand", "Competition"] },
  { title: "Analytics", items: ["GA4", "GTM", "GSC", "Conversion tracking", "Data consistency"] },
  { title: "Acquisition", items: ["Organic search", "Paid media", "Landing pages", "Conversion performance"] },
  { title: "eCommerce", items: ["Product visibility", "Merchant Center", "Structured data", "Measurement"] },
];
const DIAGNOSE_CLOSING = "The objective is not to produce the longest audit. It is to identify the problems that matter.";

const PRIORITIZE_LEAD = "Not every issue deserves the same amount of time.";
const PRIORITIZE_TIERS_V2 = [
  { label: "Now", copy: "High-impact opportunities that should be addressed first." },
  { label: "Next", copy: "Important improvements that support the growth strategy." },
  { label: "Later", copy: "Lower-priority improvements that can be addressed when resources allow." },
];
const PRIORITIZE_CLOSING = "A focused roadmap is more valuable than a spreadsheet containing 200 equally important recommendations.";

const STRATEGY_LEAD = "The strategy connects the findings to the business goal.";
const BUILD_STRATEGY_ITEMS = ["Technical SEO", "Information architecture", "Content opportunities", "Search demand analysis", "Tracking improvements", "Conversion optimization", "Paid acquisition", "eCommerce improvements", "Reporting and measurement frameworks"];
const STRATEGY_CLOSING = "The strategy should tell the team what to do, why it matters and how success will be measured.";

const EXECUTION_COPY = [
  "I work with the teams responsible for execution — including developers, content teams, designers, paid media specialists and marketing stakeholders — to turn strategy into action.",
  "Where appropriate, I can work directly on implementation rather than stopping at the recommendation.",
];
const EXECUTION_COLLABORATORS = ["Developers", "Content teams", "Designers", "Paid media", "Marketing", "Leadership"];

const MEASURE_GROUPS = [
  { title: "Visibility", items: ["Rankings", "Impressions", "Search coverage"] },
  { title: "Acquisition", items: ["Organic traffic", "Paid traffic", "Qualified sessions"] },
  { title: "Engagement", items: ["Landing-page performance", "Engagement", "User behaviour"] },
  { title: "Conversion", items: ["Leads", "Purchases", "Conversion rate"] },
  { title: "Business impact", items: ["Revenue", "Pipeline", "Acquisition efficiency"] },
];
const MEASURE_CLOSING = "The metric depends on the business.";

const LEARN_ITERATE = {
  lead: "SEO and digital acquisition are not one-time projects.",
  copy: "After implementation, I look at what changed, what worked, what didn't and where the next opportunity exists.",
  visual: "Diagnose → Prioritize → Execute → Measure → Learn → Improve",
};

const WORKING_PRINCIPLES = [
  { title: "Business Before Vanity Metrics", copy: "Traffic and rankings matter. Business outcomes matter more." },
  { title: "Diagnose Before Prescribing", copy: "I want to understand the cause before recommending the solution." },
  { title: "Prioritize Over Overwhelm", copy: "A focused roadmap is more valuable than an enormous audit." },
  { title: "Measurement Is Part of the Strategy", copy: "If the measurement layer is unreliable, the strategy is built on assumptions." },
  { title: "Recommendations Need Execution", copy: "The best strategy is worthless if it never gets implemented." },
  { title: "AI Accelerates the Work — Judgment Remains Human", copy: "I use AI to accelerate research, analysis and execution where appropriate, while keeping strategy, prioritization, interpretation and final decisions human-led." },
];

const ABOUT_OPENING_QUESTIONS = [
  "Can we trust the data?",
  "Do we understand what is limiting growth?",
  "Are we prioritizing the right opportunities?",
  "Is the strategy actually being implemented?",
  "Can we prove what changed?",
];

const ABOUT_WHAT_I_BRING = [
  { title: "Technical SEO", copy: "Find and fix the technical barriers affecting crawling, indexing, architecture and search visibility.", questions: ["Is the site being crawled and indexed the way it should be?", "Where is the architecture creating competing or orphaned pages?", "What's blocking Core Web Vitals from passing?"] },
  { title: "SEO Strategy", copy: "Turn search demand, competition and business priorities into a practical roadmap.", questions: ["What does the business actually need search to do?", "Where is the real opportunity versus the obvious keyword?", "What should get built first?"] },
  { title: "Analytics & Tracking", copy: "Build measurement systems teams can actually trust — from GA4 and GTM to conversion tracking and reporting.", questions: ["Does GA4 match what the business actually sold?", "Which events are firing, and which ones only look like they are?", "What's the source of truth when reports disagree?"] },
  { title: "eCommerce", copy: "Connect technical SEO, product visibility, Merchant Center and measurement to improve search performance.", questions: ["Why isn't a product page ranking for its own product name?", "Is the feed the reason Shopping isn't showing the right listings?", "Where is category architecture capping growth?"] },
  { title: "Paid Acquisition", copy: "Use Google Ads and Meta Ads as part of the acquisition system, not as isolated platform metrics.", questions: ["Is the reported conversion number the real one?", "Where is spend duplicating organic demand instead of adding to it?", "What does the account structure actually reward?"] },
  { title: "Conversion & Growth", copy: "Connect traffic, landing pages, user behaviour and conversion data to understand where growth is being lost.", questions: ["Where does the funnel actually leak?", "Is the traffic problem or the page problem?", "What would moving this number really require?"] },
];

const ABOUT_HOW_I_WORK = {
  lead: "I am most effective when the problem is not completely defined yet.",
  giveMe: [
    "Organic performance has stalled.",
    "Tracking cannot be trusted.",
    "SEO recommendations aren't being implemented.",
    "Traffic isn't translating into business results.",
    "Multiple acquisition channels need to work together.",
    "The team needs someone senior enough to connect the pieces.",
  ],
  closing: "My role is to bring structure to the problem, identify what matters, build the priority roadmap and help turn it into measurable action.",
};

const AGENCY_SECTION = {
  capabilities: ["Technical SEO", "SEO Strategy", "Analytics & Tracking", "Client Delivery", "Execution Support"],
  bestFit: ["Complex SEO accounts", "Technical SEO", "Analytics/tracking problems", "eCommerce SEO", "Growth strategy", "Client audits", "Performance reporting"],
};

const HIRING_MANAGER_SECTION = {
  problems: [
    "Organic growth has stalled.",
    "Our tracking doesn't make sense.",
    "We have traffic but not enough qualified leads.",
    "Our SEO roadmap isn't getting implemented.",
    "We need someone to connect SEO, analytics and paid acquisition.",
  ],
  whatYouGet: ["Senior-level judgment", "Hands-on execution", "Cross-functional collaboration", "Data-led decision making", "Clear communication", "Accountability for outcomes"],
};

const RESUME_CORE_EXPERTISE = [
  { title: "SEO", items: ["Technical SEO", "SEO Strategy", "On-page SEO", "Keyword Research", "Content Strategy", "Site Architecture"] },
  { title: "Analytics", items: ["GA4", "Google Tag Manager", "Google Search Console", "Conversion Tracking", "eCommerce Tracking", "Looker Studio"] },
  { title: "Performance", items: ["Google Ads", "Meta Ads", "Landing Page Analysis", "Conversion Optimization"] },
  { title: "eCommerce", items: ["Shopify", "Merchant Center", "Product SEO", "Product Visibility", "eCommerce Measurement"] },
];

const RESUME_TOOLS = [
  { title: "Search", items: ["Google Search Console", "Screaming Frog", "SEMrush", "Ahrefs", "Google Trends"] },
  { title: "Analytics", items: ["GA4", "Google Tag Manager", "Looker Studio"] },
  { title: "Paid", items: ["Google Ads", "Meta Ads"] },
  { title: "eCommerce", items: ["Shopify", "Google Merchant Center", "GA4 eCommerce"] },
];

const RESUME_SELECTED_IMPACT = [
  { value: "60%+", label: "Organic traffic lift at Neat Everyday, with funnels and custom reporting built alongside.", caseStudySlug: "neat-everyday-organic-growth" },
  { value: "₹50K → ₹5L", label: "Monthly revenue for Kesariya Farm in 7 months, running SEO, Google Ads and Meta Ads together.", caseStudySlug: "kesariya-farm-growth" },
  { value: "25%", label: "Conversion improvement at Equest in the first quarter, after building funnels and tracking.", caseStudySlug: "equest-cro-funnel" },
  { value: "30%", label: "CPA reduction at Atlas Softweb within two quarters.", caseStudySlug: "atlas-paid-media" },
];

const ABOUT_STORY = {
  eyebrow: "The Work Behind the Title",
  heading: "I didn't start with growth. I started by fixing what was broken.",
  paragraphs: [
    "Early in my career, SEO was largely about visibility — rankings, technical issues, content and search demand.",
    "Over time, the problems became more connected.",
    "A traffic drop could be technical. A conversion problem could be tracking. A reporting problem could be attribution. An SEO opportunity could be limited by implementation.",
    "That's what pushed my work beyond SEO alone.",
    "Today, I work across SEO, analytics, paid acquisition and eCommerce, connecting the pieces that influence digital performance rather than treating each channel as a separate system.",
  ],
};

const ABOUT_AI_SECTION = {
  heading: "AI accelerates the work. It doesn't replace the judgment.",
  paragraphs: [
    "I use AI tools such as ChatGPT and Claude to accelerate research, analysis, first-pass content, debugging, dashboards and automation workflows.",
    "The output is never treated as final.",
    "Data is checked against source platforms. Code is tested before deployment. AI-assisted content goes through factual and quality review.",
    "AI helps me move faster. Experience decides what gets shipped.",
  ],
};

const ABOUT_WHAT_YOU_GET = [
  { title: "Strategy", items: ["SEO strategy", "Search opportunity analysis", "Competitor analysis", "Content direction", "Growth roadmaps"] },
  { title: "Technical", items: ["Technical SEO", "Crawling & indexation", "Site architecture", "Structured data", "Migration support"] },
  { title: "Measurement", items: ["GA4", "GTM", "GSC", "Conversion tracking", "Data validation"] },
  { title: "Acquisition", items: ["Google Ads", "Meta Ads", "Landing pages", "Conversion analysis"] },
  { title: "Business", items: ["Reporting", "Prioritization", "Stakeholder communication", "Cross-functional collaboration", "Performance analysis"] },
];

const ABOUT_NEXT_PROBLEM = {
  eyebrow: "The Next Role",
  heading: "What I can take ownership of",
  lines: [
    "Organic growth and technical SEO",
    "Paid media on Google and Meta",
    "Tracking, funnels and reporting",
    "A small SEO and paid media team",
  ],
  closing: "Open to full-time roles.",
};

const UNDERSTAND_EDITORIAL = {
  questionFirst: "Before deciding what to optimize, I want to understand what the business is trying to change.",
  successLooksLike: ["Traffic?", "Qualified leads?", "Revenue?", "Acquisition efficiency?", "Better measurement?"],
};

const DIAGNOSE_STATEMENT = {
  heading: "The Question Behind the Audit",
  question: "What changed, why did it change, and what is actually worth fixing?",
  copy: "I don't treat every audit finding as an action item. The objective is to separate symptoms from constraints.",
};

const IMPACT_EFFORT_CONFIDENCE = [
  { title: "Impact", copy: "How much could this change the outcome?" },
  { title: "Effort", copy: "What will it take to implement?" },
  { title: "Confidence", copy: "How strong is the evidence?" },
];

const EXECUTION_SPLIT = [
  { title: "Recommendation", copy: "An audit can tell you what is wrong." },
  { title: "Implementation", copy: "Execution determines whether anything changes." },
];

const IMPROVE_STEPS = [
  { n: "01", title: "Measure", copy: "Go back to the original objective and see what actually changed." },
  { n: "02", title: "Compare", copy: "Check the result against what was expected." },
  { n: "03", title: "Learn", copy: "Understand why it worked, or why it didn't." },
  { n: "04", title: "Prioritize again", copy: "Feed what was learned back into the next round of priorities." },
];

const STRATEGY_ROADMAP_TIERS = [
  { label: "Now", copy: "Fix constraints that are blocking performance." },
  { label: "Next", copy: "Build systems that support sustainable growth." },
  { label: "Later", copy: "Optimize lower-priority opportunities." },
];

const DIAGNOSTIC_CARDS = [
  {
    title: "Rankings Drop",
    causes: ["Technical", "Content", "Search demand", "Competition", "Algorithmic changes"],
    investigate: ["Technical health", "Indexation", "Content decay", "Search demand", "Competitor movement"],
  },
  {
    title: "Traffic Isn't Converting",
    causes: ["Intent mismatch", "Landing page", "Tracking", "UX", "Offer", "Attribution"],
    investigate: ["Search intent", "Landing-page behaviour", "GA4 events", "Conversion paths", "Attribution"],
  },
  {
    title: "Data Doesn't Agree",
    causes: ["GA4", "GTM", "GSC", "Ads", "CRM", "Business data"],
    investigate: ["Tracking implementation", "Event firing", "Attribution", "Data consistency", "Source-of-truth definition"],
  },
];

const AI_SEARCH_ERA = {
  intro: "AI search is changing how people discover information, but the fundamentals of being discoverable, understandable and useful remain important.",
  positioning: "I treat AI search as an extension of search visibility rather than a replacement for SEO fundamentals.",
  platforms: [
    { name: "Google", note: "AI Overviews" },
    { name: "ChatGPT", note: "AI discovery" },
    { name: "Perplexity", note: "Answer discovery" },
    { name: "Gemini", note: "AI search" },
  ],
  fundamentals: ["Entity Visibility", "Brand Mentions", "Structured Content", "First-Party Expertise"],
};

const TOOLS_SYSTEMS = [
  { title: "Search", items: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Trends"] },
  { title: "Analytics", items: ["GA4", "Google Tag Manager", "Looker Studio"] },
  { title: "Paid", items: ["Google Ads", "Meta Ads"] },
  { title: "eCommerce", items: ["Shopify", "Google Merchant Center"] },
];

const WHAT_I_DELIVER = [
  { title: "Audit", summary: "Prioritized findings", details: ["Technical issues", "Search opportunities", "Measurement gaps"] },
  { title: "Roadmap", summary: "Priorities, owners, dependencies", details: ["Priorities", "Owners", "Dependencies", "Success metrics"] },
  { title: "Measurement", summary: "A tracking framework you can trust", details: ["Tracking framework", "GA4/GTM", "Conversion validation", "Reporting"] },
  { title: "Strategy", summary: "Search opportunities and direction", details: ["Search opportunities", "Content direction", "Technical priorities", "Growth plan"] },
  { title: "Implementation Guidance", summary: "What the team needs to build it", details: ["Developer requirements", "Content briefs", "Tracking requirements", "QA"] },
];

const ABOUT_HOW_I_THINK = [
  { n: "01", title: "Question the Data", copy: "Before optimizing performance, make sure the measurement can be trusted." },
  { n: "02", title: "Find the Constraint", copy: "Don't optimize everything. Find what's actually limiting growth." },
  { n: "03", title: "Prioritize", copy: "Focus resources where impact, effort and confidence make the case strongest." },
  { n: "04", title: "Implement", copy: "Recommendations only matter when someone turns them into action." },
  { n: "05", title: "Measure", copy: "Go back to the original objective and see what actually changed." },
  { n: "06", title: "Improve", copy: "Use the evidence to decide what happens next." },
];

const AGENCY_ROWS = [
  { title: "Complex SEO Accounts", copy: "Technical diagnosis, strategy and prioritization.", icon: "search-code" },
  { title: "Analytics & Tracking", copy: "GA4, GTM, GSC and conversion measurement.", icon: "chart-no-axes-combined" },
  { title: "eCommerce SEO", copy: "Technical SEO, product visibility and measurement.", icon: "shopping-bag" },
  { title: "Client Delivery", copy: "Audits, strategy presentations, reporting and technical explanations.", icon: "presentation" },
  { title: "Execution Support", copy: "Working with developers, content and marketing teams to move recommendations into implementation.", icon: "wrench" },
];

const RESUME_SNAPSHOT = [
  { value: "9+", label: "Years Experience", explain: "Hands-on SEO and analytics work, not just oversight." },
  { value: "SEO", label: "Strategy & Technical", explain: "Technical + strategic SEO experience." },
  { value: "GA4", label: "Analytics", explain: "Analytics and measurement." },
  { value: "GTM", label: "Tracking", explain: "Client-side and server-side tag management." },
  { value: "Paid Media", label: "Google · Meta", explain: "Paid search and social as part of the acquisition system." },
  { value: "eCommerce", label: "SEO & Tracking", explain: "Product visibility, feeds and eCommerce measurement." },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Approach", href: "/approach" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];


/* Filter metadata for the Work page (case studies) */
const PROJECT_META = {
  "neat-everyday-organic-growth": { employer: "Neat Everyday", period: "Jan 2026 – Present", areas: ["SEO", "Paid Media", "Analytics", "Funnels", "Content"] },
  "kesariya-farm-growth": { employer: "Proactii", period: "Jul 2020 – Jul 2021", areas: ["SEO", "Paid Media"] },
  "equest-cro-funnel": { employer: "Equest Solutions", period: "Jan 2025 – Nov 2025", areas: ["Analytics", "Funnels", "Paid Media", "SEO"] },
  "atlas-paid-media": { employer: "Atlas Softweb", period: "Oct 2021 – Feb 2023", areas: ["Paid Media", "SEO", "Content"] },
  "manektech-lead-gen-funnels": { employer: "ManekTech", period: "May 2023 – Mar 2024", areas: ["SEO", "Funnels", "Analytics"] },
  "rivulet-tracking-and-audits": { employer: "Rivulet", period: "Mar 2024 – Jan 2025", areas: ["Analytics", "SEO", "Paid Media"] },
};
const WORK_AREA_FILTERS = ["SEO", "Paid Media", "Analytics", "Funnels", "Content"];


/* Home page: what I do, problems solved, roles sought, approach examples */
const START_HERE = [
  { n: "1", title: "What I do", copy: "SEO, paid media, analytics, funnels and content", href: "#what-i-do" },
  { n: "2", title: "Case studies", copy: "6 projects with real results", href: "/work" },
  { n: "3", title: "Sites I worked on", copy: "19 live sites, by organization", href: "/work?tab=sites" },
  { n: "4", title: "Career path", copy: "8 roles, with the reason for each move", href: "/about#career-path" },
];

const WHAT_I_DO = [
  { title: "SEO", copy: "Technical SEO, content and links, local SEO, and AI search (AEO/GEO) for eCommerce, education, B2B and service sites.",
    chips: ["Technical audits", "Core Web Vitals", "Schema", "Local SEO", "AEO/GEO"], used: "All 8 organizations", slug: "neat-everyday-organic-growth", proof: "60%+ organic traffic at Neat Everyday" },
  { title: "Paid media", copy: "Google Search and Display Ads, Meta Ads, ShareChat and AdRoll retargeting, run alongside SEO on the same account.",
    chips: ["Google Ads", "Meta Ads", "Retargeting", "ShareChat", "AdRoll"], used: "Neat Everyday, Equest, Atlas, Proactii", slug: "atlas-paid-media", proof: "30% lower CPA at Atlas Softweb" },
  { title: "Analytics and reporting", copy: "GA4 and server-side GTM setup, custom events, Looker Studio dashboards and reports built from Google Cloud APIs.",
    chips: ["GA4", "Server-side GTM", "Looker Studio", "Google Cloud APIs", "Custom events"], used: "Neat Everyday, Equest, ManekTech, Rivulet", slug: "rivulet-tracking-and-audits", proof: "Tracking fixed on 5 platforms at Rivulet" },
  { title: "Funnels and conversion", copy: "TOFU, MOFU and BOFU funnels mapped to content, landing pages and conversion tracking, then tested with A/B tests.",
    chips: ["TOFU, MOFU, BOFU", "GA4 funnels", "CRO", "A/B tests"], used: "Neat Everyday, Equest, ManekTech", slug: "equest-cro-funnel", proof: "25% conversion lift at Equest" },
  { title: "Content", copy: "Search-intent research, briefs and content strategy, working with writers and designers on pages that rank and convert.",
    chips: ["Intent research", "Content briefs", "Topic clusters", "Team coordination"], used: "Neat Everyday, Atlas Softweb", slug: "atlas-paid-media", proof: "Led a 3-person SEO, paid and content team" },
  { title: "Team leadership", copy: "Led and mentored teams of 2 to 3, set reporting standards and SOPs, and took part in hiring.",
    chips: ["Mentoring", "SOPs", "Reporting", "Hiring"], used: "Atlas Softweb, ManekTech, Equest", slug: "manektech-lead-gen-funnels", proof: "3-person teams at Atlas and ManekTech" },
];

const PROBLEMS_SOLVED = [
  { problem: "Revenue was low for a niche brand", did: "Ran SEO, Google Ads and Meta Ads together on one account", result: "₹50K to ₹5L monthly revenue in 7 months", org: "Proactii · Kesariya Farm", slug: "kesariya-farm-growth" },
  { problem: "Organic traffic needed to grow", did: "Fixed tracking first, then technical SEO, content, links and schema", result: "60%+ organic traffic increase", org: "Neat Everyday", slug: "neat-everyday-organic-growth" },
  { problem: "Stores had no conversion measurement", did: "Built TOFU, MOFU and BOFU funnels and GA4 tracking, then A/B tests", result: "25% conversion lift in the first quarter", org: "Equest Solutions", slug: "equest-cro-funnel" },
  { problem: "Ad cost per customer was too high", did: "Segmented audiences and reworked bid strategy", result: "30% lower CPA within two quarters", org: "Atlas Softweb", slug: "atlas-paid-media" },
  { problem: "Leads could not be tracked by stage", did: "Mapped content and pages to funnel stages with GA4 and GTM", result: "End-to-end lead tracking across the client's sites", org: "ManekTech", slug: "manektech-lead-gen-funnels" },
  { problem: "Tracking was broken across platforms", did: "Fixed GTM, custom events, Meta and Google Ads tracking", result: "Working tracking on Shopify, WordPress, BigCommerce, React and Vue.js", org: "Rivulet", slug: "rivulet-tracking-and-audits" },
];

const ROLES_SOUGHT = [
  { title: "SEO Manager / SEO Team Lead", copy: "Hands-on technical SEO, content and AEO strategy, plus experience leading and mentoring teams of 2 to 3." },
  { title: "Digital Marketing Manager", copy: "SEO and paid media run together, with funnel planning and reporting that connects both to revenue." },
  { title: "Performance Marketing Lead", copy: "Google and Meta Ads, up to ₹10L/month in budget at Neat Everyday, with tracking I build and verify myself." },
  { title: "SEO and Analytics Specialist", copy: "GA4, server-side GTM, Looker Studio and Google Cloud API reporting for eCommerce and lead-generation sites." },
];

const APPROACH_EXAMPLES = {
  understand: { text: "A pan-India B2C milk brand needed both search demand and paid reach, so SEO, Google Ads and Meta Ads were planned together.", slug: "kesariya-farm-growth", org: "Kesariya Farm" },
  diagnose: { text: "On five platforms, I checked what GTM, Meta and Google Ads were actually recording before trusting any report.", slug: "rivulet-tracking-and-audits", org: "Rivulet" },
  prioritize: { text: "Tracking came first, then content and funnels, so every later decision was judged on real data.", slug: "neat-everyday-organic-growth", org: "Neat Everyday" },
  strategy: { text: "Content and landing pages were mapped to TOFU, MOFU and BOFU stages for lead-generation sites.", slug: "manektech-lead-gen-funnels", org: "ManekTech" },
  execution: { text: "I coordinated the content writer, designers and developers across SEO and paid campaigns.", slug: "atlas-paid-media", org: "Atlas Softweb" },
  measure: { text: "Looker Studio dashboards and Google Cloud API reports pulled from GA4, Search Console and YouTube.", slug: "neat-everyday-organic-growth", org: "Neat Everyday" },
  improve: { text: "A/B tests were checked against the rebuilt funnel data, which led to a 25% conversion lift in the first quarter.", slug: "equest-cro-funnel", org: "Equest Solutions" },
};


const APPROACH_FLOW = [
  { key: "understand", title: "Understand the business", question: "What does the business need?",
    what: "Learn the business model, customers, markets and goals before opening any tool.",
    checks: ["Business model", "Revenue and conversion goals", "Target customers and markets", "Acquisition channels", "Current performance"],
    output: "Business model, audience, objectives, revenue model and target market, written down as a definition of success", why: "Every later decision is judged against the business goal, not against rankings alone.", },
  { key: "diagnose", title: "Diagnose and audit", question: "What is limiting performance?",
    what: "Audit SEO, tracking, acquisition and the store itself to find the real cause, not just the symptom.",
    checks: ["Technical SEO audit", "Keyword and competitor analysis", "GA4 conversion funnel analysis", "Google Ads account review", "Content gap analysis", "Tracking and attribution assessment"],
    output: "A short list of real problems, with the evidence for each, not the longest audit", why: "Fixing the real cause saves budget that would otherwise go to symptoms.", },
  { key: "prioritize", title: "Prioritize opportunities", question: "What should be fixed first?",
    what: "Score each issue by impact, effort and confidence, then sort it into Now, Next or Later.",
    checks: ["Impact: how much could it change the outcome", "Effort: how long will it take", "Confidence: how strong is the evidence"],
    output: "A ranked list based on impact, effort, resources and expected outcome: Now, Next and Later", why: "Limited time and budget go to the work most likely to change leads or revenue.", },
  { key: "strategy", title: "Build the strategy", question: "What is the plan?",
    what: "Turn the ranked findings into a roadmap the team can follow, with an owner and a success metric for each item.",
    checks: ["Technical SEO and site structure", "Content opportunities by search demand", "Tracking improvements", "Conversion optimization", "Paid acquisition"],
    output: "An SEO roadmap, content strategy, paid media plan and measurement framework", why: "The team knows what to do, in what order and how success will be measured.", },
  { key: "execution", title: "Execute and implement", question: "Who builds it?",
    what: "Work with developers, content writers, designers and paid media specialists, and implement directly where needed.",
    checks: ["Developers", "Content teams", "Designers", "Paid media", "Marketing and leadership"],
    output: "Technical fixes, content optimization and campaign changes live on the site, not just recommendations", why: "Plans become live changes, so results can actually appear.", },
  { key: "measure", title: "Measure performance", question: "What changed?",
    what: "Compare results against the original goal, using the tracking set up in the earlier steps.",
    checks: ["Organic traffic", "Qualified leads", "Conversions and revenue", "CPA and ROAS", "Rankings and impressions"],
    output: "A report tied to the original goal", why: "Results are tied to leads, revenue and cost, not only traffic.", },
  { key: "improve", title: "Optimize and scale", question: "What comes next?",
    what: "Learn why the result happened, then feed it back into the next round of priorities.",
    checks: ["Experiments and A/B tests", "Performance reviews", "Opportunity identification", "Scaling what works"],
    output: "The next round of priorities, ready to start", why: "Each cycle makes the next one more accurate, so what works can be scaled.", },
];


const MORE_TABS = [
  { key: "tools", label: "Tools I use", intro: "Each tool, and the specific job I use it for.",
    groups: [
      { title: "Search", rows: [
        ["Google Search Console", "Queries, indexing, crawl errors, Core Web Vitals and sitemap checks"],
        ["Screaming Frog", "Site crawls to find broken links, redirect chains, duplicate titles and missing tags"],
        ["SEMrush and Ahrefs", "Keyword research, competitor gaps and backlink checks"],
        ["Google Trends", "Seasonal demand and rising topics before planning content"] ] },
      { title: "Analytics and reporting", rows: [
        ["GA4", "Events, eCommerce funnels and conversion reports"],
        ["Google Tag Manager", "Client-side and server-side tracking, custom events and ad conversion tags"],
        ["Looker Studio", "Dashboards for traffic, funnels and paid performance"],
        ["Google Cloud APIs", "Custom reports pulled from GA4, Search Console and YouTube"] ] },
      { title: "Paid media", rows: [
        ["Google Ads", "Search and Display campaigns, bidding and retargeting"],
        ["Meta Ads", "Prospecting and retargeting campaigns with conversion tracking"],
        ["ShareChat and AdRoll", "Regional-language reach and retargeting"] ] },
      { title: "eCommerce", rows: [
        ["Shopify", "Product and collection page SEO, plus theme and JavaScript changes"],
        ["Google Merchant Center", "Product feeds and Shopping visibility"] ] },
    ] },
  { key: "deliver", label: "What I hand over", intro: "The documents and set-ups the team receives at each stage.",
    cards: [
      { title: "Audit", what: "A written review of the site, ranked by business impact so the most important fixes come first.", incl: ["Technical issues", "Search opportunities", "Measurement gaps"] },
      { title: "Roadmap", what: "A plan listing each task, who owns it, what it depends on and how success is measured.", incl: ["Priorities", "Owners", "Dependencies", "Success metrics"] },
      { title: "Measurement", what: "GA4 and GTM set up and tested, so each lead or sale is counted once and credited to the right channel.", incl: ["Tracking plan", "GA4 and GTM setup", "Conversion checks", "Dashboards"] },
      { title: "Strategy", what: "A direction for content, technical work and growth, based on search demand and the business goal.", incl: ["Search opportunities", "Content direction", "Technical priorities", "Growth plan"] },
      { title: "Implementation guidance", what: "Requirements that developers and writers can build from, with checks to confirm the work was done right.", incl: ["Developer requirements", "Content briefs", "Tracking requirements", "QA checklist"] },
    ] },
  { key: "ai", label: "AI search", intro: "People now get answers from Google AI Overviews, ChatGPT, Perplexity and Gemini as well as from search results.",
    cards: [
      { title: "What it means for SEO", what: "Pages still have to be found, understood and trusted. I treat AI search as an extension of search visibility, not a replacement for SEO basics.", incl: [] },
      { title: "What I do about it", what: "I add structured data and clear brand and product information, write pages that answer questions directly, and show first-hand expertise. At Neat Everyday I am layering AEO and schema markup on the site.", incl: ["Schema markup", "Clear entity and brand details", "Direct answers on key pages", "First-hand expertise"] },
      { title: "What I check", what: "Whether pages are cited in AI answers, and whether visits from AI tools show up in GA4.", incl: [] },
    ] },
  { key: "principles", label: "Working principles", intro: "Six rules I work by, each with where I applied it.",
    principles: [
      { t: "Business results before vanity metrics", w: "Traffic and rankings matter, but revenue, leads and cost per customer decide whether the work succeeded.", ex: "Kesariya Farm was judged on monthly revenue, which grew from ₹50K to ₹5L.", slug: "kesariya-farm-growth" },
      { t: "Diagnose before prescribing", w: "Find the cause of a problem before recommending a fix.", ex: "At Rivulet I checked what each platform was actually recording before changing anything.", slug: "rivulet-tracking-and-audits" },
      { t: "Prioritize over overwhelm", w: "A short, ranked plan beats a 200-item audit nobody finishes.", ex: "At Neat Everyday, tracking came first, then content and funnels.", slug: "neat-everyday-organic-growth" },
      { t: "Measurement is part of the strategy", w: "If tracking is unreliable, every decision rests on guesses.", ex: "At Equest I built funnels and GA4 tracking before running any A/B test.", slug: "equest-cro-funnel" },
      { t: "Recommendations need execution", w: "A good plan only helps once someone builds it, so I work with the people who implement it.", ex: "At Atlas I coordinated the content writer, designers and developers.", slug: "atlas-paid-media" },
      { t: "AI speeds up the work, people make the decisions", w: "I use AI for research, analysis and drafting. Strategy, priorities and final decisions stay with me.", ex: "", slug: "" },
    ] },
];


/* Approach page v4 content */
const CORE_CAPABILITIES = [
  { n: "01", title: "Technical SEO", copy: "Website audits, crawlability, indexation, Core Web Vitals, site architecture, schema markup, canonicalization, redirects, XML sitemaps and JavaScript SEO.", proof: "Rivulet: fixes across Shopify, WordPress, BigCommerce, React and Vue.js", slug: "rivulet-tracking-and-audits" },
  { n: "02", title: "On-page, off-page and content SEO", copy: "Keyword research, search intent, content optimization, topical authority, internal linking, link building, local SEO, content gaps and conversion-focused landing pages.", proof: "Neat Everyday: 60%+ organic traffic", slug: "neat-everyday-organic-growth" },
  { n: "03", title: "AEO, GEO and AI search", copy: "Optimizing for Google AI Overviews, ChatGPT, Gemini and Perplexity through entity optimization, structured content and brand mentions.", proof: "Neat Everyday: layering AEO and schema", slug: "neat-everyday-organic-growth" },
  { n: "04", title: "Analytics, GA4 and GTM", copy: "GA4, GTM, event tracking, custom funnels, eCommerce measurement, conversion tracking, server-side tagging and Looker Studio dashboards.", proof: "Equest: funnels and GA4 tracking from scratch", slug: "equest-cro-funnel" },
  { n: "05", title: "Performance marketing and paid acquisition", copy: "Google Ads, Meta Ads, LinkedIn Ads, AdRoll and ShareChat: campaign strategy, audience targeting, budget allocation, landing page optimization and CPA and ROAS analysis.", proof: "Atlas Softweb: 30% lower CPA", slug: "atlas-paid-media" },
  { n: "06", title: "Digital marketing strategy and growth management", copy: "Channel planning, competitor analysis, marketing roadmaps, team coordination, execution management, reporting and continuous optimization.", proof: "Kesariya Farm: ₹50K to ₹5L monthly revenue", slug: "kesariya-farm-growth" },
];
const IMPACT_CARDS = [
  { value: "60%+", label: "Organic traffic increase", sub: "Neat Everyday, since Jan 2026", slug: "neat-everyday-organic-growth" },
  { value: "₹50K → ₹5L", label: "Monthly revenue in 7 months", sub: "Kesariya Farm, Proactii", slug: "kesariya-farm-growth" },
  { value: "25%", label: "Conversion improvement", sub: "Equest Solutions, first quarter", slug: "equest-cro-funnel" },
  { value: "30%", label: "Lower cost per acquisition", sub: "Atlas Softweb, within two quarters", slug: "atlas-paid-media" },
];
const LEADERSHIP_POINTS = [
  "Manage priorities and execution timelines",
  "Coordinate with developers, designers and content teams",
  "Review campaign and channel performance",
  "Find and remove bottlenecks in execution",
  "Explain insights to stakeholders in plain terms",
  "Tie marketing activity to business objectives",
];

MORE_TABS.splice(0, 3,
  { key: "ai", label: "AI search (AEO/GEO)", intro: "Beyond traditional search: optimizing for the AI search ecosystem.",
    cards: [
      { title: "What is changing", what: "People now find information through Google AI Overviews, ChatGPT, Gemini and Perplexity as well as search results. Brands need to be easy for both search engines and AI tools to find, understand and trust.", incl: [] },
      { title: "What I work on", what: "My approach improves brand discoverability, content relevance, entity understanding and information access across traditional and AI-driven search.", incl: ["AEO (Answer Engine Optimization)", "GEO (Generative Engine Optimization)", "Entity and brand authority", "Structured data and schema", "Question-based content", "Topical authority and site structure"] },
      { title: "How I measure it", what: "AI search visibility is measured with the evidence available, such as AI-tool referral traffic in GA4 and spot checks of AI answers. Results vary by platform, so I report what I can verify and don't promise rankings in AI tools. At Neat Everyday I am layering AEO and schema markup on the site.", incl: [] },
    ] },
  { key: "tools", label: "Tools and systems", intro: "I choose tools for the business problem, not for popularity. The aim is to turn data into clear actions.",
    groups: [
      { title: "SEO research and search performance", rows: [
        ["Ahrefs, Semrush", "Keyword research, competitor gaps and backlink checks"],
        ["Screaming Frog", "Site crawls to find broken links, redirects, duplicate titles and missing tags"],
        ["Google Search Console", "Queries, indexing, crawl errors, Core Web Vitals and sitemaps"],
        ["Google Trends", "Seasonal demand and rising topics"] ] },
      { title: "Analytics, tracking and reporting", rows: [
        ["GA4", "Events, eCommerce funnels and conversion reports"],
        ["Google Tag Manager, server-side GTM", "Tracking, custom events and ad conversion tags"],
        ["Looker Studio", "Dashboards for traffic, funnels and paid performance"],
        ["Google Cloud APIs", "Custom reports from GA4, Search Console and YouTube"] ] },
      { title: "Paid marketing", rows: [
        ["Google Ads", "Search and Display campaigns, bidding and retargeting"],
        ["Meta Ads", "Prospecting and retargeting with conversion tracking"],
        ["AdRoll, ShareChat", "Retargeting and regional-language reach"] ] },
      { title: "CMS and eCommerce", rows: [
        ["Shopify", "Product and collection page SEO, theme and JavaScript changes"],
        ["WordPress, BigCommerce", "Technical SEO and tracking fixes"],
        ["React and Vue.js sites", "Tracking and technical SEO on JavaScript frameworks"],
        ["Google Merchant Center", "Product feeds and Shopping visibility"] ] },
    ] },
  { key: "deliver", label: "What I deliver", intro: "What a team can expect from me in each area.",
    cards: [
      { title: "SEO and organic growth", what: "Strategy and execution that raise organic traffic and conversions.", incl: ["SEO audits and strategic roadmaps", "Keyword research and content growth plans", "Technical and on-page optimization", "Organic traffic and conversion improvement"] },
      { title: "AI search optimization", what: "Preparing the brand and its content for AI-driven search.", incl: ["AEO and GEO strategy", "AI search visibility checks", "Entity, brand and content optimization"] },
      { title: "Analytics and reporting", what: "Tracking that the whole team can trust.", incl: ["GA4 and GTM implementation", "Conversion and eCommerce tracking", "Custom dashboards and reports"] },
      { title: "Performance marketing", what: "Paid campaigns tied to cost and revenue targets.", incl: ["Paid acquisition strategy", "Google and Meta campaign management", "Budget and conversion optimization"] },
      { title: "Growth and management", what: "Keeping the work organized and moving.", incl: ["Integrated digital marketing plans", "Team and cross-functional coordination", "Execution roadmaps and performance reviews"] },
    ] }
);

MORE_TABS.shift();
(function(){
  const T = MORE_TABS[0];
  T.groups[2].rows = [
    ["Google Ads", "Search and Display campaigns, bidding and retargeting"],
    ["Meta Ads", "Prospecting and retargeting with conversion tracking"],
    ["LinkedIn Ads", "Lead generation campaigns for B2B audiences"],
    ["AdRoll, ShareChat", "Retargeting and regional-language reach"] ];
  T.groups[3].rows = [
    ["Shopify", "Product and collection page SEO, theme and JavaScript changes"],
    ["WordPress, WooCommerce", "Technical SEO, content and tracking"],
    ["Magento, BigCommerce", "Technical SEO and tracking on eCommerce platforms"],
    ["Google Merchant Center", "Product feeds and Shopping visibility"] ];
  T.groups.push({ title: "AI search checks", rows: [
    ["ChatGPT, Gemini, Perplexity", "Checking how a brand and its pages appear in AI answers"],
    ["React and Vue.js sites", "Tracking and technical SEO on JavaScript frameworks"] ] });
  const deliver = MORE_TABS[1];
  deliver.cards[3].incl = ["Paid acquisition strategy", "Google, Meta and LinkedIn campaign management", "Budget and conversion optimization"];
})();

LEADERSHIP_POINTS.splice(0, LEADERSHIP_POINTS.length,
  "Develop strategy and plan the projects",
  "Manage priorities and execution timelines",
  "Coordinate with developers, designers and content teams",
  "Review campaign and channel performance",
  "Find and remove bottlenecks in execution",
  "Explain insights to stakeholders in plain terms",
  "Tie marketing activity to business objectives",
  "Keep improving through regular performance reviews");

const AEO_TOPICS = [
  { t: "Google AI Overviews", c: "Summaries shown above search results. Pages need clear, direct answers and trustworthy sources to be used." },
  { t: "ChatGPT, Gemini and Perplexity", c: "AI tools that answer questions directly. They draw on well-structured, authoritative pages and brand mentions." },
  { t: "Answer Engine Optimization (AEO)", c: "Writing pages that answer real questions in a clear format that search and AI tools can lift out." },
  { t: "Generative Engine Optimization (GEO)", c: "Making a brand and its content easy for generative AI tools to understand and reference." },
  { t: "Entity and brand authority", c: "Consistent brand, product and author information across the site and the web so the business is clearly identified." },
  { t: "Structured data and schema", c: "Schema markup that labels products, FAQs, articles and organizations in a form machines can read." },
  { t: "Topical authority", c: "Covering a subject in depth with connected pages, so the site is seen as a reliable source." },
  { t: "Content structure and access", c: "Clear headings, short answers, crawlable text and fast pages, so information is easy to reach and read." },
  { t: "AI search visibility monitoring", c: "Tracking AI-tool referral traffic in GA4 and checking AI answers for the brand. Evidence varies by platform." },
];
const AEO_COMPLEMENT = [
  { trad: "Technical health and crawlability", ai: "Lets AI tools reach and read the content" },
  { trad: "Helpful content that matches intent", ai: "Becomes the answers AI tools quote" },
  { trad: "Links, mentions and brand signals", ai: "Builds the authority AI tools look for" },
  { trad: "Schema and clean structure", ai: "Makes facts easy for machines to extract" },
];
const ANALYTICS_PAID = {
  analytics: [
    ["GA4 implementation and analysis", "Events, conversions and eCommerce reports set up and checked"],
    ["Google Tag Manager and server-side tracking", "More accurate first-party data and cleaner ad conversion signals"],
    ["Conversion and event tracking", "Every form, call, add-to-cart and purchase counted once"],
    ["eCommerce measurement", "Product, cart and checkout steps tracked from view to sale"],
    ["Custom funnels and reporting", "TOFU, MOFU and BOFU stages tracked, with Looker Studio dashboards"],
  ],
  paid: [
    ["Google Ads, Meta Ads and LinkedIn Ads", "Campaign strategy, audience targeting and retargeting"],
    ["Campaign performance analysis", "Cost per lead, cost per sale and return on ad spend by campaign"],
    ["Budget allocation", "Money moved toward campaigns and audiences that convert"],
    ["Conversion optimization", "Landing pages and A/B tests that raise the share of visitors who convert"],
  ],
  connect: ["Track every key action", "Credit it to the right channel", "Report cost and revenue together", "Move budget to what works"],
};


/* ---- Added: LinkedIn Ads, WooCommerce, Magento, AEO/GEO ----
   Capability statements only. No results are claimed for these. */
SERVICES.push(
  {
    slug: "linkedin-ads",
    name: "LinkedIn Ads",
    category: "Paid Media",
    outcomes: ["B2B audiences reached by job title and industry", "Lead forms and landing pages tied to tracking", "Cost per lead reported next to other channels"],
    short: "B2B lead generation campaigns on LinkedIn, planned and reported with Google and Meta.",
    headline: "Reach business buyers where they work.",
    copy: "Plan and run LinkedIn campaigns for B2B audiences, from targeting by role, industry and company size to lead forms, landing pages and conversion tracking. Results are reported next to Google and Meta so budget goes where leads actually come from.",
    includes: ["Audience targeting", "Lead gen forms", "Landing pages", "Conversion tracking", "Retargeting", "Reporting"],
    deliverable: "Campaign structure, tracking setup and a channel comparison report.",
    whoFor: "B2B and lead-generation businesses that sell to a defined set of roles or industries.",
    ctaLabel: "Discuss this",
    caseStudySlug: "manektech-lead-gen-funnels",
  },
  {
    slug: "woocommerce-technical",
    name: "WooCommerce technical SEO and tracking",
    category: "eCommerce",
    outcomes: ["Product, category and filter URLs that index cleanly", "Purchase and cart events that match the store", "Faster product and checkout pages"],
    short: "Technical fixes for WordPress and WooCommerce stores: indexation, structured data, speed and tracking.",
    headline: "Fix what holds a WooCommerce store back.",
    copy: "WooCommerce stores often carry duplicate product variants, filter and tag URLs, plugin bloat and broken purchase tracking. I audit the store, fix the technical causes with the developer, and check that GA4 and ad platform events match real orders.",
    includes: ["Indexation and canonicals", "Product and category schema", "Filter and tag URL control", "Core Web Vitals", "GA4 eCommerce events", "GTM and Meta tracking", "Plugin conflict checks"],
    deliverable: "Technical audit, a prioritized fix list and a verified tracking setup.",
    whoFor: "WordPress stores with index bloat, slow pages or purchase data that does not match orders.",
    ctaLabel: "Discuss this",
    caseStudySlug: "rivulet-tracking-and-audits",
  },
  {
    slug: "magento-seo",
    name: "Magento SEO",
    category: "eCommerce",
    outcomes: ["Layered navigation under control", "Clean category and product indexation", "Structured data and tracking checked after release"],
    short: "SEO work on Magento stores: architecture, layered navigation, canonicals, structured data and tracking.",
    headline: "Make a large Magento catalog easier to crawl.",
    copy: "Large Magento catalogs create many crawlable URLs through layered navigation, sorting and parameters. I find which ones deserve to rank, control the rest, and work with developers on canonicals, sitemaps, schema and tracking.",
    includes: ["Layered navigation", "Canonicals and parameters", "Category architecture", "Product schema", "XML sitemaps", "Redirects", "Tracking checks"],
    deliverable: "Prioritized SEO roadmap and release checklist for the development team.",
    whoFor: "Magento stores with large catalogs, parameter URLs or stalled category rankings.",
    ctaLabel: "Discuss this",
    caseStudySlug: "rivulet-tracking-and-audits",
  },
  {
    slug: "aeo-geo",
    name: "AEO and GEO",
    category: "Technical SEO",
    outcomes: ["Pages that answer questions directly", "Brand and product facts that are consistent and checkable", "AI referral traffic visible in GA4"],
    short: "Optimizing content and structured data so AI tools and search engines can understand and quote a site.",
    headline: "Be easy to understand for people and for AI search.",
    copy: "Answer engine and generative engine optimization builds on solid SEO. I structure pages around real questions, add schema, keep brand facts consistent, check that AI crawlers can reach the site, and spot-check how ChatGPT, Gemini and Perplexity describe the brand. No tool can promise citations, so I measure and adjust.",
    includes: ["Question-led content", "FAQ and entity content", "Schema markup", "Brand consistency", "Crawler access checks", "AI referral tracking in GA4", "AI answer spot checks"],
    deliverable: "AEO and GEO checklist per page type, schema templates and a monitoring routine.",
    whoFor: "Brands that want to appear accurately in AI answers as well as in classic search results.",
    ctaLabel: "Discuss this",
    caseStudySlug: "neat-everyday-organic-growth",
  }
);

(function(){
  const adv = SKILLS.find(s => s.category === "Advertising");
  adv.tools.splice(2, 0, { name: "LinkedIn Ads (Campaign Manager)", tier: "Paid", use: "B2B lead generation: targeting by role and industry, lead gen forms, and cost per lead compared with other channels." });
  const eco = SKILLS.find(s => s.category === "E-commerce");
  eco.tools.splice(1, 0,
    { name: "WooCommerce", tier: "Free & Paid", use: "Technical SEO, product and category schema, speed fixes and GA4 eCommerce tracking on WordPress stores." },
    { name: "Magento", tier: "Free & Paid", use: "SEO on large catalogs: layered navigation, canonicals, sitemaps, structured data and tracking checks." },
    { name: "BigCommerce", tier: "Paid", use: "Technical SEO and tracking fixes on BigCommerce stores." });
  const cms = SKILLS.find(s => s.category === "Development").tools.find(t => t.name.startsWith("CMS Platforms"));
  if (cms) { cms.name = "CMS and eCommerce platforms"; cms.use = "Audits, fixes and tracking on WordPress, WooCommerce, Shopify, Magento, BigCommerce, React and Vue.js sites, working with each team's developers."; }
  RESUME_CORE_EXPERTISE.find(g => g.title === "Performance").items = ["Google Ads", "Meta Ads", "LinkedIn Ads", "Landing Page Analysis", "Conversion Optimization"];
  const ec = RESUME_CORE_EXPERTISE.find(g => g.title === "eCommerce");
  ec.items = ["Shopify", "WooCommerce", "Magento", "Merchant Center", "Product SEO", "eCommerce Measurement"];
  RESUME_CORE_EXPERTISE.find(g => g.title === "SEO").items.push("AEO and GEO");
  RESUME_TOOLS.find(g => g.title === "Paid").items = ["Google Ads", "Meta Ads", "LinkedIn Ads"];
  RESUME_TOOLS.find(g => g.title === "eCommerce").items = ["Shopify", "WooCommerce", "Magento", "Google Merchant Center", "GA4 eCommerce"];
})();

/* Platforms strip used on Work and Services pages */
const PLATFORMS_WORKED = [
  { name: "Shopify", note: "Theme, JavaScript, product SEO and tracking" },
  { name: "WordPress and WooCommerce", note: "Technical SEO, speed and eCommerce tracking" },
  { name: "Magento", note: "Layered navigation, canonicals and structured data" },
  { name: "BigCommerce", note: "Technical fixes and tracking" },
  { name: "React and Vue.js", note: "Rendering, metadata and event tracking" },
];
const CHANNELS_RUN = [
  { name: "Google Ads", note: "Search and Display" },
  { name: "Meta Ads", note: "Prospecting and retargeting" },
  { name: "LinkedIn Ads", note: "B2B lead generation" },
  { name: "AdRoll and ShareChat", note: "Retargeting and regional reach" },
];
