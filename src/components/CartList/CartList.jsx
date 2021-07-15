import React from 'react';
import './CartList.css';
import {
  removeItemFromCart,
  removeTotalItemFromCart,
  addProductsToCart,
} from '../../redux/actions';

function CartList({ item, dispatch }) {
  return (
    <li className="cart-item">
      <img className="cart-item__image" src={item.image} alt={item.name}></img>
      <h2 className="cart-item__title">{item.name}</h2>
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
