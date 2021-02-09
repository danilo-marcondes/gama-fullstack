import axios from 'axios'

const api = axios.create({
    baseURL: 'https://accenture-java-desafio.herokuapp.com/'
    //baseURL: 'https://webhook.site/cfe3acdd-b949-4047-8204-ef8136a85db9'
})

export default api;