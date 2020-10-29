import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  CREATE_ACCOUNT_REQUEST,
} from '../redux/user/types';

import {
  loginRequest,
  createAccountRequest,
} from './userSagas';

import {
  createProduct,
  deleteProduct,
  getAllProducts,
} from './productsSagas';

// import { REHYDRATE } from '../redux/common/types';
import {
  CREATE_PRODUCT_REQUEST,
  DELETE_PRODUCT_REQUEST,
  GET_ALL_PRODUCTS_REQUEST,
} from '../redux/products/types';

export default function* rootSaga() {
  yield all([
    takeEvery(DELETE_PRODUCT_REQUEST, deleteProduct),
    takeLatest(LOGIN_REQUEST, loginRequest),
    takeLatest(CREATE_ACCOUNT_REQUEST, createAccountRequest),
    takeLatest(CREATE_PRODUCT_REQUEST, createProduct),
    takeLatest(GET_ALL_PRODUCTS_REQUEST, getAllProducts),
    // takeLatest(REHYDRATE, setTokenOnRefresh),
  ]);
}
