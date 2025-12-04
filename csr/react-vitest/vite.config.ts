import UnoCSS from 'unocss/vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [tsconfigPaths() as never, UnoCSS(), react() as never],
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  },
  test: {
    // include: ['**/*.test.?(c|m)[jt]s?(x)'],
    // css: true,
    environment: 'jsdom',
    // testTimeout: 30000,
    globals: true,
    setupFiles: ['src/setupTests.ts'],
    //   reporters: ['junit', 'default'],
    //   outputFile: {
    //     junit: 'junit.xml',
    //   },
    //   sequence: {
    //     hooks: 'parallel',
    //   },
    //   exclude: [...configDefaults.exclude],
  },
});
