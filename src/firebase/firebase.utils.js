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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    //  db.ref(`all_notes/${uid}/${note_id}`)
    // .set({
    //   content,
    //   note_id,
    //   uid
    // })
    // .then(_ => {
    //   this.setState({ content: "" });
    // });

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapshot = await userRef.get();
    
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
