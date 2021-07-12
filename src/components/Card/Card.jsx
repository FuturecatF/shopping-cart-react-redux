import React from "react";
import { useDispatch } from "react-redux";
import { addProductsToCart } from '../../redux/actions';



function Card({ card }) {
    const dispatch = useDispatch();
    
    /* function addToCart(card) {
        console.log(card);
        dispatch(addProductsToCart(card));
    } */
        

    
    return (   
    <li>
        <h1>{card.name}</h1>
        <img src={card.image} alt={card.name} style={{ maxWidth: 200 }}></img>
        <p>{card.price}</p>
        <button onClick={() => dispatch(addProductsToCart(card))}>Купить</button>
        
    </li>
    )
}

export default Card;