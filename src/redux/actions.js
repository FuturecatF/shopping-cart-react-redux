import {
	REQUEST_CARDS,
	ADD_PRODUCT,
	REMOVE_PRODUCT,
	TOTAL_PRODUCTS,
    GET_TOTAL
} from './types';

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

export function addTotalProducts(item) {
	return {
		type: TOTAL_PRODUCTS,
        payload: item.reduce((prev,next) => prev + next.quantity, 0)
	};
}   


export function getTotalProducts() {
	return {
		type: GET_TOTAL,
        
	};
}   