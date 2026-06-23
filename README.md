# Rainbow Montessori School Website

Static one-page website for Rainbow Montessori School, Madambakkam.

## Files

- `index.html` - the full website.
- `tests/check-site.mjs` - structural verification for important page elements.
- `docs/superpowers/plans/2026-06-23-rainbow-montessori-site.md` - implementation plan.

## Before Launch

Replace these placeholders in `index.html`:

- `+91XXXXXXXXXX` with the official phone number.
- `91XXXXXXXXXX` in every `https://wa.me/...` link with the official WhatsApp number, including country code and no `+`.
- `admissions@rainbowmontessori.school` with the official email address.
- `@rainbowmontessori` and the `href="#"` Instagram link with the official Instagram URL.
- `Rainbow Montessori School, Madambakkam, Chennai` with the exact street address.
- The Google Maps URL with the verified school map pin.
- Stock image URLs with real classroom, activity, school exterior, and staff photos.

## Free Hosting Recommendation

Use Netlify for the easiest free deployment:

1. Create a Netlify account.
2. Drag this folder into Netlify's deploy area, or connect a GitHub repository.
3. Netlify will publish the site on a free `.netlify.app` URL.
4. In Netlify, enable form notifications for the `admission-enquiry` form.
5. Add a custom domain later if needed.

## Contact Form

The form in `index.html` is Netlify Forms-compatible:

```html
<form name="admission-enquiry" method="POST" data-netlify="true">
```

After Netlify deploys the site, submissions will appear in the Netlify dashboard. Email notifications can be configured there.

Spam protection is included in two layers:

- A hidden honeypot field using `netlify-honeypot="bot-field"`.
- Netlify reCAPTCHA markup using `<div data-netlify-recaptcha="true"></div>`.

After deployment, check the Netlify Forms settings for the site and confirm spam filtering/reCAPTCHA is active for the `admission-enquiry` form.

## WhatsApp Links

WhatsApp links use this pattern:

```text
https://wa.me/91XXXXXXXXXX?text=Hi%20Rainbow%20Montessori%20School%2C%20I%20would%20like%20to%20enquire%20about%20admission.
```

Replace `91XXXXXXXXXX` with the official WhatsApp number.

## Verify

Run:

```bash
node tests/check-site.mjs
```
