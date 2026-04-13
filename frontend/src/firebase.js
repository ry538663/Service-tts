import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCMXneGUohohKznyGz4ttx4dLCRVibcSsw",
  authDomain: "triunity-tech-solutions-ef215.firebaseapp.com",
  projectId: "triunity-tech-solutions-ef215",
  storageBucket: "triunity-tech-solutions-ef215.firebasestorage.app",
  messagingSenderId: "363998674513",
  appId: "1:363998674513:web:e5c9854a6a535e1af70270",
  measurementId: "G-HQJX1W3JM7"
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, analytics, googleProvider };
export default app;