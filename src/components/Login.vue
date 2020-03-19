<template>
    <v-container class="Login">
        <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
                <v-text-field v-model="username" label="Username"></v-text-field>
                <v-text-field type="password" v-model="password" label="Password"></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-btn block @click="login()">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    computed: {
        ...mapState(['user','notification', 'token'])
    },
    methods: {
        ...mapActions(['loginUser']),
        async login() {
            const response = await this.loginUser({
                userName: this.username,
                password: this.password
            })
            if (!response.success) {
                this.username = '',
                this.password = ''
            } else {
                this.$router.push(`/overview/${this.user.userId}`)
            }
        }
    }
}
</script>

<style scoped>
.Login {
    width: 400px;
}
</style>