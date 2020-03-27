
import { FORMULARIO_PROYECTO,
         OBTENER_PROYECTOS,
         AGREGAR_PROYECTO,
         VALIDAR_FORMULARIO,
         PROYECTO_ACTUAL,
         PROYECTO_ERROR,
         ELIMINAR_PROYECTO }  from '../../types'; 


//Este reducer lo que hace es cambiar el state de proyectoState

export default ( state, action ) => {
    switch(action.type) {
        case FORMULARIO_PROYECTO:
            return {
                ...state, 
                formulario: true
                //retorna una copia del state(lo devuelve como esta, y el formulario lo cambia a true)
            }
        case OBTENER_PROYECTOS:
            return {
                ...state, // siempre esta esta linea
                proyectos: action.payload
            }
        case AGREGAR_PROYECTO:
            return {
                ...state, 
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
        }
        case VALIDAR_FORMULARIO:
            return {
                ...state, 
                errorformulario: true
            }
        case PROYECTO_ACTUAL:
            return {
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto._id === action.payload )
            }
        case ELIMINAR_PROYECTO:
            return {
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload ),
                proyecto: null
            }
        case PROYECTO_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}