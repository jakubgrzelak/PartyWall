import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import { Header } from '../../components/common/Header';
import { AddItemForm } from '../../components/form/AddItemForm';

export const AddItemScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardShouldPersistTaps={true}>
      <Header
        headerText="Add Item"
        navigation={navigation}
        renderBackButton
      />
      <ScrollView style={{ paddingBottom: 50 }}>
        <AddItemForm />
      </ScrollView>
    </KeyboardAvoidingView>    
  );
}