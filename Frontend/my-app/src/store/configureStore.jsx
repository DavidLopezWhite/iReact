import * as redux from 'redux';
import {initialReducer} from '../reducers';

export const configure = ( initialState = {} ) => {
    var reducer = redux.combineReducers({
        initialReducer: initialReducer
    });

    var store = redux.createStore(reducer, initialState, redux.compose(
        window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

    return store;
};
