import React from 'react';

import { FirebaseContext } from '../../contexts/firebase';

const AddCup = () => {
  const userID = 'userID';
  // const [coffee, setCoffee, getCoffee] = useState({
  //   type: 'fuck',
  //   time: "06:09",
  //   date: "04/20/1969"
  // });

  const getDate = () => {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
  };

  const getTime = () => {
    let today = new Date();
    let th = String(today.getHours()).padStart(2, '0');
    let tm = String(today.getMinutes()).padStart(2, '0');
    return th + ":" + tm;
  };

  const defaultCoffee = () => {
    let newCoffee = {
      type: 'black',
      time: getTime(),
      date: getDate()
    };
    console.log("coffee = " + JSON.stringify(newCoffee, null, " "));
    // setCoffee(newCoffee);
    return newCoffee;
  };

  const sendToDb = (firebase) => {
    console.log("trying to add the coffee");

    firebase.database().ref('Coffee/Users/' + userID + '/Entries')
    .push()
    .set(defaultCoffee())
    .then(res => {
      console.log("success");
    }).catch(err => {
      console.log("Could not add coffee to firebase:\n" + err);
    });
  };

  return (
    <FirebaseContext.Consumer>
      {firebaseContainer => {
        // console.log("currentUser: " + firebaseContainer.state.firebase.auth().currentUser);
        return <button className={"addCoffee"} onClick={() => sendToDb(firebaseContainer.state.firebase)}>AddCup</button>;
      }}
    </FirebaseContext.Consumer>
  );
};

export default AddCup;