import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDpPgzWJT06ypoMdEl5oXWdT7nhiw2TGa8',
  authDomain: 'react-chat-7aa46.firebaseapp.com',
  projectId: 'react-chat-7aa46',
  storageBucket: 'react-chat-7aa46.appspot.com',
  messagingSenderId: '587968426449',
  appId: '1:587968426449:web:6d2d9fc0c6db589845f0f0',
  measurementId: 'G-VLKX3JZJ5D',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
