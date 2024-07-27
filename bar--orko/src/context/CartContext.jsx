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

    const clearCart = () => {
        setCart([]);
    };

    const isItemInCart = (itemId) => {
        return cart.some(item => item.id === itemId);
    };

    const getItemQuantity = (itemId) => {
        const item = cart.find(item => item.id === itemId);
        return item ? item.quantity : 0;
    };

    return (
        <Context.Provider value={{ cart, addItem, removeItem, updateItemQuantity, clearCart, isItemInCart, getItemQuantity }}>
            {children}
        </Context.Provider>
    );
};

export default Context;
