import './CartList.css';
import React from 'react';
import {
  removeItemFromCart,
  removeTotalItemFromCart,
  addProductsToCart,
} from '../../redux/actions';
import { useDispatch } from 'react-redux';

function CartList({ item }) {
  const dispatch = useDispatch();

  return (
    <li className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.name}></img>
      <h2 className="cart-item__title">{item.name}</h2>
      <p className="cart-item__price">{item.price} &#8381;</p>
      <button
        className="cart-item__btn-count"
        onClick={() => dispatch(removeItemFromCart(item))}
      >
        -
      </button>
      <p className="cart-item__quantity">{item.quantity}</p>
      <button
        className="cart-item__btn-count"
        onClick={() => dispatch(addProductsToCart(item))}
      >
        +
      </button>
      <button
        className="cart-item__btn-delete"
        onClick={() => dispatch(removeTotalItemFromCart(item))}
      >
        Удалить товар
      </button>
    </li>
  );
}

export default CartList;
