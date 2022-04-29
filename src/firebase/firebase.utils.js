import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBEDh0S9baUEk5EjCFo6HT8YUwAEB4KUf4",
  authDomain: "crwn-db-17264.firebaseapp.com",
  projectId: "crwn-db-17264",
  storageBucket: "crwn-db-17264.appspot.com",
  messagingSenderId: "386664714741",
  appId: "1:386664714741:web:cdbdb420d003c9fa7fd0bc",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
