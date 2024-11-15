import { createPinia } from "pinia";

// 创建Pinia实例
const pinia = createPinia();

// 导出Pinia实例，以便在main.js等文件中使用app.use(pinia)挂载它
export { pinia };

// 以下是各个模块的存储定义，这里以useAppStore为例

// 导入具体的存储模块定义（假设在module/app.js文件中）
import { useAppStore } from "./module/app";

// 创建并导出对应的存储实例，这里不需要手动传入pinia实例作为参数
// 因为在调用useAppStore时，它会自动关联到已经挂载的pinia实例
export const appStore = useAppStore();