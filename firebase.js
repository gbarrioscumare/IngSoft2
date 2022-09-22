import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAuHQ6yZ-4u8_dOz0bBwsjAq-J92cdI5L0",
  authDomain: "aplicacion-bef8d.firebaseapp.com",
  projectId: "aplicacion-bef8d",
  storageBucket: "aplicacion-bef8d.appspot.com",
  messagingSenderId: "289561211516",
  appId: "1:289561211516:web:80bfa2467c004dd3194ff9",
  measurementId: "G-FEJCV685BD"
};
export const firebaseApp = firebase.initializeApp (firebaseConfig)