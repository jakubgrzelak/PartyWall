import { call, put } from 'redux-saga/effects';
import partyWallApi from '../api';
import {
  LOGIN_SUCCESS,
  USER_REQUEST_FAILURE,
} from '../redux/user/types';
import { setToken } from '../api/requests';

export function* signupRequest(action) {
  try {
    const { data } = yield call(partyWallApi.user.signup, action.data);
    yield call(setUserToken, data.token);
    // yield call(firebaseLogin, { data });
    yield put({ type: LOGIN_SUCCESS, data });
  } catch (e) {
    yield put({ type: USER_REQUEST_FAILURE, message: e.message });
  }
}

export function* setTokenOnRefresh(action) {
  const currentUserToken = action.payload?.user?.user?.token;
  if (currentUserToken) {
    yield call(setUserToken, currentUserToken);
  }
}

// private

function* setUserToken(token) {
  setToken(token);
}
