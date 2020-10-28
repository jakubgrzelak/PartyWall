import React from 'react';
import { Text, View } from 'react-native';
import { Header } from '../../components/common/Header';

export const FeedScreen = ({ navigation }) => (
  <View>
    <Header headerText="Feed" navigation={navigation} />
    <Text>FeedScreen</Text>
  </View>
);

