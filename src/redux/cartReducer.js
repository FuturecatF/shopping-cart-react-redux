import { ADD_PRODUCT, REMOVE_PRODUCT, TOTAL_PRODUCTS, GET_TOTAL } from './types';

const initialState = {
	products: [],
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			const existingCartItem = state.products.find(
				(item) => item.id === action.payload.id
			);

			if (!existingCartItem) {
				action.payload.quantity = 1;
                
				return {
					...state,
					products: [action.payload, ...state.products ],
				};
			} else {
				existingCartItem.quantity += 1;
                
				return {
					...state, products: [ ...state.products ]
				};
			}

		case REMOVE_PRODUCT:
			if (action.payload.quantity > 1) {
				action.payload.quantity -= 1;
                
				return {
					...state, products: [ ...state.products ]
				};
			} else {
				return {
					...state,
					products: state.products.filter((item) => item !== action.payload),
				};
			}
		case TOTAL_PRODUCTS:
           // console.log(action.payload)
          //  console.log(state.products)
			return {
                ...state,
                total: state.products.reduce((prev,next) => prev + next.quantity, 0)
            }
            case GET_TOTAL: 

            return {
                ...state,
                total: state.products
            }

		default:
			return state;
	}
};
