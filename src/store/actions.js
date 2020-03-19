import { postRequest, getRequest, putRequest } from '../service/axios'
import axios from 'axios'

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
        const { token } = response.data
        commit('setNotification', { type: 'succes', message: 'Successfully logged in' })
        commit('setUser', response.data.data )
        return { success: true }
    },

    getUserData: async ({ commit }, payload) => {
        const response = await getRequest(`http://localhost:8000/finance/user?userId=${payload}`)
        if (!response.success) {
            commit('setNotification', { message: response.error.data, type: 'error' })
            return { success: false }
        }
        commit('setUser', response.data.data)
        return { succes: true }
    },

    updateBalance: async ({ commit }, payload) => {
        const response = await putRequest(`http://localhost:8000/finance/user`, payload)
        if (!response.success) {
            commit('setNotification', { message: response.error.data, type: 'error'})
            return { succes: false }
        }
        commit('setUser', response.data.data)
        return { succes: true }
    }

}
