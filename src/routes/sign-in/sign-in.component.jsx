import React from "react";
import { createUserDocumentFromAuth, signInWithGooglePopup } from "../../services/firebase/firebase.service";

const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h2>Sign in page</h2>
      <button onClick={logGoogleUser}>Se connecter avec Google</button>
    </div>
  );
};

export default SignIn;
