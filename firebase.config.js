// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXzcCSY1zSl-Jdmp1GDLLVbgA4c5lynoc",
  authDomain: "jakeli-house.firebaseapp.com",
  projectId: "jakeli-house",
  storageBucket: "jakeli-house.appspot.com",
  messagingSenderId: "445771545285",
  appId: "1:445771545285:web:344fb99795d05dad7f4eac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
console.log("yee");
