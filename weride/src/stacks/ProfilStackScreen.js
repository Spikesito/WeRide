import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from 'react-native-elements';
import ProfilScreen from "../screens/ProfilScreen";
import ModifyProfil from "../Profil/ModifyProfil";
import OtherProfil from "../Profil/OtherProfil";

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
      <ProfilStack.Screen
        name="ModifProfil"
        component={ModifyProfil}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <ProfilStack.Screen
        name="OtherProfil"
        component={OtherProfil}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </ProfilStack.Navigator>
  );
};

export default ProfilStackScreen;
