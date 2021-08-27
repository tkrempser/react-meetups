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

async function checkAndInitializeFirebase() {
  if (!firebase.apps.length) {
    firebaseApp = firebase.initializeApp(firebaseConfig);

    await firebaseApp
      .auth()
      .signInAnonymously()
      .catch(function (error) {
        console.log(error.message);
      });
  }
}

export async function saveFirebase(data) {
  await checkAndInitializeFirebase();
  const newKey = firebaseApp.database().ref().push().key;
  const dataObject = { [newKey]: data };
  return firebaseApp.database().ref().update(dataObject);
}

export async function getFirebase(limit) {
  await checkAndInitializeFirebase();
  return firebase.database().ref().limitToLast(limit).get();
}

export async function getFirebaseFallback() {
  const response = await fetch(
    "https://react-meetups-4e634-default-rtdb.firebaseio.com/.json"
  );
  return await response.json();
}

export default firebaseApp;
