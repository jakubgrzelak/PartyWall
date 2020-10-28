import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  USER_REQUEST_FAILURE,
  CREATE_ACCOUNT_REQUEST,
  CREATE_ACCOUNT_SUCCESS,
  LOGOUT,
  CLEAR_ERROR_MESSAGE,
} from './types';

import produce from 'immer';

const initialState = {
  id: null,
  username: null,
  isLoading: false,
  error: null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACCOUNT_REQUEST:
    case LOGIN_REQUEST: {
      const nextState = produce(state, (draftState) => {
        draftState.isLoading = true;
        draftState.error = null;
      });
      return nextState;
    }
    case CREATE_ACCOUNT_SUCCESS:
    case LOGIN_SUCCESS: {
      const nextState = produce(state, (draftState) => {
        draftState.id = action.data.id;
        draftState.username = action.data.username;
        draftState.isLoading = false;
        draftState.error = null;
      });
      return nextState;
    }
    case LOGOUT: {
      const nextState = produce(state, (draftState) => {
        draftState.id = null;
        draftState.username = null;
      });
      return nextState;
    }
    case CLEAR_ERROR_MESSAGE: {
      const nextState = produce(state, (draftState) => {
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
    default:
      return state;
  }
};
