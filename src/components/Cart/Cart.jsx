import React from 'react';
import './Cart.css';
import CartListFooter from '../CartListFooter/CartListFooter';
import { useSelector } from 'react-redux';
import CartList from '../CartList/CartList';
function Cart({ dispatch, item, products }) {
  const goods = useSelector((state) => state.cart.products);
  return (
    <>
      <ul className="cart-items">
        {goods.map((item, i) => (
          <CartList item={item} key={i} dispatch={dispatch} />
        ))}
      </ul>
      <CartListFooter item={item} products={products} />
    </>
  );
}

export default Cart;
