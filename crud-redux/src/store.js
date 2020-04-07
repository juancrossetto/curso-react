import { createStore, applyMiddleware, compose } from'redux'; //npm i react-redux redux redux-thunk
import thunk from 'redux-thunk'; // para utilizar funciones async.
import reducer from './reducers'; //busca el index.js


const store = createStore(
    reducer,
    compose( applyMiddleware(thunk),
    // este codigo indica que si tenemos redux-dev tools extension o no lo tenemos, funciona igual.
        typeof window === 'object' &&
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    ) 
);

export default store;

