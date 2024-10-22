import { defineConfig } from 'vite';
import vue3 from '@vitejs/plugin-vue';
import vue2 from '@vitejs/plugin-vue2';
import { resolve } from 'path';
import { isVue2 } from 'vue-demi';

export default defineConfig({
    mode: "development",
    plugins: [
        isVue2 ? vue2() : vue3()
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    server: {
        port: 3000,
    },
    optimizeDeps: {
        exclude: ['vue-demi'],
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'index.ts'),
            name: 'uni-conditions',
            fileName: (format) => `uni-conditions.${format}.js`,
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue',
                },
            },
        },
    },
});
