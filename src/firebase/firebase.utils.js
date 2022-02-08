import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const config = {
  apiKey: "AIzaSyCFOlKe5Xr9oSLKCzo1A5KM4p7znjTfY1Q",
  authDomain: "crw-db-16995.firebaseapp.com",
  projectId: "crw-db-16995",
  storageBucket: "crw-db-16995.appspot.com",
  messagingSenderId: "509762651412",
  appId: "1:509762651412:web:5a020e4ae85bca03602e01",
  measurementId: "G-169J56LY4J"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;