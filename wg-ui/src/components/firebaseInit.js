import firebase from 'firebase'
import 'firebase/firebase'
import firebaseConfig from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()