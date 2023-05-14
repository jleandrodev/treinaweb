import React from 'react';
import './App.css';

window.treinaweb.start()

export interface MeuComponenteProps {
  name?: string
  children: JSX.Element | JSX.Element[] | string
}

function MeuComponente ({name} : MeuComponenteProps) {
  return (
    <h1>Hello</h1>
  )
}

function App() {
  return (
    <div className="App">
      <MeuComponente name='John Doe'>
        Meu Componente
      </MeuComponente>
    </div>
  );
}

export default App;
