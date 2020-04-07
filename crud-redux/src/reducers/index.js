//en este archivo combinamos todos los reducer, siempre y cuando tengamos solo uno (con CombineReducers)

import { combineReducers } from 'redux'; //usar siempre que usamos mas de 1 reducer
import productosReducer from './productosReducer';
import alertaReducer from './alertaReducer';


export default combineReducers({
    productos: productosReducer,
    alerta: alertaReducer
});
