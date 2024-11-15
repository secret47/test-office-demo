import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('../views/login.vue'),
    },
    // 其他路由...
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router