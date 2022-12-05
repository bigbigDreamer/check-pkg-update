/** @type {import('vite').UserConfig} */
import { resolve } from 'path';
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    build: {
        lib: {
            entry: resolve('src/index.ts'),
            formats: ['es', 'cjs'],
            fileName: 'index'
        },
        rollupOptions: {
            external: ['undici', 'registry-url', '@types/*', 'child_process', 'semver']
        },
    },
    plugins: [dts({
        outputDir: 'types',
        include: ['src'],
        rollupTypes: true,
    })]
});
