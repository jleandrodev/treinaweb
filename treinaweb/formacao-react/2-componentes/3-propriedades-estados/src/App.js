import { useState, useEffect } from 'react';
import './App.css';

function Lista(props) {


  return (
    <>
      <li>Karen</li>
      <li>Maria</li>
      <li>João</li>
    </>
  )
}

function App() {

  return (
    <div className="App">
      <ul>
        <Lista />
      </ul>
    </div>
  );
}

export default App;
