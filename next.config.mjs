/** @type {import('next').NextConfig} */

import nextPWA from "next-pwa";

const withPWA = nextPWA({
  dest: "public",
  disable: process.env.VERCEL_ENV !== "production",
});
const nextConfig = withPWA({});

export default nextConfig;
