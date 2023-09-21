import React, { useState } from "react";
import '../hojas-de-estilo/TareaFormulario.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props){

const [input,setInput] = useState('');

const manejarCambio = e =>{ /* evento para obtener el valor que puso el usuario */
  setInput(e.target.value);  
};

const manejarEnvio = e => {   /* evento que ocurre cuando cambiamos el texto en el campo de texto */

  e.preventDefault();

    const tareaNueva = {
      id: uuidv4() , //Genera un identificador unico de la tarea
      texto: input , // Se coloca lo que pongamos en el texto
      completada: false
    };

    props.onSubmit(tareaNueva);
};

  return(

      <form className="tarea-formulario" 
      onSubmit={manejarEnvio}
      >
        <input className="tarea-input"
        type="text"
        placeholder="Escribe una Tarea"
        name='texto'
        onChange= {manejarCambio}

        />

        <button className='tarea-boton'>
           Agregar Tarea
        </button>

      </form>

  );

}

export default TareaFormulario;