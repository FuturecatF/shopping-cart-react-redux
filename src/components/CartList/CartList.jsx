import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions';
// import { useSelector } from 'react-redux';
// import { addTotalProducts } from '../../redux/actions';
function CartList({ item }) {
	const dispatch = useDispatch();
	// const caunt = useSelector((state) => state.cart.products.quantity);
	// const total = caunt.reduce((prev, next) => prev + next.quantity, 0);
	//console.log(total);

	return (
		<li>
			<h1>{item.name}</h1>

			<h2>{item.quantity}</h2>

			<button onClick={() => dispatch(removeItemFromCart(item))}>
				Удалить товар
			</button>
		</li>
	);
}

export default CartList;
