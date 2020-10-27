import auth from '@react-native-firebase/auth';

export default {
  authorize: (firebaseToken) => {
    return auth()
      .signInWithCustomToken(firebaseToken)
      .then((response) => {
        return { response };
      })
      .catch((error) => {
        return { error };
      });
  },
};
