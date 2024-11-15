import { defineStore } from "pinia";
export const useAppStore = defineStore('app', {
    state: () => ({
        isLogin:false,
        userInfo:{
            username:""
        }
    }),
    actions: {
       login(userData){
        this.isLogin = true;
        this.userInfo = userData;
       },
       logout(){
        this.isLogin = false;
        this.userInfo = {};
       }
    }
});