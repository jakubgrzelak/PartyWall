import * as Yup from 'yup';

export const signinValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email('Email must be valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

export const createAccountValidationSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .email('Email must be valid')
      .required('Email is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });
