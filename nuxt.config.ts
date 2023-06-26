// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    appConfig: undefined,
    hooks: undefined,
    devtools: {enabled: true},
    ssr: true,
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/robots',
    ],
// @ts-ignore
    title: 'octo-kumo'
})
