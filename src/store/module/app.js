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
            // 直接设置面包屑列表
            this.breadcrumbList = route.matched.map(item => {
                return {
                    name: item.meta.title || item.name,
                    path: item.path
                }
            });
        }
    }
});