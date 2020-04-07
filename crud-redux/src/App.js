import React from 'react';
import './App.css';
import Header  from './components/Header';
import Productos from './components/Productos';
import NuevoProducto from './components/NuevoProducto';
import EditarProducto from './components/EditarProducto';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; //npm i react-router-dom

// Redux
import { Provider } from 'react-redux';
import store from './store';


function App() {
  return (
    <Router>
      {/* Este store va a tener todo el state, y hay uno solo por app */}
      <Provider store={store}>
        <Header/>

        <div className="container mt-5">
            <Switch>
              <Route exact path="/" component={Productos}/>
              <Route exact path="/productos/nuevo" component={NuevoProducto}/>
              <Route exact path="/productos/editar/:id" component={EditarProducto}/>
            </Switch>
        </div>
        </Provider>
    </Router>
  );
}

export default App;
