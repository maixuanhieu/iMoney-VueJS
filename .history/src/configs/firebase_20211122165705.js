import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/a'
// import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebase = require('firebase');
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIo7xhWKDm5ScZMyz3036ffOV34htAH0k",
  authDomain: "imoney-eec25.firebaseapp.com",
  projectId: "imoney-eec25",
  storageBucket: "imoney-eec25.appspot.com",
  messagingSenderId: "634999697044",
  appId: "1:634999697044:web:3c05565c1d7c446c9b8e81",
  measurementId: "G-TWQ7BW5V6B",
};


const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
