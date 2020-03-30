<template>
  <v-footer color="blue" padless width="100vw">
    <v-row justify="center">
      <v-card color="blue" flat class="white--text text-center">
          <v-card-text class="white--text align-end">
            {{ new Date().getFullYear() }} —
            <strong>FinanceApp</strong>
          </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<style scoped>
.footer-text {
  height: 100%;
  align-content: end;
}
</style>