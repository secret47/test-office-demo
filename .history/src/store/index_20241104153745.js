// src/stores/index.js

import { createPinia } from 'pinia';
import { defineStore } from 'pinia';
import { getters } from './getters';

// 使用 require.context 自动加载 modules 目录下的所有模块
const modulesFiles = require.context('./modules', true, /\.js$/);

// 创建一个空对象来存储模块
const modules = {};

modulesFiles.keys().forEach((modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const moduleDefault = modulesFiles(modulePath).default;
  modules[moduleName] = moduleDefault;
});

// 创建 Pinia 实例
const pinia = createPinia();

// 导出 Pinia 实例和模块
export { pinia, modules };