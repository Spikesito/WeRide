import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilScreen from "../screens/ProfilScreen";

const ProfilStackScreen = () => {
  const ProfilStack = createNativeStackNavigator();
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen name="Profil" component={ProfilScreen} />
    </ProfilStack.Navigator>
  );
};

export default ProfilStackScreen;