import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        port: 20000,
        host: "0.0.0.0"
    },
    plugins: [
        react({ // React插件
            jsxRuntime: "classic"
        }),
    ],
    build: {
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React"
                }
            }
        },
        minify: false,
        sourcemap: true,
        cssCodeSplit: true,
        lib: {
            entry: "./src/index.ts",
            name: "ReactHandlessUI",
            fileName: "react-handless-ui",
            formats: ["es", "umd", "iife"]
        }
    }
});