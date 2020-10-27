import {
  LOGIN_SUCCESS,
  REFRESH_FIREBASE_TOKEN_SUCCESS,
  SIGNUP_REQUEST,
  USER_REQUEST_FAILURE,
} from './types';

import produce from 'immer';

const initialState = {
  user: null,
  isLoading: false,
  error: null,
  signupData: null,
  contacts: {
    rawData: null,
    pawTrackerContacts: null,
    carers: [],
  },
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST: {
      const nextState = produce(state, (draftState) => {
        draftState.isLoading = true;
      });
      return nextState;
    }
    case LOGIN_SUCCESS: {
      const nextState = produce(state, (draftState) => {
        draftState.user = action.data;
        draftState.isLoading = false;
        draftState.error = null;
      });
      return nextState;
    }
    case USER_REQUEST_FAILURE: {
      const nextState = produce(state, (draftState) => {
        draftState.isLoading = false;
        draftState.error = action.message;
      });
      return nextState;
    }
    case REFRESH_FIREBASE_TOKEN_SUCCESS: {
      const nextState = produce(state, (draftState) => {
        draftState.user.firebaseToken = action.data.firebaseToken;
      });
      return nextState;
    }
    default:
      return state;
  }
};
