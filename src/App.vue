<template>
  <v-app>
    <Toolbar />
    <Notification />
    <router-view class="app"/>
    <Footer class="bottom"/>
  </v-app>
</template>

<script>
import Notification from '@/components/Notification.vue'
import Toolbar from '@/components/Toolbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Notification,
    Toolbar,
    Footer
  }
}
</script>

<style scoped>
.app {
  height: 90vh;
  width: 100vw;
}
.bottomt {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>

