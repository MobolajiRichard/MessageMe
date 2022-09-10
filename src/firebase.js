import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBZ-MzWIb4uvQrp8GgzxobOANVYSjisrB0",
    authDomain: "chat-clone-ab9da.firebaseapp.com",
    projectId: "chat-clone-ab9da",
    storageBucket: "chat-clone-ab9da.appspot.com",
    messagingSenderId: "945687706850",
    appId: "1:945687706850:web:ac16293135c561f2d432bb",
    measurementId: "G-0FC115E2X5"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const db = app.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
