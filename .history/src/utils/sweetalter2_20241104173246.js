import Swal from 'sweetalert2';

export function useSweetAlert2() {
  // 定义一个全局方法，用于在组件内部调用
  function alert(title, message, type = 'info') {
    Swal.fire({
      title: title,
      text: message,
      icon: type,
      confirmButtonText: 'OK'
    });
  }

  // 可以添加更多的 SweetAlert2 方法，例如 confirm、success 等

  return {
    alert
  };
}

// 导出默认对象，包含 SweetAlert2 的方法
const sweetalert2Plugin = {
  install(app) {
    app.config.globalProperties.$swal = useSweetAlert2();
  }
};

export default sweetalert2Plugin;

