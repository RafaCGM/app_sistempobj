import axios from "axios"

const api = axios.create({
    baseURL: 'http://192.168.3.102:8000/api/v1'
});

export default api