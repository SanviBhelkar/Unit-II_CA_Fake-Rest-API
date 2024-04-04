import React from 'react';
import { View, Text } from 'react-native';

const MobileDetail = ({ mobile }) => {
  return (
    <View>
      <Text>Name: {mobile.name}</Text>
      <Text>Brand: {mobile.brand}</Text>
      <Text>Price: ${mobile.price}</Text>
    </View>
  );
}

export default MobileDetail;
