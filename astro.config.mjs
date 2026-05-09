import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  base: '/world-wenzhou-people/',
  server: {
    allowedHosts: true,
  },
});
