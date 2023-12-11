// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify, {transformAssetUrls} from "vite-plugin-vuetify";

export default defineNuxtConfig({
    appConfig: undefined,
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
        '@nuxtjs/tailwindcss'
    ],
    build: {
        transpile: ['vuetify'],
    },
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
})
