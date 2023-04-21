import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from "react-native-elements";
import MyPathScreen from "../screens/MyPathScreen";
import NewPath from "../Path/NewPath";
import ItineraryPath from "../Path/ItineraryPath";
import MyPath from "../Path/MyPath";
import CreatePost from "../Path/CreatePost";

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
          title: "",
          headerShown: false,
        }}
      />
      <MyPathStack.Screen
        name="NewTrajets"
        component={NewPath}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <MyPathStack.Screen
        name="BaladeTrajet"
        component={ItineraryPath}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <MyPathStack.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          title: "",
          headerShown: false,
        }}
      />
      <MyPathStack.Screen
        name="MyPath"
        component={MyPath}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </MyPathStack.Navigator>
  );
};

export default MyPathStackScreen;