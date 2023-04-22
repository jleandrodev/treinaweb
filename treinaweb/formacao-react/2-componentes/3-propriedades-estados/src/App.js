import React, { useState, useEffect } from 'react';
import './App.css';

function Lista(props) {


  return (
    // Proporciona passar parâmetros para os framgmentos
    <React.Fragment>
      <li>Karen</li>
      <li>Maria</li>
      <li>João</li>
      {props.children}
    </React.Fragment>
  )
}

function App() {

  return (
    <div className="App">
      <ul>
        <Lista>
          <h2>Contador</h2>
        </Lista>
      </ul>
    </div>
  );
}

export default App;
