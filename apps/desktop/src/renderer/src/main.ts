import 'element-plus/dist/index.css'
import './assets/scss/main.scss'
import '@mqttx/ui/dist/style.css'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'

const app = createApp(App).use(ElementPlus)
app.mount('#app')
