import React, { useState } from 'react';
import './App.css';

window.treinaweb.start()

export interface MeuComponenteProps {
  name?: string
  children?: JSX.Element | JSX.Element[] | string
}

export interface User {
  name: string
  age: number
}

function MeuComponente ({name} : MeuComponenteProps) {

  const [counter, setCounter] = useState<number>()
  const [user, setUser] = useState<User>({} as User)

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
