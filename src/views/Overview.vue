<template>
    <v-container>
        <v-card>
            <v-card-title>Willkommen {{user.firstName}} {{user.lastName}}</v-card-title>
        </v-card>
        <Balance/>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Balance from '@/components/Balance.vue'

export default {
    components: {
        Balance,
    },
    data() {
        return {}
    },
    methods: {
        ...mapActions(['getUserData'])
    },
    computed: {
        ...mapState(['user'])
    },
    async mounted() {
        const response = await this.$store.dispatch('getUserData', this.$route.params.userId)
        if (!response.success) this.$router.push('/auth/login')
    }
}
</script>