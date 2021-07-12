import { call, put, takeEvery, takeLatest } from '@redux-saga/core/effects';
import { REQUEST_CARDS, FETCH_CARDS, TOTAL_PRODUCTS } from './types';

export function* sagaWatcher() {
	yield takeEvery(REQUEST_CARDS, sagaWorker);
	yield takeLatest(TOTAL_PRODUCTS, sagaCart)
}

export function* watchCounter() {
	yield takeLatest(TOTAL_PRODUCTS, sagaCart)
}

function* sagaWorker() {
	try {
		// add loader
		const payload = yield call(fetchCards);
		yield put({ type: FETCH_CARDS, payload });
		// remove loader
	} catch (err) {
		console.log({ message: err.message });
	}
}

function* sagaCart() {
	try {
		// add loader
		const payload = yield call(fetchCards);
		yield put({ type: FETCH_CARDS, payload });
		// remove loader
	} catch (err) {
		console.log({ message: err.message });
	}
}

// перенести в Api.js
export async function fetchCards() {
	const response = await fetch('https://run.mocky.io/v3/06479013-df37-452e-afe5-bb5ec47746f9');
	return await response.json();
}
