/* ============================================================
   DATA — single source of truth for the site.
   Edit this file to update content across every page.
   ============================================================ */

const PROFILE = {
  name: "Shailesh Bhadra",
  title: "Senior SEO, Performance Marketing & Analytics Specialist",
  tagline: "Technical SEO, Analytics & Performance Marketing",
  subheading:
    "I work across technical SEO, GA4 and server-side GTM, Google Ads and Meta Ads, Core Web Vitals, schema markup and AEO/GEO, AI-assisted workflows and automation — to identify problems, build practical solutions, and improve measurable business outcomes.",
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
    href: "skills.html",
  },
  {
    tag: "SHOPIFY",
    title: "Shopify & E-commerce",
    description:
      "Store optimization, product pages, theme improvements, tracking and conversion.",
    href: "work.html",
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
    tag: "DEV",
    title: "Technical Problem Solving",
    description: "APIs, scripts, integrations, debugging and practical digital solutions — with AI as a research and build accelerant, never a replacement for judgment.",
    href: "about.html",
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
    tools: ["Meta Conversions API", "Google Ads", "Google Search Console", "Technical SEO"],
  },
];

/* Problem-solving playbook — grouped by theme. Used on approach.html.
   Written from real recurring patterns in SEO/paid media work, plus
   current (2026) shifts in AI search that every SEO professional now
   has to account for. */
const PLAYBOOK = [
  {
    theme: "Technical SEO",
    intro: "The problems that quietly cap growth before any content or link strategy can work.",
    items: [
      {
        issue: "Crawl budget wasted on low-value URLs",
        detail: "On large sites, Googlebot burns crawl budget on filtered/faceted URLs, internal search results, and thin tag pages instead of money pages — so new or updated content gets indexed slowly.",
        fix: "Audit crawl stats in GSC, identify low-value URL patterns via Screaming Frog log-file analysis, and control them with robots.txt, noindex, or parameter handling — then re-check crawl stats over the following weeks to confirm budget shifted toward priority pages.",
      },
      {
        issue: "Duplicate and thin content at template scale",
        detail: "A single broken template (e.g. a portfolio or product page generating near-identical copy) can create hundreds of duplicate-title or thin-content flags in one pass — this is usually one root cause, not hundreds of separate problems.",
        fix: "Find the shared template first before touching individual pages. Fixing the template to pull unique data per page resolves the flags at scale, instead of hand-editing every URL.",
      },
      {
        issue: "JavaScript-rendered content not indexing",
        detail: "Client-side rendered content (common on React/Vue-driven sites) can be invisible to Google's renderer or delayed in indexing, especially on sites with heavy hydration.",
        fix: "Test with GSC's URL Inspection tool's rendered HTML view, compare against the raw source, and push critical content (titles, main copy, internal links) into server-side or pre-rendered output rather than relying entirely on client-side JS.",
      },
      {
        issue: "Core Web Vitals regressions after a redesign",
        detail: "New themes and page builders routinely ship unoptimized hero images and render-blocking scripts that tank LCP and CLS — usually invisible to the team until Search Console flags it weeks later.",
        fix: "Treat Core Web Vitals as a pre-launch gate, not a post-launch fix: run PageSpeed Insights/Lighthouse on staging before go-live, and set image/script budgets into the build process itself.",
      },
      {
        issue: "International/multi-region sites splitting authority",
        detail: "Missing or incorrect hreflang tags cause the wrong regional page to rank in the wrong country, and can split ranking signals across near-duplicate country pages instead of consolidating them.",
        fix: "Audit hreflang return-tag pairs (every page must reference every alternate, and be referenced back), validate with a dedicated hreflang tester, and confirm the correct page actually serves in each region with a VPN/GSC's URL inspection.",
      },
      {
        issue: "Migrations breaking rankings and tracking simultaneously",
        detail: "Replatforming (CMS switch, domain change, HTTPS migration) is the highest-risk SEO event — broken redirect chains, lost canonical tags, and untested tracking often surface only after traffic has already dropped.",
        fix: "Treat redirects, canonicals, and tracking as launch-blocking checks, not post-launch cleanup: map every legacy URL to its new destination before launch, and verify GA4/GTM/conversion tracking on staging before DNS cuts over.",
      },
    ],
  },
  {
    theme: "Across Industries",
    intro: "The same root problems show up differently depending on the business model.",
    items: [
      {
        issue: "E-commerce: faceted navigation creating index bloat",
        detail: "Every filter combination (size × color × price) can generate a crawlable, indexable URL — multiplying thin, near-duplicate pages that dilute category-level ranking signals.",
        fix: "Decide deliberately which facet combinations deserve their own indexable URL (usually high-search-volume ones) and canonicalize or noindex the rest, rather than leaving it to the platform's defaults.",
      },
      {
        issue: "SaaS: landing pages competing with each other",
        detail: "Marketing and growth teams often spin up near-duplicate landing pages per campaign or persona, which end up cannibalizing each other in search instead of ranking as one strong page.",
        fix: "Consolidate overlapping pages around a single target query, use the strongest version as canonical, and reserve new pages for genuinely distinct intent — not just a different campaign name.",
      },
      {
        issue: "Local/multi-location service businesses invisible outside their home city",
        detail: "A business can rank well in its home city while being completely invisible in every other city or region it actually serves, because there's no dedicated, locally-relevant page for those areas.",
        fix: "Build real location pages with locally-relevant proof (not just a swapped city name), keep Google Business Profiles consistent across every location, and match paid search targeting to the same location map.",
      },
      {
        issue: "Content/media sites losing traffic to keyword cannibalization",
        detail: "Years of publishing without a content map leaves multiple articles competing for the same query, splitting authority and confusing which page Google should rank.",
        fix: "Run a cannibalization audit in GSC (queries where multiple URLs get impressions), then merge, redirect, or clearly differentiate the competing pages by intent.",
      },
    ],
  },
  {
    theme: "Paid Media (Google Ads & Meta)",
    intro: "Both platforms changed how they measure results in 2026 — most 'performance drops' right now are measurement changes, not real ones.",
    items: [
      {
        issue: "Meta's March 2026 attribution change making performance look worse",
        detail: "Meta redefined click-through attribution to count only genuine link clicks — likes, shares, saves and comments moved into a separate 'engage-through' bucket. Accounts with unchanged real performance saw reported conversions and ROAS drop overnight.",
        fix: "Don't panic-pause campaigns. Set a new baseline from the change date forward, add the engage-through column to reporting, and stop comparing pre/post-change numbers directly — they're measuring different things.",
      },
      {
        issue: "Pixel-only tracking losing conversions to iOS/browser restrictions",
        detail: "Browser privacy changes and ad blockers mean pixel-only Meta tracking now misses a meaningful share of real conversions, making campaigns look less efficient than they are.",
        fix: "Implement Meta Conversions API server-side alongside the pixel to recover missed events and feed the algorithm better data for optimization.",
      },
      {
        issue: "Performance Max acting as a black box",
        detail: "PMax often over-indexes on retargeting and existing customers by default (the easiest conversions to win), and it's hard to see why it's serving the ads it is — advertisers can end up funding demand that already existed.",
        fix: "Tighten conversion signal quality (require click attribution rather than view-through for the primary goal), feed it a real first-party audience and data feed, and monitor search-term/placement reports where visible to catch obvious waste.",
      },
      {
        issue: "GA4 and Google/Meta Ads numbers not matching",
        detail: "Different attribution windows, models, and event definitions across GA4, Google Ads and Meta mean the three will rarely match exactly — and when they diverge sharply, teams lose trust in all three.",
        fix: "Pick one system as the source of truth for budget decisions (usually GA4 or a CRM), document why the others differ, and only investigate when the gap moves outside its normal range — not every week.",
      },
    ],
  },
  {
    theme: "SEO in the AI Search Era",
    intro: "Google AI Overviews and AI answer engines (ChatGPT, Perplexity, Copilot, Gemini, Claude) are changing what 'ranking #1' is even worth — this is the shift I'm actively building for, not just watching.",
    items: [
      {
        issue: "AI Overviews cutting click-through rates on top-ranking pages",
        detail: "Google now answers a large share of queries directly on the results page, and industry data has shown top-ranking pages losing over half their historical click-through rate when an AI Overview appears above them.",
        fix: "Stop measuring success by ranking position alone. Track impressions-to-click ratio by query, identify which queries now trigger AI Overviews, and prioritize the queries where a click still has real commercial intent behind it.",
      },
      {
        issue: "Being invisible in AI-generated answers even while ranking well",
        detail: "Ranking #1 in traditional search no longer guarantees being cited in ChatGPT, Perplexity, or Google's own AI Overview — those systems select and summarize sources differently than the classic ranking algorithm.",
        fix: "Structure key pages with clear, extractable answers near the top (a direct answer-first paragraph before the deeper explanation), strengthen entity clarity (consistent naming, schema markup, an About/author presence), and periodically test target queries directly in ChatGPT, Perplexity, and Google AI Overviews to see who's getting cited instead of guessing.",
      },
      {
        issue: "No visibility into whether AI platforms are sending any traffic",
        detail: "AI-referred traffic (from chat.openai.com, perplexity.ai, Gemini, Copilot) is real but usually invisible unless someone deliberately looks for it — it doesn't show up in a standard channel report.",
        fix: "Filter GA4 traffic by AI-platform referral sources as a standing report, not a one-off check, so AI-driven visibility becomes a tracked metric rather than a guess.",
      },
      {
        issue: "Treating Bing as irrelevant",
        detail: "Bing's index quietly matters more in 2026 than it used to, because Microsoft Copilot draws on Bing's index for many of its answers — a site that's never been optimized for Bing is invisible to that whole surface.",
        fix: "Verify the site in Bing Webmaster Tools, submit sitemaps there too, and don't assume 'ranks on Google' automatically means 'visible to Copilot.'",
      },
      {
        issue: "Chasing AI visibility with tricks instead of fundamentals",
        detail: "A lot of 'AEO/GEO' advice oversells shortcuts. In practice, AI answer engines still lean heavily on pages that already rank well organically and read as genuinely authoritative — there's no reliable way to fake that.",
        fix: "Keep technical SEO and content quality as the foundation, then layer AEO-specific formatting (clear answers, schema, entity consistency) on top of pages that already earn organic trust — not as a replacement for it.",
      },
    ],
  },
];

const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Skills & Tools", href: "skills.html" },
  { label: "Approach", href: "approach.html" },
  { label: "Work", href: "work.html" },
  { label: "Experience", href: "experience.html" },
  { label: "Contact", href: "contact.html" },
];
