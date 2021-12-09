import axios from 'axios'

const instance = axios.create({
    baseURL: "https://stores-api.zakaz.ua/stores/48215612/"
})

export default instance;
