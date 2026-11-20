// @ts-check
import { defineConfig } from 'astro/config';

// Served by GitHub Pages as a project site of the CMDM-Lab org, which has the
// www.cmdm.tw custom domain. A project site lives under /<repo-name>/, so
// `base` must match the repository name. If the repo is renamed, change it here.
export default defineConfig({
  site: 'https://www.cmdm.tw',
  base: '/metacore-portal',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
