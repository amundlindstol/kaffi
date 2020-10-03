import React, {useContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AddCup from "./components/firebase/addCup";
import Graph from "./components/statistics/Graph";
import {CoffeeDataContext} from "./contexts/statistics";

const App = () => {
  const context = useContext(CoffeeDataContext);
  const [data, setData] = useState([]);

  useEffect(()=>{
    context.then(res => setData(res));
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className={"header-text"}>Register Kaffi</h1>
      </header>
        <AddCup/>
      <Graph data={data}/>
    </div>
  );
}

export default App;
