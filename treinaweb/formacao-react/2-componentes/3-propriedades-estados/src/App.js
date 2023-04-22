import { useState, useEffect } from 'react';
import './App.css';

function Treinaweb(props) {

  useEffect(() => {
    const meuIntervalo = setInterval(() => {
      console.log("Olá")
    }, 2000)
    console.log('Componente criado')
    return () => {
      clearInterval(meuIntervalo)
      console.log('Componente removido')
    }
  }, [])
  return (
    <div>
      <span>{props.nome}</span>
    </div>
  )
}

function App() {

  const [ contador, setContador ] = useState(0)  
  
  return (
    <div className="App">
      <button onClick={() => setContador(contador + 1)}>CLICK 1 - {contador}</button>
      {
        contador % 2 === 0 && <Treinaweb nome={contador} />
      }
    </div>
  );
}

export default App;
