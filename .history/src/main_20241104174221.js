import { createApp } from 'vue';
import '@/style/main.scss';
import App from './App.vue';
//
const app = createApp(App);

import router from './router';
import lang from "./local";
// 正确导入和创建Pinia实例的方式
import { createPinia } from 'pinia';
const pinia = createPinia();
//引入element-plus
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

//引入Sweetalert2 好看的弹出层
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(lang);
app.use(ElementPlus);
app.use(VueSweetalert2);
// 使用创建好的Pinia实例
app.use(pinia);
app.use(router);

app.mount('#app');