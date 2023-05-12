import './App.css';
import styled from '@emotion/styled/macro';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';

const tema1 = {
  corDaFonte: 'white',
  corDeFundo: 'green'
}

const tema2 = {
  corDaFonte: 'green',
  corDeFundo: 'yellow'
}


const MinhaDiv = styled('div')`

  background-color: ${({ theme }) => theme.corDeFundo};
  color: ${({ theme }) => theme.corDaFonte};

`


function App() {
  const [ ligado, setLigado ] = useState(true)
  return (
    <ThemeProvider theme={ligado ? tema1 : tema2}>
      <div className="App" onClick={() => setLigado(!ligado)}>
        <MinhaDiv>
          Treinaweb
        </MinhaDiv>
      </div>
    </ThemeProvider>
  );
}

export default App;
