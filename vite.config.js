/** @type {import('vite').UserConfig} */
import {resolve} from 'node:path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      formats: ['es', 'cjs'],
      fileName(format) {
        return `${format}.lib.js`;
      },
      name: 'Montage',
    },
    rollupOptions: {
      external: ['child_process', ...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)],
    },
    minify: 'esbuild',
  },
  resolve: ['.js', '.ts'],
  plugins: [dts({
    outputDir: 'types',
    include: ['src'],
    rollupTypes: false,
    tsConfigFilePath: resolve(__dirname, 'tsconfig.json'),
  })],
});
