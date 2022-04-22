// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1oPzvS56PlX4_Uqychy_EB8WSrw9buRI",
  authDomain: "dudu-react-basic-f61c1.firebaseapp.com",
  projectId: "dudu-react-basic-f61c1",
  storageBucket: "dudu-react-basic-f61c1.appspot.com",
  messagingSenderId: "185857062823",
  appId: "1:185857062823:web:9576307012dced1473a882",
  measurementId: "G-BRMFDPJWHS"
};



initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();