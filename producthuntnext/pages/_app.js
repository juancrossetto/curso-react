import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';
import useAutenticacion from '../hooks/useAutenticacion';

//es como el app.js de create-react-app
const MyApp = props => {

    const usuario = useAutenticacion();
    //Componente actual y props de la pagina
    const { Component, pageProps} = props;
    return (
        <FirebaseContext.Provider
            value={{
                firebase,
                usuario
            }}
            >
                <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;