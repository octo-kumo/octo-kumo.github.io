export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('shared', {
        beforeMount(el, binding, vnode) {
            el.style.viewTransitionName = binding.value;
        },
    })
})
