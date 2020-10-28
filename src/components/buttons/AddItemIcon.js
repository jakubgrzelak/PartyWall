import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { navigate } from '../../navigators/navigationActions';
import { Icon } from 'react-native-elements'
import Colors from '../../themes/colors';

const screenWidth = Dimensions.get('screen').width;
// const addIcon = require('../../assets/nav/add_icon.png');

export const AddItemIcon = (props) => {
  function onIconPress() {
    navigate('AddItemScreen');
  }

  return (
    <View style={styles.container}>
      <Icon
        name='plus-circle'
        type='feather'
        color={Colors.addButton}
        onPress={onIconPress}
        size={48}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 58,
    height: 58,
    borderRadius: 30,
    backgroundColor: '#fff',
    bottom: 15,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 52,
    height: 58,
  },
  floatContainer: {
    position: 'absolute',
    width: screenWidth - 60,
    height: 85,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
