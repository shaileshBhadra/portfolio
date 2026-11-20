# Contact form setup

The form sends from the visitor's browser through FormSubmit (free, no account, any fields, any number of fields).
Every field in the form is sent as it is, so you can add or remove fields in `contact.html` without touching any other code.

## One-time activation
1. Deploy the site.
2. Submit the contact form once yourself.
3. FormSubmit emails shaileshbhadra@gmail.com asking you to confirm. Click the confirm link (check spam).
4. After that, every submission arrives in your inbox. The visitor's email is set as Reply-To.

## Optional
`/api/contact` can send through Gmail SMTP if `SMTP_USER` and `SMTP_PASS` are set on Render (see SMTP_SETUP.md). It is only a fallback.
