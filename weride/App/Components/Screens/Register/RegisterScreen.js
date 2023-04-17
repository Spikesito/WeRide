import React from 'react';
import { View, Text } from 'react-native';
import RegisterForm from './RegisterForm';

const RegisterScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text>Register Screen</Text>
      <RegisterForm />
    </View>
  );
};

export default RegisterScreen;