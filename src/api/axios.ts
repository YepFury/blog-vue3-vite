import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.baseURL = "http://192.168.60.38:4000";
axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config;
})
axios.interceptors.response.use((response: AxiosResponse) => {
    if (response.data.err === 1) {
        return Promise.reject(response.data.data)
    }
    return response.data
}, error => {
    return Promise.reject(error)
})

export default axios