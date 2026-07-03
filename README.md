This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3001]([http://localhost:3001)](http://localhost:3001/) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# Product List + Detail (Next.js)

## Setup in VS Code

1. Create a new Next.js app (App Router):
   ```
   npx create-next-app@latest my-products-app
   ```
   When prompted, choosing App Router (`yes`) is required since these files use it.

2. Copy these files into your project, matching the same folder paths:
   - `app/page.js` → replaces the default homepage. Shows the product list.
   - `app/products/[id]/page.js` → new dynamic route for a single product's detail page.
   - `next.config.js` → replaces the default config (allows loading images from `cdn.dummyjson.com`).

3. Run the dev server:
   ```
   npm run dev
   ```

4. Open `http://localhost:3000` — you'll see the product grid. Click any card to go to `/products/<id>` and see its detail page.

## How it works

- **`app/page.js`**: On mount, calls `fetch('https://dummyjson.com/products')`. While waiting, shows a "Loading..." message. If the fetch fails (network error or bad status), shows an error message. If the response has zero products, shows "No products found." Otherwise renders a card grid with `thumbnail`, `title`, `price`, and `tags` — each card links to `/products/[id]`.

- **`app/products/[id]/page.js`**: Reads the `id` from the URL using `useParams()`, then calls `fetch('https://dummyjson.com/products/{id}')`. Same three states (loading / error / no data), and on success shows `title`, `description`, and `dimensions` (width, height, depth).

## Notes

- Styling is done with plain inline JS objects so there's no extra CSS setup needed — feel free to swap in Tailwind or CSS Modules if your project already uses them.
- `next/image` is used for the thumbnail, which is why `next.config.js` needs to allow `cdn.dummyjson.com` as an image source. If you'd rather use a plain `<img>` tag, you can skip the config change.
