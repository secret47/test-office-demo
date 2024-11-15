import { createRouter, createWebHistory } from 'vue-router';
import layouts from "../layouts/index.vue";
import { useAppStore } from '../store/module/app';
import { useUserStore } from "../store/module/user"
import { hasPermission } from '../utils/auth';


const routes = [
    {
        path: '/login',
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

            },
            {
                path: "adopt",
                name: "Adopt",
                meta: {
                    title: "认养管理"
                },
                component: () => import("@/views/dashboard/adopt/index.vue"),
                children: [
                    {
                        path: "price",
                        name: "Price",
                        meta: {
                            title: "价格管理"
                        },
                        component: () => import("@/views/dashboard/adopt/price/index.vue"),
                    }
                ]
            },
            {
                path: "order",
                name: "Order",
                meta: {
                    title: "订单管理"
                },
                component: () => import("@/views/dashboard/order/index.vue"),
                children: [
                    {
                        path: "list",
                        name: "OrderList",
                        meta: {
                            title: "订单列表"
                        },
                        component: () => import("@/views/dashboard/order/list/index.vue"),
                    }
                ]
            },
            {
                path: "user",
                name: "User",
                meta: {
                    title: "用户管理"
                },
                component: () => import("@/views/dashboard/user/index.vue"),
            },

        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});



// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    
    
    next();
   
});


export default router;