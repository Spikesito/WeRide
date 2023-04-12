import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPathScreen from "../screens/MyPathScreen";

const MyPathStackScreen = () => {
  const MyPathStack = createNativeStackNavigator();
  return (
    <MyPathStack.Navigator>
      <MyPathStack.Screen name="MesTrajets" component={MyPathScreen} />
    </MyPathStack.Navigator>
  );
};

export default MyPathStackScreen;