// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyArdiZrSBKEBObvFrGfIcROTNpeDtDCMpg",
    authDomain: "laterrazadelcountry-ace67.firebaseapp.com",
    projectId: "laterrazadelcountry-ace67",
    storageBucket: "laterrazadelcountry-ace67.appspot.com",
    messagingSenderId: "205441804255",
    appId: "1:205441804255:web:a39737699984045281066a"
};

// Initialize Firebase
initializeApp( firebaseConfig );
// const app = initializeApp( firebaseConfig );

export const auth = getAuth(); 