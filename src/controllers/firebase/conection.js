// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrg1PjEFh4anrt9LJ_T2ha0PI87Jju10",
  authDomain: "virtualbooks-ares.firebaseapp.com",
  projectId: "virtualbooks-ares",
  storageBucket: "virtualbooks-ares.appspot.com",
  messagingSenderId: "849928141333",
  appId: "1:849928141333:web:e2ba36cda64a5c77872c1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);
const auth = getAuth(app);
export { app, fireStore, auth };
