import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC-X6ZdQa1n8juCcR5vcDK3Nvr2hMmZ2Vw",
    authDomain: "clone-whatsapp-ef60c.firebaseapp.com",
    projectId: "clone-whatsapp-ef60c",
    storageBucket: "clone-whatsapp-ef60c.appspot.com",
    messagingSenderId: "549321411421",
    appId: "1:549321411421:web:d2f905fbb630ccd4e0b6b4",
    measurementId: "G-MZH497SQRJ"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth =firebase.auth()
  const db =app.firestore()

  const googleProvider =new firebase.auth.GoogleAuthProvider();

  export{auth ,googleProvider};

  export default db;