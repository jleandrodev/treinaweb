import { useState } from 'react';
import './App.css';
import styled from '@emotion/styled/macro';
import { keyframes } from '@emotion/react';

const sumir = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0%;
  }
`

const MeuSpan = styled('span')``

const MinhaDiv = styled.div`

  background-color: green;
  color: ${({ ligado }) => ligado ? 'white' : 'red'};

   &:hover ${MeuSpan}{
    color: yellow;
    animation: ${sumir} 1s ease alternate-reverse infinite;
    @media (max-width: 200px) {
      color: blue
    }
  }

`


function App() {
  const [ ligado, setLigado ] = useState(true)
  return (
    <div className="App" onClick={() => setLigado(!ligado)}>
      <MinhaDiv ligado={ligado} >
        Treinaweb
        <MeuSpan>
          Teste
        </MeuSpan>
      </MinhaDiv>
    </div>
  );
}

export default App;
