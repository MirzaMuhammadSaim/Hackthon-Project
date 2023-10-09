import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyA-t1ExQJwpi9745ZBYjFbGXXzjYm9i4Eo",
    authDomain: "studentmanagment-cddce.firebaseapp.com",
    projectId: "studentmanagment-cddce",
    storageBucket: "studentmanagment-cddce.appspot.com",
    messagingSenderId: "761429499017",
    appId: "1:761429499017:web:4fce76a465d635b7d3ba58",
    measurementId: "G-GQKH9B608K"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { analytics, auth, firestore, storage }