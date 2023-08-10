// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

  document.getElementById("sign-up").style.display="block"

  const firebaseConfig = {
    apiKey: "AIzaSyAtsHf_mRn4eAqPBsZT3eO6dIHilet2LvE",
    authDomain: "hackatone-5a5ec.firebaseapp.com",
    projectId: "hackatone-5a5ec",
    storageBucket: "hackatone-5a5ec.appspot.com",
    messagingSenderId: "951760425437",
    appId: "1:951760425437:web:b26c41c2447900c272e634"
  };
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
var logout = () => {

    
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            document.getElementById("sign-up").innerText = "logout"
            document.getElementById("sign-up1").style.display = "none"
            // ...
        } else {
            // User is signed out
            console.log("not work")
            // ...
        }
    });

}
logout()

var logut = document.getElementById("sign-up");
logut.addEventListener("click", () => {

    signOut(auth).then(() => {
        // Sign-out successful.
        swal("Good job!", "You Sign Out!", "success");
        window.location.href = "./home.html"
    }).catch((error) => {
        // An error happened.
    });
})



