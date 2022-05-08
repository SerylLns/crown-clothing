import React, { useContext } from "react";
import Button from "../button/button.component";
import { CartContext } from "../../contextes/cart.context";
import { useNavigate } from "react-router-dom";
import CartItem from '../cart-item/cart-item.component'
import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from "./cart-dropdown.style";

const CartDropdown = () => {
  const { items } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
  return (
    <CartDropdownContainer>
      <CartItems>
        {items.length ? (
          items && items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMessage>Votre panier est vide !</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>Valider mon panier</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
