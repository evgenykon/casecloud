import { createApp } from 'vue'
import 'primevue/resources/themes/lara-dark-green/theme.css'
//import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import router from './router'

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.mount('#app')
