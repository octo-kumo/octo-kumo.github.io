// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    app: {
        baseURL: process.env.BASE_URL || '/',
        buildAssetsDir: 'assets'
    },
    hooks: undefined,
    devtools: {enabled: true},
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
    }
})
