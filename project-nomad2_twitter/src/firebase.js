import { initializeApp } from "firebase/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBzeeOfcFYelfHjtmnawqaNmsbksQA41vk",
    authDomain: "nwitter-41dcf.firebaseapp.com",
    projectId: "nwitter-41dcf",
    storageBucket: "nwitter-41dcf.appspot.com",
    messagingSenderId: "904151530048",
    appId: "1:904151530048:web:aa13c64082b0fa51eafda5"
  };

export const firebaseApp = initializeApp(firebaseConfig);