import './Card.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductsToCart } from '../../redux/actions';

function Card({ card }) {
  const dispatch = useDispatch();

  return (
    <li className="item">
      <img className="item__image" src={card.image} alt={card.name}></img>
      <h2 className="item__title">{card.name}</h2>
      <p className="item__price">Price {card.price} &#8381;</p>
      <button
        className="item__button"
        onClick={() => dispatch(addProductsToCart(card))}
      >
        Купить
      </button>
    </li>
  );
}

export default Card;
