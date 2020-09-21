import { createStore, applyMiddleware, 
    //compose
 } from "redux";
import rootReducer from "./reducers"

import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas/index";

const sagaMiddleware = createSagaMiddleware()

const initialState = []

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(sagaMiddleware),
    // compose(
    // applyMiddleware(sagaMiddleware),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

sagaMiddleware.run(rootSaga)

export default store