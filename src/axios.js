import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000', // Your base URL here according to env (local , dev , prod)
});

export default instance;
