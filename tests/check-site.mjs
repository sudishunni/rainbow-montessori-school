import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const requirements = [
  ["responsive viewport", /<meta name="viewport" content="width=device-width, initial-scale=1"/],
  ["school name", /Rainbow Montessori School/i],
  ["Madambakkam location", /Madambakkam/i],
  ["logo palette purple", /--purple:\s*#[0-9a-f]{6}/i],
  ["logo palette pink", /--pink:\s*#[0-9a-f]{6}/i],
  ["logo palette green", /--green:\s*#[0-9a-f]{6}/i],
  ["admissions CTA", /Start Admission Enquiry|Book a Visit|Schedule Campus Visit/i],
  ["programs section", /Toddler Readiness[\s\S]*Casa Montessori[\s\S]*School Readiness/i],
  ["Montessori method section", /Prepared environment[\s\S]*Teacher observation[\s\S]*Parent clarity/i],
  ["campus section", /Campus Life|Campus Visit|Schedule a Campus Visit/i],
  ["Netlify form", /data-netlify="true"/],
  ["parent phone field", /name="phone"/],
  ["child age field", /name="child-age"/],
  ["WhatsApp hook", /https:\/\/wa\.me\/91XXXXXXXXXX/],
  ["floating WhatsApp icon", /class="floating-whatsapp"[\s\S]*<svg[\s\S]*aria-hidden="true"/],
  ["email hook", /mailto:admissions@rainbowmontessori\.school/],
  ["map section", /Google Maps|Open in Google Maps/i],
  ["Instagram placeholder", /Instagram/i],
];

const missing = requirements
  .filter(([, pattern]) => !pattern.test(html))
  .map(([label]) => label);

if (missing.length > 0) {
  console.error(`Missing required site elements:\n- ${missing.join("\n- ")}`);
  process.exit(1);
}

console.log(`Site structure check passed: ${requirements.length} requirements verified.`);
