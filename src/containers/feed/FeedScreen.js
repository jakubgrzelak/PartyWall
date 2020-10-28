import React from 'react';
import { View } from 'react-native';
import { Header } from '../../components/common/Header';
import { ItemCard } from '../../components/feed/ItemCard';

export const FeedScreen = ({ navigation }) => (
  <View>
    <Header headerText="Feed" navigation={navigation} />
    <ItemCard />
  </View>
);

