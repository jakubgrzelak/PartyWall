import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BaseModal } from '../modals/BaseModal';
import { Button } from '../buttons/Button';
import Colors from '../../themes/colors';

const defaultText = 'Do you really want to the delete this dog from the list?';

export const DeleteModal = ({
  onClosePress,
  onConfirmationPress,
  text = defaultText,
  isLoading,
}) => (
  <View>
    <BaseModal onOverlayPress={onClosePress}>
      <Text style={styles.infoText}>{text}</Text>
      <View style={styles.buttonsContainer}>
        <Button
          onPress={onConfirmationPress}
          buttonStyles={styles.confirmationButton}
          disabled={isLoading}
          disabledStyle={styles.disabledStyle}
          text="Yes, delete!"
        />
        <Button
          buttonStyles={styles.cancelButton}
          onPress={onClosePress}
          disabled={isLoading}
          disabledStyle={styles.disabledStyle}
          text="Cancel"
        />
      </View>
    </BaseModal>
  </View>
);

const styles = StyleSheet.create({
  buttonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 25,
    color: Colors.mainText,
    marginBottom: 30,
  },
  confirmationButton: {
    width: 150,
    marginHorizontal: 5,
    backgroundColor: Colors.errorColor,
  },
  cancelButton: {
    width: 150,
    marginVertical: 5,
    backgroundColor: Colors.secondaryButtonBackground,
  },
  disabledStyle: {
    opacity: 0.5,
  }
});
