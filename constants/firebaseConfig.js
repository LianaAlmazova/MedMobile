import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAok0zQ7aAi6h5CSgrGb5UI1prSdraQdQA",
  authDomain: "medchain-83c4d.firebaseapp.com",
  projectId: "medchain-83c4d",
  storageBucket: "medchain-83c4d.firebasestorage.app",
  messagingSenderId: "1092929440635",
  appId: "1:1092929440635:web:b7d7c4cbe457d590330bde"
};

// Initialize Firebase
const firebaseConf = initializeApp(firebaseConfig);
const db = getFirestore(firebaseConf); // Use getFirestore to get the Firestore instance

export default db;