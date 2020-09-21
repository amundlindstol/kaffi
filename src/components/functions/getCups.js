import React from 'react';

import  { FirebaseContext } from '../../contexts/firebase';

const GetCups = () => {
  const userID = "userID";

  const fetchFromDb = (firebase) => {
    console.log("fetching all cups");
    firebase.database().ref('Coffee/Users/' + userID + '/Entries').once('value')
    .then(res => {
      console.log("got all registered cups");
      res.val();
    }).catch( err => {
      console.error("db fetch failed:\n" + err);
    });
  };

  return (
      <FirebaseContext.Consumer>
        {firebaseContainer => {
          // console.log("currentUser: " + firebaseContainer.state.firebase.auth().currentUser);
          return <button className={"fetchCoffee"} onClick={() => fetchFromDb(firebaseContainer.state.firebase)}>fetchCups</button>;
        }}
      </FirebaseContext.Consumer>
  );
};

export default GetCups;