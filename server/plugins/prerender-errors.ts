import { getRequestHeader, getRequestURL } from 'h3'
import { consola } from 'consola'

export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('error', async (error, { event }) => {
        const isPrerender = event && getRequestHeader(event, 'x-nitro-prerender')

        if (isPrerender) {
            const url = getRequestURL(event).href
            const statusCode = (error as any).statusCode || 500
            if (statusCode >= 500) {
                consola.error(`\n[Prerender Error] ${event.method} ${url}`)
                consola.error(error)
                console.log('-------------------------------------------\n')
            }
        }
    })
})