import React, { useContext } from 'react';
import { CartContext } from '../../contextes/cart.context';
import { CartIconContainer, ItemCount, ShoppingIcon } from './cart-icon.style';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, itemsCount } = useContext(CartContext);
  return (
    <CartIconContainer
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{itemsCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;