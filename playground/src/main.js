import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/styles/main-style.scss'
import '@ru-settlements/ui-components/dist/lib.css'
import UIComponents from '@ru-settlements/ui-components'

const app = createApp(App)
app.use(UIComponents)
app.mount('#app')
