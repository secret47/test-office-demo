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
                this.sidebarWidth = 60
            }{
                this.sidebarWidth = 300;
            }
        }
    }
})