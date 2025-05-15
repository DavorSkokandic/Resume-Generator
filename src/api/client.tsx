import axios from "axios";

const API = axios.create({
    baseURL: "https://1d15-93-143-78-98.ngrok-free.app/api",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
})

API.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token&& config.headers) {
        config.headers.Authorization= 'Bearer ${token}';
    }
    return config;
})
export default API;