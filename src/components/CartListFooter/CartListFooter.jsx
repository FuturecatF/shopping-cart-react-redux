import React from 'react';
//import './CartListFooter.css';
import { useSelector } from 'react-redux';
function CartListFooter(/* { products } */) {
  const products = useSelector((state) => state.cart.products);
  const totalPrice = products.reduce(
    (prev, next) => prev + next.quantity * next.price,
    0
  );
  return <h2 className="cart-item__title">Total price is {totalPrice}</h2>;
}

export default CartListFooter;
