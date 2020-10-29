import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PricingCard, Icon } from 'react-native-elements';
import Colors from '../../themes/colors';
import { deleteProduct } from '../../redux/products/actions';

export const ItemCard = ({ product: {
  name, price, quantity, weight, volume, type, description,
  userId, id,
}}) => {
  const currentUserId = useSelector(state => state.user.id);
  const dispatch = useDispatch();
  const isDrink = type === 'Drink';
  const buttonIcon = isDrink ? 'local_bar' : 'fastfood';
  
  function buildInfoArray() {
    if (isDrink) {
      return [
        `${volume} ml`,
        `Available: ${quantity}`,
      ]
    } else {
      return [
        description,
        `${weight} grams`,
        `Available: ${quantity}`,
      ]
    }
  }

  function onDeletePress() {
    dispatch(deleteProduct({ id }));
  }

  return (
    <View>
      {userId === currentUserId && (
        <View style={styles.deleteButtonContainer}>
          <Icon
            name="x-circle"
            type="feather"
            color={Colors.mainText}
            size={32}
            onPress={onDeletePress}
          />
        </View>
      )}
      <PricingCard
        color="#4f9deb"
        title={name}
        containerStyle={styles.cardContent}
        price={`$${price}`}
        info={buildInfoArray()}
        buttonFont="material"
        // button={{ style: styles.hideButton }}
        button={{
          title: type,
          disable: true,
          style: styles.buttonStyle,
        }}
      />
    </View>
  );
}

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
  },
  buttonStyle: {
    width: 100,
    alignSelf: 'center',
  }
});
