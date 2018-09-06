<template>
  <v-app id="app">
    <system-status-bar/>
    <router-view/>
  </v-app>
</template>

<style>
  a {
    color: #419b46 !important;
  }

  .elevated-row .v-card, .elevated-row .theme--light.v-card {
    box-shadow: none;
  }

  .text-header {
    margin-top: 20px;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

<script>
  import systemStatusBar from './components/systemStatusBar';
  import AppStore from './store/AppStore';

  export default {
    components: { systemStatusBar },
    name: 'App',
    watch: {
      locale(newLocale) {
        this.$i18n.locale = newLocale;
      }
    },
    computed: {
      locale() {
        return AppStore.state.localization;
      }
    },
    mounted() {
      if (this.$route.query.lang) {
        AppStore.commit('changeLocale', this.$route.query.lang);
      }
    }
  };
</script>
