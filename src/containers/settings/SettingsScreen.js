import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button } from '../../components/buttons/Button';
import { Header } from '../../components/common/Header';
import { logout } from '../../redux/user/actions';

export const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  function onLogoutPress() {
    dispatch(logout());
  }
  return (
    <View>
      <Header headerText="Settings" navigation={navigation} />
      <Button buttonStyles={styles.buttonStyles} onPress={onLogoutPress} text="Logout" />
    </View>
  );  
}

const styles = StyleSheet.create({
  buttonStyles: {
    width: 200,
    marginVertical: 30,
    alignSelf: 'center',
  }
});
