import { createPinia } from "pinia";
import { useAppStore } from "./module/app";

const pinia = createPinia();
const appStore = useAppStore(pinia);


export {
    pinia,
    appStore
}