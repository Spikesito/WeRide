import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeStackScreen from "./stacks/HomeStackScreen";
import MessStackScreen from "./stacks/MessStackScreen";
import MyPathStackScreen from "./stacks/MyPathStackScreen";
import ProfilStackScreen from "./stacks/ProfilStackScreen";
import SearchStackScreen from "./stacks/SearchStrackScreen";


const Tabs = () => {
  const Tabs = createBottomTabNavigator();
  return (
      <Tabs.Navigator  screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="Fil d'actu" component={HomeStackScreen} />
        <Tabs.Screen name="Découvrir" component={SearchStackScreen} />
        <Tabs.Screen name="Mes Trajets" component={MyPathStackScreen} />
        <Tabs.Screen name="Messagerie" component={MessStackScreen} />
        <Tabs.Screen name="Profil" component={ProfilStackScreen} />
      </Tabs.Navigator>
    
  );
};

export default Tabs;