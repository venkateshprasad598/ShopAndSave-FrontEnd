import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2vVI_ps1D22eq6ILW-JOokUfn29gQT3Q",
  authDomain: "clone-8d253.firebaseapp.com",
  projectId: "clone-8d253",
  storageBucket: "clone-8d253.appspot.com",
  messagingSenderId: "674640371294",
  appId: "1:674640371294:web:a54511e906692f359edecf",
  measurementId: "G-7N108R8Y59",
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
