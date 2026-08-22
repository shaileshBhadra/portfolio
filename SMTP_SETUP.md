# Gmail SMTP setup — fixes the contact form's Cloudflare-blocking issue

## Why this is needed

Web3Forms sits behind Cloudflare, and Cloudflare was serving a "Just a
moment..." bot-challenge page instead of a real API response when Render's
server tried to call it. That challenge requires a real browser to solve —
a server-to-server request can never pass it. This isn't fixable by
adjusting code; it needs a different way to actually send the email.

SMTP (the protocol email itself runs on) doesn't go through Cloudflare's
web-layer protection at all, so this sidesteps the problem entirely.

## 1. Turn on 2-Step Verification (if not already on)

Gmail requires this before it will let you create an App Password.

1. Go to https://myaccount.google.com/security
2. Under "How you sign in to Google", turn on **2-Step Verification** if it
   isn't already on.

## 2. Create an App Password

1. Go to https://myaccount.google.com/apppasswords
   (if that link asks you to sign in again, that's normal)
2. Under "App name", type something like `Portfolio Contact Form`.
3. Click **Create**.
4. Google shows you a 16-character password (like `abcd efgh ijkl mnop`).
   **Copy it now** — you can't view it again after closing this screen.

This is a special password just for this one use — it's not your real
Gmail password, and you can revoke it any time from that same page without
affecting your regular Google login.

## 3. Add it to Render

1. Open your Web Service on Render → **Environment** tab.
2. Add two new environment variables:
   - Key: `SMTP_USER` — Value: your full Gmail address (e.g. `shaileshbhadra@gmail.com`)
   - Key: `SMTP_PASS` — Value: the 16-character app password from step 2
     (you can include or remove the spaces, both work)
3. Save. Render will redeploy automatically.

That's it — once `SMTP_USER` and `SMTP_PASS` are both set, the server
automatically uses Gmail SMTP instead of Web3Forms. You don't need to
remove `WEB3FORMS_ACCESS_KEY`; it's kept as an automatic fallback only if
SMTP isn't configured, but it won't be used once SMTP is set up.

## 4. Test it

1. Once Render shows the new deploy as live, submit the contact form for
   real (or re-run the browser console diagnostic from earlier in this
   chat).
2. Check the Gmail inbox for `SMTP_USER` — the message should arrive
   within a few seconds, with the visitor's email set as "Reply-To" so
   you can just hit reply.

## If it still fails

Check Render's logs for a line starting with `SMTP send failed:` — Gmail's
own error message will be right there (e.g. "Invalid login" usually means
the app password was mistyped, or 2-Step Verification isn't actually on).
