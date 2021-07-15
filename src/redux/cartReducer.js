import { ADD_PRODUCT, REMOVE_PRODUCT, REMOVE_ITEM } from './types';

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
          products: [action.payload, ...state.products],
        };
      } else {
        existingCartItem.quantity += 1;

        return {
          ...state,
          products: [...state.products],
        };
      }

    case REMOVE_PRODUCT:
      if (action.payload.quantity > 1) {
        action.payload.quantity -= 1;

        return {
          ...state,
          products: [...state.products],
        };
      } else {
        return {
          ...state,
          products: state.products.filter((item) => item !== action.payload),
        };
      }
    case REMOVE_ITEM:
      action.payload.quantity = 0;
      return {
        ...state,
        products: state.products.filter((item) => item.quantity !== 0),
      };

    default:
      return state;
  }
};
