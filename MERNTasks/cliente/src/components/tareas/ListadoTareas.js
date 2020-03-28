import React, { Fragment, useContext } from 'react';
import Tarea from './Tarea';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import {CSSTransition, TransitionGroup } from 'react-transition-group'; //npm i react-transition-group

const ListadoTareas = () => {


     // Extraer proyectos de state inicial
     const proyectosContext = useContext(proyectoContext);
     const { proyecto, eliminarProyecto } = proyectosContext;
 
    // Obtener las tareas del proecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

     // Si no hay proyecto seleccionado
     if(!proyecto) return <h2>Selecciona un proyecto</h2>
     
     // Array destructuring para extraer el proyecto actual
     const [ proyectoActual ] = proyecto;
 
     // Elimina un proyecto
     const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id);  
     }

    return ( 
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : <TransitionGroup>
                        { tareasproyecto.map( tarea => (
                        <CSSTransition
                            key={tarea.id} // Se pasa para aca porque es el primer hijo del html
                            timeout={200} //milisegundos
                            classNames="tarea"
                        >
                            <Tarea
                                tarea={tarea}
                            />
                        </CSSTransition>
                        ))}
                       </TransitionGroup>
                }
            </ul>
                
            <button
               type="button"
               className="btn btn-eliminar"
               onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>

        </Fragment>
     );

}
 
export default ListadoTareas;