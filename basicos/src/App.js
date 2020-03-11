import React , {Fragment, useState} from 'react'; //Con imr se importa.
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {

  //Creo listado de productos
  const [productos, guardarProductos] = useState([
    {id:1, nombre:'Camisa ASP.NET Core', precio:100},
    {id:2, nombre:'Camiseta NodeJS', precio:80},
    {id:3, nombre:'Pantalon Kotlin', precio:50},
    {id:4, nombre:'Gorra Java', precio:10}
  ]);

  const [carrito, agregarProducto] = useState([]);  //carrito seria el state, y los state unicamente se pueden editar con la funcion del segundo parametro.


  return (
      <Fragment>
        <Header titulo='Tienda Virtual' />
        <h1>Lista de Productos</h1>
        {productos.map(producto => (
          <Producto 
            key={producto.id} 
            producto={producto}
            carrito={carrito}
            productos={productos}
            agregarProducto={agregarProducto}
           />
        ))}
        <Carrito 
          carrito ={carrito}
          agregarProducto={agregarProducto}
        />
        <Footer/>
      </Fragment>
  );
}

export default App;
