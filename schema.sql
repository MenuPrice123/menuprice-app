-- Database Schema for MenuPrice Admin Dashboard

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- ROLES
create type user_role as enum ('admin', 'operator', 'user');

-- PROFILES (Extends default auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  email text,
  full_name text,
  role user_role default 'user',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone
);

-- RESTAURANTS
create table public.restaurants (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  slug text unique not null,
  type text, -- e.g., "South Indian", "Fast Food"
  cuisine_primary text,
  price_range text, -- e.g., "₹₹"
  address text,
  city text not null,
  cover_image text, -- URL
  logo text, -- URL
  is_verified boolean default false,
  is_trending boolean default false,
  is_veg boolean default false,
  rating numeric(3, 1),
  external_url text, -- Official website
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- MENU ITEMS
create table public.menu_items (
  id uuid default uuid_generate_v4() primary key,
  restaurant_id uuid references public.restaurants(id) on delete cascade not null,
  name text not null,
  description text,
  category text, -- e.g., "Tiffins", "Starters"
  photo_url text,
  is_veg boolean default true,
  is_available boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- PRICES (To support history and comparison)
create table public.prices (
  id uuid default uuid_generate_v4() primary key,
  menu_item_id uuid references public.menu_items(id) on delete cascade not null,
  source text not null, -- e.g., 'platform_a', 'platform_b', 'restaurant_menu'
  price numeric(10, 2) not null,
  currency text default 'INR',
  valid_from timestamp with time zone default timezone('utc'::text, now()) not null,
  valid_to timestamp with time zone, -- NULL means currently active
  recorded_by uuid references public.profiles(id),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- AUDIT LOGS
create table public.audit_logs (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id),
  table_name text not null,
  record_id uuid not null,
  action text not null, -- 'CREATE', 'UPDATE', 'DELETE'
  old_data jsonb,
  new_data jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Example)
alter table public.restaurants enable row level security;

create policy "Admins have full access to restaurants"
  on public.restaurants for all
  using ( exists ( select 1 from public.profiles where id = auth.uid() and role = 'admin' ) );

create policy "Public read access to verified restaurants"
  on public.restaurants for select
  using ( is_verified = true );
