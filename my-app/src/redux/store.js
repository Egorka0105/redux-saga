import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers/reducer';
import mySaga from './sagas/saga';


const sagaMiddleware = createSagaMiddleware({

})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    )
)

sagaMiddleware.run(mySaga)

export default store;
