// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth ,signInWithEmailAndPassword,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
 apiKey: "AIzaSyAtsHf_mRn4eAqPBsZT3eO6dIHilet2LvE",
 authDomain: "hackatone-5a5ec.firebaseapp.com",
 projectId: "hackatone-5a5ec",
 storageBucket: "hackatone-5a5ec.appspot.com",
 messagingSenderId: "951760425437",
 appId: "1:951760425437:web:b26c41c2447900c272e634"
};


var btn = document.getElementById("btn")
btn.addEventListener("click",()=>{
  

var email=document.getElementById("email").value
var password=document.getElementById("password").value
   
signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {

   // Signed in 
   const user = userCredential.user;
   console.log(user,"user")
   swal("Good job!", "YOUR LOGIN IS!", "successfully");
   window.location.href="./home.html"
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;

   console.log(errorCode,"errorCode");
   console.log(errorMessage,"errorMessage")
   
 });

})
/// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

