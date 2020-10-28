import { CREATE_PRODUCT_REQUEST } from './types';

export const createProduct = (data) => ({
  type: CREATE_PRODUCT_REQUEST,
  data,
})