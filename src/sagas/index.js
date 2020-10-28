import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
  LOGIN_REQUEST,
  CREATE_ACCOUNT_REQUEST,
} from '../redux/user/types';

import {
  loginRequest,
  createAccountRequest,
} from './userSagas';

import { REHYDRATE } from '../redux/common/types';

export default function* rootSaga() {
  yield all([
    takeEvery(LOGIN_REQUEST, loginRequest),
    takeEvery(CREATE_ACCOUNT_REQUEST, createAccountRequest),
    // takeLatest(REHYDRATE, setTokenOnRefresh),
  ]);
}
