import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyDiadYD3YBZQRyMIZWFG2LMBGaMsQvUPkI",
  authDomain: "neo-exchange-119d5.firebaseapp.com",
  projectId: "neo-exchange-119d5",
  storageBucket: "neo-exchange-119d5.firebasestorage.app",
  messagingSenderId: "132509993377",
  appId: "1:132509993377:web:b1b4b1c63d424dd27a63e0",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);
