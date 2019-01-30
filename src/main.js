import Vue from 'vue';
import VueWait from 'vue-wait';

import '@/styles/transition.scss'; // global css
import 'nprogress/nprogress.css'; // nprogress styles
import '@/styles/global.scss'; // global css

import '@/plugins/main';
import '@/plugins/element-ui.plugin';
import i18n from '@/plugins/i18n.plugin'; // Internationalization
import '@/plugins/vuex-router-sync.plugin';
import * as interceptors from '@/interceptors';
import * as filters from '@/filters'; // global filters

import router from '@/router';
import store from '@/store';

import App from './App.vue';

Vue.config.productionTip = false;
Vue.http.interceptors.push(...Object.values(interceptors));

// register global utility filters.
for (const key of Object.keys(filters)) {
    Vue.filter(key, filters[key]);
}

export default new Vue({
    i18n,
    router,
    store,
    render: h => h(App),
    wait: new VueWait({
        useVuex: true,
    }),
}).$mount('#app');
