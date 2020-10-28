import { basePost } from '.';
import { CREATE_USER_URL, LOGIN_URL } from '../urls/userUrls';

export default {
  login: (data) => basePost({ url: LOGIN_URL, data }),
  createAccount: (data) => basePost({ url: CREATE_USER_URL , data }),
};
