import { defineStore } from "pinia"

export const useAppStore = defineStore('app',{
    state:()=>({
        isMenuCollapsed: false
    }),
    actions:{
        toggleMenu(){
            
            this.isMenuCollapsed = !this.isMenuCollapsed
            console.log(this.isMenuCollapsed,"?")
        }
    }
})