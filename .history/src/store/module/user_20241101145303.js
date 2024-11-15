import { defineStore } from "pinia";
export const useAppStore = defineStore('app', {
    state: () => ({
        isLogin:false,
        userInfo:{
            username:""
        }
    }),
    actions: {
        // 登录
       login(userData){
        this.isLogin = true;
        this.userInfo = userData;
       },
       //登出
       logout(){
        this.isLogin = false;
        this.userInfo = {};
       }
    }
});