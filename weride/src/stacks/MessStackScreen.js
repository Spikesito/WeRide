import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MessScreen from "../screens/MessScreen";

const MessStackScreen = () => {
  const MessStack = createNativeStackNavigator();
  return (
    <MessStack.Navigator>
      <MessStack.Screen name="Messagerie" component={MessScreen} />
    </MessStack.Navigator>
  );
};

export default MessStackScreen;