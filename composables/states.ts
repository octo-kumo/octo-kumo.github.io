import {defineStore} from 'pinia';

export const useStore = defineStore('main', {
    state: () => {
        return {
            lang: 'CHS',
        }
    },
    persist: true,
})
