import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import starWarsReducer from './starwars';

const reducer = combineReducers({
  starwars: starWarsReducer
})

export default createStore(
  reducer,
  applyMiddleware(reduxPromiseMiddleware())
);