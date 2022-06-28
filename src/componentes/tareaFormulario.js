import React,{useState} from "react";
import {v4 as uuidv4} from 'uuid'
import '../hojas-de-estilo/tarea-formulario.css'

function TareaFormulario(props){

  const [input,setImput]=useState('')

  const manejarCambio=e=>{
    setImput(e.target.value)
    

  }

  const manejarEnvio = e=>{  
    e.preventDefault()
    
    const tareaNueva={
      id:uuidv4(),
      texto:input,
      completada:false
    }

    props.onSubmit(tareaNueva)
  }
  return(
    <form className="tarea-formulario"
    onSubmit={manejarEnvio}>
      <input
        className="tarea-input"
        type='text'
        placeholder="Escribe tu tarea"
        name="texto"
        onChange={manejarCambio}
        
      />
      <button className="tarea-boton">
        Agregar Tarea
      </button>
    </form>
  )
}

export default TareaFormulario