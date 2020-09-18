import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddCup from "./components/functions/addCup";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={"header-text"}>Register Kaffi</h1>
      </header>
        <AddCup/>
    </div>
  );
}

export default App;
