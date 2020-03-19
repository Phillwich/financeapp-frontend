import { postRequest, getRequest, putRequest } from '../service/axios'
import store from '../store'
export default  {

    createUser: async ({ commit }, payload) => {
        const response = await postRequest('http://localhost:8000/finance/user', payload)
        if (!response.success) {
            commit('setNotification', { type: 'error', message: response.error.data })
            return { success: false }
        }
        return { success: true }
    },

    loginUser: async ({ commit }, payload) => {
        const response = await postRequest(`http://localhost:8000/finance/login`, payload)
        if (!response.success) {
            commit('setNotification', { type: 'error', message: response.error.data })
            return { success: false }
        }
        commit('setToken', response.data.token)
        commit('setUser', response.data.data )
        commit('setNotification', { type: 'succes', message: 'Successfully logged in' })
        return { success: true, token: response.data.token }
    },

    getUserData: async ({ commit }, payload) => {
        const response = await getRequest(`http://localhost:8000/finance/user?userId=${payload}`, store.state.userToken )
        if (!response.success || (response.data.data === null)) {
            commit('setNotification', { message: response.error.data, type: 'error' })
            return { success: false }
        }
        commit('setUser', response.data.data)
        return { success: true }
    },

    updateBalance: async ({ commit }, payload) => {
        const response = await putRequest(`http://localhost:8000/finance/user`, payload, store.state.userToken)
        if (!response.success) {
            commit('setNotification', { message: response.error.data, type: 'error'})
            return { succes: false }
        }
        commit('setUser', response.data.data)
        return { succes: true }
    },

    logoutUser: ({ commit }) => {
        commit('removeToken')
    }

}
