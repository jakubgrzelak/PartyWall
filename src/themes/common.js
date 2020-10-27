import Colors from './colors';
import { StyleSheet } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import DeviceInfo from 'react-native-device-info';

export const isNotchPresent = DeviceInfo.hasNotch();

const icon = {
  width: 40,
  height: 40,
  borderRadius: 20,
};

export const commonStyles = StyleSheet.create({
  screenWrapper: {
    ...ifIphoneX(
      {
        marginTop: 50,
      },
      {
        marginTop: 20,
      },
    ),
  },
  descriptionText: {
    fontSize: 18,
    color: Colors.lightText,
    paddingTop: 15,
    paddingBottom: 35,
  },
  textInputStyle: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: Colors.whiteBackground,
    paddingHorizontal: 10,
    fontSize: 15,
    fontWeight: '500',
    color: Colors.lightText,
  },
  errorMessage: {
    fontSize: 12,
    color: Colors.errorText,
    paddingVertical: 3,
  },
  mainText: {
    color: Colors.mainText,
    fontSize: 16,
    fontWeight: '300',
  },
  eatIcon: {
    ...icon,
    backgroundColor: Colors.eatProgresBarColor,
  },
  peeIcon: {
    ...icon,
    backgroundColor: Colors.peeProgresBarColor,
  },
  pooIcon: {
    ...icon,
    backgroundColor: Colors.pooProgresBarColor,
  },
  centerText: {
    textAlign: 'center',
  },
});
