# Keeping the site awake (free-tier Render spin-down)

## Why this matters

Render's free tier spins your web service down after ~15 minutes with no
traffic. The next visitor after that hits a slow "cold start" (the server
has to boot back up, often 30–60 seconds before the page loads). Pinging
the site regularly from an external monitor keeps it warm.

A health-check endpoint is already live at:

```
https://<your-render-url>/health
```

It responds instantly with something like:

```json
{ "status": "ok", "uptimeSeconds": 4213, "timestamp": "...", "usingMongo": true }
```

It's deliberately lightweight — no database calls — so pinging it
frequently costs almost nothing.

## Setting up UptimeRobot (free, no card required)

1. Go to https://uptimerobot.com and create a free account.
2. Click **Add New Monitor**.
3. Fill in:
   - **Monitor Type**: HTTP(s)
   - **Friendly Name**: anything, e.g. "Portfolio Keep-Alive"
   - **URL**: `https://<your-render-url>/health`
   - **Monitoring Interval**: 5 minutes (the free plan supports down to 5 min)
4. Click **Create Monitor**.

That's it — UptimeRobot will now hit `/health` every 5 minutes,
which keeps Render from ever spinning the service down.

## Alternative: cron-job.org (also free)

If you'd rather not create an UptimeRobot account:

1. Go to https://cron-job.org and sign up (free).
2. Create a new cron job:
   - **URL**: `https://<your-render-url>/health`
   - **Schedule**: every 5 minutes
3. Save.

## A note on Render's free tier

Even with this in place, Render's free tier still has a **monthly hour
cap** (750 hours/month as of when this was written — check Render's
current pricing page, since limits change). Keeping the service always-on
via ping means it will use close to the full monthly allowance. If you're
on a paid Render plan already, spin-down isn't a concern and this step is
optional (the `/health` endpoint is still harmless to leave in place).
