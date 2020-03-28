import clienteAxios from './axios';

const tokenAuth = token => {
    if(token) {
        //si existe un token, lo pasamos al header.
        clienteAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        //si se cerro la sesion o vencio se borra el token
        delete clienteAxios.defaults.headers.common['x-auth-token'];
    }
}


export default tokenAuth;