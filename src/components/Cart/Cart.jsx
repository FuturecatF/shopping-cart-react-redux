import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../CartList/CartList';
function Cart() {
	const goods = useSelector((state) => state.cart.products);
	return (
		<ul>
			{goods.map((item, i) => (
				<CartList item={item} key={i} />
			))}
		</ul>
	);
}

export default Cart;
