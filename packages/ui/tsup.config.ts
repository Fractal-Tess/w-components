import { defineConfig } from 'tsup';

export default defineConfig((options) => ({
  entryPoints: ['./src/twind.tsx'],
  format: ['iife'],
  clean: true,
  dts: true,
  sourcemap: true,
  external: ['react'],
  ...options
}));
