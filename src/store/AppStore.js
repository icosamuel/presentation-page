import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],

  state: {
    localization: 'fr',
  },

  mutations: {
    changeLocale(state, newLocale) {
      state.localization = newLocale;
    },
  },
});
