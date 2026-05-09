import { defineConfig } from 'astro/config';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  base: isGitHubPages ? '/world-wenzhou-people/' : '/',
  server: {
    allowedHosts: true,
  },
});
