import axios from "axios"

const api = axios.create({
    baseURL: 'http://10.40.1.229:8000/api/v1'
});

export default api