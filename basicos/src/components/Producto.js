import React from 'react'; //imr

//sfc
const Producto  = ({producto, carrito, agregarProducto, productos}) => { 

    const {nombre, precio, id} = producto; //Destructuring de ECMAScript 6

    // Agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(p => p.id === id)[0];
        agregarProducto([...carrito,
                        producto]); //los 3 puntos copian el array
    }

    // Elimina un producto del carrito.
    const eliminarProducto = (id) => {
        const productos = carrito.filter(c => c.id !== id);
        //Colocar los productos en el state
        agregarProducto(productos);
    }

    return (
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            
                {productos 
                ? 
                    (
                     <button 
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                     >Comprar</button>)
                :
                (
                    <button 
                       type="button"
                       onClick={() => eliminarProducto(id)}
                    >Eliminar</button>)
                }
        </div>

    );
}
 
export default Producto;