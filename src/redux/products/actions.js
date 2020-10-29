import { CREATE_PRODUCT_REQUEST, DELETE_PRODUCT_REQUEST } from './types';

export const createProduct = (data) => ({
  type: CREATE_PRODUCT_REQUEST,
  data,
});

export const deleteProduct = (data) => ({
  type: DELETE_PRODUCT_REQUEST,
  data,
});
