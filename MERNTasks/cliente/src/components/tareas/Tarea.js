import React, { useContext } from 'react';
import tareaContext from '../../context/tareas/tareaContext';
import proyectoContext from '../../context/proyectos/proyectoContext';


const Tarea = ({tarea}) => {

    // Obtener las funciones del context de tareas
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // Obtener las funciones del context de tareas
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto; //extraigo proyecto actual de proyecto con destructuring

    // Función que se ejecuta cuando el usuario presiona el boton de eliminarTarea
    const tareaEliminar = id =>{
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //Función que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else {
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    }

    // Agrega una tarea actual cuando el usuario edesea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);

    }

    return ( 
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>
            <div className="estado">
                {tarea.estado 
                ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >Editar</button>

                <button
                      type="button"
                      className="btn btn-secundario"
                      onClick={() => tareaEliminar(tarea.id)}
                >Eliminar</button>
            </div>
        </li>
     );
}
 
export default Tarea;