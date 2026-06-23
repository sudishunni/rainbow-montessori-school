# Rainbow Montessori Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a polished one-page static website for Rainbow Montessori School, Madambakkam with logo-inspired colors, admissions CTAs, WhatsApp/email hooks, and Netlify-ready form support.

**Architecture:** Use a static `index.html` so it can be hosted free on Netlify, Vercel, or GitHub Pages. Keep all page styles inline for now because this workspace has no build system and the page is a single marketing/admissions surface.

**Tech Stack:** HTML, CSS, minimal browser JavaScript, Netlify Forms-compatible markup, Node built-in test script for structure checks.

---

### Task 1: Site Structure Test

**Files:**
- Create: `tests/check-site.mjs`
- Create later: `index.html`

- [x] **Step 1: Write a failing structural test**

Create a Node script that reads `index.html` and checks for the required production sections: school identity, program cards, Montessori method, campus visit CTA, Netlify form, WhatsApp link, email link, map section, responsive viewport meta tag, and logo-color tokens.

- [x] **Step 2: Run the test to verify it fails**

Run: `node tests/check-site.mjs`

Expected: failure because `index.html` does not exist yet.

### Task 2: Static Homepage

**Files:**
- Create: `index.html`

- [x] **Step 1: Build the page**

Create a responsive one-page site with:
- Logo-inspired color palette.
- Hero section for admissions.
- Sticky navigation.
- Programs.
- Montessori method explanation.
- Parent trust/admission flow.
- Campus/gallery section.
- Contact section with phone, WhatsApp, email, Netlify form, and map placeholder.
- Footer with editable school details.

- [x] **Step 2: Run structural test**

Run: `node tests/check-site.mjs`

Expected: pass.

### Task 3: Deployment Notes

**Files:**
- Create: `README.md`

- [x] **Step 1: Document hosting and contact setup**

Document Netlify deployment, required school details to replace, and how WhatsApp/email/form links work.

### Self-Review

- Scope is one static page, not a CMS or multi-page app.
- Placeholders are explicit where public details were not verified.
- The page can be deployed free without server code.
