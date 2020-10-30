import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { PricingCard, Icon } from 'react-native-elements';
import Colors from '../../themes/colors';
import { deleteProduct } from '../../redux/products/actions';
import { DeleteModal } from '../modals/DeleteModal';

export const ItemCard = ({ product: {
  name, price, quantity, weight, volume, type, description,
  userId, id,
}}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const currentUserId = useSelector(state => state.user.id);
  const dispatch = useDispatch();
  const isDrink = type === 'Drink';
  
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
    setShowDeleteModal(true);
  }

  function onConfirmationPress() {
    setShowDeleteModal(false);
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
      {showDeleteModal && (
        <DeleteModal
          onConfirmationPress={onConfirmationPress}
          onClosePress={() => setShowDeleteModal(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  deleteButtonContainer: {
    position: 'absolute',
    right: 25,
    top: 25,
    zIndex: 10,
    elevation: 2
  },
  cardContent: {
    borderRadius: 10,
    zIndex: 0,
  },
  buttonStyle: {
    width: 100,
    alignSelf: 'center',
    zIndex: 0,
    position: 'absolute',
  }
});
