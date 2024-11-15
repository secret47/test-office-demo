import { defineStore } from "pinia"

export const useAppStore = defineStore('app',{
    state:()=>({
        isMenuCollapsed: false
    }),
    actions:{
        toggleMenu(){
            console.log(this.isMenuCollapsed,"?")
            this.isMenuCollapsed = !this.isMenuCollapsed
        }
    }
})