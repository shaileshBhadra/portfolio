/* ============================================================
   Persistence layer for admin-editable site content.

   If MONGODB_URI is set, everything is stored in a single
   document in MongoDB (survives Render redeploys — this is the
   whole point of using a DB instead of local disk).

   If MONGODB_URI is NOT set, falls back to local JSON + PDF
   files on disk (useful for local development, or as a
   no-setup-required default before you've created a cluster).
   ============================================================ */

const fs = require("fs");
const path = require("path");

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || "portfolio";
const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, "data");
const CONTENT_PATH = path.join(DATA_DIR, "site-content.json");
const RESUME_PATH = path.join(DATA_DIR, "resume-current.pdf");

const DEFAULTS = { status: "Open to new projects", currentTitle: "", experience: [], resumeUpdatedAt: null };

let mongoCollection = null; // set by initStore() when using Mongo

// --- Mongo-backed implementation --------------------------------------------
async function initMongo() {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient(MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
  await client.connect();
  const db = client.db(MONGODB_DB);
  mongoCollection = db.collection("siteContent");
  // Seed the single document on first run if it doesn't exist yet
  const existing = await mongoCollection.findOne({ _id: "main" });
  if (!existing) {
    await mongoCollection.insertOne({ _id: "main", ...DEFAULTS, resumeData: null, resumeFilename: null });
  }
  return client;
}

async function mongoGetSiteContent() {
  const doc = await mongoCollection.findOne({ _id: "main" });
  return {
    status: doc?.status ?? DEFAULTS.status,
    currentTitle: doc?.currentTitle ?? DEFAULTS.currentTitle,
    experience: doc?.experience ?? DEFAULTS.experience,
    resumeUpdatedAt: doc?.resumeUpdatedAt ?? null,
  };
}
async function mongoSetSiteContent({ status, currentTitle, experience }) {
  await mongoCollection.updateOne(
    { _id: "main" },
    { $set: { status, currentTitle, experience } },
    { upsert: true }
  );
}
// Handles the value coming back from MongoDB for a binary field, which may
// be a plain Buffer, a BSON Binary wrapper (whose .buffer is itself a
// correctly-sized Buffer), or — worst case — an ArrayBuffer-backed view.
// Buffer.isBuffer() is checked explicitly rather than just testing for a
// truthy .buffer property, since a plain Buffer also exposes .buffer
// (its underlying, possibly larger/pooled ArrayBuffer) which would
// silently corrupt the file if blindly re-wrapped.
function toBuffer(raw) {
  if (Buffer.isBuffer(raw)) return raw;
  if (raw && Buffer.isBuffer(raw.buffer)) return raw.buffer;
  if (raw && raw.buffer instanceof ArrayBuffer) {
    return Buffer.from(raw.buffer, raw.byteOffset || 0, raw.byteLength ?? raw.buffer.byteLength);
  }
  return Buffer.from(raw);
}

async function mongoGetResume() {
  const doc = await mongoCollection.findOne({ _id: "main" }, { projection: { resumeData: 1, resumeFilename: 1 } });
  if (!doc?.resumeData) return null;
  return { buffer: toBuffer(doc.resumeData), filename: doc.resumeFilename };
}
async function mongoSetResume(buffer, filename) {
  await mongoCollection.updateOne(
    { _id: "main" },
    { $set: { resumeData: buffer, resumeFilename: filename, resumeUpdatedAt: new Date().toISOString() } },
    { upsert: true }
  );
}

// --- Local-file implementation (fallback / local dev) -----------------------
function localReadJSON() {
  try { return JSON.parse(fs.readFileSync(CONTENT_PATH, "utf8")); }
  catch { return { ...DEFAULTS }; }
}
function localWriteJSON(data) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(CONTENT_PATH, JSON.stringify(data, null, 2));
}
async function localGetSiteContent() {
  const d = localReadJSON();
  return { status: d.status ?? DEFAULTS.status, currentTitle: d.currentTitle ?? DEFAULTS.currentTitle, experience: d.experience ?? DEFAULTS.experience, resumeUpdatedAt: d.resumeUpdatedAt ?? null };
}
async function localSetSiteContent({ status, currentTitle, experience }) {
  const current = localReadJSON();
  localWriteJSON({ ...current, status, currentTitle, experience });
}
async function localGetResume() {
  if (!fs.existsSync(RESUME_PATH)) return null;
  return { buffer: fs.readFileSync(RESUME_PATH), filename: "Shailesh_Bhadra_Resume.pdf" };
}
async function localSetResume(buffer, filename) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(RESUME_PATH, buffer);
  const current = localReadJSON();
  localWriteJSON({ ...current, resumeUpdatedAt: new Date().toISOString() });
}

// --- Public API: picks the backend once at startup --------------------------
let usingMongo = false;

async function initStore() {
  if (MONGODB_URI) {
    try {
      await initMongo();
      usingMongo = true;
      console.log("Store: connected to MongoDB — content will persist across redeploys.");
      return;
    } catch (err) {
      console.error("Store: MongoDB connection failed, falling back to local files:", err.message);
    }
  } else {
    console.log("Store: MONGODB_URI not set — using local files (resets on redeploy).");
  }
  usingMongo = false;
}

async function getSiteContent() {
  return usingMongo ? mongoGetSiteContent() : localGetSiteContent();
}
async function setSiteContent(data) {
  return usingMongo ? mongoSetSiteContent(data) : localSetSiteContent(data);
}
async function getResume() {
  return usingMongo ? mongoGetResume() : localGetResume();
}
async function setResume(buffer, filename) {
  return usingMongo ? mongoSetResume(buffer, filename) : localSetResume(buffer, filename);
}
function isUsingMongo() {
  return usingMongo;
}

module.exports = { initStore, getSiteContent, setSiteContent, getResume, setResume, isUsingMongo };
