export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.directive('shared', {
        beforeMount(el, binding, vnode) {
            if (binding.value) el.style.viewTransitionName = binding.value;
        },
    })
})
