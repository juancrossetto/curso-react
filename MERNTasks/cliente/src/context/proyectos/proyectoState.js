import React, { useReducer } from 'react';
import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTOS,
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         PROYECTO_ERROR,
         ELIMINAR_PROYECTO }  from '../../types'; //como el archivo se llama index.js no se pone.
// import * as uuid from 'uuid'; // npm i -D uuid (para instalarlo solo en desarrollo)
import clienteAxios from '../../config/axios';


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
    const obtenerProyectos = async () => {
      try {
        const resultado = await clienteAxios.get('/api/proyectos');  
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: resultado.data.proyectos 
        });
      } catch (error) {
        const alerta = {
            msg: 'Hubo un error',
            categoria: 'alerta-error'
        }
        
        dispatch({
            type: PROYECTO_ERROR,
            payload: alerta
        })
      }
    }

    // Agregar nuevo proyect
    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            // Insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
        // proyecto.id = uuid.v4();

       
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
    }

    // Elimina un proyecto
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {

            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }

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