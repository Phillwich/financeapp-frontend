<template>
    <v-container fluid>
        <v-toolbar >
            <v-toolbar-title>FinanceApp</v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="!isLoggedIn" class="pr-2">
                <v-btn @click="pushMe('/auth/login')">Loggin</v-btn>
            </div>
            <div v-if="!isLoggedIn">
                <v-btn @click="pushMe('/auth/register')">Sign up</v-btn>
            </div>
            <div v-if="isLoggedIn">
                <v-btn @click="pushMe('/')">Log out</v-btn>
            </div>
        </v-toolbar>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['isLoggedIn'])
    },
    methods: {
        ...mapActions(['logoutUser']),
        pushMe(value){
            this.$router.push(value)
            if (value === '/') return this.logoutUser()
        }
    }
    
}
</script>