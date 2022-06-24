import React from "react";
import '../hojas-de-estilo/tarea-formulario.css'

function TareaFormulario(props){
  return(
    <form className="tarea-formulario">
      <input
        className="tarea-input"
        type='text'
        placeholder="Escribe tu tarea"
        name="texto"
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario