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

            console.log('Starting to update breadcrumb list'); // 1

            while (currentRoute) {
                console.log('Current route path:', currentRoute.path); // 2

                const fullRouteInfo = router.options.routes.find(r => r.path === currentRoute.path);
                console.log('Full route info:', fullRouteInfo); // 3

                if (fullRouteInfo) {
                    this.breadcrumbList.unshift({
                        path: fullRouteInfo.path,
                        meta: fullRouteInfo.meta,
                        name: fullRouteInfo.name,
                        component: fullRouteInfo.component
                    });
                } else {
                    console.log('No route info found for path:', currentRoute.path); // 4
                }

                if (currentRoute.parent) {
                    currentRoute = currentRoute.parent;
                } else {
                    console.log('No parent route found, ending loop'); // 5
                    break;
                }
            }
        }
    }
});