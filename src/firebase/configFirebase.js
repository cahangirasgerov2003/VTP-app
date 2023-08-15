import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCXEwpJ0AHjV3HXnog0Rc6ic_d_13_r6rs",
  authDomain: "vtp-23.firebaseapp.com",
  databaseURL: "https://vtp-23-default-rtdb.firebaseio.com",
  projectId: "vtp-23",
  storageBucket: "vtp-23.appspot.com",
  messagingSenderId: "346570363590",
  appId: "1:346570363590:web:ab62bd3c97d72947887dc7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
