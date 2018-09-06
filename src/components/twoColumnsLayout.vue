<template>
  <v-layout row justify-center class="elevated-row">
    <v-flex xs2 class="A flex-container">
      <slot name="A"/>
    </v-flex>

    <v-flex xs6 class="B flex-container">
      <slot name="B"/>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.A{
  text-align: justify;
}
.B{
  text-align: left;
}
.flex-container {
  padding: 30px;
}
</style>

<script>
export default {
  name: 'two-columns-layout',
};
</script>
