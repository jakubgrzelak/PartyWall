import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components/buttons/Button';
import { Header } from '../../components/common/Header';
import { logout } from '../../redux/user/actions';
import { Avatar } from 'react-native-elements';
import { BaseText } from '../../components/common/BaseText';
import Colors from '../../themes/colors';

export const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const username = useSelector(state => state.user.username);

  function onLogoutPress() {
    dispatch(logout());
  }
  return (
    <View>
      <Header headerText="Settings" navigation={navigation} />
      <View style={styles.content}>
        <View style={styles.avatarWrapper}>
          <Avatar
            containerStyle={styles.avatarContainer}
            size="large"
            rounded
            icon={{ name: 'person' }}
          />
          <BaseText style={styles.usernameText}>{username}</BaseText>
        </View>

        <Button buttonStyles={styles.buttonStyles} onPress={onLogoutPress} text="Logout" />
      </View>
    </View>
  );  
}

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarWrapper: {
    alignItems: 'center',
  },
  avatarContainer: {
    backgroundColor: "#808080",
    marginTop: 20,
  },
  usernameText: {
    fontSize: 16, 
    marginTop: 10,
    fontWeight: '500',
  },
  buttonStyles: {
    width: 200,
    marginVertical: 30,
    alignSelf: 'center',
  }
});
