import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Header } from 'react-native-elements';
import SearchScreen from "../screens/SearchScreen";
import FilterScreen from "../Search/FilterScreen";
import EndSearchScreen from "../Search/EndSearchScreen";

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
      <SearchStack.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <SearchStack.Screen
        name="Result"
        component={EndSearchScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;
