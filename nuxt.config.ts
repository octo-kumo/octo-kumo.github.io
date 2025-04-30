// https://nuxt.com/docs/api/configuration/nuxt-config
import fs from 'fs-extra';
import { resolve } from 'pathe'
import webmanifest from "./webmanifest";
const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000"
const PRODUCTION = process.env.NODE_ENV === 'production'
export default defineNuxtConfig({
    ssr: PRODUCTION,
    site: {
        name: 'Yun',
        url: SITE_URL,
        logo: 'https://yun.ng/logo.png'
    },
    build: {
        analyze: process.env.ANALYZE ? {
            analyzerMode: 'static',
            open: false,
            filename: resolve('.nuxt/analyze/client.html')
        } : false
    },
    hooks: {
        'nitro:build:public-assets': async ({ nuxt, nitro }: any) => {
            if (process.env.ANALYZE) {
                const src = resolve(nuxt.options.rootDir, '.nuxt/analyze/client.html')
                const dest = resolve(nitro.options.output.publicDir, 'analyze.html')
                await fs.copy(src, dest)
            }
        }
    },
    app: {
        baseURL: process.env.BASE_URL || '/',
        head: {
            title: '云',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            htmlAttrs: {
                lang: 'en',
            },
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) => ["mjx-container", "MjxContainer", "G", "Use", "Defs", "Rect", "Path", "Annotation", "lite-youtube"].includes(tag),
        },
    },
    css: ['~/assets/scss/index.scss'],
    nitro: {
        minify: PRODUCTION,
        sourceMap: !PRODUCTION,
        timing: false,
        compressPublicAssets: PRODUCTION,
        preset: process.env.NITRO_TARGET ?? "node",
        firebase: {
            gen: 2,
            nodeVersion: '20'
        },
        prerender: PRODUCTION ? {
            autoSubfolderIndex: false,
            concurrency: 4,
            routes: ['/', '/sitemap.xml']
        } : undefined,
        esbuild: {
            options: {
                target: 'esnext',
            },
        }
    },

    vite: {
        build: {
            target: 'esnext',
            minify: 'esbuild',
            assetsInlineLimit: 4096,
            sourcemap: !PRODUCTION,
            chunkSizeWarningLimit: 600,
            rollupOptions: {
                output: {
                    manualChunks: {
                        vue: ['vue', 'vue-router'], // split core libs
                    }
                }
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                    // additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
                },
            },
        },

    },

    devtools: { enabled: false },

    typescript: {
        strict: true,
        shim: false,
    },
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@tresjs/nuxt',
        '@nuxtjs/mdc',
        '@element-plus/nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt', "@nuxtjs/sitemap", "@nuxt/content", // "@nuxt/image",
        // "nuxt-security",
        // '@nuxtjs/robots',
        // "nuxt-booster",
        '@formkit/auto-animate/nuxt',
        "nuxt-og-image",
        ...(PRODUCTION ? ['nuxt-vitalizer', 'nuxt-umami'] : []),
        // "nuxt-delay-hydration"
    ],
    vitalizer: {
        disableStylesheets: 'entry'
    },
    umami: {
        host: "https://anal.yun.ng",
        id: 'fd089b30-9952-41b0-a817-fce38fefae17',
        customEndpoint: "/api/send"
    },
    pwa: {
        selfDestroying: true,
        strategies: 'generateSW',
        registerType: 'autoUpdate',
        manifest: webmanifest,
        client: {
            installPrompt: false,
            periodicSyncForUpdates: 3600,
        }
    },
    content: {
        build: {
            markdown: {
                remarkPlugins: {
                    'remark-reading-time': {},
                    'remark-math': {}
                },
                rehypePlugins: {
                    'rehype-katex': {
                        output: 'html'
                    },
                    'rehype-preset-minify': {},
                },
                highlight: {
                    langs: ['json', 'js', 'ts', 'html', 'css', 'md', 'yaml', 'python', 'cpp', 'sql', 'sh', 'php', 'rust', 'csharp',
                        JSON.parse(fs.readFileSync('./public/shiki/flag.tmLanguage.json', 'utf-8')),
                    ],
                    theme: {
                        default: 'one-light',
                        dark: 'one-dark-pro',
                        sepia: 'monokai'
                    }
                }
            }
        },
        renderer: {
            anchorLinks: false,
        }
    },

    // vueuse
    vueuse: {
        ssrHandlers: true,
    },

    // colorMode
    colorMode: {
        classSuffix: '',
    },

    unocss: {
        uno: true,
        attributify: true,
        icons: {
            scale: 1.2,
        },
    },

    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'scss',
        themes: ['dark'],
    },

    ogImage: {
        enabled: PRODUCTION,
        zeroRuntime: PRODUCTION,
        defaults: {
            extension: 'jpeg',
        }
    },

    experimental: {
        viewTransition: PRODUCTION,
        payloadExtraction: PRODUCTION,
        sharedPrerenderData: PRODUCTION
    },
    // future: {
    //     compatibilityVersion: 4,
    // },
    compatibilityDate: '2024-07-08'
});
