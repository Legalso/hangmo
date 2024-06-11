import axios from "axios";

const apiClient = axios.create({
    baseURL:'http://localhost:5032',
    headers:{
        'Content-Type': 'application/json'
    }

})

export default apiClient;