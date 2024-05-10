// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    app: {
        baseURL: process.env.BASE_URL || '/',
        buildAssetsDir: 'assets'
    },
    nitro: {
        firebase: {
            gen: 2,
            nodeVersion: '20'
        }
    },
    hooks: undefined,
    devtools: {enabled: false},
    ssr: true,
// @ts-ignore
    title: 'octo-kumo',
    modules: [
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({autoImport: true}))
            })
        },
        '@nuxtjs/tailwindcss',
        '@vite-pwa/nuxt',
        '@pinia/nuxt',
        '@pinia-plugin-persistedstate/nuxt',
        '@fullpage/nuxt-fullpage'
    ],
    build: {
        transpile: ['vuetify']
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    pwa: {
        /* PWA options */
    }
})
