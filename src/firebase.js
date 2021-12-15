// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth';
// import {getFirestore} from 'firebase/firestore';

// const firebaseApp = initializeApp({
//   apiKey: "AIzaSyAfiQuy8CRVR22ir3Qu9LNvhRsAsmvEcug",
//   authDomain: "clone-66f6b.firebaseapp.com",
//   projectId: "clone-66f6b",
//   storageBucket: "clone-66f6b.appspot.com",
//   messagingSenderId: "182204914107",
//   appId: "1:182204914107:web:ba40f7a6437af0be5fcc9e",
//   measurementId: "G-8EFK0B3JHH",
// });
// const db = getFirestore(firebaseApp);
// const auth = getAuth(firebaseApp);
// const provider = new auth.GoogleAuthProvider();

// export { db, auth, provider };

import firebase from "firebase/compat/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAfiQuy8CRVR22ir3Qu9LNvhRsAsmvEcug",
  authDomain: "clone-66f6b.firebaseapp.com",
  projectId: "clone-66f6b",
  storageBucket: "clone-66f6b.appspot.com",
  messagingSenderId: "182204914107",
  appId: "1:182204914107:web:ba40f7a6437af0be5fcc9e",
  measurementId: "G-8EFK0B3JHH",
});

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();

// export {auth, db, provider};
