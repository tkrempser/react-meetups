import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCaxSSQ2BTIwr40dXrFUbjl_kj2dZr0Cvo",
  authDomain: "react-meetups-4e634.firebaseapp.com",
  databaseURL: "https://react-meetups-4e634-default-rtdb.firebaseio.com",
  projectId: "react-meetups-4e634",
  storageBucket: "react-meetups-4e634.appspot.com",
  messagingSenderId: "373582292560",
  appId: "1:373582292560:web:b6237cea906cffa29b5355",
};

let firebaseApp;

export function initializeFirebase() {
  firebaseApp = firebase.initializeApp(firebaseConfig);

  firebaseApp
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      console.log(error.code, error.message);
    });
}

export function saveFirebase(data) {
  const newKey = firebaseApp.database().ref().push().key;
  const dataObject = { [newKey]: data };
  firebaseApp.database().ref().update(dataObject);
}

export default firebaseApp;
