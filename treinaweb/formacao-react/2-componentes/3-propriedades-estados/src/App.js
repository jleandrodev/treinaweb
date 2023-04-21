import './App.css';

function Treinaweb({ nome, sobrenome, idade, ...props }) {
  return (
    <div>
      <ul>
        <li>{ nome }</li>
        <li>{ sobrenome }</li>
        <li>{ idade }</li>
      </ul>
      <input type='text' {...props} />
    </div>
  )
}

function App() {
  const pessoa = {
    nome: 'Jhonatan',
    sobrenome: 'Ozório',
    idade: 30,
    value: 'Jhonatan Ozório',
    onClick: () => {}
  }
  return (
    <div className="App">
      <Treinaweb {...pessoa} />
    </div>
  );
}

export default App;
