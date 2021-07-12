import { ADD_PRODUCT, REMOVE_PRODUCT } from './types';

const initialState = {
	products: [],
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			/* const itemIndex = state.products.findIndex(
				({ item }) => item === action.payload.item
			); */
			//const item = state.products[itemIndex];

			const existingCartItem = state.products.find(
				(item) => item.id === action.payload.id
			);
			//	console.log(existingCartItem);
			/* const addItemToCart = (products, cartItemToAdd) => {
                const existingCartItem = products.find(
                  cartItem => cartItem.id === cartItemToAdd.id
                );
              
                if (existingCartItem) {
                  return products.map(cartItem => 
                    cartItem.id === cartItemToAdd.id
                      ? { ...cartItem, quantity: cartItem.quantity + 1}
                      : cartItem
                  );
                }
              
                return [{ ...cartItemToAdd, quantity: 1 }, ...products ];
              } */
			if (!existingCartItem) {
				action.payload.quantity = 1;
				// console.log(existingCartItem);
				return {
					...state,
					products: [action.payload, ...state.products],
				};
			} else {
				// console.log(existingCartItem);
				// existingCartItem.quantity += 1
				existingCartItem.quantity += 1;
				return {
					...state,
				};
			}

		/* if (item) {
                return { ...state, ...item, count: item.count + 1 };
            }  */
		/* if (!state.products.some(action.payload)) {
				const data = {
					...state,
					products: [action.payload, ...state.products],
				};
			}
			return data; */
		case REMOVE_PRODUCT:
			if (action.payload.quantity > 1) {
				console.log(action.payload);
				action.payload.quantity -= 1;
				console.log(action.payload);
				return {
					...state,
					/* products: state.products.filter((item) => item !== action.payload), */
				};
			} else {
				return {
					...state,
					products: state.products.filter((item) => item !== action.payload),
				};
			}

		default:
			return state;
	}
};
