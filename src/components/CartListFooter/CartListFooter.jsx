import './CartListFooter.css';
import React from 'react';

function CartListFooter({ goods }) {
  const totalPrice = goods.reduce(
    (prev, next) => prev + next.quantity * next.price,
    0
  );
  return (
    <section>
      <p
        className={`cartlist-footer ${
          totalPrice ? 'cartlist-footer_visible' : ''
        }`}
      >
        Total price is {totalPrice} &#8381;
      </p>
      <p
        className={`cartlist-footer ${
          totalPrice ? '' : 'cartlist-footer_visible'
        }`}
      >
        Cart is Empty
      </p>
    </section>
  );
}

export default CartListFooter;
