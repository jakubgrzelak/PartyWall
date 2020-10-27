import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthenticationScreen } from '../../components/authentication/AuthenticationScreen';

export const CreateAccountScreen = ({ navigation }) => (
  <SafeAreaView>
    <AuthenticationScreen navigation={navigation} createAccount />
  </SafeAreaView>
);
