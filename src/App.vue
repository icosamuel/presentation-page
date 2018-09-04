<template>
  <v-app id="app">
    <system-status-bar/>
    <router-view/>
  </v-app>
</template>

<script>
  import systemStatusBar from './components/systemStatusBar';

  export default {
    components: { systemStatusBar },
    name: 'App',
  };
</script>

<style>
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
