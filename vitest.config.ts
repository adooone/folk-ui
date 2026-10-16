import { defineConfig } from 'vitest/config';
import { sharedCssConfig } from './vite.shared';

export default defineConfig({
  css: sharedCssConfig,
  test: {
    environment: 'node',
    css: true,
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
  },
});
