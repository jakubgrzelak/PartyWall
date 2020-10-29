import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/common/Header';
import { ItemList } from '../../components/feed/ItemList';

export const FeedScreen = ({ navigation }) => (
  <View>
    <Header headerText="Feed" navigation={navigation} />
    <ItemList />
  </View>
);
