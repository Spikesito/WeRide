import React from 'react';
import { View, Text } from 'react-native';
import LoginForm from '../Login/LoginForm';

const LoginScreen = () => {
  return (
    <View style={{flex:1}}>
      <Text>Login Screen</Text>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;