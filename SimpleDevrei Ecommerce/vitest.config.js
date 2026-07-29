import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,             // Enables global test methods (describe, it, expect)
    environment: 'jsdom',      // Uses jsdom for browser simulation
    setupFiles: './src/setupTests.js', // Global setup file
    coverage: {
      provider: 'v8',         // Enables code coverage via @vitest/coverage-v8
    },
  },
});