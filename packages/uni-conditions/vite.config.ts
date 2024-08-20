import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import dts from 'vite-plugin-dts';
import vue2 from '@vitejs/plugin-vue2';

// Vite Configuration
export default defineConfig(({ mode }) => {
    const vueVersion = mode === 'vue2' ? vue2 : vue;

    return {
        plugins: [
            vueVersion(),
            dts({
                include: ['./src/**/*.ts', './src/**/*.vue'],
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
            },
        },
        build: {
            lib: {
                entry: path.resolve(__dirname, 'index.ts'),
                name: 'uni-conditions',
                fileName: (format) => `uni-conditions.${format}.js`,
            },
            rollupOptions: {
                external: ['vue', 'vue-demi'],
                output: {
                    globals: {
                        vue: 'Vue',
                    },
                },
            },
        },
    };
});
