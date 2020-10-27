import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export function NavigationFocusHook({ onWillFocusActions, onWillBlurActions }) {
  useFocusEffect(
    useCallback(() => {
      onWillFocusActions();
      if (onWillBlurActions) {
        return () => onWillBlurActions();
      }
    }, [onWillFocusActions, onWillBlurActions]),
  );

  return <View />;
}
