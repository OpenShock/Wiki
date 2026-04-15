import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isDev = process.env.NODE_ENV === 'development';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // Dev server runs normally; prod build is a static export for Cloudflare Pages.
  ...(isDev ? {} : { output: 'export' }),
  images: { unoptimized: true },
  trailingSlash: false,
  // Redirects don't work with `output: 'export'` — dev only.
  // Prod redirects live in `public/_redirects` (Cloudflare Pages).
  ...(isDev && {
    redirects: async () => [
      { source: '/', destination: '/home', permanent: false },
    ],
  }),
};

export default withMDX(config);
