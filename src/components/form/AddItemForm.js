import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { KeyboardAvoidingView, View, StyleSheet, TextInput, Platform } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import { Divider } from 'react-native-elements';
import { Formik } from 'formik';
import Colors from '../../themes/colors';
import { commonStyles } from '../../themes/common';
import { BaseText } from '../common/BaseText';
import { inputStyle } from '../../helpers/styleHelper';
import { Button } from '../buttons/Button';
import { addDrinkValidationSchema, addFoodValidationSchema } from '../../validators/formValidators';
import { createProduct } from '../../redux/products/actions';

export const AddItemForm = () => {
  const [itemType, setItemType] = useState('Drink');
  const userId = useSelector(state => state.user.id);
  const isDrink = itemType === 'Drink';
  const dispatch = useDispatch();

  const data = [
    {
      label: 'Drink',
    },
    {
      label: 'Food',
    }
  ];

  function returnInitialValues() {
    const common = {
      name: '',
      price: '',
      quantity: '',
    }
    if (itemType === 'Drink') {
      return {
        ...common,
        volume: '',
      }
    } else {
      return {
        ...common,
        description: '',
        weight: '',
      }
    }
  }

  function onSubmitPress({
    name, description, price, quantity, volume, weight,
  }) {
    let data = {
      name,
      price,
      quantity,
      type: itemType,
      userId,
    };
    if (isDrink) {
      data = {
        ...data,
        volume
      }
    } else {
      data = {
        ...data,
        description,
        weight,
      }
    }
    dispatch(createProduct(data));
  }

  return (
    <View style={styles.container}>
      <RadioButtonRN
        data={data}
        selectedBtn={(e) => setItemType(e.label)}
        box={false}
        initial={1}
      />
      <Divider style={styles.divider} />
      <Formik
        initialValues={returnInitialValues()}
        onSubmit={onSubmitPress}
        validationSchema={isDrink ? addDrinkValidationSchema : addFoodValidationSchema}
        enableReinitialize
      >
        {({
          handleChange,
          handleSubmit,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.content}>
            <View style={styles.inputWrapper}>
              <BaseText style={styles.labelText}>Name your item:</BaseText>
              <TextInput
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                placeholder="Name"
                style={inputStyle(
                  errors,
                  touched,
                  styles.inputStyle,
                  'name',
                )}
                autoCapitalize="none"
              />
              {errors.name && touched.name && (
                <BaseText style={commonStyles.errorMessage}>{errors.name}</BaseText>
              )}
            </View>
            {!isDrink && (
              <View style={styles.inputWrapper}>
                <BaseText style={styles.labelText}>Provide description:</BaseText>
                <TextInput
                  onChangeText={handleChange('description')}
                  onBlur={handleBlur('description')}
                  value={values.description}
                  multiline
                  placeholder="Description"
                  style={inputStyle(
                    errors,
                    touched,
                    { ...styles.inputStyle, ...styles.multiline },
                    'description',
                  )}
                  autoCapitalize="none"
                />
                {errors.description && touched.description && (
                  <BaseText style={commonStyles.errorMessage}>{errors.description}</BaseText>
                )}
              </View>
            )}
            <View style={styles.inputWrapper}>
              <BaseText style={styles.labelText}>Provide $ price of the item:</BaseText>
              <TextInput
                onChangeText={handleChange('price')}
                onBlur={handleBlur('price')}
                value={values.price}
                keyboardType="number-pad"
                placeholder="Price"
                style={inputStyle(
                  errors,
                  touched,
                  styles.inputStyle,
                  'price',
                )}
                autoCapitalize="none"
              />
              {errors.price && touched.price && (
                <BaseText style={commonStyles.errorMessage}>{errors.price}</BaseText>
              )}
            </View>
            <View style={styles.inputWrapper}>
              <BaseText style={styles.labelText}>Provide quantity:</BaseText>
              <TextInput
                onChangeText={handleChange('quantity')}
                onBlur={handleBlur('quantity')}
                value={values.quantity}
                keyboardType="number-pad"
                placeholder="Quantity"
                style={inputStyle(
                  errors,
                  touched,
                  styles.inputStyle,
                  'quantity',
                )}
                autoCapitalize="none"
              />
              {errors.quantity && touched.quantity && (
                <BaseText style={commonStyles.errorMessage}>{errors.quantity}</BaseText>
              )}
            </View>
            {isDrink && (
              <View style={styles.inputWrapper}>
                <BaseText style={styles.labelText}>Provide volume of a drink (ml):</BaseText>
                <TextInput
                  onChangeText={handleChange('volume')}
                  onBlur={handleBlur('volume')}
                  value={values.volume}
                  keyboardType="number-pad"
                  placeholder="Volume"
                  style={inputStyle(
                    errors,
                    touched,
                    styles.inputStyle,
                    'volume',
                  )}
                  autoCapitalize="none"
                />
                {errors.volume && touched.volume && (
                  <BaseText style={commonStyles.errorMessage}>{errors.volume}</BaseText>
                )}
              </View>
            )}
            {!isDrink && (
              <View style={styles.inputWrapper}>
                <BaseText style={styles.labelText}>Provide wieght (grams):</BaseText>
                <TextInput
                  onChangeText={handleChange('weight')}
                  onBlur={handleBlur('weight')}
                  value={values.weight}
                  keyboardType="number-pad"
                  placeholder="Weight"
                  style={inputStyle(
                    errors,
                    touched,
                    styles.inputStyle,
                    'weight',
                  )}
                  autoCapitalize="none"
                />
                {errors.weight && touched.weight && (
                  <BaseText style={commonStyles.errorMessage}>{errors.weight}</BaseText>
                )}
              </View>
            )}
            <Button onPress={handleSubmit} text="Save" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30,
    margin: 20,
    marginBottom: 50,
    backgroundColor: Colors.whiteBackground,
    borderRadius: 20,
  },
  divider: {
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  inputStyle: {
    ...commonStyles.textInputStyle,
    marginVertical: 5,
    width: '100%',
    marginBottom: 10,
    flexDirection: 'row',
  },
  multiline: {
    height: 100,
    paddingTop: 5,
  },
  labelText: {
    fontSize: 14,
    marginBottom: 5,
    color: Colors.mainText,
  }
});
