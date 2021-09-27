import firebase from "firebase/compat";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB0eaXIWPcr_ZR3kAlx8-J-_PeH67iPOq4",
    authDomain: "facebook-messenger-clone-59f78.firebaseapp.com",
    projectId: "facebook-messenger-clone-59f78",
    storageBucket: "facebook-messenger-clone-59f78.appspot.com",
    messagingSenderId: "799885577548",
    appId: "1:799885577548:web:29e71d2d10678fce0f13e9"
});

const db = firebaseApp.firestore();

export default db;