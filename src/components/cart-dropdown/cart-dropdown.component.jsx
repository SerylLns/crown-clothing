import "./cart-dropdown.style.scss";
import React, { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contextes/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { Link, useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout")
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {items && items.map((item) => <CartItem key={item.id} item={item} />)}
      </div>
      <Button onClick={goToCheckoutHandler}>Valider mon panier</Button>
    </div>
  );
};

export default CartDropdown;
