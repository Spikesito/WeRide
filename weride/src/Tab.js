import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import MessStackScreen from "./stacks/MessStackScreen";
import MyPathStackScreen from "./stacks/MyPathStackScreen";
import ProfilStackScreen from "./stacks/ProfilStackScreen";
import SearchStackScreen from "./stacks/SearchStrackScreen";
import { NavigationContainer } from "@react-navigation/native";


const Tabs = () => {
  const Tabs = createBottomTabNavigator();
  return (
    // <NavigationContainer name= "Menu">
      <Tabs.Navigator  screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Fil d'actu" component={HomeStackScreen} />
        <Tabs.Screen name="Découvrir" component={SearchStackScreen} />
        <Tabs.Screen name="Mes Trajets" component={MyPathStackScreen} />
        <Tabs.Screen name="Messagerie" component={MessStackScreen} />
        <Tabs.Screen name="Profil" component={ProfilStackScreen} />
      </Tabs.Navigator>
    // </NavigationContainer>
    
  );
};

export default Tabs;