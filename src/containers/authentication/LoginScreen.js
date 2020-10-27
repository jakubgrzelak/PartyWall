import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthenticationScreen } from '../../components/authentication/AuthenticationScreen';

export const LoginScreen = ({ navigation }) => (
  <SafeAreaView>
    <AuthenticationScreen navigation={navigation} />
  </SafeAreaView>
);

