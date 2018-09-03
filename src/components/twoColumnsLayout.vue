<template>
  <v-layout row justify-center>
    <v-flex xs2>
      <v-card>
        <v-card-text class="A">
          <slot name="A"/>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs5>
      <v-card>
        <v-card-text class="B">
          <slot name="B"/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.A{
  text-align: right;
}
.B{
  text-align: left;
}
</style>

<script>
export default {
  name: 'two-columns-layout',
};
</script>
