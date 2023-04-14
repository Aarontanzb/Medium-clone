// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAHk1BeFgFJ8oNWuhcKCCRXX0dPq-J4pGw',
  authDomain: 'medium-clone-15a1e.firebaseapp.com',
  projectId: 'medium-clone-15a1e',
  storageBucket: 'medium-clone-15a1e.appspot.com',
  messagingSenderId: '960443267309',
  appId: '1:960443267309:web:3088a45b3747e5f232f4e4',
  measurementId: 'G-HHWJNJLLQH',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export { auth, provider, db }
