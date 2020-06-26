import firebase from 'firebase/app';
import 'firebase/firestore/';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA2Dl4Ptd692SEeXxDWSmPegVVTClfZvGU",
    authDomain: "dome-baacf.firebaseapp.com",
    databaseURL: "https://dome-baacf.firebaseio.com",
    projectId: "dome-baacf",
    storageBucket: "dome-baacf.appspot.com",
    messagingSenderId: "70441792658",
    appId: "1:70441792658:web:bbd70544291be17c6ae24b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
