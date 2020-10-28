import { combineReducers } from 'redux';
import { user } from './user/reducer';
import { app } from './app/reducer';
import { products } from './products/reducer';

export const rootReducer = combineReducers({
  user,
  app,
  products,
});
