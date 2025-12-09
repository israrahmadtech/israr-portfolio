........................  Home Page  ........................
1. Layout order (top → bottom)

Navbar
Hero / Intro
Key Value / Short bio (3 bullets)
Tech / Tools (badges)
Highlights / Stats (optional)
Featured Projects (3 best)
Call to Action (CTA)
Footer (quick links + contact)

2. Section details (step by step)

Navbar
Items: Logo / Name | Projects | About | Contact | Resume (download)
Small behaviour: sticky top, transparent on hero then bg on scroll.
Accessibility: focus states, skip-to-content link.

Hero / Intro
Content: Short headline (2–6 words), one-line subtitle, 1–2 CTAs (View Projects, Contact).
Visual: small profile image or illustration on the right; subtle motion (fade/slide).
Implementation tips:
Make this a client component (for interactive CTA animations).
Use responsive grid: text left, image right on lg, stacked on mobile.
Keep text semantic: <h1> for headline, <p> for subtitle.

Key Value / Short bio
3 short bullets showing strengths (e.g., “Pixel-perfect UI”, “Supabase auth & DB”, “Team lead — 13 members”).
Keep each bullet 6–10 words. Use icons (shadcn or lucide) for each bullet.

Tech / Tools (badges)
Show small badges or chips: React, Next.js, Tailwind, TypeScript, Supabase, Shadcn UI, Git.
Layout: horizontal scroll on small screens or wrap grid.
Implementation tip: SVG logos or simple bordered chips (Tailwind rounded-full px-3 py-1 text-sm).

Highlights / Stats (optional)
3 numbers: Projects completed (20+), Team lead (13), Top-3 at SMIT.
Small animation counting from 0 to value (use simple JS or CSS).
Keep labels short.

Featured Projects (3)
Card per project: screenshot, title, 1-line description, tech tags, buttons (Live / Code).
UX: Cards clickable; open demo in new tab.
Implementation:
Fetch project data from a local JSON or a simple static array for now.
Lazy-load images (next/image) and use placeholders.

Call to Action (CTA)
Big clear CTA: “See all projects” + “Contact me”
Place after featured projects and again in footer.

Footer
Quick links (Projects, About, Contact), social icons (GitHub, LinkedIn), email, small copyright.
Small site credits / deploy link (Vercel).
