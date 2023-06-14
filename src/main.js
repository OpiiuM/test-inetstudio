import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import '@/assets/scss/style.scss';

import App from './App.vue';
import Tooltip from 'primevue/tooltip';

const app = createApp(App);

app.use(createPinia());
app.use(PrimeVue);

app.directive('tooltip', Tooltip);

app.mount('#app');
