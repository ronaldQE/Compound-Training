import firebase from 'firebase/app';
import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyANvqwsjKqlKRFEY6VR3fUzGgIzrYWVx7g",
    authDomain: "compound-training.firebaseapp.com",
    projectId: "compound-training",
    storageBucket: "compound-training.appspot.com",
    messagingSenderId: "773011888188",
    appId: "1:773011888188:web:fc86c6f54cb1141c6ecb39",
    measurementId: "G-YNDMGEJ8MM"
  };
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export default {
      firebase,
      db

  }