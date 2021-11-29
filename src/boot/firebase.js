import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp  } from '@firebase/app';
import { getFirestore } from '@firebase/firestore';
import { getAuth, onAuthStateChanged, setPersistence, browserSessionPersistence, signInWithEmailAndPassword } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD955Z5nbBFvFQJwWPj5HLZXu6k3kjmS-4",
  authDomain: "fitnessapptracker-8da54.firebaseapp.com",
  databaseURL: "https://fitnessapptracker-8da54-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fitnessapptracker-8da54",
  storageBucket: "fitnessapptracker-8da54.appspot.com",
  messagingSenderId: "747066610439",
  appId: "1:747066610439:web:1cc43775eb575e10982ba2",
  measurementId: "G-NHBWHE4YBF"
}

const app = initializeApp(firebaseConfig)

const auth = getAuth()

onAuthStateChanged(auth, (user) => {
  if(user) {
    return user
  } else {
  }
})

//setPersistence(auth, browserSessionPersistence)
const db = getFirestore(app)

export default db