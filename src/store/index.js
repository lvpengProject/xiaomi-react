import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import address from './address'
import { Actions as ActionsAddress } from "./address";
import thunk from 'redux-thunk'
export { ActionsAddress }

export default createStore(
    combineReducers({ address }),
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
