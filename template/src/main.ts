// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import { VueApp } from './libs/index';
import { typeConfigs } from './type-configs/index';
import { routes } from './routers/index';
import app from './app.vue';

new VueApp(typeConfigs, routes, '我的应用', (h: any) => h(app)).$mount('#app');
