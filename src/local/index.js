import { createI18n } from "vue-i18n";

import message from "./language"
const i18n = createI18n({
    locale: "zh",
    fallbackLocale: "zh",
    messages: message
})

export default i18n;