/* ============================================================
   MAIN — renders shared chrome (nav/footer) and reusable
   components from DATA. Each page calls the render*() functions
   it needs after including data.js + main.js.
   ============================================================ */

function injectSchema(schema){
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

function injectPersonSchema(){
  injectSchema({
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "jobTitle": PROFILE.title,
    "email": `mailto:${PROFILE.email}`,
    "url": "https://shaileshbhadra.com/",
    "sameAs": [PROFILE.linkedin],
  });
}

function injectProfessionalServiceSchema(){
  if(typeof SERVICES === "undefined") return;
  injectSchema({
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${PROFILE.name} — SEO, Analytics & Digital Growth Consulting`,
    "founder": { "@type": "Person", "name": PROFILE.name },
    "areaServed": "Remote / Worldwide",
    "url": "https://shaileshbhadra.com/",
    "sameAs": [PROFILE.linkedin],
    "makesOffer": SERVICES.map(s => ({
      "@type": "Offer",
      "itemOffered": { "@type": "Service", "name": s.name, "description": s.short },
    })),
  });
}

function injectServiceListSchema(){
  if(typeof SERVICES === "undefined") return;
  injectSchema({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SERVICES.map((s, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Service",
        "name": s.name,
        "description": s.short,
        "provider": { "@type": "Person", "name": PROFILE.name },
        "url": `https://shaileshbhadra.com/services#${s.slug}`,
      },
    })),
  });
}

function renderHeader(activeHref){
  const el = document.getElementById("site-header");
  if(!el) return;
  const links = NAV_LINKS.map(l => {
    if(l.label === "Work" && typeof allWorkItems === "function"){
      const items = allWorkItems();
      const dropdownItems = items.map(w =>
        `<a href="/work/${w.slug}" class="nav-dropdown-item">
           <span class="nav-dropdown-kind">${w._kind}</span>${w.name}
         </a>`
      ).join("");
      return `
        <div class="nav-dropdown-wrap">
          <button class="nav-dropdown-trigger" ${l.href===activeHref ? 'aria-current="page"' : ''} aria-expanded="false" aria-haspopup="true">
            ${l.label} <span class="nav-dropdown-caret">▾</span>
          </button>
          <div class="nav-dropdown-panel" hidden>
            <a href="${l.href}" class="nav-dropdown-item nav-dropdown-item--all"><strong>View All Work →</strong></a>
            <div class="nav-dropdown-divider"></div>
            ${dropdownItems}
          </div>
        </div>`;
    }
    return `<a href="${l.href}" ${l.href===activeHref ? 'aria-current="page"' : ''}>${l.label}</a>`;
  }).join("");
  el.innerHTML = `
    <div class="container nav-row">
      <a href="/" class="brand">Shailesh<span>.</span>Bhadra</a>
      <nav class="nav-links" id="nav-links">
        ${links}
        <a href="/contact" class="nav-cta" data-track="primary_cta_click">Let's Talk</a>
      </nav>
      <button class="nav-toggle" id="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>`;
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Work dropdown: click/tap to toggle (works on touch, not just hover), closes on outside click or Escape
  const trigger = el.querySelector(".nav-dropdown-trigger");
  const panel = el.querySelector(".nav-dropdown-panel");
  if(trigger && panel){
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = trigger.getAttribute("aria-expanded") === "true";
      trigger.setAttribute("aria-expanded", String(!open));
      panel.hidden = open;
    });
    document.addEventListener("click", (e) => {
      if(e.target.closest(".nav-dropdown-wrap")) return; // click was inside the dropdown — let its own handler manage it
      trigger.setAttribute("aria-expanded", "false");
      panel.hidden = true;
    });
    document.addEventListener("keydown", (e) => {
      if(e.key === "Escape"){
        trigger.setAttribute("aria-expanded", "false");
        panel.hidden = true;
      }
    });
  }
}

function renderFooter(){
  const el = document.getElementById("site-footer");
  if(!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="brand">Shailesh<span style="color:var(--accent)">.</span>Bhadra</span>
          <p>SEO · Analytics · Digital Growth</p>
          <p style="margin-top:8px;font-size:12.5px;color:var(--ink-faint);">Turning complex search and acquisition problems into measurable growth.</p>
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h4>Site</h4>
            <a href="/">Home</a>
            <a href="/approach">Approach</a>
            <a href="/work">Work</a>
            <a href="/about">About</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:${PROFILE.email}" data-track="email_click">${PROFILE.email}</a>
            <a href="${PROFILE.linkedin}" target="_blank" rel="noopener" data-track="linkedin_click">LinkedIn</a>
            <a href="/resume/download" download data-track="resume_download">Download Resume (PDF)</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${PROFILE.name}</span>
        <span><a href="/services" style="color:var(--ink-faint);">Services</a> · <a href="/insights" style="color:var(--ink-faint);">Insights</a> · <a href="/skills" style="color:var(--ink-faint);">Skills &amp; Tools</a> · <a href="/experience" style="color:var(--ink-faint);">Experience</a> · ${PROFILE.location}</span>
      </div>
    </div>`;
}

/* ---------- Reusable card renderers ---------- */

/* ---------- Shared identity + CTA components (real data only) ---------- */
function initials(name){
  return name.split(" ").map(w => w[0]).join("").slice(0,2).toUpperCase();
}

function renderAboutTeaser(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = `
    <div class="avatar-mono avatar-mono--lg">${initials(PROFILE.name)}</div>
    <div>
      <blockquote>Find out why a business isn't converting or ranking the way it should, then fix the actual cause.</blockquote>
      <div class="teaser-name">— how ${PROFILE.name.split(" ")[0]} approaches every engagement</div>
    </div>
    <a href="/about" class="btn btn--ghost btn--sm">Get to know me →</a>
  `;
}

function renderCtaBanner(targetId, opts){
  const el = document.getElementById(targetId);
  if(!el) return;
  const o = Object.assign({
    heading: "Let's talk about what's actually going on.",
    body: PROFILE.location + " · " + PROFILE.email,
    ctaLabel: "Start a conversation",
    ctaHref: "/contact",
    extraButtons: [], // [{ label, href, variant: "ghost"|"primary" }]
  }, opts || {});
  const extra = o.extraButtons.map(b =>
    `<a href="${b.href}" class="btn btn--${b.variant || 'ghost'}"${b.download ? ' download' : ''}>${b.label}</a>`
  ).join("");
  el.innerHTML = `
    <div>
      <h2>${o.heading}</h2>
      <p>${o.body}</p>
    </div>
    <div class="btn-row">
      <a href="${o.ctaHref}" class="btn btn--primary" data-track="primary_cta_click">${o.ctaLabel}</a>
      ${extra}
    </div>
  `;
}

function renderReadoutPanel(targetId, dynamicStatus){
  const el = document.getElementById(targetId);
  if(!el) return;
  const rows = [
    { k: "Status", v: dynamicStatus || "Open to new projects" },
    { k: "Based in", v: PROFILE.location.split("—")[0].trim() },
    { k: "Experience", v: `${PROFILE.yearsExperience} years` },
    { k: "Core focus", v: "SEO · Analytics · Growth" },
  ];
  el.innerHTML = `
    <div class="photo-frame">
      <div class="photo-frame-inner">[ADD PROFESSIONAL PHOTO]</div>
    </div>
    <div class="readout-head"><span class="readout-dot"></span>Now</div>
    ${rows.map(r => `
      <div class="readout-row">
        <span class="k">${r.k}</span>
        <span class="v">${r.v}</span>
      </div>`).join("")}
  `;
}

function renderMetricStrip(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = METRICS.map(m => `
    <div class="metric-cell">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
    </div>`).join("");
}

function renderWorkAreas(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = WORK_AREAS.map(a => `
    <a class="work-card" href="${a.href}">
      <div class="eyebrow">${a.tag}</div>
      <h3>${a.title}</h3>
      <p>${a.description}</p>
      <div class="more">Explore →</div>
    </a>`).join("");
}

function renderProcessSteps(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof PROCESS_STEPS === "undefined") return;
  el.innerHTML = PROCESS_STEPS.map(s => `
    <div class="process-step reveal">
      <div class="process-step-n">${s.n}</div>
      <div class="process-step-body">
        <div class="eyebrow">${s.subtitle}</div>
        <h3>${s.title}</h3>
        <p>${s.copy}</p>
      </div>
    </div>`).join("");
}

/* Fetches admin-editable content (resume updates, career changes) from
   the server. Falls back to the static defaults in data.js if the
   request fails — e.g. if the page is opened outside the Express
   server, or the admin panel has never been used. */
async function loadSiteContent(){
  try{
    const res = await fetch("/api/site-content");
    if(!res.ok) throw new Error("bad response");
    const data = await res.json();
    return {
      status: data.status || "Open to new projects",
      currentTitle: data.currentTitle || PROFILE.title,
      experience: (Array.isArray(data.experience) && data.experience.length) ? data.experience : EXPERIENCE,
    };
  } catch(e){
    return { status: "Open to new projects", currentTitle: PROFILE.title, experience: EXPERIENCE };
  }
}

function renderTimeline(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  const data = items || EXPERIENCE;
  el.innerHTML = data.map(job => `
    <div class="timeline-item">
      <div class="timeline-meta">${job.dates} — ${job.location}</div>
      <h3>${job.company}</h3>
      <div class="role">${job.role}</div>
      <div class="playbook-label" style="margin-top:14px;">What I Owned</div>
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
      ${job.achievement ? `<div class="achievement-pill">▲ ${job.achievement}</div>` : ""}
      <div class="playbook-label" style="margin-top:14px;">Key Focus</div>
      <div class="tool-tags">${job.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>
    </div>`).join("");
}

function renderSkills(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = SKILLS.map(block => `
    <div class="skill-block" id="skill-${block.category.toLowerCase().replace(/[^a-z0-9]+/g,'-')}">
      <div class="skill-block-head">
        <h3>${block.category}</h3>
      </div>
      <div class="tool-list">
        ${block.tools.map(t => `
          <div class="tool-row">
            <div class="tool-row-head">
              <div class="tool-name">${t.name}</div>
              ${t.tier && t.tier !== "—" ? `<span class="tier-badge tier-badge--${t.tier.toLowerCase().replace(/[^a-z]+/g,'-')}">${t.tier}</span>` : ""}
            </div>
            <div class="tool-use">${t.use}</div>
          </div>`).join("")}
      </div>
    </div>`).join("");
}

function allWorkItems(){
  const named = PROJECTS.map(p => ({ ...p, _kind: "Client Project" }));
  const studies = (typeof CASE_STUDIES !== "undefined" ? CASE_STUDIES : []).map(c => ({ ...c, _kind: c.type || "Case Study" }));
  return [...named, ...studies];
}

function findWorkItem(slug){
  return allWorkItems().find(i => i.slug === slug);
}

function renderProjectCards(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  const list = items || allWorkItems();
  el.innerHTML = list.map(p => {
    const isCaseStudy = !!p.industry;
    const context = isCaseStudy ? `${p.region} · ${p.industry}` : p.company;
    const role = isCaseStudy ? "Owned diagnosis through implementation" : p.role;
    return `
    <a class="project-card" href="/work/${p.slug}" data-track="case_study_click">
      <div class="project-body">
        <div class="project-card-top">
          <div class="eyebrow">${context}</div>
          <span class="kind-badge kind-badge--${(p._kind||'').toLowerCase().replace(/\s+/g,'-')}">${p._kind}</span>
        </div>
        <h3>${p.name}</h3>
        <p class="summary">${p.challenge}</p>
        <div class="playbook-label" style="margin-top:14px;">My Role</div>
        <p style="font-size:13px;color:var(--ink-soft);">${role}</p>
        <div class="playbook-label" style="margin-top:12px;">Outcome</div>
        <p style="font-size:13px;color:var(--ink-soft);">${p.result}</p>
        <div class="more" style="margin-top:16px;">Read Case Study →</div>
      </div>
    </a>`;
  }).join("");
}

function renderProjectFilters(filterTargetId, gridTargetId){
  const filterEl = document.getElementById(filterTargetId);
  if(!filterEl) return;
  const items = allWorkItems();
  const kinds = ["All", ...Array.from(new Set(items.map(i => i._kind)))];
  let active = "All";

  function draw(){
    filterEl.innerHTML = kinds.map(k =>
      `<button class="filter-btn ${k===active?'active':''}" data-kind="${k}">${k}</button>`
    ).join("");
    filterEl.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        active = btn.dataset.kind;
        draw();
        const filtered = active === "All" ? items : items.filter(i => i._kind === active);
        renderProjectCards(gridTargetId, filtered);
      });
    });
  }
  draw();
  renderProjectCards(gridTargetId, items);
}

/* Fade/slide-in on scroll for elements with .reveal — respects reduced motion */
function initScrollReveal(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("reveal-visible"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("reveal-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

/* ============================================================
   CONSULTING SITE renderers (homepage / services / insights)
   ============================================================ */

function renderTrustStrip(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof TRUST_STRIP === "undefined") return;
  el.innerHTML = TRUST_STRIP.map(m => `
    <div class="metric-cell reveal">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
    </div>`).join("");
}

function renderProblemCards(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof PROBLEM_CARDS === "undefined") return;
  el.innerHTML = PROBLEM_CARDS.map(p => `
    <div class="work-card problem-tile reveal">
      <h3>${p.title}</h3>
      <p>${p.copy}</p>
      <a href="${p.ctaHref}" class="more">${p.ctaLabel}</a>
    </div>`).join("");
}

function renderServiceCards(targetId, slugs){
  const el = document.getElementById(targetId);
  if(!el || typeof SERVICES === "undefined") return;
  const list = slugs ? SERVICES.filter(s => slugs.includes(s.slug)) : SERVICES;
  el.innerHTML = list.map(s => `
    <div class="work-card service-tile reveal">
      <div class="eyebrow">${s.name}</div>
      <p style="margin-top:14px;">${(typeof HOME_SERVICE_VALUE_PROPS !== "undefined" && HOME_SERVICE_VALUE_PROPS[s.slug]) || s.short}</p>
      <a href="/services#${s.slug}" class="more">Learn more →</a>
    </div>`).join("");
}

function renderServiceCard(s){
  const iconName = (typeof SERVICE_ICON_NAMES !== "undefined" && SERVICE_ICON_NAMES[s.slug]) || "wrench";
  return `
    <div class="service-card2 reveal" data-category="${s.category}" id="${s.slug}">
      <div class="service-card2-icon"><i data-lucide="${iconName}"></i></div>
      <div class="eyebrow" style="margin-bottom:8px;">${s.category}</div>
      <h3>${s.name}</h3>
      <p class="service-card2-desc">${s.short}</p>
      <div class="playbook-label">Key Outcomes</div>
      <ul class="outcome-list">${(s.outcomes||[]).map(o => `<li>${o}</li>`).join("")}</ul>
      <div class="service-card2-actions">
        <a href="/contact?service=${encodeURIComponent(s.name)}" class="btn btn--primary btn--sm service-card2-btn">${s.ctaLabel} →</a>
        <button class="details-toggle" data-toggle="${s.slug}" aria-expanded="false">View full details</button>
      </div>
      <div class="service-card2-details" id="details-${s.slug}" hidden>
        <div class="playbook-label">What's included</div>
        <ul class="chip-list">${s.includes.map(i => `<li>${i}</li>`).join("")}</ul>
        <div class="playbook-label" style="margin-top:14px;">Deliverable</div>
        <p>${s.deliverable}</p>
        <div class="playbook-label" style="margin-top:14px;">Who it's for</div>
        <p>${s.whoFor}</p>
        <a href="/work/${s.caseStudySlug}" class="more" style="margin-top:10px;display:inline-block;" data-track="case_study_click">Relevant case study →</a>
      </div>
    </div>`;
}

function renderServiceCatalogue(gridTargetId, filterTargetId){
  const gridEl = document.getElementById(gridTargetId);
  const filterEl = filterTargetId ? document.getElementById(filterTargetId) : null;
  if(!gridEl || typeof SERVICES === "undefined") return;

  const categories = ["All", ...Array.from(new Set(SERVICES.map(s => s.category)))];
  let active = "All";

  function bindCardEvents(){
    gridEl.querySelectorAll("[data-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const slug = btn.dataset.toggle;
        const panel = document.getElementById(`details-${slug}`);
        const open = !panel.hidden;
        panel.hidden = open;
        btn.setAttribute("aria-expanded", String(!open));
        btn.textContent = open ? "View full details" : "Hide details";
      });
    });
  }

  function drawGrid(){
    const list = active === "All" ? SERVICES : SERVICES.filter(s => s.category === active);
    gridEl.innerHTML = list.map(renderServiceCard).join("");
    bindCardEvents();
    if(window.lucide) lucide.createIcons();
  }

  function drawFilters(){
    if(!filterEl) return;
    filterEl.innerHTML = categories.map(c =>
      `<button class="filter-btn ${c===active?'active':''}" data-cat="${c}">${c}</button>`
    ).join("");
    filterEl.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        active = btn.dataset.cat;
        drawFilters();
        drawGrid();
      });
    });
  }

  drawFilters();
  drawGrid();
}

function renderEngagementModels(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ENGAGEMENT_MODELS === "undefined") return;
  el.innerHTML = ENGAGEMENT_MODELS.map(m => `
    <div class="work-card engagement-tile reveal">
      <div class="eyebrow">${m.title}</div>
      <p style="margin-top:14px;">${m.copy}</p>
      <div class="playbook-label" style="margin-top:16px;">Best for</div>
      <p style="font-size:13.5px;">${m.bestFor}</p>
      <div class="playbook-label" style="margin-top:16px;">What you get</div>
      <ul class="outcome-list">${(m.whatYouGet||[]).map(w => `<li>${w}</li>`).join("")}</ul>
      <a href="/contact" class="more">${m.ctaLabel}</a>
    </div>`).join("");
}

function renderInsightsGrid(targetId, limit){
  const el = document.getElementById(targetId);
  if(!el || typeof INSIGHTS_ARTICLES === "undefined") return;
  const list = limit ? INSIGHTS_ARTICLES.slice(0, limit) : INSIGHTS_ARTICLES;
  el.innerHTML = list.map(a => `
    <div class="article-card reveal">
      <div class="eyebrow">${a.category}</div>
      <h3>${a.title}</h3>
      <p>${a.teaser}</p>
      <div class="insight-status">In progress — full article coming soon</div>
    </div>`).join("");
}

/* Three visually distinct homepage case-study layouts, per spec
   ("do not make three identical cards"). Uses real projects/case
   studies already in PROJECTS / CASE_STUDIES. */
function renderCaseStudyShowcase(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  const items = allWorkItems().filter(i => ["neat-everyday-organic-growth", "cs-tracking-audit-saas", "equest-cro-funnel"].includes(i.slug));
  if(items.length < 3) return;
  const [a, b, c] = items;
  el.innerHTML = `
    <a class="showcase-feature reveal" href="/work/${a.slug}" data-track="case_study_click">
      <div class="project-card-top"><div class="eyebrow">${a.company || a.industry}</div><span class="kind-badge kind-badge--${(a._kind||'').toLowerCase().replace(/\s+/g,'-')}">${a._kind}</span></div>
      <h3>${a.name}</h3>
      <p>${a.summary}</p>
      <div class="project-tags">${a.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>
      <div class="more">Read Case Study →</div>
    </a>
    <div class="showcase-side">
      <a class="showcase-compact reveal" href="/work/${b.slug}" data-track="case_study_click">
        <div class="eyebrow">${b.region ? `${b.region} · ${b.industry}` : b.company}</div>
        <h3>${b.name}</h3>
        <div class="more">Read Case Study →</div>
      </a>
      <a class="showcase-compact reveal" href="/work/${c.slug}" data-track="case_study_click">
        <div class="eyebrow">${c.company || c.industry}</div>
        <h3>${c.name}</h3>
        <div class="more">Read Case Study →</div>
      </a>
    </div>`;
}

/* Generic vertical chain visual — reused by Approach's Measurement section */
function renderChainVisual(targetId, steps){
  const el = document.getElementById(targetId);
  if(!el || !steps) return;
  el.innerHTML = steps.map((step, i) =>
    `<div class="funnel-step reveal">${step}</div>${i < steps.length - 1 ? `<div class="funnel-arrow" aria-hidden="true">↓</div>` : ""}`
  ).join("");
}

/* Generic chip-list renderer — used by several plain "list of terms" sections */
function renderChipList(targetId, items){
  const el = document.getElementById(targetId);
  if(!el || !items) return;
  el.innerHTML = `<ul class="chip-list">${items.map(i => `<li>${i}</li>`).join("")}</ul>`;
}

/* ============================================================
   HOMEPAGE renderers (new sections)
   ============================================================ */

function renderWhatIBring(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof WHAT_I_BRING === "undefined") return;
  el.innerHTML = WHAT_I_BRING.map((p, i) => `
    <div class="process-step reveal">
      <div class="process-step-n">0${i+1}</div>
      <div class="process-step-body">
        <h3>${p.title}</h3>
        <p>${p.copy}</p>
      </div>
    </div>`).join("");
}

function renderHomeProcessSteps(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof HOME_PROCESS_STEPS === "undefined") return;
  el.innerHTML = HOME_PROCESS_STEPS.map(s => `
    <div class="process-step reveal">
      <div class="process-step-n">${s.n}</div>
      <div class="process-step-body">
        <h3>${s.title}</h3>
        <p>${s.copy}</p>
      </div>
    </div>`).join("");
}

function renderCapabilities(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof CAPABILITIES === "undefined") return;
  el.innerHTML = CAPABILITIES.map(c => {
    const iconName = (typeof CAPABILITY_ICON_NAMES !== "undefined" && CAPABILITY_ICON_NAMES[c.title]) || "wrench";
    return `
    <div class="lookat-card reveal">
      <div class="service-card2-icon" style="margin-bottom:14px;"><i data-lucide="${iconName}"></i></div>
      <h3>${c.title}</h3>
      <ul class="lookat-list">${c.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`;
  }).join("");
}

function renderWhoWorkWith(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof WHO_WORK_WITH === "undefined") return;
  el.innerHTML = WHO_WORK_WITH.map(w => `
    <div class="lookat-card reveal">
      <h3>${w.title}</h3>
      <p style="font-size:13.5px;color:var(--ink-soft);margin-top:10px;line-height:1.6;">${w.copy}</p>
    </div>`).join("");
}

/* ============================================================
   APPROACH v3 renderers — Understand / Diagnose / Prioritize /
   Strategy / Execution / Measurement / Principles
   ============================================================ */

function renderUnderstandBusiness(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof UNDERSTAND_BUSINESS === "undefined") return;
  const d = UNDERSTAND_BUSINESS;
  const e = typeof UNDERSTAND_EDITORIAL !== "undefined" ? UNDERSTAND_EDITORIAL : null;
  el.innerHTML = `
    <div class="about-grid">
      <div>
        <p class="prose reveal" style="font-size:16px;margin-bottom:18px;">${d.lead}</p>
        <ul class="chip-list">${d.items.map(i => `<li>${i}</li>`).join("")}</ul>
        <p class="funnel-footer" style="margin-top:24px;text-align:left;font-style:normal;">${d.closing}</p>
      </div>
      ${e ? `
      <aside class="glass side-note reveal">
        <div class="playbook-label">Question First</div>
        <p style="font-size:14px;color:var(--ink-soft);margin-top:8px;line-height:1.6;">${e.questionFirst}</p>
        <div class="playbook-label" style="margin-top:20px;">What Success Looks Like</div>
        <ul class="checklist" style="margin-top:10px;">${e.successLooksLike.map(s => `<li>${s}</li>`).join("")}</ul>
      </aside>` : ""}
    </div>`;
}

function renderDiagnoseGroups(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof DIAGNOSE_GROUPS === "undefined") return;
  el.innerHTML = DIAGNOSE_GROUPS.map(g => `
    <div class="lookat-card reveal">
      <h3>${g.title}</h3>
      <ul class="lookat-list">${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderPrioritizeTiers(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof PRIORITIZE_TIERS_V2 === "undefined") return;
  el.innerHTML = PRIORITIZE_TIERS_V2.map(t => `
    <div class="priority-card priority-card--${t.label.toLowerCase()} reveal">
      <div class="priority-status" style="border-top:none;padding-top:0;">${t.label}</div>
      <p>${t.copy}</p>
    </div>`).join("");
}

function renderMeasureGroups(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof MEASURE_GROUPS === "undefined") return;
  el.innerHTML = MEASURE_GROUPS.map(g => `
    <div class="lookat-card reveal">
      <h3>${g.title}</h3>
      <ul class="lookat-list">${g.items.map(i => `<li>${i}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderExecutionCollaborators(targetId){
  renderChipList(targetId, typeof EXECUTION_COLLABORATORS !== "undefined" ? EXECUTION_COLLABORATORS : null);
}

function renderImpactEffortConfidence(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof IMPACT_EFFORT_CONFIDENCE === "undefined") return;
  el.innerHTML = IMPACT_EFFORT_CONFIDENCE.map(b => `
    <div class="cause-card reveal">
      <div class="eyebrow">${b.title}</div>
      <p>${b.copy}</p>
    </div>`).join("");
}

function renderDiagnoseStatement(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof DIAGNOSE_STATEMENT === "undefined") return;
  const d = DIAGNOSE_STATEMENT;
  el.innerHTML = `
    <div class="eyebrow">${d.heading}</div>
    <p class="symptom-statement reveal" style="margin-top:16px;">${d.question}</p>
    <p class="prose reveal" style="text-align:center;max-width:600px;margin:0 auto;">${d.copy}</p>`;
}

function renderExecutionSplit(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof EXECUTION_SPLIT === "undefined") return;
  el.innerHTML = EXECUTION_SPLIT.map(b => `
    <div class="cause-card reveal">
      <div class="eyebrow">${b.title}</div>
      <p>${b.copy}</p>
    </div>`).join("");
}

function renderImproveSteps(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof IMPROVE_STEPS === "undefined") return;
  el.innerHTML = IMPROVE_STEPS.map(s => `
    <div class="process-step reveal">
      <div class="process-step-n">${s.n}</div>
      <div class="process-step-body">
        <h3>${s.title}</h3>
        <p>${s.copy}</p>
      </div>
    </div>`).join("");
}

function renderWorkingPrinciples(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof WORKING_PRINCIPLES === "undefined") return;
  el.innerHTML = WORKING_PRINCIPLES.map(p => `
    <div class="principle-row reveal">
      <h3>${p.title}</h3>
      <p>${p.copy}</p>
    </div>`).join("");
}

/* ============================================================
   ABOUT PAGE renderers — Agency & Hiring Manager sections
   ============================================================ */

function renderAboutOpeningQuestions(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_OPENING_QUESTIONS === "undefined") return;
  el.innerHTML = ABOUT_OPENING_QUESTIONS.map(q => `<p class="dont-do-line reveal" style="font-size:17px;">"${q}"</p>`).join("");
}

function renderAboutWhatIBring(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_WHAT_I_BRING === "undefined") return;
  el.innerHTML = ABOUT_WHAT_I_BRING.map((b, i) => `
    <div class="lookat-card reveal">
      <h3>${b.title}</h3>
      <p style="font-size:13.5px;color:var(--ink-soft);margin-top:10px;line-height:1.6;">${b.copy}</p>
      <button class="acc-trigger" data-acc-target="bring-panel-${i}" aria-expanded="false" aria-controls="bring-panel-${i}" style="padding:10px 0 0;">
        <span>Typical questions I investigate</span><span class="acc-icon">+</span>
      </button>
      <div class="acc-panel" id="bring-panel-${i}" hidden style="padding:8px 0 0;">
        <ul class="lookat-list">${(b.questions||[]).map(q => `<li>${q}</li>`).join("")}</ul>
      </div>
    </div>`).join("");
}

function renderAboutHowIWork(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_HOW_I_WORK === "undefined") return;
  const d = ABOUT_HOW_I_WORK;
  el.innerHTML = `
    <h2 class="reveal" style="margin-bottom:18px;">I am most effective when the problem is not completely defined yet.</h2>
    <p class="prose reveal" style="margin-bottom:10px;">Give me an account where:</p>
    <ul class="chip-list">${d.giveMe.map(i => `<li>${i}</li>`).join("")}</ul>
    <p class="funnel-footer" style="margin-top:24px;text-align:left;font-style:normal;">${d.closing}</p>`;
}

function renderAboutStory(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_STORY === "undefined") return;
  const d = ABOUT_STORY;
  el.innerHTML = d.paragraphs.map(p => `<p class="prose reveal" style="margin-bottom:14px;">${p}</p>`).join("");
}

function renderAboutAISection(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_AI_SECTION === "undefined") return;
  const d = ABOUT_AI_SECTION;
  el.innerHTML = `
    <h2 class="reveal" style="margin-bottom:18px;">${d.heading}</h2>
    ${d.paragraphs.map(p => `<p class="prose reveal" style="margin-bottom:14px;">${p}</p>`).join("")}`;
}

function renderAboutWhatYouGet(tabBarId, panelsId){
  const bar = document.getElementById(tabBarId);
  const el = document.getElementById(panelsId);
  if(!el || !bar || typeof ABOUT_WHAT_YOU_GET === "undefined") return;
  bar.innerHTML = ABOUT_WHAT_YOU_GET.map((g, i) =>
    `<button class="tab-trigger" data-tab-target="wyg-panel-${i}">${g.title}</button>`
  ).join("");
  el.innerHTML = ABOUT_WHAT_YOU_GET.map((g, i) => `
    <div class="tab-panel" id="wyg-panel-${i}" hidden>
      <ul class="lookat-list">${g.items.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderAboutNextProblem(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_NEXT_PROBLEM === "undefined") return;
  const d = ABOUT_NEXT_PROBLEM;
  el.innerHTML = `
    <div class="eyebrow">${d.eyebrow}</div>
    <h2 style="margin-top:12px;">${d.heading}</h2>
    <div style="margin-top:18px;">
      ${d.lines.map(l => `<p class="dont-do-line reveal" style="font-size:15.5px;padding:10px 0;">${l}</p>`).join("")}
    </div>
    <p class="prose" style="margin-top:14px;font-style:italic;">${d.closing}</p>`;
}

function renderAboutHowIThink(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof ABOUT_HOW_I_THINK === "undefined") return;
  el.innerHTML = ABOUT_HOW_I_THINK.map(s => `
    <div class="process-step reveal">
      <div class="process-step-n">${s.n}</div>
      <div class="process-step-body">
        <h3>${s.title}</h3>
        <p>${s.copy}</p>
      </div>
    </div>`).join("");
}

function renderAgencySection(rowsTargetId){
  const el = document.getElementById(rowsTargetId);
  if(!el || typeof AGENCY_ROWS === "undefined") return;
  el.innerHTML = AGENCY_ROWS.map((r, i) => `
    <div class="acc-item reveal">
      <button class="acc-trigger" data-acc-target="agency-panel-${i}" aria-expanded="false" aria-controls="agency-panel-${i}">
        <span style="display:flex;align-items:center;gap:14px;">
          <span class="service-card2-icon" style="width:36px;height:36px;margin-bottom:0;flex-shrink:0;"><i data-lucide="${r.icon}" style="width:18px;height:18px;"></i></span>
          <strong>${r.title}</strong>
        </span>
        <span class="acc-icon">+</span>
      </button>
      <div class="acc-panel" id="agency-panel-${i}" hidden>
        <p>${r.copy}</p>
      </div>
    </div>`).join("");
}

function renderHiringManagerSection(problemsTargetId, getTargetId){
  const pEl = document.getElementById(problemsTargetId);
  if(pEl && typeof HIRING_MANAGER_SECTION !== "undefined"){
    pEl.innerHTML = HIRING_MANAGER_SECTION.problems.map(p => `<p class="dont-do-line reveal" style="font-size:16px;">"${p}"</p>`).join("");
  }
  renderChipList(getTargetId, typeof HIRING_MANAGER_SECTION !== "undefined" ? HIRING_MANAGER_SECTION.whatYouGet : null);
}

function renderDiagnosticCards(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof DIAGNOSTIC_CARDS === "undefined") return;
  el.innerHTML = DIAGNOSTIC_CARDS.map((c, i) => `
    <div class="diag-card reveal">
      <h3>${c.title}</h3>
      <div class="diag-causes">${c.causes.map(x => `<span>${x}</span>`).join("")}</div>
      <button class="acc-trigger" data-acc-target="diag-panel-${i}" aria-expanded="false" aria-controls="diag-panel-${i}" style="padding:0;">
        <span>What I'd investigate first</span><span class="acc-icon">+</span>
      </button>
      <div class="acc-panel" id="diag-panel-${i}" hidden style="padding:14px 0 0;">
        <ul class="lookat-list">${c.investigate.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>`).join("");
}

function renderAISearchEra(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof AI_SEARCH_ERA === "undefined") return;
  const d = AI_SEARCH_ERA;
  el.innerHTML = `
    <p class="prose reveal" style="max-width:660px;">${d.intro}</p>
    <p class="prose reveal" style="max-width:660px;margin-top:12px;font-style:italic;">${d.positioning}</p>
    <div class="causes-grid" style="margin-top:28px;grid-template-columns:repeat(4,1fr);">
      ${d.platforms.map(p => `
        <div class="cause-card reveal">
          <div class="eyebrow">${p.name}</div>
          <p>${p.note}</p>
        </div>`).join("")}
    </div>
    <ul class="chip-list" style="margin-top:24px;">${d.fundamentals.map(f => `<li>${f}</li>`).join("")}</ul>`;
}

function renderToolsSystems(targetId, tabBarId){
  const el = document.getElementById(targetId);
  const bar = document.getElementById(tabBarId);
  if(!el || !bar || typeof TOOLS_SYSTEMS === "undefined") return;
  bar.innerHTML = TOOLS_SYSTEMS.map((g, i) =>
    `<button class="tab-trigger" data-tab-target="tools-panel-${i}">${g.title}</button>`
  ).join("");
  el.innerHTML = TOOLS_SYSTEMS.map((g, i) => `
    <div class="tab-panel" id="tools-panel-${i}" hidden>
      <ul class="chip-list">${g.items.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderWhatIDeliver(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof WHAT_I_DELIVER === "undefined") return;
  el.innerHTML = WHAT_I_DELIVER.map((d, i) => `
    <div class="acc-item reveal">
      <button class="acc-trigger" data-acc-target="deliver-panel-${i}" aria-expanded="false" aria-controls="deliver-panel-${i}">
        <span><strong>${d.title}</strong> — ${d.summary}</span><span class="acc-icon">+</span>
      </button>
      <div class="acc-panel" id="deliver-panel-${i}" hidden>
        <ul>${d.details.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </div>`).join("");
}

function renderResumeSnapshot(targetId){
  const el = document.getElementById(targetId);
  if(!el || typeof RESUME_SNAPSHOT === "undefined") return;
  el.innerHTML = RESUME_SNAPSHOT.map(m => `
    <div class="metric-cell reveal" title="${m.explain}">
      <div class="metric-value">${m.value}</div>
      <div class="metric-label">${m.label}</div>
    </div>`).join("");
}

function renderResumeExpertiseTabs(tabBarId, panelsId){
  const bar = document.getElementById(tabBarId);
  const el = document.getElementById(panelsId);
  if(!el || !bar || typeof RESUME_CORE_EXPERTISE === "undefined") return;
  bar.innerHTML = RESUME_CORE_EXPERTISE.map((g, i) =>
    `<button class="tab-trigger" data-tab-target="expertise-panel-${i}">${g.title}</button>`
  ).join("");
  el.innerHTML = RESUME_CORE_EXPERTISE.map((g, i) => `
    <div class="tab-panel" id="expertise-panel-${i}" hidden>
      <ul class="lookat-list">${g.items.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`).join("");
}

function renderExperienceAccordion(targetId, items){
  const el = document.getElementById(targetId);
  if(!el) return;
  const data = items || EXPERIENCE;
  el.innerHTML = data.map((job, i) => `
    <div class="acc-item reveal">
      <button class="acc-trigger" data-acc-target="exp-panel-${i}" aria-expanded="${i===0?'true':'false'}" aria-controls="exp-panel-${i}">
        <span>
          <span style="font-family:var(--font-mono);font-size:12px;color:var(--ink-faint);">${job.dates}</span><br>
          <strong>${job.company}</strong> — ${job.role}
        </span>
        <span class="acc-icon">${i===0?'−':'+'}</span>
      </button>
      <div class="acc-panel" id="exp-panel-${i}" ${i===0?'':'hidden'}>
        <div class="playbook-label">What I Owned</div>
        <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
        ${job.achievement ? `<div class="achievement-pill">▲ ${job.achievement}</div>` : ""}
        <div class="playbook-label" style="margin-top:14px;">Key Focus</div>
        <div class="tool-tags">${job.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>
      </div>
    </div>`).join("");
}

function renderSkillsJumpNav(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = SKILLS.map(block =>
    `<a href="#skill-${block.category.toLowerCase().replace(/[^a-z0-9]+/g,'-')}">${block.category}</a>`
  ).join("");
}

function renderProjectDetail(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  const pathMatch = window.location.pathname.match(/\/work\/([^/]+)/);
  const slug = pathMatch ? decodeURIComponent(pathMatch[1]) : new URLSearchParams(window.location.search).get("slug");
  const p = findWorkItem(slug) || allWorkItems()[0];
  const isCaseStudy = !!p.industry;
  document.title = `${p.name} — Shailesh Bhadra`;
  const canonicalEl = document.getElementById("canonical-link");
  if(canonicalEl) canonicalEl.href = `https://shaileshbhadra.com/work/${p.slug}`;
  const descEl = document.querySelector('meta[name="description"]');
  if(descEl) descEl.setAttribute("content", p.summary || p.challenge || `Case study: ${p.name}`);
  const myRole = isCaseStudy
    ? `I owned the diagnosis and implementation described below — investigating the problem, prioritising the fix, and carrying it through to the outcome.`
    : `${p.role} at ${p.company}, owning this engagement end to end — from the initial diagnosis through to implementation and measurement.`;
  el.innerHTML = `
    <div class="container">
      <div class="detail-hero">
        <a class="back-link" href="/work">← All work</a>
        <div class="project-card-top" style="margin-top:20px;">
          <div class="eyebrow">${isCaseStudy ? `${p.region} · ${p.industry}` : p.company}</div>
          <span class="kind-badge kind-badge--${(p._kind||p.type||'').toLowerCase().replace(/\s+/g,'-')}">${p._kind || p.type || "Client Project"}</span>
        </div>
        <h1 style="font-size:clamp(28px,4vw,42px);margin-top:14px;">${p.name}</h1>
        <div class="detail-meta-row">
          ${isCaseStudy ? `<span>MARKET: ${p.region}</span><span>BUSINESS MODEL: ${p.industry}</span>` : `<span>ROLE: ${p.role}</span>`}
        </div>
        ${isCaseStudy ? `<p class="prose" style="margin-top:16px;color:var(--ink-faint);font-size:13px;">Client name withheld under confidentiality. Details reflect a real engagement of this type; figures are representative, not audited public results.</p>` : ""}
      </div>
      <div class="case-block"><h3>The Challenge</h3><p>${p.challenge}</p></div>
      <div class="case-block"><h3>What I Found</h3><p>${p.approach}</p></div>
      <div class="case-block"><h3>My Role &amp; Ownership</h3><p>${myRole}</p></div>
      <div class="case-block"><h3>What I Changed</h3><p>${p.implementation}</p></div>
      <div class="case-block"><h3>Why These Changes</h3><p>${p.why || p.learning}</p></div>
      <div class="case-block"><h3>The Outcome</h3><p>${p.result}</p></div>
      <div class="case-block"><h3>What I Learned</h3><p>${p.learning}</p></div>
      <div class="case-block"><h3>What I'd Do Next</h3><p>${p.next || "—"}</p></div>
      <div class="case-block"><h3>Skills Demonstrated</h3><ul class="chip-list">${p.tools.map(t => `<li>${t}</li>`).join("")}</ul></div>
    </div>`;
}

/* ---------- Contact form ----------
   Submits directly via Web3Forms (https://web3forms.com) — no mail client
   is opened, no backend to host. Set the access_key hidden input in
   contact.html to your own free key before going live. */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;

  const nameEl = form.querySelector("#f-name");
  const emailEl = form.querySelector("#f-email");
  const messageEl = form.querySelector("#f-message");
  const submitBtn = form.querySelector("#contact-submit");
  const submitLabel = submitBtn.querySelector(".btn-label");
  const submitLabelDefault = submitLabel.textContent;
  const statusEl = form.querySelector("#form-status");
  const charCount = form.querySelector("#char-count");

  const errors = {
    name: form.querySelector("#err-name"),
    email: form.querySelector("#err-email"),
    message: form.querySelector("#err-message"),
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Live character counter for the message field
  if(messageEl && charCount){
    messageEl.addEventListener("input", () => {
      charCount.textContent = `${messageEl.value.length} / 1000`;
    });
  }

  function setFieldError(field, msg){
    errors[field].textContent = msg || "";
    const input = field === "name" ? nameEl : field === "email" ? emailEl : messageEl;
    input.classList.toggle("field-invalid", !!msg);
  }

  function validate(){
    let ok = true;
    if(!nameEl.value.trim()){ setFieldError("name", "Please enter your name."); ok = false; }
    else setFieldError("name", "");

    if(!emailEl.value.trim()){ setFieldError("email", "Please enter your email."); ok = false; }
    else if(!emailPattern.test(emailEl.value.trim())){ setFieldError("email", "That email address doesn't look right."); ok = false; }
    else setFieldError("email", "");

    if(!messageEl.value.trim()){ setFieldError("message", "Please add a short message."); ok = false; }
    else setFieldError("message", "");

    return ok;
  }

  function setStatus(type, msg){
    statusEl.textContent = msg;
    statusEl.className = "form-status" + (type ? ` form-status--${type}` : "");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    setStatus("", "");

    // Honeypot: if this hidden checkbox got checked, silently drop the submission
    if(form.querySelector("#botcheck").checked) return;

    if(!validate()){
      setStatus("error", "Please fix the highlighted fields and try again.");
      return;
    }

    submitBtn.disabled = true;
    submitLabel.textContent = "Sending…";
    setStatus("pending", "Sending your message…");

    try{
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if(res.ok && result.success){
        form.reset();
        if(charCount) charCount.textContent = "0 / 1000";
        setStatus("success", "Thanks — your message is on its way. I'll reply within 1–2 business days.");
        trackEvent("contact_submission", { inquiry_type: payload.inquiry_type || "" });
      } else {
        setStatus("error", "Something went wrong sending that. Try again, or email me directly below.");
      }
    } catch(err){
      setStatus("error", "Network error — please try again, or email me directly below.");
    } finally {
      submitBtn.disabled = false;
      submitLabel.textContent = submitLabelDefault;
    }
  });
}

/* ============================================================
   ANALYTICS — GA4 via gtag.js, loaded only if a real Measurement
   ID is configured. No fake/placeholder ID is ever sent to Google.

   To enable: replace GA4_MEASUREMENT_ID below with your real ID
   (format "G-XXXXXXXXXX") from GA4 Admin → Data Streams. Until
   then this stays fully inert — no script loads, no requests fire.
   ============================================================ */
const GA4_MEASUREMENT_ID = ""; // [ADD GA4 MEASUREMENT ID] — e.g. "G-XXXXXXXXXX"

function initAnalytics(){
  if(!GA4_MEASUREMENT_ID) return; // not configured — do nothing, no fake ID sent anywhere

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function(){ dataLayer.push(arguments); };
  gtag("js", new Date());
  gtag("config", GA4_MEASUREMENT_ID);

  bindTrackedClicks();
}

/* Fires a GA4 event if analytics is configured; otherwise a no-op.
   Safe to call unconditionally from anywhere in the codebase. */
function trackEvent(eventName, params){
  if(!GA4_MEASUREMENT_ID || typeof gtag !== "function") return;
  gtag("event", eventName, params || {});
}

/* Event delegation on document, not per-element listeners — most
   data-track elements (case study cards, CTA banners) render
   dynamically after page load via JS, so binding at load time would
   miss them entirely. Delegation catches them regardless of when
   they're added to the DOM. */
function bindTrackedClicks(){
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-track]");
    if(!el) return;
    trackEvent(el.dataset.track, { link_url: el.href || "" });
  });
}

// Run on every page once the DOM is ready — inert until GA4_MEASUREMENT_ID is set.
if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", initAnalytics);
} else {
  initAnalytics();
}

/* ============================================================
   REUSABLE INTERACTIVE COMPONENTS
   Accordion, Tabs, Count-up — used across Approach/About/Resume.
   Vanilla JS, keyboard-accessible, no dependencies, respects
   prefers-reduced-motion for the count-up animation.
   ============================================================ */

/* --- Accordion: click a header to expand/collapse a panel ---
   Markup contract:
     <button class="acc-trigger" data-acc-target="ID" aria-expanded="false" aria-controls="ID">…</button>
     <div class="acc-panel" id="ID" hidden>…</div>
   Bound via delegation so it works on dynamically-rendered content. */
function bindAccordions(){
  document.addEventListener("click", (e) => {
    const trigger = e.target.closest(".acc-trigger");
    if(!trigger) return;
    const panel = document.getElementById(trigger.dataset.accTarget);
    if(!panel) return;
    const open = trigger.getAttribute("aria-expanded") === "true";
    trigger.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
    const icon = trigger.querySelector(".acc-icon");
    if(icon) icon.textContent = open ? "+" : "−";
  });
}

/* --- Tabs: click a tab to switch which panel is visible ---
   Markup contract (within a `[data-tabs]` container):
     <button class="tab-trigger" data-tab-target="ID" aria-selected="false">…</button>
     <div class="tab-panel" id="ID" hidden>…</div>
   First tab in each group is active by default. */
function bindTabs(){
  document.querySelectorAll("[data-tabs]").forEach(group => {
    if(group.dataset.tabsBound) return; // avoid double-binding on re-render
    group.dataset.tabsBound = "true";
    const triggers = Array.from(group.querySelectorAll(".tab-trigger"));
    function activate(target){
      triggers.forEach(t => {
        const active = t.dataset.tabTarget === target;
        t.setAttribute("aria-selected", String(active));
        t.classList.toggle("active", active);
        const panel = document.getElementById(t.dataset.tabTarget);
        if(panel) panel.hidden = !active;
      });
    }
    triggers.forEach(t => t.addEventListener("click", () => activate(t.dataset.tabTarget)));
    if(triggers[0]) activate(triggers[0].dataset.tabTarget);
  });
}

/* --- Count-up: animates a number into view once, on first scroll
   into viewport. Respects prefers-reduced-motion (shows final value
   immediately). Only touches elements with [data-count-to]. ---- */
function bindCountUp(){
  const els = document.querySelectorAll("[data-count-to]");
  if(!els.length) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  els.forEach(el => {
    const prefix = el.dataset.countPrefix || "";
    const suffix = el.dataset.countSuffix || "";
    const to = parseFloat(el.dataset.countTo);
    if(isNaN(to)) return;
    if(reduced){ el.textContent = `${prefix}${to}${suffix}`; return; }
    let done = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting && !done){
          done = true;
          const duration = 900, start = performance.now();
          function tick(now){
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = `${prefix}${Math.round(to * eased)}${suffix}`;
            if(progress < 1) requestAnimationFrame(tick);
            else el.textContent = `${prefix}${to}${suffix}`;
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    observer.observe(el);
  });
}

/* --- Scroll-active step: highlights the current step in a vertical
   process/timeline as the user scrolls past it. Adds `.is-active`
   to the step whose top is nearest the top third of the viewport. */
function bindScrollActiveSteps(containerSelector, stepSelector){
  const container = document.querySelector(containerSelector);
  if(!container) return;
  const steps = Array.from(container.querySelectorAll(stepSelector));
  if(!steps.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("is-active", entry.isIntersecting);
    });
  }, { rootMargin: "-35% 0px -50% 0px", threshold: 0 });
  steps.forEach(s => observer.observe(s));
}
