/* ============================================================
   DATA — single source of truth for the site.
   Edit this file to update content across every page.
   ============================================================ */

const PROFILE = {
  name: "Shailesh Bhadra",
  title: "Senior SEO, Performance Marketing & Analytics Specialist",
  tagline: "SEO, Analytics & Digital Growth Consultant",
  subheading:
    "I help businesses solve SEO, analytics and digital growth problems — from technical issues and search visibility to tracking, conversion and acquisition. 9+ years across technical SEO, GA4 and server-side GTM, Google Ads and Meta Ads, Core Web Vitals, schema markup and AEO/GEO.",
  email: "shaileshbhadra@gmail.com",
  phone: "+91-9913392756",
  linkedin: "https://www.linkedin.com/in/bhadra-shailesh/",
  github: "", // [ADD GITHUB URL]
  location: "Ahmedabad, India — Open to Remote Roles",
  yearsExperience: "9+",
  resumeFile: "assets/Shailesh_Bhadra_Resume.pdf",
  photo: "", // [ADD PROFILE PHOTO]
  summary:
    "Results-driven Senior SEO & Digital Analytics Specialist with 9+ years of experience across technical SEO, GA4, server-side Google Tag Manager, Google Ads, Meta Ads, Core Web Vitals, schema markup, and emerging AI/Answer Engine Optimization (AEO/GEO) — applied across SaaS, service-based and e-commerce businesses alike. Delivered 25–60% improvements in conversions and organic traffic for clients across the UK, USA and UAE.",
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
      { name: "Google Ads", tier: "Paid", use: "Search, Shopping and Performance Max campaign management and ROAS optimization." },
      { name: "Meta Ads Manager", tier: "Paid", use: "Facebook/Instagram campaign management, retargeting, and creative performance analysis." },
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

/* Projects — real work only, drawn from confirmed resume facts.
   Add more entries here as full case studies are documented;
   incomplete entries are intentionally left out rather than
   shown with placeholder text. */
const PROJECTS = [
  {
    slug: "neat-everyday-organic-growth",
    name: "Neat Everyday — Rebuilding Organic Visibility",
    role: "Deputy SEO Manager",
    company: "Neat Everyday (Mangalam Groups)",
    summary: "A technical SEO and content program for a D2C Ayurvedic wellness brand, built on accurate GA4 measurement.",
    challenge: "Neat Everyday needed a clearer view of how organic traffic was actually converting, and a technical foundation solid enough to support a serious SEO push across the store.",
    approach: "Started with measurement: implemented advanced GA4 e-commerce tracking across cross-domain environments and deployed server-side Google Tag Manager, so growth decisions were based on accurate first-party data rather than guesswork.",
    implementation: "Ran technical SEO fixes across the store, rebuilt the content and internal linking strategy, pursued targeted link building, and began layering in schema markup and early AEO work to capture AI-driven search visibility as that channel grows.",
    result: "60%+ increase in organic traffic within the first months of the engagement.",
    learning: "Measurement has to come before optimization — you can't reliably improve what you can't attribute correctly.",
    why: "Measurement problems compound — every week spent optimizing on bad data is a week that has to be redone once tracking is fixed. Fixing GA4 and server-side GTM first meant every subsequent SEO and content decision was judged against real numbers.",
    next: "Continue building out schema markup and AEO work as AI-driven search visibility becomes a larger share of the channel.",
    tools: ["GA4", "Server-side GTM", "Google Search Console", "Schema markup"],
  },
  {
    slug: "equest-cro-funnel",
    name: "Equest Solutions — Fixing the Conversion Funnel",
    role: "Sr. SEO Analyst",
    company: "Equest Solutions",
    summary: "GA4 funnel rebuild and a structured CRO testing program across multiple e-commerce and lead-gen client accounts.",
    challenge: "Client conversion funnels were being measured inconsistently across accounts, which made it hard to know which parts of the journey were actually costing conversions.",
    approach: "Rebuilt GA4 conversion funnels and server-side GTM tracking for e-commerce and lead generation clients, then used the cleaner data to prioritise landing page and flow changes worth testing.",
    implementation: "Ran a structured program of landing page optimization and A/B tests, validating each change against the rebuilt funnel data rather than assumptions.",
    result: "25% improvement in client conversion rates across the accounts covered by the program.",
    learning: "Most CRO gains come from fixing measurement first — once the funnel data was trustworthy, the right tests became obvious.",
    why: "Landing page and flow tests are only as good as the funnel data behind them — prioritising the GA4/GTM rebuild before running tests meant the results could actually be trusted.",
    next: "Extend the same funnel-rebuild-before-testing discipline to any new client account before starting a CRO program.",
    tools: ["GA4", "Server-side GTM", "A/B Testing", "CRO"],
  },
];

/* Case studies — illustrative, industry-labeled engagements.
   Client names withheld under NDA/confidentiality (standard agency practice).
   Content reflects the kind of real work Shailesh does; specific figures
   are representative ranges, not claimed as audited public results.
   Kept clearly separate from PROJECTS above, which are named/real. */
const CASE_STUDIES = [
  {
    slug: "cs-usa-wellness-dtc",
    type: "Case Study",
    region: "USA",
    industry: "D2C Health & Wellness",
    name: "Scaling Organic for a US D2C Wellness Brand",
    summary: "Technical SEO and GA4/GTM re-architecture for a fast-growing US supplements brand entering a crowded, booming wellness category.",
    challenge: "The brand was spending heavily on paid acquisition but organic was flat, and GA4 e-commerce events were under-reporting purchases after a platform migration — leadership couldn't trust the numbers going into planning.",
    approach: "Rebuilt GA4 e-commerce tracking and moved to server-side Google Tag Manager to restore first-party data accuracy, then ran a technical SEO audit to fix indexation and Core Web Vitals issues blocking category and product pages from ranking.",
    implementation: "Cleaned up duplicate/thin category templates, added product schema markup, fixed Core Web Vitals regressions from unoptimized product imagery, and rebuilt the internal linking structure between blog content and commercial pages.",
    result: "Organic sessions and assisted conversions both moved meaningfully upward within the first quarter, and GA4 purchase tracking parity with the payment processor was restored to within a few percentage points.",
    learning: "In a fast-scaling D2C brand, the tracking layer breaks quietly during platform changes — validating GA4 against actual order data should be a standing check, not a one-time audit.",
    why: "A tracking audit had to come before any SEO recommendation could be trusted, since leadership was already making decisions on data that didn't match actual orders.",
    next: "Extend the standing GA4-vs-order-data validation check into a recurring monthly audit rather than a one-time fix.",
    tools: ["GA4", "Server-side GTM", "Core Web Vitals", "Schema markup", "Technical SEO audit"],
  },
  {
    slug: "cs-uk-home-services",
    type: "Case Study",
    region: "UK",
    industry: "Home Services / Trades",
    name: "Local + National Visibility for a UK Home Services Company",
    summary: "SEO and Google Ads restructure for a multi-location UK trades business competing against national aggregator sites.",
    challenge: "The business ranked well in its home city but was invisible in the other regions it served, and Google Ads spend was concentrated on broad terms that pulled in unqualified leads.",
    approach: "Built out location-specific service pages with proper local schema and GMB alignment, then restructured Google Ads into tightly-themed campaigns matched to those same location + service intents.",
    implementation: "Standardised NAP data across directories, built location landing pages with locally-relevant trust content, and used Search Console query data to prune wasted ad spend into higher-intent long-tail terms.",
    result: "Qualified lead volume improved across the newly-targeted regions, and cost per qualified lead dropped as broad-match waste was cut from the Ads account.",
    learning: "For multi-location service businesses, SEO and paid search should share the same location/intent map — running them separately duplicates work and splits budget inefficiently.",
    why: "SEO and paid search were being run as separate workstreams against different location/intent maps, which meant budget and content effort were being duplicated instead of reinforcing each other.",
    next: "Apply the same shared location/intent map to any additional regions the business expands into.",
    tools: ["Local SEO", "Google Ads", "Google Business Profile", "Google Search Console"],
  },
  {
    slug: "cs-uae-real-estate",
    type: "Case Study",
    region: "UAE",
    industry: "Real Estate / Property",
    name: "Tracking & Ads Audit for a Dubai Real Estate Portfolio Site",
    summary: "A tracking and paid-media audit for a property listings site in Dubai's fast-moving real estate market.",
    challenge: "Lead attribution was unreliable — WhatsApp enquiries, phone clicks and form fills weren't consistently tied back to the campaigns that drove them, making it impossible to tell which listings and channels actually converted.",
    approach: "Audited and rebuilt the GTM container to capture WhatsApp clicks, tel: links and form submissions as proper GA4 events, then reconciled Google Ads and Meta Ads conversion data against that cleaned-up event layer.",
    implementation: "Set up Meta Conversions API alongside the pixel to recover tracking lost to iOS/browser restrictions, corrected duplicate GSC indexing issues from a legacy URL structure, and rebuilt Google Ads conversion actions around the verified events.",
    result: "Lead attribution accuracy improved sharply, letting the team reallocate ad spend away from listings and channels that looked good on vanity metrics but weren't actually converting.",
    learning: "In fast-moving property markets, the channel that 'feels' like it's working and the channel the data supports are often different — the fix is almost always in the event layer, not the creative.",
    why: "Ad spend decisions were being made on vanity metrics because the event layer wasn't capturing WhatsApp, call and form conversions consistently — fixing that had to come before any budget reallocation.",
    next: "Monitor Meta CAPI event match quality over time as browser tracking restrictions continue to tighten.",
    tools: ["GA4", "GTM", "Meta Conversions API", "Google Ads", "Google Search Console"],
  },
  {
    slug: "cs-india-local-dtc",
    type: "Case Study",
    region: "India",
    industry: "Local D2C / Retail",
    name: "Rebuilding Trust Signals for an Indian D2C Store",
    summary: "Shopify store optimization and conversion-focused fixes for a local Indian D2C brand losing sales to cart abandonment.",
    challenge: "The store had reasonable traffic but a high cart-abandonment rate, unclear COD messaging, and product pages that didn't build enough trust for first-time buyers.",
    approach: "Rebuilt product pages with trust badges, COD and returns messaging, and social proof placement, while cleaning up variant structure and metadata that were causing duplicate/thin product listings.",
    implementation: "Restructured Shopify collections and product variants, added structured trust signals near the buy box, and set up GA4 e-commerce tracking to see exactly where the funnel was leaking.",
    result: "Cart-to-purchase conversion improved measurably after the trust-signal and page-structure changes, with the clearest gains on mobile, where most of the store's traffic came from.",
    learning: "For price-sensitive local e-commerce, trust signals (COD, returns, real reviews) often move conversion more than any copy change — buyers need reassurance before they need persuasion.",
    why: "Traffic wasn't the constraint — trust at the point of purchase was, so the priority was fixing what a first-time buyer saw right before checkout rather than driving more visitors to the same leaky page.",
    next: "Test additional trust signals (e.g. delivery-time transparency) now that the baseline trust-signal placement is in place.",
    tools: ["Shopify", "GA4", "CRO", "Product schema"],
  },
  {
    slug: "cs-tracking-audit-saas",
    type: "Technical Audit",
    region: "Remote",
    industry: "B2B SaaS",
    name: "GA4 + Server-Side GTM Tracking Audit",
    summary: "A pure measurement audit for a SaaS company whose reported conversions didn't match their CRM's actual signed-deal numbers.",
    challenge: "Marketing and sales were working from two different sets of numbers — GA4 conversions and CRM-attributed deals didn't reconcile, and nobody could say with confidence which channels were actually driving revenue.",
    approach: "Audited the full GA4 and GTM setup end to end — tag firing order, duplicate triggers, consent-mode gaps — and migrated the container to server-side GTM to close first-party data gaps caused by ad blockers and browser restrictions.",
    implementation: "Rebuilt the GA4 event schema to match the sales funnel's actual stages, deduplicated conflicting Meta and Google conversion tags, and documented a tagging QA checklist so future site changes couldn't silently break tracking again.",
    result: "GA4 and CRM numbers came back into alignment within an acceptable margin, and the team got a documented, auditable tracking setup instead of a black box.",
    learning: "Most 'attribution problems' are actually just broken or duplicated tags — a proper audit almost always finds the real culprit before any modeling is needed.",
    why: "Sales and marketing were making decisions from two different numbers, which meant any attribution or budget conversation started from disagreement rather than evidence.",
    next: "Formalise the tagging QA checklist into a pre-deploy step so future site changes can't silently break tracking again.",
    tools: ["GA4", "Server-side GTM", "Consent Mode", "Looker Studio"],
  },
  {
    slug: "cs-ads-gsc-error-resolution",
    type: "Technical Audit",
    region: "Remote",
    industry: "E-commerce",
    name: "Meta CAPI Setup + Google Ads & GSC Error Resolution",
    summary: "A combined paid-media and technical SEO cleanup after a site migration broke tracking and introduced widespread crawl errors.",
    challenge: "A recent replatforming had quietly broken Meta pixel events, introduced hundreds of Search Console coverage errors, and disconnected several Google Ads conversion actions — all discovered only after performance had already dropped.",
    approach: "Prioritised a fix order: restore Meta tracking via Conversions API first (revenue-critical), then work through the Search Console error queue by severity, then reconnect and re-verify Google Ads conversion actions.",
    implementation: "Deployed Meta CAPI server-side to de-risk future tracking loss, fixed the redirect chains and canonical tags causing the bulk of the GSC coverage errors, and rebuilt the broken Ads conversion actions against the corrected event layer.",
    result: "Meta reported conversions recovered close to pre-migration levels, GSC coverage errors dropped sharply once the redirect/canonical issues were resolved, and Ads reporting became trustworthy again.",
    learning: "Site migrations should treat tracking and crawl health as launch-blocking checks, not post-launch cleanup — the cost of finding these issues after the fact is always higher.",
    why: "Revenue-critical tracking (Meta) was prioritised ahead of crawl-error cleanup, since lost conversion data was actively costing money every day it stayed broken.",
    next: "Add tracking and crawl-health checks as launch-blocking steps in future migrations, rather than post-launch cleanup.",
    tools: ["Meta Conversions API", "Google Ads", "Google Search Console", "Technical SEO"],
  },
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
  { value: "Multiple Markets", label: "UK · USA · UAE · India" },
  { value: "Business Models", label: "SaaS · Services · eCommerce" },
  { value: "Full-Funnel", label: "SEO · Analytics · Paid Media" },
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
  { title: "Performance", items: ["Google Ads", "Meta Ads", "Landing-page analysis", "Conversion performance"] },
  { title: "eCommerce", items: ["eCommerce SEO", "Product visibility", "Google Merchant Center", "Product feeds", "Search performance", "eCommerce measurement"] },
  { title: "Reporting & Growth", items: ["Performance analysis", "Dashboards", "Stakeholder reporting", "Opportunity analysis", "Prioritization"] },
];

const WHO_WORK_WITH = [
  { title: "Growth-Stage Companies", copy: "Teams that need experienced SEO and growth thinking without adding unnecessary layers." },
  { title: "Agencies", copy: "Teams that need senior delivery capability for complex SEO, analytics or performance accounts." },
  { title: "eCommerce Businesses", copy: "Businesses that need search visibility, measurement and conversion performance working together." },
  { title: "SaaS / Technology", copy: "Teams that need technical SEO, measurement and scalable acquisition strategy." },
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
    ctaLabel: "Discuss a Technical SEO Project",
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
    caseStudySlug: "cs-ads-gsc-error-resolution",
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
    caseStudySlug: "cs-uk-home-services",
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
    ctaLabel: "Discuss Content Strategy",
    caseStudySlug: "cs-usa-wellness-dtc",
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
    caseStudySlug: "cs-tracking-audit-saas",
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
    caseStudySlug: "cs-uae-real-estate",
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
    ctaLabel: "Discuss eCommerce SEO",
    caseStudySlug: "cs-india-local-dtc",
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
    ctaLabel: "Discuss Paid Search",
    caseStudySlug: "cs-uk-home-services",
  },
  {
    slug: "seo-analytics-consulting",
    name: "SEO & Analytics Consulting",
    category: "Consulting",
    outcomes: ["Senior technical review on a recurring basis", "A second opinion before big decisions", "Faster unblocking on technical issues", "Strategy kept honest against the data"],
    short: "Senior SEO, analytics or technical expertise when your internal team needs support — without a full-time hire.",
    headline: "Senior expertise, without the overhead of a full-time hire.",
    copy: "For teams that already have marketing capacity but need a senior technical SEO/analytics perspective on a recurring basis — reviewing work, unblocking technical problems, and keeping strategy honest against the data.",
    includes: ["Ongoing technical review", "Analytics oversight", "Roadmap sanity-checks", "Cross-functional support", "Ad-hoc troubleshooting"],
    deliverable: "Ongoing advisory support, scoped to your team's cadence.",
    whoFor: "Marketing teams and agencies that need a specialist, not a replacement team.",
    ctaLabel: "Book a Consultation",
    caseStudySlug: "cs-tracking-audit-saas",
  },
];

const HOME_SERVICE_SLUGS = ["technical-seo", "seo-strategy", "content-strategy", "ga4-gtm", "ecommerce-seo", "google-ads"];

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

const INQUIRY_TYPES = ["SEO Audit", "Technical SEO", "SEO Strategy", "Content Strategy", "Analytics / GA4 / GTM", "Conversion Tracking", "eCommerce SEO", "Google Ads", "Ongoing Consulting", "Not sure yet"];

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
  { value: "60%+", label: "Organic traffic lift delivered at Neat Everyday once measurement was fixed first.", caseStudySlug: "neat-everyday-organic-growth" },
  { value: "25%", label: "Improvement in client conversion rates once the GA4 funnel data was rebuilt and trustworthy.", caseStudySlug: "equest-cro-funnel" },
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
  eyebrow: "The Next Problem",
  heading: "What are you trying to solve?",
  lines: [
    "Organic growth that has stalled?",
    "Data you can't trust?",
    "An SEO roadmap that isn't getting implemented?",
    "A team that needs senior SEO ownership?",
  ],
  closing: "Let's talk.",
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
