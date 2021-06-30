  import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD5Fj10aguQ7qCZfW5YK4Nib_e3ygY0_ds",
    authDomain: "e-commerce-react-760ea.firebaseapp.com",
    projectId: "e-commerce-react-760ea",
    storageBucket: "e-commerce-react-760ea.appspot.com",
    messagingSenderId: "609809496056",
    appId: "1:609809496056:web:b7592e61a4d7f722f0c80d"
  };

  firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }
