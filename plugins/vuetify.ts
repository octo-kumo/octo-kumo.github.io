import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as labsComponents from 'vuetify/labs/components'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        components: {
            ...components,
            ...labsComponents,
        },
    })
    app.vueApp.use(vuetify)
})
