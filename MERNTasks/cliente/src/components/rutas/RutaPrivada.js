import React, { useContext, useEffect } from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/autenticacion/authContext';

const RutaPrivada = ({component: Component, ...props}) => {
    
    const authContext = useContext(AuthContext);
    const { autenticado, cargando, usuarioAutenticado } = authContext;
    
    useEffect(()=>{
        usuarioAutenticado();
        // eslint-disable-next-line
    }, []);

    return (  
        //Si autenticado es false o null, lo manda a la ruta "/"
        //Si autenticado es true, lo manda al componente que se indica en el tag.
        <Route {...props} render = {props => !autenticado && !cargando ? (
            <Redirect to="/" />
        )  : (
            <Component {...props} />
        )}
        />
    );
}
 
export default RutaPrivada;