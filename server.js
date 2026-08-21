/* ============================================================
   Minimal Express server for shaileshbhadra.com
   - Serves the static portfolio files
   - Proxies /api/contact to Web3Forms, keeping the access key
     ONLY in the server environment (never sent to the browser)
   ============================================================ */

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Read the secret from Render's environment variables (Dashboard → Environment)
// Locally, copy .env.example to .env and fill it in, or export it in your shell.
const WEB3FORMS_ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

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

    const web3formsRes = await fetch("https://api.web3forms.com/submit", {
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

    const result = await web3formsRes.json();
    if (web3formsRes.ok && result.success) {
      return res.json({ success: true });
    }
    console.error("Web3Forms rejected the submission:", result);
    return res.status(502).json({ success: false, message: "Message could not be sent right now." });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ success: false, message: "Unexpected server error." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
