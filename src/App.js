import React from 'react';
import './App.css';
import Tablet from './pages/Tablet.js';
import {useEffect} from 'react';

function App() {
  useEffect(() => {
      document.title = "Solitaire Hope Dream Simulator";
    }
  )
  return (
      <header className="App-header">
        <Tablet/>
      </header>
  );
}

export default App;
