import { defineStore } from "pinia"

export const useAppStore = defineStore('app',{
    state:()=>({
        isMenuCollapsed: false
    }),
    actions:{
        toggleMenu(){
            console.log(toggleMenu,"?")
            this.isMenuCollapsed = !this.isMenuCollapsed
        }
    }
})