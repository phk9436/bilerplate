import * as firebase from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import "firebase/compat/storage";

const {initializeApp} = firebase;

const firebaseConfig = {
    apiKey: "AIzaSyBzeeOfcFYelfHjtmnawqaNmsbksQA41vk",
    authDomain: "nwitter-41dcf.firebaseapp.com",
    projectId: "nwitter-41dcf",
    storageBucket: "nwitter-41dcf.appspot.com",
    messagingSenderId: "904151530048",
    appId: "1:904151530048:web:aa13c64082b0fa51eafda5"
  };

export const firebaseApp = initializeApp(firebaseConfig);
export const dbService = getFirestore();
export default firebase;