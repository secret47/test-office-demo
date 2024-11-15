import { createRouter, createWebHistory } from 'vue-router'
import layouts from "../layouts/index.vue"

const routes = [
    {
        path: '/',
        name: 'Login',
        component: () => import('@/views/login.vue'),
    },
    // 其他路由...
    {
        path: "/dashboard",
        name: "Dashboard",
        component: layouts,
        meta: {
            title: "控制中心"
        },
        children: [
            {
                path: "basic",
                name: "Basic",
                meta: {
                    title: "基础管理"
                },
                component: () => import("@/views/dashboard/basic/index.vue"),
                children: [
                    {
                        path: "farm",
                        name: "farm",
                        meta: {
                            title: "蜂场管理"
                        },
                        component: () => import("@/views/dashboard/basic/farm/index.vue"),
                    }
                ]

            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router