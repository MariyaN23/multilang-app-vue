import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from "@/App.vue";
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'ja',
})

const app = createApp(App)

app.use(i18n)
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: false
        }
    }
})
app.mount('#app')