const { default: axios } = require('axios');

const clientServer = axios.create({
    baseURL: 'http://localhost:3000/api',
});