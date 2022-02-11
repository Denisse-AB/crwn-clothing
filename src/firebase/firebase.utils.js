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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // ask firebase is user is auth, if not create firestore.
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // create firestore database if user exists === false.
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;