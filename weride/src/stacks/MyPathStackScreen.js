import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from 'react-native-elements';
import MyPathScreen from "../screens/MyPathScreen";
import NewPath from "../Path/NewPath";
import ItineraryPath from "../Path/ItineraryPath";

const MyPathStackScreen = () => {
  const MyPathStack = createNativeStackNavigator();
  return (
    <MyPathStack.Navigator
     screenOptions={{
        header: (props) => <Header {...props} />,
      }}
      >
      <MyPathStack.Screen
        name="MesTrajets"
        component={MyPathScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <MyPathStack.Screen
        name="NewTrajets"
        component={NewPath}
        options={{
          title: '',
        }}
      />
      <MyPathStack.Screen
        name="BaladeTrajet"
        component={ItineraryPath}
        options={{
          title: '',
        }}
      />
    </MyPathStack.Navigator>
  );
};

export default MyPathStackScreen;
