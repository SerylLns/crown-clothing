import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  isCartOpen: false,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState();
  const [isCartOpen, setIsCartOpen] = useState(true);
  const value = { items, setItems, isCartOpen, setIsCartOpen };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
