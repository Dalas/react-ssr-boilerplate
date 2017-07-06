/**
 * Created by yura on 07.07.17.
 */


import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk';

import testReducer from './reducers/testReducer';


export default () => {
    return (
        createStore(
            combineReducers({
                testReducer: testReducer
            }),
            applyMiddleware(routerMiddleware, ReduxThunk)
        )
    )
}
