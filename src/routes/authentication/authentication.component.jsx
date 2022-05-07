import React, { useContext } from "react";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { UserContext } from "../../contextes/user.context";
import "./authentication.style.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      {/* <Button onClick={logGoogleUser}>Se connecter avec Google</Button> */}
      <SignUpForm />
      <SignInForm/>
    </div>
  );
};

export default Authentication;
