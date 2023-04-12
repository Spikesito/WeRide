import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenActu from "../Home/HomeScreenActu";

const HomeStackActu = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Actu" component={HomeScreenActu} />
    </HomeStack.Navigator>
  );
};

export default HomeStackActu;