import * as Yup from 'yup';

export const signinValidationSchema = () =>
  Yup.object().shape({
    username: Yup.string('User name must be a string')
      .required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

export const createAccountValidationSchema = () =>
  Yup.object().shape({
    username: Yup.string('User name must be a string')
      .required('Username is required'),
    password: Yup.string().required('Password is required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Password confirmation is required'),
  });

export const addDrinkValidationSchema = () =>
  Yup.object().shape({
    name: Yup.string('Name must be a string')
      .required('Name is required'),
    price: Yup.number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Price is required'),
    quantity: Yup.number()
      .typeError('Quantity must be a number')
      .positive('Quantity must be greater than zero')
      .required('Quantity is required'),
    volume: Yup.number()
      .typeError('Volume must be a number')
      .positive('Volume must be greater than zero')
      .required('Password is required'),
  });

export const addFoodValidationSchema = () =>
  Yup.object().shape({
    name: Yup.string('Name must be a string')
      .required('Name is required'),
    description: Yup.string('Description is required')
      .required('Description is required'),
    price: Yup.number()
      .typeError('Price must be a number')
      .positive('Price must be greater than zero')
      .required('Price is required'),
    quantity: Yup.number()
      .typeError('Quantity must be a number')
      .positive('Quantity must be greater than zero')
      .required('Quantity is required'),
    weight: Yup.number()
      .typeError('Weight must be a number')
      .positive('Weight must be greater than zero')
      .required('Weight is required'),
  });