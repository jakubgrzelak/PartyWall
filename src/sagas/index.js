import { takeEvery, all, takeLatest } from 'redux-saga/effects';

import {
  SIGNUP_REQUEST,
  VERIFY_TOKEN_REQUEST,
  FIREBASE_LOGIN,
  REFRESH_FIREBASE_TOKEN,
} from '../redux/user/types';

import {
  signupRequest,
  setTokenOnRefresh,
  verifyTokenRequest,
  firebaseLogin,
  refreshFirebaseToken,
} from './userSagas';

import { REHYDRATE } from '../redux/common/types';

export default function* rootSaga() {
  yield all([
    takeEvery(SIGNUP_REQUEST, signupRequest),
    takeEvery(FIREBASE_LOGIN, firebaseLogin),
    takeEvery(REFRESH_FIREBASE_TOKEN, refreshFirebaseToken),
    takeEvery(VERIFY_TOKEN_REQUEST, verifyTokenRequest),
    takeLatest(REHYDRATE, setTokenOnRefresh),
  ]);
}
