import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDbhRvsLSyNmuC-ENWE7iJFZQpjx43MF6s",
  authDomain: "chebon-movie-spok.firebaseapp.com",
  projectId: "chebon-movie-spok",
  storageBucket: "chebon-movie-spok.appspot.com",
  messagingSenderId: "1077224119554",
  appId: "1:1077224119554:web:1014c08e01908b8d6d361b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
