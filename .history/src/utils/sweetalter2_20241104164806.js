import Swal from'sweetalert2';

// 这里可以进行一些全局的 Sweetalert2 设置，比如设置默认的配置参数
const sweetalert2Plugin = {
    install(app) {
        // 将 Swal 挂载到 Vue 实例的原型上，这样在所有组件中都可以通过 this.$swal 访问
        app.config.globalProperties.$swal = Swal;
    }
};

export default sweetalert2Plugin;