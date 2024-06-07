// https://nuxt.com/docs/api/configuration/nuxt-config

// import {transformAssetUrls} from "vite-plugin-vuetify";

import {resolve} from "node:url";

export default defineNuxtConfig({
    app: {
        baseURL: process.env.BASE_URL || '/',
        head: {
            title: '云',
            meta: [
                {name: 'viewport', content: 'width=device-width, initial-scale=1'},
                {
                    name: 'description',
                    content: 'Personal website of a certain cloud',
                },
            ],
            link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
        }
    },

    css: ['~/assets/scss/index.scss'],
    nitro: {
        firebase: {
            gen: 2,
            nodeVersion: '20'
        },
        prerender: {
            routes: ['/sitemap.xml']
        }
    },
    devtools: {enabled: false},
    ssr: true,
    typescript: {
        strict: true,
        shim: false,
    },
    modules: [
        '@vueuse/nuxt',
        '@unocss/nuxt',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@element-plus/nuxt',
        '@nuxtjs/color-mode',
        '@vite-pwa/nuxt',
        "@nuxtjs/sitemap",
        "@nuxt/content",
        "@nuxtjs/robots",
        "@nuxt/image"
    ],
    pwa: {},

    content: {
        sources: {
            content: {
                driver: 'fs',
                prefix: '/c',
                base: resolve(__dirname, 'content')
            },
            writeups: {
                driver: 'github',
                prefix: '/ctf',
                repo: 'octo-kumo/ctf-writeups',
                branch: "master",
                dir: '/'
            }
        },
        markdown: {
            remarkPlugins: ['remark-math'],
            rehypePlugins: ['rehype-katex']
        },
        highlight: {
            langs: ['json', 'js', 'ts', 'html', 'css', 'md', 'yaml', 'python', 'cpp'],
            theme: {
                // Default theme (same as single string)
                default: 'github-light',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
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
    runtimeConfig: {},

    site: {
        url: 'https://octo-kumo.web.app',
    }
})