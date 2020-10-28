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
} from './productsSagas';

import { REHYDRATE } from '../redux/common/types';
import { CREATE_PRODUCT_REQUEST } from '../redux/products/types';

export default function* rootSaga() {
  yield all([
    takeLatest(LOGIN_REQUEST, loginRequest),
    takeLatest(CREATE_ACCOUNT_REQUEST, createAccountRequest),
    takeLatest(CREATE_PRODUCT_REQUEST, createProduct),
    // takeLatest(REHYDRATE, setTokenOnRefresh),
  ]);
}
