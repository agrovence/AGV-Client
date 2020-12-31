import axios from 'axios';

const api = axios.create({
    baseURL: 'https://agrovence.herokuapp.com/agv/v1'
})

export default api;
