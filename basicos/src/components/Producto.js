import React from 'react'; //imr

//sfc
const Producto  = ({producto}) => { 

    const {nombre, precio, id} = producto; //Destructuring de ECMAScript 6

    // Agregar producto al carrito
    const seleccionarProducto = () => {
        console.log('Comprando...');
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            <button 
                type="button"
                onClick={() => seleccionarProducto()}
                >Comprar</button>
        </div>

    );
}
 
export default Producto;