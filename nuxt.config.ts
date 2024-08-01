// https://nuxt.com/docs/api/configuration/nuxt-config

// import {transformAssetUrls} from "vite-plugin-vuetify";

import { resolve } from "node:url";
import { readFileSync } from 'node:fs';

const SITE_URL = process.env.SITE_URL ?? "http://localhost:3000"
export default defineNuxtConfig({
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
        }
    },

    devtools: { enabled: false },
    ssr: true,

    typescript: {
        strict: true,
        shim: false,
    },

    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        // '@pinia/nuxt',
        // 'v-shared-element/nuxt',
        // '@pinia-plugin-persistedstate/nuxt',
        '@element-plus/nuxt',
        '@nuxtjs/color-mode',
        '@vite-pwa/nuxt',
        "@nuxtjs/sitemap",
        "@nuxt/content",
        // "@nuxtjs/robots",
        // "@nuxt/image",
        // "nuxt-security",
        '@formkit/auto-animate/nuxt',
        // '@nuxtjs/robots',
        // "nuxt-booster",
    ],

    pwa: {},

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
            rehypePlugins: ['rehype-mathjax']
        },
        highlight: {
            langs: ['json', 'js', 'ts', 'html', 'css', 'md', 'yaml', 'python', 'cpp', 'sql', 'sh', 'php',
                JSON.parse(readFileSync('./assets/shiki/flag.tmLanguage.json', 'utf-8')),
            ],
            theme: {
                default: 'one-light',
                dark: 'one-dark-pro',
                sepia: 'monokai'
            }
        },
        navigation: {
            fields: ['updated', 'created', 'tags']
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

    site: {
        url: SITE_URL
    },

    experimental: {
        viewTransition: true
    },
    // future: {
    //     compatibilityVersion: 4,
    // },
    compatibilityDate: '2024-07-08'
});
