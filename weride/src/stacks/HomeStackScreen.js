import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../Post/PostScreen";
import OtherProfil from "../Profil/OtherProfil";
import MesAmis from "../Post/MesAmis";

const HomeStackScreen = () => {
  const HomeStack = createNativeStackNavigator();

  return (
    <HomeStack.Navigator
      screenOptions={{
        header: (props) => <Header {...props} />,
      }}
    >
      <HomeStack.Screen
        name="WeRide"
        component={HomeScreen}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{
          title: "",
        }}
      />
      <HomeStack.Screen
        name="MesAmis"
        component={MesAmis}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="OtherProfil"
        component={OtherProfil}
        options={{
          title: "",
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;