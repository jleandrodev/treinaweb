import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'
import AppRoutes from './routes/Routes';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <AppRoutes />
    </div>
  );
}

export default App;
