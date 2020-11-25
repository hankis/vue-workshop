import Vue from 'vue';
import axios from './api';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n';

import '@/assets/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    axios,
    vuetify,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
