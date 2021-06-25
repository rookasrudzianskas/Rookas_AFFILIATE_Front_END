import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAzxAD9D8nctU7AM8B0Cf4dLJ3Hxz53e7g",
    authDomain: "rookas-sales-app.firebaseapp.com",
    projectId: "rookas-sales-app",
    storageBucket: "rookas-sales-app.appspot.com",
    messagingSenderId: "907530779444",
    appId: "1:907530779444:web:738c0bc51e040e56ca0361",
    measurementId: "G-LX6BTKXEJV"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
