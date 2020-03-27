
import { MOSTRAR_ALERTA,
         OCULTAR_ALERTA }  from '../../types'; 


//Este reducer lo que hace es cambiar el state de proyectoState

export default ( state, action ) => {
switch(action.type) {
   case MOSTRAR_ALERTA:
       return {
           alerta: action.payload
       }
   case OCULTAR_ALERTA:
       return {
           alerta: null
       }
   default:
       return state;
}
}