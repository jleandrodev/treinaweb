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

  const [ contador, setContador ] = useState(5)

  
  
  return (
    <div className="App">
      <Treinaweb nome={contador} /> 
      <button onClick={() => setContador(9)}>CLICK</button>
    </div>
  );
}

export default App;
