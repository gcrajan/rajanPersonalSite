import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCeiHQ6BgHd7PP2TSEZclRy4WL-JqEqSdc",
  authDomain: "gcrajan-63275.firebaseapp.com",
  projectId: "gcrajan-63275",
  storageBucket: "gcrajan-63275.appspot.com",
  messagingSenderId: "725718415235",
  appId: "1:725718415235:web:03900dadc183014803a8b6"
};


export const app = initializeApp(firebaseConfig);
export const db= getFirestore()