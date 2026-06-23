# KVCE — Premium Educational Website

A world-class, agency-grade site for Kasat Virtual College of Education built on this project's stack (TanStack Start, React 19, Tailwind v4, shadcn/ui, Framer Motion, Lucide). Same design and behavior as the Next.js brief — just on the Lovable stack. Forms route to WhatsApp/email (no database). A logo placeholder ships now; you'll upload the official logo to swap in.

## Brand system (global)

Define the Kasat palette as tokens in `src/styles.css` (`@theme` + `:root`), used everywhere via semantic classes — no hardcoded colors in components.

- Primary `#B12B8A`, Secondary `#8D1D74`, Dark `#5D1154`, Light `#F8D5E8`
- Background `#FAFAFC`, White `#FFFFFF`, Text `#1A1A1A` / `#5B5B5B`, Success `#00A86B`
- Brand gradient: `linear-gradient(135deg,#B12B8A,#8D1D74,#5D1154)`
- Utilities for glassmorphism, soft shadows, gradient text, gradient rings, and the circular striped "Kasat ring" motif

**Typography:** Poppins (ExtraBold headings) + Inter (body) via `@fontsource` packages, imported in `src/router.tsx`/entry and mapped to `--font-*` tokens.

## Routing (separate routes for SEO, each with own head/meta)

```text
/                 Home (full landing experience)
/about            About KVCE + Kasat Group + timeline
/programs         Tabbed program catalog
/career-guidance  Counseling / consultation
/admissions       5-step admission process flow
/success-stories  Testimonial carousel + outcomes
/contact          Contact details + Google Map + lead form
```

Shared `Header` and `Footer` rendered in `__root.tsx`. The Home page composes the full set of sections; deeper routes give each major area a dedicated, indexable page.

## Components / sections to build

Reusable section components under `src/components/sections/` and primitives under `src/components/`:

1. **Navbar** — transparent at top, glassmorphism + shadow on scroll, sticky; nav links above; highlighted "Apply Now" button; mobile drawer (shadcn Sheet).
2. **Hero** — full viewport; animated abstract striped circle + gradient blobs; gradient-highlighted headline + subheadline; primary "Get Free Career Guidance" + secondary "Explore Programs"; 4 trust indicators; right-side composite image (generated education collage as placeholder).
3. **Why Choose KVCE** — 6 glass cards with gradient icons + hover lift/scroll reveal.
4. **Programs** — premium tabbed interface (Online Degrees, Postgraduate, Education, Law, Certifications); course cards with name/duration/eligibility/CTA and hover interactions.
5. **Student Segments** — "Education For Every Stage Of Life": 6 cards with illustrative icons/graphics.
6. **Career Guidance** — luxurious CTA band, "Book Free Counseling Session".
7. **Admission Process** — animated horizontal 5-step flow with animated connectors (vertical stack on mobile).
8. **Success Stories** — testimonial carousel (shadcn Carousel) with avatars, ratings, outcomes.
9. **Achievements** — dark gradient band with animated counters (20+, 100+, 10000+, 95%) using in-view count-up.
10. **About Kasat Group** — narrative + timeline visualization.
11. **FAQ** — shadcn Accordion with the 5 listed questions.
12. **Lead Generation form** — Name, Mobile, Email, City, Qualification, Interested Program; zod validation; on submit composes a prefilled WhatsApp message (to +91 92097 17123) and/or `mailto:` to admissions@kasatvce.in.
13. **Contact** — phone, email, Palghar location, embedded Google Map iframe.
14. **Footer** — premium dark; Quick Links, Programs, Admissions, Career Guidance, Contact, social icons, copyright.
15. **WhatsApp floating button** — fixed, always visible, opens chat with +91 92097 17123.

## Motion & polish

Framer Motion for scroll-reveal (fade/slide/scale on in-view), hero entrance, card hovers, counter animations, and connector draw-ins. Restrained, elegant timing — not animation on every element. Subtle Kasat ring/striped-circle motifs reused sparingly as background accents.

## Forms (per your choice: WhatsApp/email only)

- Client-side zod validation with inline errors and length limits.
- Lead form & counseling CTAs build an encoded WhatsApp deep link (`https://wa.me/919209717123?text=...`) and offer an email fallback. No backend/database.
- Inputs sanitized/encoded before building URLs.

## SEO & technical

- Per-route `head()` with unique title (<60), description (<160), og:title/description/url, canonical on leaves (relative paths since no domain yet).
- JSON-LD: `EducationalOrganization` in `__root.tsx`; `FAQPage` on home/FAQ; `BreadcrumbList` on deep routes.
- Single H1 per page, semantic HTML, alt text, lazy-loaded images, responsive viewport.
- Mobile-first responsive across all sections; accessibility (focus states, labels, contrast in the magenta palette).
- `public/robots.txt` and `public/sitemap.xml` (relative, no baked placeholder domain).

## Assets

- Generate a temporary Kasat-style circular striped magenta logo + a hero education collage image as placeholders. You upload the official logo later and I swap the import. Map embed uses a standard Google Maps iframe for Palghar (no API key needed).

## Technical notes

- Stack mapping: Next.js→TanStack Start, otherwise identical (TypeScript, Tailwind v4, Framer Motion, shadcn, Lucide).
- "Blog-ready CMS architecture": I'll scaffold a `/blog` route structure with a typed content module so posts can be added later (no CMS backend in this pass unless you want one).
- No Lovable Cloud needed for this scope.

After approval I'll build the token system + fonts first, then the shared shell, then each section/route, and verify the build and a few pages render correctly.
