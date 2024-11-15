import cloneDeep from 'lodash/cloneDeep'; // 引入 lodash 的 cloneDeep 方法用于深度克隆
import { throttle } from 'lodash'; // 引入 lodash 的 throttle 方法用于节流
import dayjs from 'dayjs'; // 引入 dayjs
import {useDark,useClipboard,} from "@vueuse/core"


/**
 * 时间格式化工具函数
 * @param {string|Date} date - 要格式化的日期
 * @param {string} formatStr - 格式化字符串，默认为 'YYYY-MM-DD HH:mm:ss'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, formatStr = 'YYYY-MM-DD HH:mm:ss') {
    return dayjs(date).format(formatStr);
}

/**
 * 深度克隆对象
 * @param {object} obj - 要克隆的对象
 * @returns {object} 克隆后的对象
 */
export function deepClone(obj) {
    return cloneDeep(obj);
}

/**
 * 节流函数
 * @param {function} func - 要节流的函数
 * @param {number} limit - 节流时间间隔，单位为毫秒
 * @returns {function} 节流后的函数
 */
export function throttleFunction(func, limit) {
    return throttle(func, limit);
}

/**
 * 滚动到页面顶部
 */
export function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * 权限检查
 * @param {string} permission - 要检查的权限
 * @returns {boolean} 是否具有权限
 */
export function checkPermission(permission) {
    // 这里需要根据实际项目中的权限存储方式来获取权限列表
    const permissions = ['admin', 'editor', 'viewer']; // 示例权限列表
    return permissions.includes(permission);
}