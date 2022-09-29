// Load the firebase SDK.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// The app's Firebase configuration,
// obtained from the Firebase Console.
const firebaseConfig = {
  apiKey: "AIzaSyCGDO0mUzP1isYpapM99ZDpol7ASepuUb4",
  authDomain: "todo-app-d2f5e.firebaseapp.com",
  projectId: "todo-app-d2f5e",
  storageBucket: "todo-app-d2f5e.appspot.com",
  messagingSenderId: "615498301085",
  appId: "1:615498301085:web:7e6ea58c702bae4df5de74"
};

// Create a firebase app object.
const app = firebase.initializeApp(firebaseConfig);

// Define the auth and google auth provider objects,
// which can be imported into other JS files.
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Define the database object.
// The parameters to the firestore() function
// were added here to make compatible with Firebase 9.
export const db = firebase.firestore(app, {
  // To prevent timeouts.
  experimentalForceLongPolling: true,
});