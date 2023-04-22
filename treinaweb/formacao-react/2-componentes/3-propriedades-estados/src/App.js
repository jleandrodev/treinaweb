import React, { useState, useContext, createContext } from 'react';
import './App.css';

const MeuContexto = createContext()

function App() {

  const [ contador, setContador ] = useState(0)
  return (
    <MeuContexto.Provider value={{qualquer: contador}}>
      <div className="App">
        <button onClick={() => setContador(contador + 1)}>
          CLICK 1 - {contador}
        </button>
        <Treinaweb  />
      </div>
    </MeuContexto.Provider>
  );
}


function Treinaweb(props) {


  return (
    <React.Fragment>
      <h2>Treinaweb - </h2>
      <OutroComponente />
    </React.Fragment>
  )
}

function OutroComponente(props) {

  const { qualquer } = useContext(MeuContexto)

  return (
    <React.Fragment>
      <h2>OutroComponente - {qualquer}</h2>
    </React.Fragment>
  )
}



export default App;
