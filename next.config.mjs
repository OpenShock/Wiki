import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  redirects: async () => [
    { source: '/', destination: '/home', permanent: false },
    { source: '/legal/:path*', destination: '/home/legal/:path*', permanent: true },
  ],
};

export default withMDX(config);
