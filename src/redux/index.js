import { combineReducers } from 'redux';
import { user } from './user/reducer';
import { products } from './products/reducer';

const appReducer = combineReducers({
  user,
  products,
});

export const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}
