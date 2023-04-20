import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from 'react-native-elements';
import SearchScreen from "../screens/SearchScreen";

const SearchStackScreen = () => {
  const SearchStack = createNativeStackNavigator();
  return (
    <SearchStack.Navigator
     screenOptions={{
        header: (props) => <Header {...props} />,
      }}
      >
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
