import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfilScreen from "../screens/ProfilScreen";
import ModifyProfil from "../Profil/ModifyProfil";
import OtherProfil from "../Profil/OtherProfil";

const ProfilStackScreen = () => {
  const ProfilStack = createNativeStackNavigator();
  return (
    <ProfilStack.Navigator>
      <ProfilStack.Screen name="Profil" component={ProfilScreen} />
      <ProfilStack.Screen name="ModifProfil" component={ModifyProfil} />
      <ProfilStack.Screen name="OtherProfil" component={OtherProfil} />
    </ProfilStack.Navigator>
  );
};

export default ProfilStackScreen;