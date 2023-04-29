import React, {useState} from 'react';
import Transition from 'react-transition-group/Transition'
import './App.css';

function App() {

  const [isOn, setIsOn] = useState(true)

  function handleClick() {
    setIsOn(!isOn)
  }
  return (
    <div className="App">
      <Transition in={isOn} unmountOnExit={true} appear={true} timeout={{
        enter: 300,
        exit: 500
      }} >
        {
          (status) => {
            return <button className={'btn ' + status} onClick={handleClick} >Click - {status}</button>

          }
        }
      </Transition>
    </div>
  );
}

export default App;
