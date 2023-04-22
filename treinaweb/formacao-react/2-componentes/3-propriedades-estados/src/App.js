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

  const minhaLista = [
    {nome: 'Jhone', idade: '30'},
    {nome: 'Jose', idade: '54'},
    {nome: 'Mauricio', idade: '20'},
    {nome: 'Leticia', idade: '25'},
  ]
  
  return (
    <div className="App">
      <ul>
        {
          minhaLista.map(el => {
            return (
            <li>
              Nome: {el.nome}, idade: {el.idade}
            </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
