import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

// ✅ FIX THIS: Use your EXACT config from Firebase Console
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "swipe-f90ed.firebaseapp.com",
  projectId: "swipe-f90ed",
  storageBucket: "swipe-f90ed.firebasestorage.app",
  messagingSenderId: "360540214416",
  appId: "1:360540214416:web:3e92fe77e5c93283d47415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Register
const registerBtn = document.getElementById("registerBtn");
if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Registered successfully!");
      window.location.href = "login.html";
    } catch (error) {
      alert(error.message);
    }
  });
}

// Login
const loginBtn = document.getElementById("loginBtn");
if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
      window.location.href = "profile.html";
    } catch (error) {
      alert(error.message);
    }
  });
  }
