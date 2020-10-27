import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Colors from '../../themes/colors';

export const Button = ({
  text,
  onPress,
  buttonStyles,
  textStyles,
  disabled = false,
  disabledStyle,
}) => {
  function returnButtonStyle() {
    if (disabled) {
      return [styles.container, buttonStyles, disabledStyle];
    }
    return [styles.container, buttonStyles];
  }

  function returnTextStyle() {
    return [styles.textStyles, textStyles];
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={returnButtonStyle()}>
      <Text style={returnTextStyle()}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 5,
    width: '100%',
    backgroundColor: Colors.mainButtonBackground,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 3,
  },
  textStyles: {
    color: Colors.brightText,
    fontSize: 20,
    fontWeight: '700',
  },
});
