import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions';
function CartList({ item }) {
	const dispatch = useDispatch();

	return (
		<li>
			<h1>{item.name}</h1>
			<button onClick={() => dispatch(removeItemFromCart(item))}>
				Удалить товар
			</button>
		</li>
	);
}

export default CartList;
