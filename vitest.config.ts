import path from 'node:path'

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    alias: {
      app: path.resolve(__dirname, './src/app'),
      pages: path.resolve(__dirname, './src/pages'),
      widgets: path.resolve(__dirname, './src/widgets'),
      features: path.resolve(__dirname, './src/features'),
      entities: path.resolve(__dirname, './src/entities'),
      shared: path.resolve(__dirname, './src/shared'),
    }
  },
  
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    css: true,              // process CSS imports
    reporters: ['verbose'], // verbose output
    pool: 'forks',         // test isolation (safer)
    restoreMocks: true,    // auto-cleanup mocks after each test
    mockReset: true,        // reset mocks after each test
    
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      include: ['src/**/*.{ts,tsx,js,jsx}'],
      exclude: [
        'node_modules/',
        'build/',
        '**/*.config.ts',
        '**/types.ts',
        '**/index.ts',
        '**/*.d.ts'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      },
    },

    include: ['**/*.{test,spec}.{ts,tsx,js,jsx}'],
    exclude: ['node_modules', 'build', '.tsbuildinfo']
  }
})
