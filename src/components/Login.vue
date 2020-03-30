<template>
  <v-container class="Login">
    <v-card>
      <v-card-title>Login</v-card-title>
      <v-card-text>
        <v-text-field v-model="username" label="Username"></v-text-field>
        <v-text-field type="password" v-model="password" label="Password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-col>
          <v-row class="pb-2">
            <v-btn block @click="login()">Login</v-btn>
          </v-row>
        </v-col>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Vue from "vue";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  computed: {
    ...mapState(["user", "notification", "token"])
  },
  methods: {
    ...mapActions(["loginUser"]),
    async login() {
      const response = await this.loginUser({
        userName: this.username,
        password: this.password
      });
      if (!response.success) {
        (this.username = ""), (this.password = "");
        console.log("HIER BIN ICH");
        return;
      }

      this.$session.start();
      this.$session.set("jwt", response.token);

      this.pushMe(`/overview/${this.user.userId}`);
    },
    pushMe(value) {
      this.$router.push(value);
    }
  }
};
</script>

<style scoped>
.Login {
  width: 400px;
}
</style>