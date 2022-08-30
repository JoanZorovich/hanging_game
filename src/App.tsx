import { HangImage } from './components/HangImage'
import {letters} from './helpers/letters'
import './App.css'


function App() {
  return (
    <div className="App">

      {/* Imagenes del juego */}
      <HangImage imageNumber={5}/>

      {/* Palabra Oculta*/}
      <h2>_ _ _ _ _ _ _</h2>

      {/* Letras para seleccionar*/}
      {
        letters.map((letter) => (
          <button
            key={ letter }>
              {letter}
          </button>
        ))
      }

      {/* Numero de intentos*/}
      <h2>Intentos: 0</h2>
      
    </div>
  )
}

export default App
