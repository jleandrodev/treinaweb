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

  function handleClick() {
    setContador(contador + 1)
  }
  
  
  return (
    <div className="App">
      <Treinaweb nome={contador} /> 
      <button onClick={handleClick}>Incrementa</button>
    </div>
  );
}

export default App;
