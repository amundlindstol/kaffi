import React from 'react';
import { Button } from 'react-bootstrap';

import { FirebaseContext } from '../../contexts/firebase';


const AddCup = (props) => {
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
      props.displayAlert({show: true, message: "+1", variant: 'success'})
    }).catch(err => {
      console.log("Could not add coffee to firebase:\n" + err);
      props.displayAlert({show: true, message: "Could not add coffee", variant: 'danger'})
    });
  };

  return (
    <FirebaseContext.Consumer>
      {firebaseContainer => (
        // console.log("currentUser: " + firebaseContainer.state.firebase.auth().currentUser);
        <>
          <Button variant="primary" onClick={() => sendToDb(firebaseContainer.state.firebase)}>AddCup</Button>{' '}
        </>
      )}
      
    </FirebaseContext.Consumer>
  );
};

export default AddCup;