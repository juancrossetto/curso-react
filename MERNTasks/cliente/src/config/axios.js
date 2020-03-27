import axios from 'axios'; //npm i axios

const clienteAxios = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL
});


export default clienteAxios;