import { createRouter, createWebHistory } from 'vue-router';
import layouts from "../layouts/index.vue";
import { useAppStore } from '../store/module/app';
import { useUserStore } from "../store/module/user"
import { hasPermission } from '../utils/auth';


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
                    },
                    {
                        path: "hivebox",
                        name: "HiveBox",
                        meta: {
                            title: "蜂箱管理"
                        },
                        component: () => import("@/views/dashboard/basic/hivebox/index.vue"),   
                    },
                    {
                        path: "library",
                        name: "Library",
                        meta: {
                            title: "资源库"
                        },
                        component: () => import("@/views/dashboard/basic/library/index.vue"),
                    },
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
                    },
                    {
                        path: "list",
                        name: "AdoptList",
                        meta: {
                            title: "认养列表"
                        },
                        component: () => import("@/views/dashboard/adopt/list/index.vue"),
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
                    },
                    {
                        path:"express",
                        name:"Express",
                        meta:{
                            title:"物流管理"
                        },
                        component:()=>import("@/views/dashboard/order/express/index.vue")
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
                children:[
                    {
                        path: "list",
                        name: "UserList",
                        meta: {
                            title: "用户列表"
                        },
                        component: () => import("@/views/dashboard/user/list/index.vue"),
                    }
                ]
            },
            {
                path: "system",
                name: "System",
                meta: {
                    title: "系统管理"
                },
                component: () => import("@/views/dashboard/system/index.vue"),
                children: [
                    {
                        path: "setting",
                        name: "Setting",
                        meta: {
                            title: "系统设置"
                        },
                        component: () => import("@/views/dashboard/system/setting/index.vue"),
                    }
                ]
            },
            {
                path: "help",
                name: "Help",
                meta: {
                    title: "帮助中心"
                },
                component: () => import("@/views/dashboard/help/index.vue"),
                children: [
                    {
                        path: "guide",
                        name: "Guide",
                        meta: {
                            title: "使用指南"
                        },
                        component: () => import("@/views/dashboard/help/guide/index.vue"),
                    },
                    {
                        path: "qa",
                        name: "QA",
                        meta: {
                            title: "常见问题"
                        },
                        component: () => import("@/views/dashboard/help/QA/index.vue"),
                    }
                ]
            }

        ]
    }
];

const router = createRouter({
    history: createWebHistory("./"),
    routes
});



// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    
    // 使用 Pinia 的 useAppStore 来存储面包屑信息
    const appStore = useAppStore();
    appStore.updateBreadcrumbList(to);
    next();
   
});


export default router;