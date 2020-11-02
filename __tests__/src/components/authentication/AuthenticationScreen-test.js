import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import { AuthenticationScreen } from '../../../../src/components/authentication/AuthenticationScreen';
import { useSelector } from "react-redux";

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

beforeEach(() => {
  useSelector.mockImplementation(callback => {
    return callback({ user: { isLoading: false, error: null }});
  });
});

afterEach(() => {
  useSelector.mockClear();
});

describe('Rendering', () => {
  it('should match to snapshot - login', () => {
    const tree = render(<AuthenticationScreen />).toJSON();
    expect(tree).toMatchSnapshot()
  });

  it('should match to snapshot - creating account', () => {
    const tree = render(<AuthenticationScreen createAccount />).toJSON();
    expect(tree).toMatchSnapshot()
  });
});

describe('Change input - login', () => {
  it('should change values', async () => {
    const { getByPlaceholderText } = render(<AuthenticationScreen />);
    const usernameInput = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');

    fireEvent.changeText(usernameInput, 'abc');
    fireEvent.changeText(passwordInput, 'asd');

    await waitFor(() => expect(usernameInput.props.value).toEqual('abc'));
  });

  it('should render error messages', async () => {
    const { getByText  } = render(<AuthenticationScreen />);
    const loginButton = getByText('Login');
    fireEvent.press(loginButton);
    await waitFor(() => expect(getByText('Username is required')).not.toBeNull());
    await waitFor(() => expect(getByText('Password is required')).not.toBeNull());
  });
});

describe('Change input - signup', () => {
  it('should change values correctly', async () => {
    const { getByPlaceholderText, getByText } = render(<AuthenticationScreen createAccount />);
    const usernameInput = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');
    const passwordConfirmation = getByPlaceholderText('Password Confirmation');

    fireEvent.changeText(usernameInput, 'abc');
    fireEvent.changeText(passwordInput, 'asd');
    fireEvent.changeText(passwordConfirmation, 'asd');

    await waitFor(() => expect(usernameInput.props.value).toEqual('abc'));
    await waitFor(() => expect(passwordInput.props.value).toEqual('asd'));
    await waitFor(() => expect(passwordConfirmation.props.value).toEqual('asd'));
  });

  it('should render error messages - passwords not match', async () => {
    const { getByText, getByPlaceholderText } = render(<AuthenticationScreen createAccount />);
    const passwordInput = getByPlaceholderText('password');
    const passwordConfirmation = getByPlaceholderText('Password Confirmation');
    const signupButton = getByText('Sign Up');

    fireEvent.changeText(passwordInput, 'asd');
    fireEvent.changeText(passwordConfirmation, 'dsd');

    fireEvent.press(signupButton);
    
    await waitFor(() => expect(getByText('Passwords must match')).not.toBeNull());
  });
});

