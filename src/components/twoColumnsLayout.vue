<template>
  <v-layout row justify-center>
    <v-flex xs2>
      <v-card>
        <v-card-text>
          <slot name="A"/>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex xs6>
      <v-card>
        <v-card-text>
          <slot name="B"/>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'two-columns-layout',
};
</script>
