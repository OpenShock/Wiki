import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  redirects: async () => [
    { source: '/', destination: '/home', permanent: false },
  ],
};

export default withMDX(config);
