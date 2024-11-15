import { defineStore } from "pinia"

export const useAppStore = defineStore('app',{
    state:()=>({
        isMenuCollapsed: false,
        sidebarWidth:300
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
        }
    }
})