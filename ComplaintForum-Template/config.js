import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
 //Add configuration here
 apiKey: "AIzaSyDrPf7QlevbQQoGXXvs17Z9xQ2f_mdSo4U",
    authDomain: "complaint-forum-bf9f8.firebaseapp.com",
    projectId: "complaint-forum-bf9f8",
    storageBucket: "complaint-forum-bf9f8.appspot.com",
    messagingSenderId: "187171474103",
    appId: "1:187171474103:web:722331517b19ea4d33db32"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

