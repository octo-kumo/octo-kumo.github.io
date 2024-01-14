import {defineStore} from 'pinia';

export const useDrawer = () => useState<boolean>('counter', () => false);
export const useStore = defineStore('main', {
    state: () => {
        return {
            lang: 'CHS',
        }
    },
    persist: true,
})
