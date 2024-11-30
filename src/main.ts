import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue' 
import PrimeVue from 'primevue/config';
import BullsTheme from './themes/bulls-theme';

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: BullsTheme } });

app.use(createPinia())
app.use(router)

app.mount('#app')
