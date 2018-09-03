import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import VueI18n from 'vue-i18n';

import fr from './i18n/fr';
import en from './i18n/en';
import App from './App';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueI18n);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n: new VueI18n({
    locale: 'fr',
    messages: { fr, en },
  }),
});
