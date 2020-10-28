import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PricingCard, Icon } from 'react-native-elements';
import Colors from '../../themes/colors';

export const ItemCard = () => (
  <View>
    <View style={styles.deleteButtonContainer}>
      <Icon
        name="x-circle"
        type="feather"
        color={Colors.mainText}
        size={32}
        onPress={() => {}}
      />
    </View>
    <PricingCard
      color="#4f9deb"
      title="Free"
      containerStyle={styles.cardContent}
      price="$0"
      info={['1 User', 'Basic Support', 'All Core Features']}
      button={{ style: styles.hideButton }}
      // button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
    />
  </View>
);

const styles = StyleSheet.create({
  deleteButtonContainer: {
    position: 'absolute',
    right: 25,
    top: 25,
    zIndex: 1
  },
  cardContent: {
    borderRadius: 10,
  },
  hideButton: {
    display: 'none',
  }
});
