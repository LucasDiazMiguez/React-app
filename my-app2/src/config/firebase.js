import firebase from 'firebase/app'
import 'firebase/firestore'

const app= firebase.initializeApp(
    {
      apiKey: "AIzaSyA0MwmW2wWl4s6LXjKNZq1WbZVIwZuSmBQ",
      authDomain: "hardwarehouse-proyecto-coder.firebaseapp.com",
      projectId: "hardwarehouse-proyecto-coder",
      storageBucket: "hardwarehouse-proyecto-coder.appspot.com",
      messagingSenderId: "1080753631063",
      appId: "1:1080753631063:web:15e6473ee9955968109812",
      measurementId: "G-C6CL7L5GES"
      }
)

export const getFirebase= ()=>app;
export const getFirestore= ()=>firebase.firestore(app);

