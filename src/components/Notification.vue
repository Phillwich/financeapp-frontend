<template>
  <v-snackbar v-model="notification" :color="color">{{ notificationMessage }}</v-snackbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      color: 'green',
      notification: false
    };
  },
  computed:{
    ...mapState(['notificationMessage','notificationType'])
  },
  methods: {
    ...mapMutations(['resetNotification']),
    removeNotification(){
      this.resetNotification(null)
    }
  },
  watch: {
    notificationMessage(value) {
      if (value !== null) {
        this.notification = true
        if (this.notificationType === 'error') this.color = 'red'
        setTimeout(() => {
          this.removeNotification()
        }, 7000)
      }
    }
  }
};
</script>