<template>
  <v-layout row justify-center class="banner" style="height:215px;">
    <v-flex xs8 class="title-container">
      <h1 id="title">SAMUEL BÉGIN</h1>
      <p id="subtitle">{{ $t('header.title') }}</p>
    </v-flex>
  </v-layout>
</template>

<style>
  .banner {
    text-align: left;
  }
  .title-container {
    padding: 30px;
    padding-top: 70px;
    vertical-align: bottom;
    font-size: 150%;
  }
</style>

<script>
export default {
  name: 'presentation-header',
};
</script>
