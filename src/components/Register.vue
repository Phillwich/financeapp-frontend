<template>
  <v-container class="Register">
    <v-alert v-if="error" color="error">Please try again</v-alert>
    <v-card>
      <v-card-title>Register</v-card-title>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field label="First name" :rules="nameRules" required v-model="firstname"></v-text-field>
          <v-text-field label="Last name" :rules="nameRules" required v-model="lastname"></v-text-field>
          <v-text-field label="Username" :rules="nameRules" required v-model="username"></v-text-field>
          <v-text-field
            type="password"
            :rules="passwordRules"
            required
            label="Password"
            v-model="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn block @click="register()" :disabled="!valid" >Register</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      error: false,
      valid: true,
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      nameRules: [
        v => !!v || "Required",
        v => (v && v.length >= 2) || "Must be at least 2 characters"
      ],
      passwordRules: [
        v => !!v || "Required",
        v => (v && v.length >= 6) || "Password must be more than 6 characters"
      ]
    };
  },
  methods: {
    ...mapActions(["createUser"]),
    async register() {
      if (this.$refs.form.validate()) {
        const userId = uuidv4();
        const response = await this.createUser({
          firstName: this.firstname,
          lastName: this.lastname,
          userName: this.username,
          password: this.password,
          userId
        });

        if (!response.success) {
          this.username = "";
        } else {
          this.$router.push(`/overview/${userId}`);
        }
      }
    }
  }
};
</script>

<style scoped>
.Register {
  width: 400px;
}
</style>>

