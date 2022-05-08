import {  useRef, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../services/firebase/firebase.service";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import GoogleLogo from '../../assets/google-logo.svg';
import { SignUpContainer } from "./sign-up-form.style";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formFields;
  const errorRef = useRef();

  const resetFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      errorRef.current.insertAdjacentHTML(
        "beforeEnd",
        `<p class="error-sign">Les mots de passe ne correspondent pas !</p>`
      );
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFields();
    } catch (error) {
      errorRef.current.innerHTML = "";
      console.log(error.code);
      if (error.code === "auth/email-already-in-use") {
        errorRef.current.insertAdjacentHTML(
          "beforeEnd",
          `<p class="error-sign">Cet email est déjà utilisé !</p>`
        );
      }
      console.log("user creation error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const SignInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignUpContainer>
      <h2>Vous n'êtes pas encore inscrit ?</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Nom d'utilisateur"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Mot de passe"
          required
          type="password"
          onChange={(e) => handleChange(e)}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirmez votre mot de passe"
          required
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <div ref={errorRef}></div>

        <div className="sign-up-buttons">
          <Button
            onClick={SignInWithGoogle}
            buttonType="google"
            type="button"
            logo={GoogleLogo}
          />
          <Button type="submit">S'inscrire</Button>
        </div>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
