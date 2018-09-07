<template>
  <v-layout row justify-center class="banner">
    <v-flex xs6 class="title-container">
      <h1>Samuel</h1>
      <span class="lastname"><h1>BÉGIN</h1></span>
      <p id="subtitle">{{ $t('header.title') }}</p>
    </v-flex>
    <v-flex xs2 class="side-container">
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
    </v-flex>
  </v-layout>
</template>

<style>
.banner {
  text-align: left;
  height: 195px;
}
.title-container {
  padding: 0px;
  font-size: 27px;
  padding-left: 30px;
  color: rgb(85, 85, 85) !important;
}
.title-container h1 {
  line-height: 1 !important;
}
.lastname h1 {
  font-size: 60px;
  color: rgb(41, 129, 48);
}
#subtitle {
  font-size: 20px;
}
.side-container {
  text-align: right;
  opacity: 0.4;
}
</style>

<script>
import AppStore from "../store/AppStore";

export default {
  name: "presentation-header",
  methods: {
    changeLocale(newLocale) {
      AppStore.commit("changeLocale", newLocale);
    }
  }
};
</script>
