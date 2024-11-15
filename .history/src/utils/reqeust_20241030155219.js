// src/utils/axios.js
import axios from 'axios';
import { ElMessage, ElMessageBox } from 'element-plus';


// 创建 axios 实例
const instance = axios.create({
  baseURL: import.meta.env.VUE_APP_API_BASE_URL, // API 的 base_url
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么，例如设置 token
    // config.headers['Authorization'] = 'Bearer ' + getToken();
    return config;
  },
  error => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 任何 HTTP 状态码为 2xx 的响应数据都会触发此函数
    // 对响应数据做点什么
    return response;
  },
  error => {
    // 任何超出 2xx 的 HTTP 状态码都会触发此函数
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，强制用户重新登录
          ElMessageBox.alert('您已被登出，请重新登录。', '提示', {
            confirmButtonText: '确定',
            type: 'warning',
          });
          break;
        case 403:
          // 拒绝访问
          ElMessage.error('拒绝访问，您没有权限执行此操作。');
          break;
        case 404:
          // 资源不存在
          ElMessage.error('请求的资源不存在。');
          break;
        case 500:
          // 服务器内部错误
          ElMessage.error('服务器内部错误。');
          break;
        default:
          ElMessage.error(`发生错误：${error.response.status}`);
      }
    } else {
      // 处理其他错误，例如网络错误
      ElMessage.error('网络请求失败，请检查您的网络连接。');
    }
    return Promise.reject(error);
  }
);

export default instance;