import React, { useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useSelector} from 'react-redux';
import { ItemCard } from '../../components/feed/ItemCard';
import { BaseText } from '../../components/common/BaseText';
import Colors from '../../themes/colors';

export const ItemList = () => {
  const products = useSelector(state => state.products.products);
  // For later improvments there should be implemented FlatList in order to 
  // manage pagination by adding load more option when the end of the screen
  // is reached 
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {products.length > 0 ?
        (
          products.map(product => (
            <ItemCard product={product} />
          ))
        ) : (
          <BaseText style={styles.text}>
            No products available. Be the first one who adds something new!
          </BaseText>
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 100,
  },
  text: {
    width: '70%',
    alignSelf: 'center',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
    color: Colors.mainText,
  }
});
