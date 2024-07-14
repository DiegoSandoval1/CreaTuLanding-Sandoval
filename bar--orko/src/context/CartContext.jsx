import React, { createContext, useState } from 'react';

export const Context = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (productToAdd, quantity) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productToAdd.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity }];
    });
  };

  const removeItem = (id) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const updateItemQuantity = (id, quantity) => {
    setCart(prevCart => 
      prevCart.map(item =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  return (
    <Context.Provider value={{ cart, addItem, removeItem, updateItemQuantity }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
