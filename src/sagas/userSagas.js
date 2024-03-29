import { call, put } from 'redux-saga/effects';
import partyWallApi from '../api';
import { GET_ALL_PRODUCTS_REQUEST } from '../redux/products/types';
import {
  CREATE_ACCOUNT_SUCCESS,
  LOGIN_SUCCESS,
  USER_REQUEST_FAILURE,
} from '../redux/user/types';

export function* loginRequest(action) {
  try {
    const { data } = yield call(partyWallApi.user.login, action.data);
    yield put({ type: GET_ALL_PRODUCTS_REQUEST });
    yield put({ type: LOGIN_SUCCESS, data });
  } catch ({ response: { data: { message }}}) {
    yield put({ type: USER_REQUEST_FAILURE, message });
  }
}

export function* createAccountRequest(action) {
  try {
    const { data } = yield call(partyWallApi.user.createAccount, action.data);
    yield put({ type: GET_ALL_PRODUCTS_REQUEST });
    yield put({ type: CREATE_ACCOUNT_SUCCESS, data });
  } catch ({ response: { data: { message }}}) {
    yield put({ type: USER_REQUEST_FAILURE, message: e });
  }
}

