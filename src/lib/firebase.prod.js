import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// we need to somehow seed the database

// we need a config here
const config = {
  apiKey: "AIzaSyDziXe6PSFGnlrCBNoHJYZT3AoFgaafeTg",
  authDomain: "netflix-8a14d.firebaseapp.com",
  projectId: "netflix-8a14d",
  storageBucket: "netflix-8a14d.appspot.com",
  messagingSenderId: "190519671477",
  appId: "1:190519671477:web:e45f1b4792af289f615cfc",
};

const firebase = Firebase.initializeApp(config);


export { firebase };
