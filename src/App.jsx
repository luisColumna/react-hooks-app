import { Counter } from "./components/Counter";
import { User } from './components/User';
import { TimerPadre } from './components/TimerPadre';
import { ContadorRed } from './components/ContadorRed';
import { Formulario } from './components/Formulario';
import { CallbackHook } from './components/CallbackHook';




function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <hr />

      <h2>useState</h2>
      <Counter />
      <User />

      <h2>useEffect - useRef</h2>
      <TimerPadre />

      <h2>useReducer</h2>
      <hr />
      <ContadorRed/>

      <h2>customHooks</h2>
      <hr />
      <Formulario/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2>useCallback</h2>
      <hr />
      <CallbackHook />
    </>
  )
}

export default App
