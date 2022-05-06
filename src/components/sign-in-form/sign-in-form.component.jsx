import { useRef, useState } from "react";
import {
  SignInAuthUserWithEmailAndPassword,
} from "../../services/firebase/firebase.service";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";

const defaultFormField = {
  email: "",
  password: "",
};

const SignInForm = ({ children }) => {
  const [formFields, setFormFields] = useState(defaultFormField);
  const { email, password } = formFields;
  const errorRef = useRef();

  const resetFields = () => {
    setFormFields(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await SignInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFields();
    } catch (error) {
      errorRef.current.innerHTML = ""
      if (
        error.code === "auth/auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        errorRef.current.insertAdjacentHTML(
          "beforeEnd",
          `<p class="error-sign">Mot de passe ou Email incorrect !</p>`
        );
      }
      console.log("user creation error", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Se connecter</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
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

        <div ref={errorRef}></div>

        <Button type="submit">S'inscrire</Button>
        
      </form>
    </div>
  );
};

export default SignInForm;
