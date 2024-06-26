import axios from 'axios'

const $api = axios.create({
    //  withCredentials: true,
})


$api.interceptors.request.use((config) => {

    return config
  }, (error) => {
    Promise.reject(error)
})



export default $api;