import App from 'next/app';
import firebase, { FirebaseContext } from '../firebase';

//es como el app.js de create-react-app
const MyApp = props => {
    //Componente actual y props de la pagina
    const { Component, pageProps} = props;
    return (
        <FirebaseContext.Provider
            value={{
                firebase
            }}
            >
                <Component {...pageProps} />
        </FirebaseContext.Provider>
    )
}

export default MyApp;