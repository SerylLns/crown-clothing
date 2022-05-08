import "./checkout-item.style.scss";

import React, { useContext } from "react";
import { CartContext } from "../../contextes/cart.context";

const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { removeItemToCart, addItemToCart, removeOneItemToCart } =
    useContext(CartContext);
  const addItemHandler = () => addItemToCart(item);
  const removeItemHandler = () => removeOneItemToCart(item)
  const clearItemHandler = () => removeItemToCart(item)
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={item.name} />
      </div>
      <p className="name">{name}</p>
      <div className="quantity">
        <span className="arrow" onClick={removeItemHandler}>
          &#11207;
        </span>
        <span className="value"> {quantity} </span>
        <span className="arrow" onClick={addItemHandler}>
          &#11208;
        </span>
      </div>
      <p className="price">{price}€</p>
      <div className="remove-button" onClick={clearItemHandler}>
        &#128473;
      </div>
    </div>
  );
};

export default CheckoutItem;
