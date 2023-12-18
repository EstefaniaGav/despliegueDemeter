import axios from 'axios';

const instance = axios.create({
    baseURL: import.meta.env?.VITE_API || "https://desplieguebackend-production-2aa7.up.railway.app"
    ,
    withCredentials: true
})

export default instance