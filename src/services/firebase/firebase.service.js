import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKDPbArnJNpxYb_OVuFG5bBXME308nKlY",
  authDomain: "crow-clothing-db-32547.firebaseapp.com",
  projectId: "crow-clothing-db-32547",
  storageBucket: "crow-clothing-db-32547.appspot.com",
  messagingSenderId: "137494930184",
  appId: "1:137494930184:web:e8e77ab87d6367987342bd",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionInformation = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const UserSnapshot = await getDoc(userDocRef);
  if (!UserSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return createUserWithEmailAndPassword(auth, email, password);
};

export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return signInWithEmailAndPassword(auth, email, password);
};