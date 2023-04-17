import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPathScreen from "../screens/MyPathScreen";
import NewPath from "../Path/NewPath";
import ItineraryPath from "../Path/ItineraryPath";

const MyPathStackScreen = () => {
  const MyPathStack = createNativeStackNavigator();
  return (
    <MyPathStack.Navigator>
      <MyPathStack.Screen name="MesTrajets" component={MyPathScreen} />
      <MyPathStack.Screen name="NewTrajets" component={NewPath}/>
      <MyPathStack.Screen name="BaladeTrajet" component={ItineraryPath}/>
    </MyPathStack.Navigator>
  );
};

export default MyPathStackScreen;