import firebase from "firebase/app"; // imports the core of firebase
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDltu0o9PA6gtVYxuoaomsieKVMZY6ISHI",
  authDomain: "cooking-ninja-pro.firebaseapp.com",
  projectId: "cooking-ninja-pro",
  storageBucket: "cooking-ninja-pro.appspot.com",
  messagingSenderId: "97404845252",
  appId: "1:97404845252:web:4e692ad4098abc878edd91",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
