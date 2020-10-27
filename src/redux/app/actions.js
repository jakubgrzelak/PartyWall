import { UPDATE_INVITATION_TOKEN } from './types';

export const updateInvitationToken = (data) => ({
  type: UPDATE_INVITATION_TOKEN,
  data,
});
