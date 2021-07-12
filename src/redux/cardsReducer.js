import { FETCH_CARDS } from './types';

const initialState = {
	fetchedCards: [],
};

export const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_CARDS:
			action.payload.forEach((item, i) => item.id = i + 1 );
			return { ...state, fetchedCards: action.payload };
		default:
			return state;
	}
};
