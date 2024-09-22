import React, { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import './ProductList.css'

const Productos = ()=>{
    const [productos, setProductos] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        fetchProducts().then(response=> setProductos(response.data));
    },[]);
    const filteredProducts = productos.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div>
            <input
                type="text"
                placeholder="Buscar productos..."
                onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <div className="product-list">

                {filteredProducts.map(product=>(
                    <ProductCard product={product} title={product.title}></ProductCard>
                //<div key={product.id}>
                    //<h2>{product.title}</h2>
                    //<p>{product.price}</p>
                    //<img src={product.image} alt={product.title}/>
                //</div>
            ))}
            </div>
        </div>
    );
};

export default Productos;