// https://nuxt.com/docs/api/configuration/nuxt-config

// import {transformAssetUrls} from "vite-plugin-vuetify";

import { resolve } from "node:url";
import { readFileSync } from 'node:fs';
import webmanifest from "./webmanifest";

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000"
export default defineNuxtConfig({
    ssr: true,
    site: {
        name: 'Yun',
        url: SITE_URL,
        logo: 'https://yun.ng/logo.png'
    },
    app: {
        baseURL: process.env.BASE_URL || '/',
        head: {
            title: '云',
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
        }
    },

    extends: ['nuxt-umami'],
    vue: {
        compilerOptions: {
            isCustomElement: (tag: string) => ["mjx-container", "MjxContainer", "G", "Use", "Defs", "Rect"].includes(tag),
        },
    },
    css: ['~/assets/scss/index.scss'],
    nitro: {
        preset: process.env.NITRO_TARGET ?? "static",
        firebase: {
            gen: 2,
            nodeVersion: '20'
        },
        prerender: {
            routes: ['/', '/sitemap.xml']
        },
        esbuild: {
            options: {
                target: 'esnext',
            },
        },
    },

    devtools: { enabled: false },

    typescript: {
        strict: true,
        shim: false,
    },

    modules: ['@vueuse/nuxt', // '@pinia/nuxt',
        '@unocss/nuxt', // 'v-shared-element/nuxt',
        // '@pinia-plugin-persistedstate/nuxt',
        '@element-plus/nuxt', '@nuxtjs/color-mode', '@vite-pwa/nuxt', "@nuxtjs/sitemap", "@nuxt/content", // "@nuxt/image",
        // "nuxt-security",
        // '@nuxtjs/robots',
        // "nuxt-booster",
        '@formkit/auto-animate/nuxt', "nuxt-og-image",
        // "nuxt-delay-hydration"
    ],

    pwa: {
        strategies: 'generateSW',
        registerType: 'autoUpdate',
        manifest: webmanifest,
        workbox: {
            globPatterns: ['**/*'],
            runtimeCaching: [
                {
                    urlPattern: /^https:\/\/fonts\.bunny\.net\/.*/i,
                    handler: 'CacheFirst',
                    options: {
                        cacheName: 'bunny-fonts-cache',
                        expiration: {
                            maxEntries: 10,
                            maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
                        },
                        cacheableResponse: {
                            statuses: [0, 200]
                        }
                    }
                }
            ]
        },
        client: {
            installPrompt: true,
            periodicSyncForUpdates: 3600,
        },
        devOptions: {
            enabled: true
        }
    },

    // delayHydration: {
    //     mode: 'mount',
    //     debug: process.env.NODE_ENV === 'development'
    // },
    // security: {
    //     nonce: true,
    //     ssg: {
    //         meta: true,
    //         hashScripts: true,
    //         hashStyles: false
    //     },
    //     headers: {
    //         contentSecurityPolicy: {
    //             'img-src': ['self', 'data:', 'https://*'],
    //             'frame-src': ['self', 'https://www.youtube.com', 'https://utteranc.es'],
    //         }
    //     },
    // },
    content: {
        sources: {
            content: {
                driver: 'fs',
                prefix: '/c',
                base: resolve(__dirname, 'content')
            }
        },
        markdown: {
            anchorLinks: false,
            remarkPlugins: ['remark-math'],
            rehypePlugins: ['rehype-katex']
        },
        highlight: {
            langs: ['json', 'js', 'ts', 'html', 'css', 'md', 'yaml', 'python', 'cpp', 'sql', 'sh', 'php', 'rust',
                JSON.parse(readFileSync('./assets/shiki/flag.tmLanguage.json', 'utf-8')),
            ],
            theme: {
                default: 'one-light',
                dark: 'one-dark-pro',
                sepia: 'monokai'
            }
        },
        navigation: {
            fields: ['_id', '_path', 'title', 'description', 'created', 'updated', 'tags', 'solves', 'points', 'rank', 'team']
        }
        // experimental: {
        //     clientDB: true
        // }
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

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@use "@/assets/scss/element/index.scss" as element;`,
                },
            },
        },
    },

    elementPlus: {
        icon: 'ElIcon',
        importStyle: 'scss',
        themes: ['dark'],
    },

    experimental: {
        viewTransition: true,
        payloadExtraction: true,
        sharedPrerenderData: true
    },
    // future: {
    //     compatibilityVersion: 4,
    // },
    compatibilityDate: '2024-07-08'
});