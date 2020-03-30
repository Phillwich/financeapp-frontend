<template>
    <v-container fluid>
        <v-toolbar height="15vh" flat>
            <v-toolbar-title class="logo" @click="pushMe('/')">FinanceApp</v-toolbar-title>
            <v-spacer></v-spacer>
            <div v-if="!isLoggedIn" class="pr-2">
                <v-btn text @click="pushMe('/auth/login')">Login</v-btn>
            </div>
            <div v-if="!isLoggedIn">
                <v-btn text @click="pushMe('/auth/register')">Sign up</v-btn>
            </div>
            <div class="pr-2" v-if="isLoggedIn">
                <v-btn text @click="pushMe('/overview')">My Overview</v-btn>
            </div>
            <div v-if="isLoggedIn">
                <v-btn text @click="Logout()">Log out</v-btn>
            </div>
        </v-toolbar>
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState(['isLoggedIn','user'])
    },
    methods: {
        ...mapActions(['logoutUser']),
        pushMe(value){
            if (value === '/overview') value += `/${this.user.userId}`
            if (this.$route.path !== value) this.$router.push(value)
            
        },
        Logout(){
            this.pushMe('/')
            return this.logoutUser()
        }
    }
    
}
</script>

<style scoped>
.logo:hover {
    cursor: pointer;
}

</style>