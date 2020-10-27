import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from '../buttons/Button';
import ImagePicker from 'react-native-image-picker';
// import { noInternetConnectionAlert } from '../../helpers/helpers';
// import { updateAvatar } from '../../actions';
import OptionsModal from './OptionsModal';
// import RoundButton from './RoundButton';

export default class ImagePickerOptions extends Component {
  render() {
    const { hideImagePicker } = this.props;

    return (
      <OptionsModal onOverlayPress={hideImagePicker} height={170}>
        <View style={{ zIndex: 100 }}>
          <Button text="Take Photo" onPress={this.onPressTakePhoto} />
          <Button
            text="Choose From Photo Library"
            onPress={this.onPressChooseFromLibrary}
          />
        </View>
      </OptionsModal>
    );
  }

  onPressTakePhoto = () => {
    const { setImage } = this.props;

    ImagePicker.launchCamera(
      {
        allowsEditing: false,
        cameraType: 'front',
        storageOptions: { privateDirectory: true },
      },
      response => {
        this.props.hideImagePicker();
        if (response.didCancel) {
          return null;
        }
        if (response.error) {
          console.log('Image picker error: ', response.error);
        } else {
          setImage(response);
        }
      },
    );
  }

  onPressChooseFromLibrary = () => {
    const { setImage } = this.props;

    ImagePicker.launchImageLibrary({}, response => {
      this.props.hideImagePicker();
      if (response.didCancel) {
        return null;
      }
      if (response.error) {
        console.log('Image picker error: ', response.error);
      } else {
        setImage(response);
      }
    });
  };
}
