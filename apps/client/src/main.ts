import { createApp } from 'vue';
import { createPinia } from 'pinia';

import FontAwesomeIcon from '@/components/common/FontAwesomeIcon';

import App from './App.vue';

import routing from './routing';

import './assets/css/styles.css';

const pinia = createPinia();

createApp(App).component('FontAwesomeIcon', FontAwesomeIcon).use(routing).use(pinia).mount('#app');
