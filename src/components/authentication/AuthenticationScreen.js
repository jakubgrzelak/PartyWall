import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
  Platform,
  Dimensions,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import { Formik } from 'formik';
import { inputStyle } from '../../helpers/styleHelper';
import { Button } from '../buttons/Button';
import { commonStyles } from '../../themes/common';
import {
  createAccountValidationSchema,
  signinValidationSchema,
} from '../../validators/formValidators';
// import { loginSuccess, signupRequest } from '../../redux/user/actions';
import Colors from '../../themes/colors';
import { Header } from '../common/Header';
import { BaseText } from '../common/BaseText';

const SCREEN_HEIGHT = Dimensions.get('window').height;

export const AuthenticationScreen = ({ navigation, createAccount = false }) => {
  const dispatch = useDispatch();
  const [errorMessaage, setErrorMessage] = useState(null);

  const description = createAccount
    ? 'Please enter your user name and password in order to create new account'
    : 'Please enter your credentials in order to login';
  const submitButtonText = createAccount ? 'Sign Up' : 'Login';
  const bottomLinkDescription = createAccount ? 'If you have an account' : 'If you do not have an account';
  const bottomLinkText = createAccount ? 'please login here!' : 'please create one here!';

  function handleLoginPress(values) {
    Keyboard.dismiss();
    // dispatch(signupRequest(values));
  }

  function handleCreateAccount(values) {
    setErrorMessage(null);
    Keyboard.dismiss();
    // createUser({ variables: { ...values } });
  }

  function onBottomLinkPress() {
    if (createAccount) {
      navigation.navigate('LoginScreen')
    } else {
      navigation.navigate('CreateAccountScreen')
    }
  }

  return (
    <View style={{ height: SCREEN_HEIGHT - 100 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
        keyboardShouldPersistTaps={true}>
        {/* {error && <Text style={commonStyles.errorMessage}>{error}</Text>} */}
        {/* <Loader loading={isLoading} /> */}
        <BaseText style={[commonStyles.descriptionText, styles.headerText]}>
          {description}
        </BaseText>
        {errorMessaage && (
          <BaseText style={commonStyles.errorMessage}>{errorMessaage}</BaseText>
        )}
        <Formik
          initialValues={{
            password: '',
            nickname: '',
            passwordConfirmation: '',
          }}
          onSubmit={createAccount ? handleCreateAccount : handleLoginPress}
          validationSchema={
            createAccount
              ? createAccountValidationSchema
              : signinValidationSchema
          }>
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.content}>
              {errors.password && touched.password && (
                <Text style={commonStyles.errorMessage}>{errors.password}</Text>
              )}
              <TextInput
                onChangeText={handleChange('nickname')}
                onBlur={handleBlur('nickname')}
                value={values.nickname}
                placeholder="Nickname"
                style={inputStyle(
                  errors,
                  touched,
                  styles.inputStyle,
                  'nickname',
                )}
                autoCapitalize="none"
              />
              {errors.nickname && touched.nickname && (
                <Text style={commonStyles.errorMessage}>{errors.nickname}</Text>
              )}
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
                placeholder="Password"
                style={inputStyle(
                  errors,
                  touched,
                  styles.inputStyle,
                  'password',
                )}
                autoCapitalize="none"
              />
              {errors.password && touched.password && (
                <Text style={commonStyles.errorMessage}>{errors.password}</Text>
              )}
              {createAccount && (
                <TextInput
                  onChangeText={handleChange('passwordConfirmation')}
                  onBlur={handleBlur('passwordConfirmation')}
                  value={values.passwordConfirmation}
                  secureTextEntry={true}
                  placeholder="Password Confirmation"
                  style={inputStyle(
                    errors,
                    touched,
                    styles.inputStyle,
                    'passwordConfirmation',
                  )}
                  autoCapitalize="none"
                />
              )}
              {errors.passwordConfirmation && touched.passwordConfirmation && (
                <Text style={commonStyles.errorMessage}>
                  {errors.passwordConfirmation}
                </Text>
              )}
              <Button
                onPress={handleSubmit}
                buttonStyles={styles.loginButton}
                text={submitButtonText}
              />
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <View style={styles.bottomTextContainer}>
        <BaseText style={styles.text}>
          {bottomLinkDescription}
          <TouchableOpacity onPress={onBottomLinkPress}>
              <BaseText style={styles.linkText}>{bottomLinkText}</BaseText>
          </TouchableOpacity>
        </BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    alignItems: 'center',
  },
  loginButton: {
    marginTop: 10,
    width: 200,
    alignSelf: 'center',
  },
  inputStyle: {
    ...commonStyles.textInputStyle,
    marginVertical: 5,
    width: '70%',
    marginBottom: 10,
    flexDirection: 'row',
  },
  headerText: {
    textAlign: 'center',
    paddingBottom: 20,
    paddingHorizontal: '15%',
  },
  textButton: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  buttonText: {
    fontSize: 15,
    color: Colors.activeDot,
  },
  phoneCodeContent: {
    justifyContent: 'center',
    height: '100%',
    alignSelf: 'flex-start',
    marginRight: 5,
  },
  phoneInputContainer: {
    ...commonStyles.textInputStyle,
    marginVertical: 5,
    width: '70%',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneText: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.lightText,
  },
  phoneInput: {
    width: '70%',
  },
  bottomTextContainer: {
    position: 'absolute',
    width: '100%',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    width: '60%',
    textAlign: 'center',
  },
  linkText: {
    color: Colors.linkText,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 16,
  },
});
