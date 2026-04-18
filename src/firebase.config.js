
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq2O2SSzZ_SriZek7eob9plFPuBsJ5mBQ",
  authDomain: "esfdr-2503.firebaseapp.com",
  projectId: "esfdr-2503",
  storageBucket: "esfdr-2503.firebasestorage.app",
  messagingSenderId: "1076767036460",
  appId: "1:1076767036460:web:67e33c83e9d76d2a292d89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;