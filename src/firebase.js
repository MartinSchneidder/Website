import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8WspggAJ7NYeCils7NGKk-BDfKw3lzUU",
  authDomain: "brobank-d0269.firebaseapp.com",
  projectId: "brobank-d0269",
  storageBucket: "brobank-d0269.firebasestorage.app",
  messagingSenderId: "332534888385",
  appId: "1:332534888385:web:9f0f879472df456d36a140",
  measurementId: "G-N8H87DWDNX",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
