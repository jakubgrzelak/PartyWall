import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import { rootReducer } from '../redux/index';
import rootSaga from '../sagas';
import AsyncStorage from '@react-native-community/async-storage';

const sagaMiddleware = createSagaMiddleware();

let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

let createF8Store;

// AsyncStorage.clear();

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

if (__DEV__) {
  const composeEnhancers = compose;
  const createDebugger = require('redux-flipper').default;

  createF8Store = composeEnhancers(
    composeWithDevTools(applyMiddleware(sagaMiddleware, createDebugger())),
  );
} else {
  createF8Store = applyMiddleware(sagaMiddleware);
}

export function configureStore(onComplete) {
  const store = createStore(persistedReducer, {}, createF8Store);

  const persistor = persistStore(store, null, onComplete);

  if (isDebuggingInChrome) {
    window.store = store;
  }
  sagaMiddleware.run(rootSaga);
  return { store, persistor };
}
