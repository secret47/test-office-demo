import { createRouter, createWebHistory } from 'vue-router'
import LoginView from './views/LoginView.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router