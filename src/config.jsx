import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDC4Uh_SCdSHDlZyn4ZSzFMOrSA4PsoHJY",
  authDomain: "diary-5610d.firebaseapp.com",
  projectId: "diary-5610d",
  storageBucket: "diary-5610d.appspot.com",
  messagingSenderId: "365790687232",
  appId: "1:365790687232:web:4aa5db7d6a56d651f2a8e5",
  measurementId: "G-YB98919N8B",
});

export default firebaseConfig;
