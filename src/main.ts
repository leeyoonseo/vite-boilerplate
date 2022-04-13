import { createApp } from 'vue';
import App from './App.vue';
import createRouter from './router/index';
import { createPinia } from 'pinia';

const app = createApp(App);
const router = createRouter();
const store = createPinia();

app.use(router);
app.use(store);

// TODO: Router 레이아웃 적용되게끔 작업해야함
router.beforeResolve((to, from, next) => {});

app.mount('#app');
