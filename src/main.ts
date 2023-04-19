import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/main-style.scss'

import mdiVue from 'mdi-vue/v3'
import * as icons from '@/plugins/mdi/mdi'

const app = createApp(App)

app.use(mdiVue, { icons })

app.mount('#app')
