import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="We Ride" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     alignContent: "center",
//   },
// });