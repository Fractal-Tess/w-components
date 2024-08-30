import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['./src/index.ts'],
  format: ['iife'],
  clean: true,
  minify: true,
  ...options
}));
