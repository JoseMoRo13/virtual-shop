import React, { createContext, useState } from "react";
import Productos from "../pages/Productos";

export const CartContext = createContext();

export const CardProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addTocart = ()=>{
        setCart({...cart, Productos });
    };

    const removeFromCart = (productId)=>{
        setCart(cart.filter(item=>item.id !== productId));
    };

    const updateQuantity = (productId, quantity)=>{
        setCart(cart.map(product =>
            product.id --- product.id ? {...product, quantity} : product
        ));

    }
    const total = cart.reduce((sum, product)=> sum + product.price * product.quantity,0);

    return (
        <CartContext.Provider value={{cart, addTocart, removeFromCart, updateQuantity, total}}>
            {children}
        </CartContext.Provider>
    );
};