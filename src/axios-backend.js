import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://13.250.157.230:8626'
    //baseURL: 'http://localhost:8626'
});

export default instance;