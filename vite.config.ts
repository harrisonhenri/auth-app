/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/__tests__/test-utils/setup.ts'],
    coverage: {
      provider: 'v8',
      branches: 92,
      lines: 92,
      functions: 92,
      statements: 92,
    },
    globals: true,
  },
  resolve: {
    alias: {
      '@tests': path.join(__dirname, 'src/__tests__'),
      '@components': path.join(__dirname, 'src/components'),
      '@config': path.join(__dirname, 'src/config'),
      '@store': path.join(__dirname, 'src/store'),
      '@app': path.join(__dirname, 'src/features/app'),
      '@slices': path.join(__dirname, 'src/features/slices'),
      '@routes': path.join(__dirname, 'src/routes'),
      '@services': path.join(__dirname, 'src/services'),
      '@models': path.join(__dirname, 'src/models'),
      '@theme': path.join(__dirname, 'src/theme'),
      '@utils': path.join(__dirname, 'src/utils'),
    },
  },
  build: {
    rollupOptions: {
      external: new RegExp('/__tests__/*'),
    },
  },
})
