import { createApp } from 'vue';
import '@/style/main.scss';
import App from './App.vue';
import router from './router';
import lang from "./local";
// 正确导入和创建Pinia实例的方式
import { createPinia } from 'pinia';
const pinia = createPinia();

import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(lang);
app.use(ElementPlus);
// 使用创建好的Pinia实例
app.use(pinia);
app.use(router);
app.mount('#app');