import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from "./reducers"
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

const startupState = {
    todos: []
};

const store = createStore(
    rootReducer,
    startupState,
    applyMiddleware(
        thunk,
        //createLogger()
    )
);

export default store;
