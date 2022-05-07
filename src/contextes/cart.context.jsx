import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  items: [],
  addItemToCart: () => {},
  itemsCount: 0,
  totalValue: 0,
});

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);
  const [totalValue, setTotalValue] = useState(0)
  const addItemToCart = (product) => {
    setItems(addCartItem(items, product));
  };
  const removeItemToCart = (product) => setItems(removeItem(items, product));
  const removeOneItemToCart = (product) =>
    setItems(removeOneItem(items, product));

  useEffect(() => {
    const newItemsCount = items.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setItemsCount(newItemsCount);
  }, [items]);
  
  useEffect(() => {
    const newTotalValue = items.reduce((total, item) => total + (item.price * item.quantity), 0)
    setTotalValue(newTotalValue)
  }, [items])

  const value = {
    items,
    addItemToCart,
    removeItemToCart,
    removeOneItemToCart,
    isCartOpen,
    setIsCartOpen,
    itemsCount,
    totalValue,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const addCartItem = (items, product) => {
  // find if product exist in items
  const existingCartItem = items.find((item) => item.id === product.id);
  // if exist quantity + 1
  if (existingCartItem) {
    existingCartItem.quantity += 1;
    return [...items];
  }
  // else create new product
  product.quantity = 1;
  return [...items, product];
};

const removeItem = (items, product) => {
  return items.filter((item) => item.id !== product.id);
};

const removeOneItem = (items, product) => {
  if (product.quantity === 1) return removeItem(items, product)
  
  const newCartItems = items.map((item) => {
    return item.id === product.id ? {...item, quantity: item.quantity -1}  :  item
  });
  return newCartItems;
};
