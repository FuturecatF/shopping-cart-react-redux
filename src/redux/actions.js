import { REQUEST_CARDS, ADD_PRODUCT, REMOVE_PRODUCT } from './types';

export function requestCards() {
	return {
		type: REQUEST_CARDS,
	};
}

export function addProductsToCart(item) {
	return {
		type: ADD_PRODUCT,
		payload: item,
	};
}

export function removeItemFromCart(item) {
	return {
		type: REMOVE_PRODUCT,
		payload: item,
	};
}
