import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useAppStore = defineStore('app', {
    state: () => ({
        isMenuCollapsed: false,
        sidebarWidth: 300,
        breadcrumbList: [], // 面包屑列表，为路由对象
    }),
    actions: {
        toggleMenu() {
            this.isMenuCollapsed = !this.isMenuCollapsed;
            if (this.isMenuCollapsed) {
                console.log("收缩");
                this.sidebarWidth = 60;
            } else {
                console.log("展开");
                this.sidebarWidth = 300;
            }
        },
        // 保存面包屑
        updateBreadcrumbList(route) {
            const router = useRouter();
            this.breadcrumbList = [];
            let currentRoute = route;

            while (currentRoute) {
                const fullRouteInfo = router.options.routes.find(r => r.path === currentRoute.path);
                if (fullRouteInfo) {
                    this.breadcrumbList.unshift({
                        path: fullRouteInfo.path,
                        meta: fullRouteInfo.meta,
                        name: fullRouteInfo.name,
                        component: fullRouteInfo.component
                    });
                }

                // 确保 currentRoute.parent 存在
                if (currentRoute.parent) {
                    currentRoute = currentRoute.parent;
                } else {
                    break; // 如果没有父路由，退出循环
                }
            }
        }
    }
});