import { defineStore } from "pinia"

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
        updateBreadcrumbList(route){
            this.breadcrumbList = [];
            let currentRoute = route;
            while (currentRoute) {
                this.breadcrumbList.unshift({
                    path: currentRoute.path,
                    meta: currentRoute.meta
                });
                currentRoute = currentRoute.parent;
            }
        }
    }
})