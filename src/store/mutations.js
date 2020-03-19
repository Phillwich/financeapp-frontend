export default {
    setUser: (state, payload) => {
        state.user.firstName = payload.firstName,
        state.user.lastName = payload.lastName,
        state.user.userName = payload.userName,
        state.user.userId = payload.userId,
        state.user.balance = payload.balance,
        state.user.balanceChanges = payload.balanceChanges
    },

    setNotification: (state, payload) => {
        state.notificationMessage = payload.message
        state.notificationType = payload.type
    },

    resetNotification: (state, payload) => {
        state.notificationMessage = payload
        state.notificationType = payload
    },

    removeToken: (state) => {
        state.userToken = null
        state.isLoggedIn = false
    },

    setToken: (state, payload) => {
        state.userToken = payload
        state.isLoggedIn = true
    }

}