import Config from 'react-native-config';
import { basePost } from '.';

import {
  DEV_LOGIN_URL,
  LOGIN_URL,
  VERIFY_TOKEN_URL,
  REFRESH_FIREBASE_TOKEN_URL,
} from '../urls/userUrls';

const loginURL = Config.ENV === 'development' ? DEV_LOGIN_URL : LOGIN_URL;

export default {
  signup: (data) => basePost({ url: loginURL, data }),
  refreshFirebaseToken: () => basePost({ url: REFRESH_FIREBASE_TOKEN_URL }),
  verifyToken: (data) => basePost({ url: VERIFY_TOKEN_URL, data }),
};
