import React, { useReducer } from 'react';
import tareaReducer from "./tareaReducer";
import tareaContext from "./tareaContext";
import * as uuid from 'uuid';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';


const TareaState = props => {
    const initialState = {
        tareas: [    
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre:'Elegir Colores', estado: false, proyectoId: 2},
            { id: 3, nombre:'Elegir Plataformas de pago' , estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 2},
            { id: 6, nombre:'Elegir Colores', estado: false, proyectoId: 3},
            { id: 7, nombre:'Elegir Plataformas de pago' , estado: false, proyectoId: 4},
            { id: 8, nombre: 'Elegir Hosting', estado: true, proyectoId: 1},
            // { id: 0, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3},
            { id: 9, nombre:'Elegir Colores', estado: false, proyectoId: 4},
            // { id: 0, nombre:'Elegir Plataformas de pago' , estado: false, proyectoId: 1},
            { id: 10, nombre: 'Elegir Hosting', estado: true, proyectoId: 2}
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null

    }

    // Crear dispatch y state
    const [ state, dispatch] = useReducer(tareaReducer, initialState);

    //Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    }

    // Eliminar tarea por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        });
    }

    // Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        });
    }

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid.v4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        });
    }

    // Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        });
    }


    // Extrae una tarea para edición
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }

    // Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }

    // Elimina la tareaseleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        });
    }

    return (
        <tareaContext.Provider
            value={{
                errortarea: state.errortarea,
                tareas: state.tareas,
                tareasproyecto : state.tareasproyecto,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </tareaContext.Provider>
    )
}

export default TareaState;