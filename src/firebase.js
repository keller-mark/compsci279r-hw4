import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCGDO0mUzP1isYpapM99ZDpol7ASepuUb4",
  authDomain: "todo-app-d2f5e.firebaseapp.com",
  projectId: "todo-app-d2f5e",
  storageBucket: "todo-app-d2f5e.appspot.com",
  messagingSenderId: "615498301085",
  appId: "1:615498301085:web:7e6ea58c702bae4df5de74"
};




firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Parameters added for firebase 9.
export const db = firebase.firestore(app, {
  // To prevent timeouts.
  experimentalForceLongPolling: true,
});