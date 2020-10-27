import produce from 'immer';
import { UPDATE_INVITATION_TOKEN } from './types';

const initialState = {
  invitationToken: null,
  websockets: {
    opened: [],
  },
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_INVITATION_TOKEN: {
      const nextState = produce(state, (draftState) => {
        draftState.invitationToken = action.data?.invitationToken;
      });
      return nextState;
    }
    default:
      return state;
  }
};
