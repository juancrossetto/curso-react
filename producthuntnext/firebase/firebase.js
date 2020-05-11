import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            // Para que cuando se inicie firebase, se inicialice la configuracion.
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    // Registra un usuario
    async registrar(nombre, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        //como arriba no guardo el nombre de usuario, lo guardo aca.
        return await nuevoUsuario.user.updateProfile({
            displayName : nombre
        })
    }

    // Inicia sesión del usuario
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    // Cierra la sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
    }
}

const firebase = new Firebase();
export default firebase;