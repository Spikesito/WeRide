import React from 'react';
import { View, Text } from 'react-native';
import RidesForm from './RidesForm';

const RidesScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text>Rides Screen</Text>
      <RidesForm />
    </View>
  );
};

export default RidesScreen;