/* ============================================================
   MAIN — renders shared chrome (nav/footer) and reusable
   components from DATA. Each page calls the render*() functions
   it needs after including data.js + main.js.
   ============================================================ */

function injectPersonSchema(){
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PROFILE.name,
    "jobTitle": PROFILE.title,
    "email": `mailto:${PROFILE.email}`,
    "url": "https://shaileshbhadra.com/",
    "sameAs": [PROFILE.linkedin],
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

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
            <a href="skills.html">Skills &amp; Tools</a>
            <a href="work.html">Work</a>
            <a href="experience.html">Experience</a>
            <a href="resume.html">Resume</a>
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
    <a href="about.html" class="btn btn--ghost btn--sm">Get to know me →</a>
  `;
}

function renderCtaBanner(targetId, opts){
  const el = document.getElementById(targetId);
  if(!el) return;
  const o = Object.assign({
    heading: "Let's talk about what's actually going on.",
    body: PROFILE.location + " · " + PROFILE.email,
    ctaLabel: "Start a conversation",
    ctaHref: "contact.html",
  }, opts || {});
  el.innerHTML = `
    <div>
      <h2>${o.heading}</h2>
      <p>${o.body}</p>
    </div>
    <a href="${o.ctaHref}" class="btn btn--primary">${o.ctaLabel}</a>
  `;
}

function renderReadoutPanel(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  const rows = [
    { k: "Status", v: "Open to remote work" },
    { k: "Based in", v: PROFILE.location.split("—")[0].trim() },
    { k: "Experience", v: `${PROFILE.yearsExperience} years` },
    { k: "Core focus", v: "SEO · Analytics · E-commerce" },
  ];
  el.innerHTML = `
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
    <div class="skill-block" id="skill-${block.category.toLowerCase().replace(/[^a-z0-9]+/g,'-')}">
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

function renderProjectCards(targetId){
  const el = document.getElementById(targetId);
  if(!el) return;
  el.innerHTML = PROJECTS.map(p => `
    <a class="project-card" href="project-detail.html?slug=${p.slug}">
      <div class="project-body">
        <div class="eyebrow">${p.company}</div>
        <h3>${p.name}</h3>
        <p class="summary">${p.summary}</p>
        <div class="project-tags">${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}</div>
        <div class="project-result">${p.result}</div>
      </div>
    </a>`).join("");
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
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("slug");
  const p = PROJECTS.find(x => x.slug === slug) || PROJECTS[0];
  document.title = `${p.name} — Shailesh Bhadra`;
  el.innerHTML = `
    <div class="container">
      <div class="detail-hero">
        <a class="back-link" href="work.html">← All work</a>
        <div class="eyebrow" style="margin-top:20px;">${p.company}</div>
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

    const accessKey = form.querySelector('input[name="access_key"]').value;
    if(!accessKey || accessKey === "YOUR_WEB3FORMS_ACCESS_KEY"){
      setStatus("error", "Form isn't wired up yet — add a Web3Forms access key to send this directly.");
      return;
    }

    submitBtn.disabled = true;
    submitLabel.textContent = "Sending…";
    setStatus("pending", "Sending your message…");

    try{
      const formData = new FormData(form);
      const payload = Object.fromEntries(formData);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if(res.ok && result.success){
        form.reset();
        if(charCount) charCount.textContent = "0 / 1000";
        setStatus("success", "Thanks — your message is on its way. I'll reply within 1–2 business days.");
      } else {
        setStatus("error", "Something went wrong sending that. Try again, or email me directly below.");
      }
    } catch(err){
      setStatus("error", "Network error — please try again, or email me directly below.");
    } finally {
      submitBtn.disabled = false;
      submitLabel.textContent = "Send message";
    }
  });
}
