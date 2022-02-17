import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD6uPR8cZq4OtdEP9FIluEDa-Msk47VN3g",
  authDomain: "crwn-db-9974a.firebaseapp.com",
  projectId: "crwn-db-9974a",
  storageBucket: "crwn-db-9974a.appspot.com",
  messagingSenderId: "414337873772",
  appId: "1:414337873772:web:a2e0d403397a45f712a549",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
