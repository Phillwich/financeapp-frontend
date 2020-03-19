import axios from 'axios'


const postRequest = async (url, payload) => {
    try {
        const response = await axios.post(url, payload)
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            error: error.response
        }
    }
}

const getRequest = async (url, payload) => {
    try {
        const response = await axios.get(url)
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            message: error.response
        }
    }
}

const putRequest = async (url, payload) => {
    try {
        const response = await axios.put(url, payload)
        return {
            success: true,
            data: response.data
        }
    } catch (error) {
        return {
            success: false,
            error: error.response
        }
    }
}


export {
    postRequest,
    getRequest,
    putRequest
}