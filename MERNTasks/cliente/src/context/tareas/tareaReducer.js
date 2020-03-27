import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
 } from "../../types";




export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: state.tareas.filter(tarea => tarea.proyectoId === action.payload)
            }
        case AGREGAR_TAREA:
                return {
                    ...state,
                    tareas: [action.payload, ...state.tareas] ,// Creamos un arreglo nuevo de tareas con las q ya teniamos mas la nueva
                    // puse primero el payload y despues la lista de tareas para que cuando agrego una tarea este primera
                    errortarea: false
                }
        case VALIDAR_TAREA:
                return {
                    ...state,
                    errortarea : true
                }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareas: state.tareas.filter( t => t.id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return {
                ...state,
                tareas : state.tareas.map(t => t.id === action.payload.id ? action.payload : t )
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada : action.payload
            }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaseleccionada: null
            }
        default:
            return state;
    }
}