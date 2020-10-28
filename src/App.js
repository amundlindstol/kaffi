import React, {useContext, useEffect, useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import AddCup from "./components/firebase/addCup";
import Graph from "./components/statistics/Graph";
import { CoffeeDataContext } from "./contexts/statistics";
import { Alert, Container, Row, Button } from 'react-bootstrap';

const App = () => {
  const context = useContext(CoffeeDataContext).then(res => setData(res));
  const [data, setData] = useState([]);
  const [alert, setAlert] = useState({show: false, message: "N/A", variant: 'success'});

  useEffect(() => {
  }, [alert]);

  const displayAlert = (alert) => {
    setAlert(alert);
    window.setTimeout(() => {
      setAlert({show: false})
    }, 1000);
  }
  
  return (
    <Container fluid>
      <Alert show={alert.show} variant={alert.variant} >{alert.message}</Alert>
      <Row className="justify-content-md-center bg-primary">
        <img src={logo} className="App-logo" alt="logo" />
      </Row>
      <Row className="justify-content-md-center bg-primary">
        <h1 className="text-white">Kaffi</h1>
      </Row>
      <Row className="justify-content-md-center">
        <AddCup displayAlert={displayAlert}/>
      </Row>
      <Row className="justify-content-md-center">
        <Graph data={data}/>
      </Row>
    </Container>
  );
}

export default App;
