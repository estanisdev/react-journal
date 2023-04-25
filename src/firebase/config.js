// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyANF_QbBpt3BUxnTjEffP5NjQmNwZ3pFHc',
  authDomain: 'react-cursos-8ea76.firebaseapp.com',
  projectId: 'react-cursos-8ea76',
  storageBucket: 'react-cursos-8ea76.appspot.com',
  messagingSenderId: '740693251717',
  appId: '1:740693251717:web:72760a354e3d903e187bec',
}

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig)
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
