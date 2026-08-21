# MongoDB Atlas setup (free tier) — makes the admin panel's changes permanent

Without this, uploading a new resume or editing Experience through /admin
works fine — but resets back to defaults the next time Render redeploys
the site (e.g. next time you push a code change). This takes about 5
minutes and fixes that permanently, for free.

## 1. Create the free cluster

1. Go to https://www.mongodb.com/cloud/atlas/register and sign up (free).
2. When asked to create a cluster, choose the **M0 Free** tier.
3. Pick any cloud provider/region (closest to you is fine — it only
   affects latency, not cost).
4. Name the cluster anything (e.g. "portfolio").

## 2. Create a database user

1. In the Atlas sidebar: **Database Access** → **Add New Database User**.
2. Choose "Password" auth. Pick a username and a strong password —
   save this password, you'll need it in step 4.
3. Under "Database User Privileges", "Read and write to any database" is fine.

## 3. Allow Render to connect

1. In the Atlas sidebar: **Network Access** → **Add IP Address**.
2. Click **Allow Access From Anywhere** (0.0.0.0/0).
   This is safe here because the database itself is still protected by
   the username/password from step 2 — this setting just means Atlas
   won't also block by IP, which matters because Render's servers
   don't have a single fixed IP.

## 4. Get the connection string

1. In the Atlas sidebar: **Database** → click **Connect** on your cluster.
2. Choose **Drivers**, then **Node.js**.
3. Copy the connection string — it looks like:
   `mongodb+srv://<username>:<password>@portfolio.xxxxx.mongodb.net/?retryWrites=true&w=majority`
4. Replace `<username>` and `<password>` with the values from step 2.

## 5. Add it to Render

1. Open your Web Service on Render → **Environment** tab.
2. Add a new environment variable:
   - Key: `MONGODB_URI`
   - Value: the connection string from step 4
3. Redeploy (Render usually does this automatically when you save an
   environment variable).

## 6. Confirm it's working

1. Visit `/admin.html` on your live site and log in.
2. Upload a resume or edit an Experience entry, then click Save.
3. Check your Render service logs — on startup you should see:
   `Store: connected to MongoDB — content will persist across redeploys.`
   (If instead you see `MongoDB connection failed, falling back to local
   files: ...`, double check the username/password and the 0.0.0.0/0
   network access rule.)
4. Trigger a redeploy (e.g. push any small code change) and confirm your
   resume/experience edits are still there afterward — that's the real test.

## Free tier limits

The M0 free cluster gives you 512MB of storage — a resume PDF is a few
hundred KB, so this comfortably fits thousands of resume versions plus
all your experience data. No time limit, no credit card required.
