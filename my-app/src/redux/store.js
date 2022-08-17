import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import catSaga from "./sagas/saga";
import {reducers} from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: reducers,
    middleware: [sagaMiddleware]
});

sagaMiddleware.run(catSaga)

export default store;
