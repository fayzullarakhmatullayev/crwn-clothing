import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAa7wlbbroQ2CvCeseMNgXHXcrInhCtENE",
  authDomain: "crwn-db-58d3d.firebaseapp.com",
  databaseURL:
    "https://crwn-db-58d3d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "crwn-db-58d3d",
  storageBucket: "crwn-db-58d3d.appspot.com",
  messagingSenderId: "505993991220",
  appId: "1:505993991220:web:bc2783275a821e477de661",
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
