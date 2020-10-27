import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Modal,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
// import BasicText from './BasicText';
import Animated from 'react-native-reanimated';

const SCREEN_HEIGHT = Dimensions.get('screen').height;
const SCREEN_WIDTH = Dimensions.get('screen').width;

class OptionsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(props.height || 278),
    };
  }

  componentDidMount() {
    this._toggleSubview();
  }

  _toggleSubview = () => {
    Animated.spring(this.state.bounceValue, {
      toValue: 20,
      velocity: 3,
      tension: 100,
      friction: 90,
      useNativeDriver: true,
    }).start();
  };

  render() {
    return (
      <Modal style={{ margin: 0 }} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={this.props.onOverlayPress}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={styles.container}>
          <Animated.View
            style={[styles.subView, { height: this.props.height || 278 }]}>
            {this.props.children}
          </Animated.View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 0,
    position: 'absolute',
  },
  overlay: {
    backgroundColor: 'rgba(40, 50, 59, 0.7)',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  subView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    height: 278,
    width: SCREEN_WIDTH,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  header: {
    fontSize: 22,
    color: '#28323B',
    marginBottom: 24,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(undefined, mapDispatchToProps)(OptionsModal);
