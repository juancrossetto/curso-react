import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTOS,
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         ELIMINAR_PROYECTO }  from '../../types'; //como el archivo se llama index.js no se pone.
import * as uuid from 'uuid'; // npm i -D uuid (para instalarlo solo en desarrollo)

const proyectos = [
    {id:1, nombre: 'Tienda Virtual'},
    {id:2, nombre: 'Intranet'},
    {id:3, nombre: 'Diseño de Sitio Web'},
    {id:4, nombre: 'MERN'}
]

const ProyectoState = props => {
    const initialState = {
        proyectos : [],
        nuevoProyecto: false,
        errorFormulario: false,
        proyecto: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        //mando a llamar al reducer
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    }


    // Obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos //el payload es siempre lo que mandemos como param.
        });
    };

    // Agregar nuevo proyect
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        // Insertar el proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    } 

    // Seleccionar Proyecto 
    const proyectoActual = proyectoId  => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId 
        })
    };

    // Elimina un proyecto
    const eliminarProyecto = (proyectoId) => {
        dispatch({
            type: ELIMINAR_PROYECTO,
            payload: proyectoId
        });

    };

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )

}

export default ProyectoState;