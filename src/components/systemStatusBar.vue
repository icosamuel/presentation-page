<template>
  <v-toolbar dense class="status-bar">
    <v-spacer></v-spacer>

    <v-menu transition="slide-y-transition" bottom left offset-y>
      <v-btn icon slot="activator">
        <v-icon>email</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile>
          <v-list-tile-title>mailto</v-list-tile-title>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-title>copy to clipboard</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>

    <v-menu transition="slide-y-transition" bottom left offset-y>
      <v-btn icon slot="activator">
        <v-icon>language</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile @click="changeLocale('fr')">
          <v-list-tile-title>francais</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="changeLocale('en')">
          <v-list-tile-title>english</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped>
  .status-bar {
    background-color: none;
    box-shadow: none;
    margin-bottom: 40px;
    opacity: 0.4;
  }
</style>

<script>
  import AppStore from '../store/AppStore';

  export default {
    name: 'system-status-bar',
    methods: {
      changeLocale(newLocale) {
        AppStore.commit('changeLocale', newLocale);
      }
    },
    watch: {
      locale(newLocale) {
        this.$i18n.locale = newLocale;
      }
    },
    computed: {
      locale() {
        return AppStore.state.localization;
      }
    }
  };
</script>
