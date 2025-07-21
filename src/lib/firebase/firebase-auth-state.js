// src/lib/firebase/firebase-auth.js

import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "./firebaseConfig";

// Initialize Firebase Authentication
const auth = getAuth(app);

// Optional helper to watch auth state changes (login/logout)
const watchAuthState = (callback) => {
  onAuthStateChanged(auth, callback);
};

// Export the auth instance and the watcher
export { auth, watchAuthState };
