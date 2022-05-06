import './button.style.scss'

import React from 'react';

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: 'inverted',
  default: ''
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} style={ {backgroundImage: `url(${otherProps.logo})`}} {...otherProps}>{children}</button>;
};

export default Button;