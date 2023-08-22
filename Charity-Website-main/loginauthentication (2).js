import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithRedirect, getRedirectResult, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxtQxwufCtAqj7sAwT6tnEKjVSHYtSF7s",
    authDomain: "orphange-donation.firebaseapp.com",
    databaseURL: "https://orphange-donation-default-rtdb.firebaseio.com",
    projectId: "orphange-donation",
    storageBucket: "orphange-donation.appspot.com",
    messagingSenderId: "39743419100",
    appId: "1:39743419100:web:6d30b37ec5324d4f38fa19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);
const provider = new GoogleAuthProvider(app);


login_b.addEventListener('click', (e) => {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;

        const dt = new Date();
        update(ref(database, 'users/' + user.uid),{
            last_login: dt,
        })

        alert('Successfully logged-IN!!!')
        window.location.replace('about.html')
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      })

})

googlebtn.addEventListener('cliick', (e) => {
    signInWithRedirect(auth, provider);


    getRedirectResult(auth)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;

            alert(user.displayName);


        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });


})

googlebtn.addEventListener('click', (e) => {


    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            alert(user.displayName);
            // window.location.replace("./newmain.html");

         


            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            alert(errorMessage);

        });

})