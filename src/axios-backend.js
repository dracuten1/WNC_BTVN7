import axios from 'axios';

const instance = axios.create({
    //baseURL: 'http://ec2-13-250-157-230.ap-southeast-1.compute.amazonaws.com:8626'
    baseURL: 'http://localhost:8626'
});

export default instance;