import React from "react";
import { DefaultButton, GoogleButton, InvertedButton } from "./button.style";

const BUTTON_TYPE_CLASSES = {
  google: "google",
  inverted: "inverted",
  default: "default",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.default) =>
  ({
    [BUTTON_TYPE_CLASSES.default]: DefaultButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton {...otherProps} >
      {buttonType === "google" && <img src={otherProps.logo} alt="google" />}
      {children}
    </CustomButton>
  );
};

export default Button;
