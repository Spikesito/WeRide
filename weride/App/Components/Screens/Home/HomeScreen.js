import React from 'react';
import { View, Text } from 'react-native';
import HomeForm from './HomeForm';

const HomeScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text>Home Screen</Text>
      <HomeForm />
    </View>
  );
};

export default HomeScreen;