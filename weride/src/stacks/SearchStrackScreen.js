import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import FilterScreen from "../Search/FilterScreen";
import EndSearchScreen from "../Search/EndSearchScreen";

const SearchStackScreen = () => {
  const SearchStack = createNativeStackNavigator();
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen name="Search" component={SearchScreen} />
      <SearchStack.Screen name="Filter" component={FilterScreen} />
      <SearchStack.Screen name="Result" component={EndSearchScreen} />

    </SearchStack.Navigator>
  );
};

export default SearchStackScreen;