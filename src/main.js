import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from '../vuex/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);
app.use(store);
app.use(router).mount('#app')