import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Modal,
} from 'react-native';

export const BaseModal = ({ contentStyle, onOverlayPress, children }) => {
  return (
    <Modal transparent>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onOverlayPress}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={[styles.content, contentStyle]}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 11,
  },

  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.5,
    backgroundColor: '#000',
  },

  closeButton: {
    padding: 15,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  content: {
    height: 300,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  darkOverlay: {
    flex: 1,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    opacity: 0.6,
  },
});
