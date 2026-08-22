/* ============================================================
   Minimal Express server for shaileshbhadra.com
   - Serves the static portfolio files
   - Proxies /api/contact to Web3Forms, keeping the access key
     ONLY in the server environment (never sent to the browser)
   - Serves a small admin panel (/admin) for updating the resume
     PDF and career/experience data without a code deploy.

   PERSISTENCE: set MONGODB_URI to store admin-edited content in
   MongoDB (survives redeploys — see store.js for setup notes).
   Without it, falls back to local files, which reset on redeploy.
   ============================================================ */

const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const multer = require("multer");
const store = require("./store");

// Node 18+ has global fetch built in; fall back to node-fetch on older
// runtimes so the contact form works regardless of Render's actual
// Node version, rather than assuming one.
const fetchImpl = typeof fetch !== "undefined" ? fetch : require("node-fetch");

const app = express();
const PORT = process.env.PORT || 3000;

const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD; // set this in Render → Environment
const FALLBACK_RESUME = path.join(__dirname, "assets", "Shailesh_Bhadra_Resume.pdf");

app.use(express.json({ limit: "2mb" }));

// ============================================================
// CLEAN URL ROUTING — no .html extensions in any public URL.
// Placed before express.static so these take precedence over the
// raw file. Old *.html URLs 301-redirect to their clean equivalent
// (preserves SEO value from anything already indexed/linked).
// ============================================================
const PAGE_ROUTES = {
  "/": "index.html",
  "/about": "about.html",
  "/approach": "approach.html",
  "/work": "work.html",
  "/resume": "resume.html",
  "/contact": "contact.html",
  "/services": "services.html",
  "/insights": "insights.html",
  "/skills": "skills.html",
  "/experience": "experience.html",
  "/admin": "admin.html",
};

for (const [route, file] of Object.entries(PAGE_ROUTES)) {
  app.get(route, (req, res) => res.sendFile(path.join(__dirname, file)));
}

// Case study detail: /work/:slug (was /project-detail.html?slug=...)
app.get("/work/:slug", (req, res) => res.sendFile(path.join(__dirname, "project-detail.html")));

// Redirect every old .html URL to its clean equivalent, 301 (permanent)
const HTML_REDIRECTS = {
  "/index.html": "/",
  "/about.html": "/about",
  "/approach.html": "/approach",
  "/work.html": "/work",
  "/resume.html": "/resume",
  "/contact.html": "/contact",
  "/services.html": "/services",
  "/insights.html": "/insights",
  "/skills.html": "/skills",
  "/experience.html": "/experience",
  "/admin.html": "/admin",
};
for (const [oldPath, newPath] of Object.entries(HTML_REDIRECTS)) {
  app.get(oldPath, (req, res) => res.redirect(301, newPath));
}
// Old query-param case study links: /project-detail.html?slug=X → /work/X
app.get("/project-detail.html", (req, res) => {
  const slug = req.query.slug;
  res.redirect(301, slug ? `/work/${slug}` : "/work");
});

app.use(express.static(path.join(__dirname)));

// Public read — the frontend fetches this on page load and overlays it
// on top of the static defaults in assets/js/data.js.
app.get("/api/site-content", async (req, res) => {
  try {
    res.json(await store.getSiteContent());
  } catch (err) {
    console.error("site-content read error:", err);
    res.status(500).json({ status: "Open to new projects", currentTitle: "", experience: [], resumeUpdatedAt: null });
  }
});

// --- Admin auth --------------------------------------------------------
// Single-admin, password-only. Sessions are an in-memory token set, so
// everyone is logged out if the server restarts — acceptable for a
// personal-site admin panel with one user.
const sessions = new Set();

function makeToken() {
  return crypto.randomBytes(24).toString("hex");
}
function requireAdmin(req, res, next) {
  const token = req.cookies_token; // set by cookie parser below
  if (token && sessions.has(token)) return next();
  return res.status(401).json({ success: false, message: "Not logged in." });
}
// Tiny manual cookie parser (avoids adding cookie-parser as a dependency)
app.use((req, res, next) => {
  const raw = req.headers.cookie || "";
  const match = raw.split(";").map(s => s.trim()).find(s => s.startsWith("admin_session="));
  req.cookies_token = match ? match.split("=")[1] : null;
  next();
});

app.post("/api/admin/login", (req, res) => {
  if (!ADMIN_PASSWORD) {
    return res.status(500).json({ success: false, message: "Admin panel isn't configured yet (ADMIN_PASSWORD not set)." });
  }
  const { password } = req.body || {};
  if (password !== ADMIN_PASSWORD) {
    return res.status(401).json({ success: false, message: "Incorrect password." });
  }
  const token = makeToken();
  sessions.add(token);
  res.setHeader("Set-Cookie", `admin_session=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=${8 * 60 * 60}`);
  res.json({ success: true });
});

app.post("/api/admin/logout", (req, res) => {
  if (req.cookies_token) sessions.delete(req.cookies_token);
  res.setHeader("Set-Cookie", "admin_session=; HttpOnly; Path=/; Max-Age=0");
  res.json({ success: true });
});

app.get("/api/admin/session", (req, res) => {
  res.json({ loggedIn: !!(req.cookies_token && sessions.has(req.cookies_token)), usingMongo: store.isUsingMongo() });
});

// --- Admin: update career data / status line -------------------------------
app.post("/api/admin/site-content", requireAdmin, async (req, res) => {
  try {
    const { status, currentTitle, experience } = req.body || {};
    if (!Array.isArray(experience)) {
      return res.status(400).json({ success: false, message: "Experience must be a list." });
    }
    const current = await store.getSiteContent();
    await store.setSiteContent({
      status: status || current.status,
      currentTitle: currentTitle || current.currentTitle,
      experience,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("site-content write error:", err);
    res.status(500).json({ success: false, message: "Couldn't save — check server logs." });
  }
});

// --- Admin: resume PDF upload/download --------------------------------------
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 8 * 1024 * 1024 }, // 8MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") return cb(new Error("Only PDF files are accepted."));
    cb(null, true);
  },
});

app.post("/api/admin/resume", requireAdmin, (req, res) => {
  upload.single("resume")(req, res, async (err) => {
    if (err) {
      // Covers both multer's own errors (file too large) and our fileFilter rejection
      return res.status(400).json({ success: false, message: err.message || "Upload failed." });
    }
    if (!req.file) return res.status(400).json({ success: false, message: "No file received." });
    try {
      await store.setResume(req.file.buffer, req.file.originalname || "resume.pdf");
      res.json({ success: true });
    } catch (writeErr) {
      console.error("Resume upload error:", writeErr);
      res.status(500).json({ success: false, message: "Couldn't save the file." });
    }
  });
});

// Public download — serves the admin-uploaded PDF if one exists, otherwise
// falls back to the resume shipped in the repo.
app.get("/resume/download", async (req, res) => {
  try {
    const resume = await store.getResume();
    if (resume) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Shailesh_Bhadra_Resume.pdf"');
      return res.send(resume.buffer);
    }
    res.download(FALLBACK_RESUME, "Shailesh_Bhadra_Resume.pdf");
  } catch (err) {
    console.error("Resume download error:", err);
    res.download(FALLBACK_RESUME, "Shailesh_Bhadra_Resume.pdf");
  }
});

// --- Very small in-memory rate limiter (per IP) ---------------------------
// Resets on server restart; fine for a portfolio contact form. Blocks
// obvious abuse (bots hammering the endpoint) without needing a database.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_MAX = 5; // max submissions per IP per window
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const entry = hits.get(ip) || { count: 0, windowStart: now };
  if (now - entry.windowStart > RATE_LIMIT_WINDOW_MS) {
    entry.count = 0;
    entry.windowStart = now;
  }
  entry.count += 1;
  hits.set(ip, entry);
  return entry.count > RATE_LIMIT_MAX;
}

// --- Contact form endpoint --------------------------------------------------
app.post("/api/contact", async (req, res) => {
  try {
    if (!WEB3FORMS_ACCESS_KEY) {
      console.error("WEB3FORMS_ACCESS_KEY is not set in the environment.");
      return res.status(500).json({ success: false, message: "Server isn't configured yet." });
    }

    const ip = req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket.remoteAddress;
    if (rateLimited(ip)) {
      return res.status(429).json({ success: false, message: "Too many submissions — please try again later." });
    }

    const { name, email, message, botcheck, company, website, inquiry_type, budget } = req.body || {};

    // Honeypot: real visitors never fill/check this hidden field
    if (botcheck) {
      return res.json({ success: true }); // pretend success, don't actually send
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "Name, email and message are all required." });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ success: false, message: "That email address doesn't look valid." });
    }

    let web3formsRes;
    try {
      web3formsRes = await fetchImpl("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: inquiry_type ? `New consulting inquiry: ${inquiry_type}` : "New message from shaileshbhadra.com",
          name,
          email,
          company: company || "(not provided)",
          website: website || "(not provided)",
          inquiry_type: inquiry_type || "(not specified)",
          budget: budget || "(not provided)",
          message,
        }),
      });
    } catch (fetchErr) {
      console.error("Could not reach Web3Forms:", fetchErr.message);
      return res.status(502).json({ success: false, message: "Could not reach the email service. Please try again shortly." });
    }

    const rawBody = await web3formsRes.text();
    let result;
    try {
      result = JSON.parse(rawBody);
    } catch (parseErr) {
      console.error(`Web3Forms returned a non-JSON response. Status: ${web3formsRes.status}. Body: ${rawBody.slice(0, 500)}`);
      return res.status(502).json({
        success: false,
        message: `Email service returned HTTP ${web3formsRes.status}: ${rawBody.slice(0, 200) || "(empty body)"}`,
      });
    }

    if (web3formsRes.ok && result.success) {
      return res.json({ success: true });
    }
    console.error("Web3Forms rejected the submission:", result);
    return res.status(502).json({ success: false, message: result?.message || "Message could not be sent right now." });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ success: false, message: `Unexpected server error: ${err.message}` });
  }
});

// Safety net: any unhandled error becomes clean JSON, never a raw stack trace
app.use((err, req, res, next) => {
  console.error("Unhandled error:", err);
  if (res.headersSent) return next(err);
  res.status(500).json({ success: false, message: "Something went wrong." });
});

// Catch-all 404 — anything that didn't match a route or a static file above
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// Connect to the store (MongoDB if configured, else local files) before
// accepting requests, so the very first request doesn't race the connection.
store.initStore().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
