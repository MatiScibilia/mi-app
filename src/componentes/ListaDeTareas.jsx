import React, {useState} from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";


function ListaDeTareas(){

    const [tareas,setTareas] = useState([]);

    const agregarTarea = tarea => {
  
      if(tarea.texto.trim()){ //para que no se guarden tareas sin texto
  
        tarea.texto= tarea.texto.trim(); //trim quita el primer y ultimo espacio de la cadena de caracteres que son innecesarios
        const tareasActualizadas = [tarea, ...tareas]; //agregamos la tarea al principio del arreglo
        setTareas(tareasActualizadas); //toma las tareas anteriores y agrega la tarea nueva
      }
    };
    
  
    function eliminarTarea(id) {
      const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
      setTareas(tareasActualizadas);
    }
  
    const completarTarea = id => {
  
      const tareasActualizadas=tareas.map(tarea => {
  
        if(tarea.id === id){
          tarea.completada = !tarea.completada;
        }
  
        return tarea;
      });
  
      setTareas(tareasActualizadas);
    }
  
    return(
  <>
  
    <TareaFormulario onSubmit={agregarTarea} />
  
    <div className="tarea-lista-contenedor">
  
      {
        tareas.map((tarea) => 
        <Tarea 
          key={tarea.id} //key no es un prop lo cual por eso se coloca dos veces el id 
          id={tarea.id}
          texto = {tarea.texto }
          completada={tarea.completada}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
        )
      }
  
    </div>
  
  
  </>
  );
  
}

export default ListaDeTareas;