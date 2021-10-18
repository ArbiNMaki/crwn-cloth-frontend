import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config =  {
    apiKey: "AIzaSyDoOUlizcXR9pMLSbrSS6YaWY7pHmEQziA",
    authDomain: "crwn-db-okt-2021.firebaseapp.com",
    projectId: "crwn-db-okt-2021",
    storageBucket: "crwn-db-okt-2021.appspot.com",
    messagingSenderId: "346022223017",
    appId: "1:346022223017:web:abf7e0ab02b06f23ec9db8",
    measurementId: "G-6XR7PHLZT8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;