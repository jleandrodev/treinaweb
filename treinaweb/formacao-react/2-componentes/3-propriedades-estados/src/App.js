import './App.css';

function Treinaweb(props) {
  return (
    <div>
      <ul>
        <li>{ props.nome }</li>
        <li>{ props.sobrenome }</li>
        <li>{ props.idade }</li>
      </ul>
    </div>
  )
}

function App() {
  const pessoa = {
    nome: 'Jhonatan',
    sobrenome: 'Ozório',
    idade: 30
  }
  return (
    <div className="App">
      <Treinaweb {...pessoa} />
    </div>
  );
}

export default App;
