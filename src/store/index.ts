import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { rootReducer } from './module/rootReducer';
import rootSaga from './module/rootSaga';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['city'],
};

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware];

const composer = __DEV__
    ? compose(console.tron.createEnhancer(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composer);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };