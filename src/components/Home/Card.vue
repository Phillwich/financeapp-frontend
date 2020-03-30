<template>
  <div class="pt-5 pb-5 pl-5 pr-5">
    <v-card width="15rem">
      <v-row justify="center">
      <v-card-title>{{title}}</v-card-title>
      </v-row>
      <v-card-text>{{message}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["title", "message"]
}
</script>