import "./checkout.style.scss";

import React, { useContext } from "react";
import { CartContext } from "../../contextes/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const Checkout = () => {
  const { items, totalValue } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Produit</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantité</span>
        </div>
        <div className="header-block">
          <span>Prix</span>
        </div>
        <div className="header-block">
          <span>Supprimer</span>
        </div>
      </div>
      {items.map((item) => {
        return (
          <CheckoutItem key={item.id} item={item}/>
        );
      })}
      <span className="total">Total: {totalValue}€</span>
    </div>
  );
};

export default Checkout;
