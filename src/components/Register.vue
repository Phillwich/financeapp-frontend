<template>
  <v-container class="Register">
    <v-alert v-if="error" color="error">Please try again</v-alert>
    <v-card>
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-text-field label="First name" v-model="firstname"></v-text-field>
        <v-text-field label="Last name" v-model="lastname"></v-text-field>
        <v-text-field label="Username" v-model="username"></v-text-field>
        <v-text-field type="password" label="Password" v-model="password"></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn block @click="register()">Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from 'uuid';

export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      error: false
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    async register() {
        const userId = uuidv4()
      const response = await this.createUser({
        firstName: this.firstname,
        lastName: this.lastname,
        userName: this.username,
        password: this.password,
        userId
      });

      if (!response.success) {
        this.username = ''
      } else {
          this.$router.push(`/overview/${userId}`)
      }
    }
  }
}
</script>

<style scoped>
.Register {
  width: 400px;
}
</style>>

