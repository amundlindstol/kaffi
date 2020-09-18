import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import 'firebase/performance'
import {Component} from "react";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};

class Firebase extends Component {
  constructor(props) {
    super(props)
    console.log("init Firebase");
    firebase.initializeApp(firebaseConfig);
    this.state = {
      firebase: firebase
    };
  };
}

export default Firebase;