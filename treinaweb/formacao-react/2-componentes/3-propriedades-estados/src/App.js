import React, { useRef, useEffect } from 'react';
import './App.css';

function App() {

  const meuVideo = useRef()

  useEffect(() => {
    console.log(meuVideo.current)
  }, [])

  return (
    <div className="App">
      <video ref={meuVideo} />
    </div>
  );
}

export default App;
