import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from 'react-native-elements';
import ProfilScreen from "../screens/ProfilScreen";

const ProfilStackScreen = () => {
  const ProfilStack = createNativeStackNavigator();
  return (
    <ProfilStack.Navigator
     screenOptions={{
        header: (props) => <Header {...props} />,
      }}
      >
      <ProfilStack.Screen
        name="Profil"
        component={ProfilScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </ProfilStack.Navigator>
  );
};

export default ProfilStackScreen;
