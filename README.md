# California CDL Exam Sprint Guide — Website

Marketing + sales website for the **California CDL Exam Sprint Guide**, a paid
digital product (12-page PDF) for California CDL permit test preparation.

## Tech stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript** (strict)
- **Tailwind CSS v4** (theme tokens in `app/globals.css`)
- **next/font** — Montserrat (headings) + Inter (body), self-hosted at build

## Getting started

```bash
npm install
npm run dev       # local dev
npm run lint      # 0 errors
npm run build     # production build
npm run start     # serve the production build
```

## Directory structure

```
app/                 # routes (page.tsx, layout.tsx, sitemap.ts, robots.ts)
  preview/ faq/ privacy/ terms/ refund/ contact/ access/
components/
  layout/            # Header, Footer, LegalPage
  marketing/         # homepage sections (Hero → FinalCTA)
  product/           # AccessForm
  seo/               # JsonLd
  ui/                # Button, Badge, Card, SectionHeading
content/             # product.ts, homepage.ts, faq.ts (marketing copy + facts)
lib/
  assets.ts          # centralized image paths/dimensions
  site.ts            # site config (domain, SEO)
  utils.ts           # cn() class combiner
  payment/           # provider abstraction (types, mock, factory)
  analytics.ts       # event abstraction
public/images/       # PDF preview PNGs (generated)
scripts/generate-images.py   # regenerates previews + OG from the source PDF
```

## Content source of truth

**The PDF is the product source of truth.** `content/product.ts` mirrors it — key
numbers, air-brake figures, and section descriptions must stay in sync. Marketing
copy lives in `content/homepage.ts`; FAQ in `content/faq.ts`.

Preview images are rendered from the real PDF at
`../../California_CDL_Exam_Sprint_Guide_V1.pdf` via
`python scripts/generate-images.py`.

## Payment & delivery

- **Checkout:** Creem hosted checkout (`POST /api/checkout` → redirect). The Creem
  product id is read from `products.creem_product_id` (single source of truth), not
  from an env var.
- **Webhooks:** `POST /api/webhooks/creem` (HMAC-SHA256 verified, idempotent).
- **Database:** Supabase Postgres — `products`, `orders`, `entitlements`,
  `webhook_events`. Schema in `supabase/migrations/0001_init.sql`.
- **Delivery:** Supabase private Storage + short-lived signed URLs (`lib/access.ts`).
- **Analytics:** `lib/analytics.ts` defines stable event names; `track()` is a
  no-op pending a real provider.

## Environment variables

Copy `.env.example` to `.env.local`. Set `NEXT_PUBLIC_SITE_URL` in production.
All `CREEM_*` and `SUPABASE_*` values are server-side secrets — never
`NEXT_PUBLIC_`.

## Deployment

Deploy to Vercel: connect the repo, set `NEXT_PUBLIC_SITE_URL`, done. No secrets
are required for the current mock build.
