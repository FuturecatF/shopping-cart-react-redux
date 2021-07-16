import './Cart.css';
import React from 'react';
import CartListFooter from '../CartListFooter/CartListFooter';
import { useSelector } from 'react-redux';
import CartList from '../CartList/CartList';

function Cart() {
  const goods = useSelector((state) => state.cart.products);

  return (
    <section>
      <ul className="cart-items">
        {goods.map((item, i) => (
          <CartList item={item} key={i} />
        ))}
      </ul>
      <CartListFooter goods={goods} />
    </section>
  );
}

export default Cart;
