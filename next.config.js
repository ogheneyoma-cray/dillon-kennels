/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  experimental: {
    // Runs instrumentation.ts at boot, which starts the Cray order reconciler.
    instrumentationHook: true,
  },
};

module.exports = nextConfig;
