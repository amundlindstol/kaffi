import React from 'react';

import  { FirebaseContext } from '../firebase';

const AddCup = () => {

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
  };

  const getTime = () => {
    let today = new Date();
    let th = today.getHours()
    let tm = today.getMinutes();

    today = th + ":" + tm;
    return today;
  };

  const defaultCoffee = {
    type: 'black',
    time: getTime(),
    date: getDate()
  };

  const sendToDb = (firebase) => {
    console.log("trying to fire the base");
    console.log(firebase.database())
    firebase.database().ref('Coffee/Users/userID/Entries').push().set(defaultCoffee)
    .then(function () {
      console.log("Added " + defaultCoffee.type + " to firebase");
    }, function () {
      console.log("Clould not add coffee to firebase");
    })
  };

  return (
    <FirebaseContext.Consumer>
      {firebaseContainer => {
        console.log("currentUser: " + firebaseContainer.state.firebase.auth().currentUser);
        return <button className={"addCoffee"} onClick={() => sendToDb(firebaseContainer.state.firebase)}>AddCup</button>;
      }}
    </FirebaseContext.Consumer>
  );
};

export default AddCup;