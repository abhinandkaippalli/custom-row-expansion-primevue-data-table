import "primeflex/primeflex.css"
import "primevue/resources/themes/lara-light-teal/theme.css"
import "primevue/resources/primevue.min.css"

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'

const app = createApp(App)
app.use(PrimeVue)
app.mount('#app')
