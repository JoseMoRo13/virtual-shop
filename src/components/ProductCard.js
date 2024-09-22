import React from "react";
import { Card, Button } from "react-bootstrap";


const ProductCard = ({product, addToCard})=>(
    <Card style={{width: '18rem'}}>
        <Card.Img variant="top" src={product.image}/>
        <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="primary" onClick={()=> addToCard(product)}>Anadir al Carrito</Button>
        </Card.Body>
    </Card>
);

export default ProductCard;