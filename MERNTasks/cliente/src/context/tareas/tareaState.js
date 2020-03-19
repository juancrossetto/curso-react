import React, { useReducer } from 'react';
import tareaReducer from "./tareaReducer";
import tareaContext from "./tareaContext";


const TareaState = props => {
    const initialState = {
        tareas: [],

    }

    // Crear dispatch y state
    const [ state, dispatch] = useReducer(tareaReducer, initialState);

    //Retornamos el context
    return (
        <TareaContext.Provider>
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;