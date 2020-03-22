import React, { useReducer } from 'react';
import tareaReducer from "./tareaReducer";
import tareaContext from "./tareaContext";
import Tarea from '../../components/tareas/Tarea';


const TareaState = props => {
    const initialState = {
        tareas: [    
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { nombre:'Elegir Colores', estado: false, proyectoId: 2},
            { nombre:'Elegir Plataformas de pago' , estado: false, proyectoId: 3},
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
            { nombre:'Elegir Colores', estado: false, proyectoId: 3},
            { nombre:'Elegir Plataformas de pago' , estado: false, proyectoId: 4},
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 1},
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            { nombre:'Elegir Colores', estado: false, proyectoId: 4},
            { nombre:'Elegir Plataformas de pago' , estado: false, proyectoId: 1},
            { nombre: 'Elegir Hosting', estado: true, proyectoId: 2}
        ],

    }

    // Crear dispatch y state
    const [ state, dispatch] = useReducer(tareaReducer, initialState);

    //Retornamos el context
    return (
        <tareaContext.Provider
            value={{
                tareas: state.tareas
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;