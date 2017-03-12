import * as redux from 'redux';
import thunk from 'redux-thunk';
import {listRestaurantsReducer} from '../reducers';

export const configure = ( initialState = {} ) => {
  var reducer = redux.combineReducers({
    listRestaurants: listRestaurantsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
