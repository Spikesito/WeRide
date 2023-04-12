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
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Fil d'actu" component={HomeStackScreen} />
        <Tab.Screen name="Découvrir" component={SearchStackScreen} />
        <Tab.Screen name="Mes Trajets" component={MyPathStackScreen} />
        <Tab.Screen name="Messagerie" component={MessStackScreen} />
        <Tab.Screen name="Profil" component={ProfilStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Tabs;