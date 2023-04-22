import { useState } from 'react';
import './App.css';

function Treinaweb(props) {
  return (
    <div>
      <span>{props.nome}</span>
    </div>
  )
}

function App() {

  const [ contador, setContador ] = useState(0)

  function handleClick(numero) {
    setContador(contador + numero)
  }
  
  
  return (
    <div className="App">
      <Treinaweb nome={contador} /> 
      <button onClick={() => handleClick(10)}>Incrementa</button>
    </div>
  );
}

export default App;
