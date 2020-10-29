import produce from 'immer';
import { CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, PRODUCT_REQUEST_FAILURE } from './types';

const initialState = {
  products: [],
  isLoading: false,
  error: null,
}

export const products = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT_REQUEST:
    case CREATE_PRODUCT_REQUEST: {
      const nextState = produce(state, (draftState) => {
        draftState.isLoading = true;
        draftState.error = null;
      });
      return nextState;
    }
    case CREATE_PRODUCT_SUCCESS: {
      const nextState = produce(state, (draftState) => {
        draftState.products.push(action.data);
        draftState.isLoading = false;
        draftState.error = null;
      });
      return nextState;
    }
    case DELETE_PRODUCT_SUCCESS: {
      const nextState = produce(state, (draftState) => {
        const filteredProducts = draftState.products.filter((product) => 
          product.id !== action.data.id,
        );
        draftState.products = filteredProducts;
        draftState.isLoading = false;
        draftState.error = null;
      });
      return nextState;
    }
    case PRODUCT_REQUEST_FAILURE: {
      const nextState = produce(state, (draftState) => {
        draftState.error = action.message;
        draftState.isLoading = false;
      });
      return nextState;
    }
    default:
      return state;
  }
}