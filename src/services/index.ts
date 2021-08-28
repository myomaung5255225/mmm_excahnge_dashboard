import axios, { } from 'axios'

export const API = axios.create({
    baseURL: 'https://mmmchatbot.herokuapp.com/api'
})

API.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json'
    config.headers['Accept'] = 'application/json'
    config.headers['Authorization'] = `JWT ${localStorage.getItem(
        'access_token'
    )}`
    return config
})