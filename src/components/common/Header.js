import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Colors from '../../themes/colors';
import { goBack } from '../../navigators/navigationActions';
import { isNotchPresent } from '../../themes/common';

// const backIcon = require('../../assets/common/back_icon.png');

export const Header = ({
  headerText,
  renderBackButton,
  customBackFunction,
  navigation,
}) => {
  const canGoBack = navigation.canGoBack();

  function onBackPress() {
    if (customBackFunction) {
      customBackFunction();
    } else {
      if (navigation.canGoBack()) {
        goBack();
      }
    }
  }

  return (
    <View style={styles.container}>
      {renderBackButton && canGoBack && (
        <TouchableOpacity onPress={onBackPress} style={styles.backIconWrapper}>
          {/* <Image source={backIcon} /> */}
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
      )}
      <View style={styles.content}>
        <Text style={styles.headerText}>{headerText}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.whiteBackground,
    paddingTop: 10,
    paddingBottom: 20,
    borderBottomColor: Colors.mainBorder,
    borderBottomWidth: 1,
  },
  content: {
    paddingTop: isNotchPresent ? 40 : 25,
  },
  headerText: {
    color: '#000',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  backIconWrapper: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 10,
  },
  backButtonText: {
    color: Colors.textButton,
    fontSize: 20,
    fontWeight: '300',
    marginLeft: 5,
  },
});
