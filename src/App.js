import './App.css';
import logo3 from './img/logo3.jpg';
import Tarea from './componentes/tarea'

function App() {
  return (
    <div className="aplicacion-tareas">
     <div className='logo-contenedor'>
      <img 
        alt='img'
        src={logo3}
        className='logo' 
        />
     </div>
     <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1> 
      <Tarea/>
      </div>
    </div>
  );
}

export default App;
