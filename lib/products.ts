// Commerce configuration — the single source of truth for product identity,
// price, and the private asset location. Separate from marketing copy in
// content/product.ts so payment/access never pollute the landing page.

export const PRODUCT_SLUG = "california-cdl-exam-sprint-guide";

export const productCommerce = {
  slug: PRODUCT_SLUG,
  name: "California CDL Exam Sprint Guide",
  /** Integer cents (999 = $9.99). */
  priceCents: 999,
  currency: "USD",
  /** Path inside the Supabase PRIVATE storage bucket (never a public URL). */
  assetPath:
    "california-cdl-exam-sprint-guide/California_CDL_Exam_Sprint_Guide_V1.pdf",
  active: true,
} as const;

export const productPriceLabel = `$${(productCommerce.priceCents / 100).toFixed(2)}`;
