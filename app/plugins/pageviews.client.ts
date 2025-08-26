// plugins/pageviews.client.ts
import { defineNuxtPlugin, useRouter, useState } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const pageViews = useState<number>('page-views', () => 0)

    const update = async (path: string) => {
        try {
            const res = await fetch(`https://views.yun.ng${path}`)
            if (!res.ok) throw new Error(await res.text())
            const { count } = await res.json()
            pageViews.value = count
        } catch (e) {
            console.error('[pageviews]', e)
        }
    }

    const router = useRouter()
    router.isReady().then(() => {
        update(router.currentRoute.value.fullPath)
        router.afterEach((to) => update(to.fullPath))
    })
})
