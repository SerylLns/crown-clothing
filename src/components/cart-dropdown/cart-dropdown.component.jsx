import "./cart-dropdown.style.scss";
import React from "react";
import Button from "../button/button.component";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="card-items"></div>
      <Button>Valider mon panier</Button>
    </div>
  );
};

export default CartDropdown;
