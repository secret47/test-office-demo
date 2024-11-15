import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import lang from "./local"



const app = createApp(App);

app.use(lang)

app.mount('#app')
