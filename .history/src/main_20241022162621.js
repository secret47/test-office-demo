import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import lang from "./local"



const app = createApp(App);

app.use(lang)
app.use(router)
app.mount('#app')
