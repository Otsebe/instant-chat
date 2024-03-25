import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7-iWfx3cpnsS_WIKrf5lVwtBE6UfUczY",
  authDomain: "instantchat-75c6c.firebaseapp.com",
  projectId: "instantchat-75c6c",
  storageBucket: "instantchat-75c6c.appspot.com",
  messagingSenderId: "644249578426",
  appId: "1:644249578426:web:ff19ad2f18ff4b7cf90b83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);