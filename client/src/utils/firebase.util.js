import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "intervexa-e36b9.firebaseapp.com",
  projectId: "intervexa-e36b9",
  storageBucket: "intervexa-e36b9.firebasestorage.app",
  messagingSenderId: "900656056485",
  appId: "1:900656056485:web:77ee9d054b5a663080254c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
