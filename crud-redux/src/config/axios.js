import axios from 'axios'; //npm i axios

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3000/'   // lo que levanto con json-server db.json --3000
});

export default clienteAxios;