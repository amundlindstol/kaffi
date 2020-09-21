import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Firebase, { FirebaseContext } from './contexts/firebase';
import CoffeeData, {CoffeeDataContext} from "./contexts/statistics";

const firebase = new Firebase();

ReactDOM.render(
  <FirebaseContext.Provider value={firebase}>
    <CoffeeDataContext.Provider value={CoffeeData(firebase)}>
      <App />
    </CoffeeDataContext.Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
