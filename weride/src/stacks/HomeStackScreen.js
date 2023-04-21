import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import PostScreen from "../Post/PostScreen";
import OtherProfil from "../Profil/OtherProfil";
import MesAmis from "../Post/MesAmis";
import MyFriend from "../screens/MyFriend";
import FriendProfile from "../Profil/FriendProfile";
import Params from "../screens/Params";
import Notification from "../screens/Notification";
import Confi from "../screens/Confi";
import Aide from "../screens/Aide";
import Propos from "../screens/Propos";

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
          headerShown: false,
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
      <HomeStack.Screen
        name="MyFriend"
        component={MyFriend}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="FriendProfile"
        component={FriendProfile}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Params"
        component={Params}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Notification"
        component={Notification}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Confi"
        component={Confi}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Aide"
        component={Aide}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <HomeStack.Screen
        name="Propos"
        component={Propos}
        options={{
          title: "",
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
