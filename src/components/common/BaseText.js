import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const BaseText = ({ children, style }) => {
  return <Text style={[styles.baseText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: '300',
  },
});
