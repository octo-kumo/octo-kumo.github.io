export default defineNuxtPlugin((nuxtApp) => {
    const pageViews = ref<number>(0)
    nuxtApp.provide('pageViews', pageViews)
    const router = useRouter()
    router.afterEach((to) => {
        fetch(`https://views.yun.ng${to.fullPath}`)
            .then((r) => r.json())
            .then(({ count }) => { pageViews.value = count })
            .catch(console.error)
    })
})
