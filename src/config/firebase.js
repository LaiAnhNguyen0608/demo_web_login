import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "@firebase/firestore"; 
const firebaseConfig = {
  apiKey: "AIzaSyDijb-Xq2zTCRpQBvDoOZApk6yEut_98Zk",
  authDomain: "login-signin-web.firebaseapp.com",
  projectId: "login-signin-web",
  storageBucket: "login-signin-web.appspot.com",
  messagingSenderId: "225508413207",
  appId: "1:225508413207:web:36f1de700f99b21feab152",
  measurementId: "G-CDQQHF9W33"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);