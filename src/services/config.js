import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "sala-hogar.firebaseapp.com",
  projectId: "sala-hogar",
  storageBucket: "sala-hogar.appspot.com",
  messagingSenderId: "544046388238",
  appId: "1:544046388238:web:6d6e390b068ff7fded985f"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);