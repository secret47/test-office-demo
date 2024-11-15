import { defineStore } from "pinia"
import { useRouter } from "vue-router"


const router = useRouter();

export const useAppStore = defineStore('app',{
    state:()=>({
        isMenuCollapsed: false,
        sidebarWidth:300,
        breadcrumbList:[],//面包屑列表，为路由对象

    }),
    actions:{
        toggleMenu(){
            
            this.isMenuCollapsed = !this.isMenuCollapsed
            if(this.isMenuCollapsed){ 
                console.log("收缩")
                this.sidebarWidth = 60
            }else{
                console.log("展开")
                this.sidebarWidth = 300;
            }
        },
        //保存面包屑
        updateBreadcrumbList(route){
            this.breadcrumbList = [];
            let currentRoute = route;
            while (currentRoute) {
                // 获取当前路由在路由表中的完整信息，包括meta等
                const fullRouteInfo = router.options.routes.find(r => r.path === currentRoute.path);
                if (fullRouteInfo) {
                    this.breadcrumbList.unshift({
                        path: fullRouteInfo.path,
                        meta: fullRouteInfo.meta,
                        name: fullRouteInfo.name,
                        // 可以根据需要添加更多的路由属性，比如组件等
                        component: fullRouteInfo.component
                    });
                }
                currentRoute = currentRoute.parent;
            }
        }
    }
})