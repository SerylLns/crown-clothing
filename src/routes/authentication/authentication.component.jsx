import React, { useContext } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { AuthenticationContainer } from "./authentication.style";

const Authentication = () => {
  return (
    <AuthenticationContainer>
      {/* <Button onClick={logGoogleUser}>Se connecter avec Google</Button> */}
      <SignUpForm />
      <SignInForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
