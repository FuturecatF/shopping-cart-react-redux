import { combineReducers } from 'redux';
import { cardsReducer } from './cardsReducer';
import { cartReducer } from './cartReducer';

export const rootReducer = combineReducers({
	cards: cardsReducer,
	cart: cartReducer,
});
