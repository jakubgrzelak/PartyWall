import {
  SIGNUP_REQUEST,
  VERIFY_TOKEN_REQUEST,
  INVITE_CARER_VIA_TOKEN,
  FIREBASE_LOGIN,
  REFRESH_FIREBASE_TOKEN,
} from './types';

export const signupRequest = (data) => ({
  type: SIGNUP_REQUEST,
  data,
});

export const verifyToken = (data) => ({
  type: VERIFY_TOKEN_REQUEST,
  data,
});

export const inviteCarerViaToken = (data) => ({
  type: INVITE_CARER_VIA_TOKEN,
  data,
});

export const firebaseLogin = (data) => ({
  type: FIREBASE_LOGIN,
  data,
});

export const refreshFirebaseToken = (data) => ({
  type: REFRESH_FIREBASE_TOKEN,
  data,
});
