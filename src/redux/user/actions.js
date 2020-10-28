import {
  CLEAR_ERROR_MESSAGE,
  CREATE_ACCOUNT_REQUEST,
  LOGIN_REQUEST,
  LOGOUT,
} from './types';

export const loginRequest = (data) => ({
  type: LOGIN_REQUEST,
  data,
});

export const createAccountRequest = (data) => ({
  type: CREATE_ACCOUNT_REQUEST,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
