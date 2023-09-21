import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaDeTareas from './componentes/ListaDeTareas';
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div className="aplicacion-tareas">
        <div className='tareas-lista-principal'>
          <h1>Mis Tareas</h1>
          <TareaFormulario />
        </div>

      </div>
     
    </>
  )
}

export default App
