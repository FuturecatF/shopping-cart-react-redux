import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { rootReducer } from './rootReducer';
import { sagaWatcher } from './sagas';
import { persistStore, persistReducer } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
const persistConfig = {
	key: 'root',
	storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

const saga = createSagaMiddleware();

export const store = createStore(
	persistedReducer,

	compose(
		applyMiddleware(saga)
	)
);

export const persistor = persistStore(store);

saga.run(sagaWatcher);