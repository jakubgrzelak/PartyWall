import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import Colors from '../../themes/colors';

export const Loader = (props) => {
  const { loading, ...attributes } = props;

  return (
    <Modal transparent={true} animationType={'none'} visible={loading}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" animating={loading} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: Colors.modalBackground,
  },
  activityIndicatorWrapper: {
    backgroundColor: Colors.whiteBackground,
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
