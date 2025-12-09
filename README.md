# Next.js — Beginner to Mastery Roadmap (2025)
A complete step-by-step roadmap to learn Next.js from basics to advanced, including modern App Router features.

---

## Module 1 — Next.js Basics (Foundation)

### What you will learn
- What is Next.js and why use it
- Pages Router vs App Router (2025 recommended: App Router)
- File-based routing
- Layouts and nested layouts
- `use client` and Server Components difference

### Topics to cover
- Installation:
  ```bash
  npx create-next-app@latest
  ```
- Project structure  
- `app/page.js`  
- `app/layout.js`  
- Metadata API  

---

## Module 2 — Rendering (SSR, SSG, ISR, CSR)

### You will learn
- SSR (Server-Side Rendering)
- SSG (Static Site Generation)
- ISR (Incremental Static Regeneration)
- CSR (Client-Side Rendering)

### Practice
- Create an SSR page that shows live time  
- Create an SSG static data page  
- Create an ISR page with `revalidate: 10`  

---

## Module 3 — Data Fetching

### Learn
- Fetching in Server Components (direct fetch allowed)
- Fetching in Client Components
- Caching options:
  ```js
  cache: 'no-store'
  next: { revalidate: 10 }
  ```
- `useEffect` vs server fetching
- Route Handlers:
  ```
  app/api/users/route.js
  ```

### Practice
- Fetch data from Supabase
- Submit form using Route Handlers

---

## Module 4 — Navigation & Dynamic Routing

### Topics
- `Link` component
- Prefetching
- `useRouter()` navigation
- Dynamic route:
  ```
  app/products/[id]/page.js
  ```
- Catch-all route:
  ```
  app/blog/[...slug]/page.js
  ```

### Practice
- Blog app with dynamic pages
- Product detail page

---

## Module 5 — Authentication (NextAuth / Supabase)

### Learn
- Supabase Auth with SSR protected routes
- Server Actions + Supabase
- Middleware for protected pages
- Optional: NextAuth basics

### Practice
- Login / Register system
- Protected profile page (server-side)

---

## Module 6 — Advanced Topics

### Topics
- Server Actions
- `next/image` optimization
- Middleware (auth, redirects)
- Edge runtime
- Deployments (Vercel)
- Advanced API routes
- Caching and revalidation
- Streaming and Suspense
- Parallel and intercepting routes
- Metadata SEO

---

# Final Projects (Mastery Level)

### 1. SaaS Dashboard
- Auth
- Realtime DB
- CRUD
- Charts
- Admin panel

### 2. E-Commerce App
- Product pages (SSR + SSG mix)
- Cart (client)
- Checkout
- ISR caching

### 3. Blogging System
- Dynamic routing
- Admin CMS
- Server Actions
- SEO optimized pages

---

## Notes
- This roadmap follows the 2025 standards with App Router.
- Practice → Build → Deploy → Repeat.