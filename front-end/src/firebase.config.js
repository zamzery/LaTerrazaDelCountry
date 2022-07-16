// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyArdiZrSBKEBObvFrGfIcROTNpeDtDCMpg",
    authDomain: "laterrazadelcountry-ace67.firebaseapp.com",
    projectId: "laterrazadelcountry-ace67",
    storageBucket: "laterrazadelcountry-ace67.appspot.com",
    messagingSenderId: "205441804255",
    appId: "1:205441804255:web:a39737699984045281066a"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export const db = getFirestore( app );
export const auth = getAuth(); 