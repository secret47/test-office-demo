import { createApp } from 'vue'
import '@/style/main.scss'
import App from './App.vue'
import router from './router'

import lang from "./local"


import ElementPlus  from "element-plus";
import 'element-plus/dist/index.css'

const app = createApp(App);

app.use(lang)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
