import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyBbQMJxia4QSHcLc82rxWte-ADXQ3hE7RA",
  authDomain: "reels-22edd.firebaseapp.com",
  projectId: "reels-22edd",
  storageBucket: "reels-22edd.appspot.com",
  messagingSenderId: "967448840087",
  appId: "1:967448840087:web:470df8ebc63817411ae6d2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
