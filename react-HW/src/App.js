import logo from './logo.svg';
import React from 'react';
import './App.css';

import Clock from './Clock';

function App() {
  return (
    <div className="App">
        <Clock name={"Jenn's SUPER DUPER COOL CLOCK"}></Clock>
        <Clock name={"SECOND CLOCK"}></Clock>
    </div>
  );
}

export default App;
