import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Image,
  Modal,
} from 'react-native';

export class BaseModal extends Component {
  render() {
    const { contentStyle, onOverlayPress } = this.props;
    return (
      <Modal transparent>
        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={onOverlayPress}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <View style={[styles.content, contentStyle]}>
            {/* <TouchableOpacity
              style={styles.closeButton}
              onPress={this._closeButtonHandler}>
              <Image source={require('../img/ic_cross.png')} />
            </TouchableOpacity> */}

            {this.props.children}
          </View>
        </View>
      </Modal>
    );
  }

  _closeButtonHandler = () => {};
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
