<template>
  <v-app>
    <Toolbar />
    <Notification />
    <router-view />
  </v-app>
</template>

<script>
import Notification from '@/components/Notification.vue'
import Toolbar from '@/components/Toolbar.vue'
export default {
  components: {
    Notification,
    Toolbar
  }
}
</script>

