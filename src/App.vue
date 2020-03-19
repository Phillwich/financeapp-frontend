<template>
  <v-app>
    <Notification />
    <router-view />
  </v-app>
</template>

<script>
import Notification from '@/components/Notification.vue'

export default {
  components: {
    Notification
  }
}
</script>

