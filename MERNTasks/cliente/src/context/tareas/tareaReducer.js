import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
 } from "../../types";




export default (state, action) => {
    switch(action.type) {
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: action.payload
            }
        case AGREGAR_TAREA:
                return {
                    ...state,
                    tareasproyecto: [action.payload, ...state.tareasproyecto] ,// Creamos un arreglo nuevo de tareas con las q ya teniamos mas la nueva
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
                tareasproyecto: state.tareasproyecto.filter( t => t._id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasproyecto : state.tareasproyecto.map(t => t._id === action.payload._id ? action.payload : t )
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