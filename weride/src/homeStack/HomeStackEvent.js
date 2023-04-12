import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackEvent = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Event" component={HomeStackEvent} />
    </HomeStack.Navigator>
  );
};

export default HomeStackEvent;