import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import promiseMiddleware from 'redux-promise-middleware';

import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './reducers/index';
const config = {
  key: 'talkto',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(config, rootReducer);

export const store = createStore(
  persistedReducer,
  applyMiddleware(logger, promiseMiddleware),
);
export const persistor = persistStore(store);
