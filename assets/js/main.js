/* ============================================================
   MAIN — renders shared chrome (nav/footer) and reusable
   components from DATA. Each page calls the render*() functions
   it needs after including data.js + main.js.
   ============================================================ */

function renderHeader(activeHref){
  const el = document.getElementById("site-header");
  if(!el) return;
  const links = NAV_LINKS.map(l =>
    `<a href="${l.href}" ${l.href===activeHref ? 'aria-current="page"' : ''}>${l.label}</a>`
  ).join("");
  el.innerHTML = `
    <div class="container nav-row">
      <a href="index.html" class="brand">Shailesh<span>.</span>Bhadra</a>
      <nav class="nav-links" id="nav-links">
        ${links}
        <a href="resume.html" class="nav-cta">View Resume</a>
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
}

function renderFooter(){
  const el = document.getElementById("site-footer");
  if(!el) return;
  el.innerHTML = `
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <span class="brand">Shailesh<span style="color:var(--accent)">.</span>Bhadra</span>
          <p>${PROFILE.tagline}</p>
        </div>
        <div class="footer-cols">
          <div class="footer-col">
            <h4>Site</h4>
            <a href="about.html">About</a>
            <a href="projects.html">Projects</a>
            <a href="experience.html">Experience</a>
            <a href="resume.html">Resume</a>
          </div>
          <div class="footer-col">
            <h4>Knowledge</h4>
            <a href="seo-lab.html">SEO Lab</a>
            <a href="knowledge.html">Articles</a>
            <a href="ai-automation.html">AI &amp; Automation</a>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <a href="mailto:${PROFILE.email}">${PROFILE.email}</a>
            <a href="${PROFILE.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
            <a href="contact.html">Contact form</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} ${PROFILE.name}</span>
        <span>${PROFILE.location}</span>
      </div>
    </div>`;
}

/* ---------- Reusable card renderers ---------- */

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

function renderWorkPattern(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = WORK_PATTERN.map((s,i) => `
    <div class="pattern-step">
      <div class="pattern-index">0${i+1}</div>
      <h4>${s.step}</h4>
      <p>${s.detail}</p>
    </div>`).join("");
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
      <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join("")}</ul>
      ${job.achievement ? `<div class="achievement-pill">▲ ${job.achievement}</div>` : ""}
      <div class="tool-tags">${job.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>
    </div>`).join("");
}

function renderSkills(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = SKILLS.map(block => `
    <div class="skill-block">
      <div class="skill-block-head">
        <h3>${block.category}</h3>
      </div>
      <div class="tool-list">
        ${block.tools.map(t => `
          <div class="tool-row">
            <div class="tool-name">${t.name}</div>
            <div class="tool-use">${t.use}</div>
          </div>`).join("")}
      </div>
    </div>`).join("");
}

function renderAIWorkflows(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = AI_WORKFLOWS.map(w => `
    <div class="ai-block">
      <div class="ai-block-head"><div class="eyebrow">${w.area}</div></div>
      <div class="ai-flow">
        ${w.flow.map((node,i) => `<span class="node">${node}</span>${i < w.flow.length-1 ? '<span class="arrow">→</span>' : ''}`).join("")}
      </div>
      <p class="note">${w.note}</p>
    </div>`).join("");
}

function renderProjectCards(targetId, filterCategory){
  const el = document.getElementById(targetId);
  if(!el) return;
  const list = (!filterCategory || filterCategory === "All")
    ? PROJECTS
    : PROJECTS.filter(p => p.category === filterCategory);
  if(list.length === 0){
    el.innerHTML = `<p style="color:var(--ink-faint);font-family:var(--font-mono);font-size:13px;">No projects in this category yet.</p>`;
    return;
  }
  el.innerHTML = list.map(p => `
    <a class="project-card" href="project-detail.html?slug=${p.slug}">
      <div class="project-thumb">${p.screenshot ? "" : "[ADD SCREENSHOT]"}</div>
      <div class="project-body">
        <div class="eyebrow">${p.category}</div>
        <h3>${p.name}</h3>
        <p class="summary">${p.summary}</p>
        <div class="project-result">→ ${p.result}</div>
      </div>
    </a>`).join("");
}

function renderProjectFilters(targetId, gridId){
  const el = document.getElementById(targetId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  let active = params.get("cat") || "All";
  if(!PROJECT_CATEGORIES.includes(active)) active = "All";
  function draw(){
    el.innerHTML = PROJECT_CATEGORIES.map(c =>
      `<button class="filter-btn ${c===active ? 'active':''}" data-cat="${c}">${c}</button>`
    ).join("");
    el.querySelectorAll(".filter-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        active = btn.dataset.cat;
        draw();
        renderProjectCards(gridId, active);
      });
    });
  }
  draw();
  renderProjectCards(gridId, active);
}

function renderArticleCards(targetId, filterCategory){
  const el = document.getElementById(targetId);
  if(!el) return;
  const list = (!filterCategory || filterCategory === "All")
    ? ARTICLES
    : ARTICLES.filter(a => a.category === filterCategory);
  el.innerHTML = list.map(a => `
    <a class="article-card" href="article.html?slug=${a.slug}">
      <div class="cat">${a.category}</div>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <div class="article-meta">${a.date || "[ADD DATE]"} · ${a.readingTime || "[ADD READ TIME]"}</div>
    </a>`).join("");
}

function renderSEOTopics(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = SEO_LAB_TOPICS.map(t => `<span class="topic-chip">${t}</span>`).join("");
}

function renderProjectDetail(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const p = PROJECTS.find(x => x.slug === slug) || PROJECTS[0];
  document.title = `${p.name} — Shailesh Bhadra`;
  el.innerHTML = `
    <div class="container">
      <div class="detail-hero">
        <a class="back-link" href="projects.html">← All projects</a>
        <div class="eyebrow" style="margin-top:20px;">${p.category}</div>
        <h1 style="font-size:clamp(28px,4vw,42px);margin-top:14px;">${p.name}</h1>
        <div class="detail-meta-row">
          <span>ROLE: ${p.role}</span>
          <span>TOOLS: ${p.tools.join(", ")}</span>
        </div>
      </div>
      <div class="case-block"><h3>Challenge</h3><p>${p.challenge}</p></div>
      <div class="case-block"><h3>Approach</h3><p>${p.approach}</p></div>
      <div class="case-block"><h3>Implementation</h3><p>${p.implementation}</p></div>
      <div class="case-block"><h3>Result</h3><p>${p.result}</p></div>
      <div class="case-block"><h3>Learning</h3><p>${p.learning}</p></div>
    </div>`;
}

/* ---------- Contact form (no backend — mailto fallback) ---------- */
function initContactForm(){
  const form = document.getElementById("contact-form");
  if(!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = form.querySelector("#f-name").value;
    const email = form.querySelector("#f-email").value;
    const message = form.querySelector("#f-message").value;
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  });
}
