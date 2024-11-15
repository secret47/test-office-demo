import { createApp } from 'vue'
import '@/style/main.scss'
import App from './App.vue'
import router from './router'

import lang from "./local"

import { pinia } from "./store"

import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(lang)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
