import React, {useContext}from "react";
import { CartContext } from "../context/CartContext";

const Carrito = () =>{
    const { cart, removeFromCart, updateQuantity, total} = useContext(CartContext);

    return(
        <div className="container">
            <h1>Carrito</h1>
            {cart.length === 0 ?(
                <p>No hay productos seleccioneados</p>
            ):(
                <div>
                    {cart.map(product =>(
                        <div key={product.id}>
                            <h4>{product.name}</h4>
                            <p>Precio: ${product.price.toFixed(2)}</p>
                            <input
                            type="number"
                            value={product.quantity}
                            onChange={(e)=> updateQuantity(product.id, e.target.value)}
                            />
                            <button onClick={()=>removeFromCart(product.id)}>Eliminar</button>
                        </div>
                    ))}
                    <h3>Total: ${total.toFixed(2)}</h3>
                </div>
            )}
        </div>
    );
};

export default Carrito;