import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "xabarnoma-308f8.firebaseapp.com",
  projectId: "xabarnoma-308f8",
  storageBucket: "xabarnoma-308f8.firebasestorage.app",
  messagingSenderId: "382950693434",
  appId: "1:382950693434:web:53f1ae2863da9f129f3303",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
