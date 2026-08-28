-- Phase 2: commerce schema — single product, one-time payment, secure delivery.
-- Run in Supabase SQL editor (or `supabase db push`).

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  price_cents integer not null,
  currency text not null default 'USD',
  creem_product_id text,
  asset_path text not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_order_id text not null,
  customer_email text not null,
  product_id uuid references products(id),
  amount_cents integer not null,
  currency text not null,
  status text not null default 'pending',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (provider, provider_order_id)
);

create table if not exists entitlements (
  id uuid primary key default gen_random_uuid(),
  customer_email text not null,
  product_id uuid references products(id),
  order_id uuid unique references orders(id),
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists webhook_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null,
  event_type text not null,
  payload jsonb not null,
  processed boolean not null default false,
  created_at timestamptz not null default now(),
  unique (provider, provider_event_id)
);

create index if not exists idx_entitlements_access
  on entitlements (customer_email, product_id, status);

-- Seed the single product. `creem_product_id` is the single source of truth for
-- checkout. Set it after creating the product in Creem:
--   update products set creem_product_id = '<your-creem-product-id>'
--   where slug = 'california-cdl-exam-sprint-guide';
insert into products (slug, name, price_cents, currency, creem_product_id, asset_path, active)
values (
  'california-cdl-exam-sprint-guide',
  'California CDL Exam Sprint Guide',
  999,
  'USD',
  null,
  'california-cdl-exam-sprint-guide/California_CDL_Exam_Sprint_Guide_V1.pdf',
  true
)
on conflict (slug) do nothing;
