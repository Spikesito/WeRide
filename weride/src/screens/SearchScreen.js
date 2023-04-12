import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Search</Text>
      <Button
        title="Search"
        onPress={() => navigation.navigate("Search")}
      />
    </View>
  );
};

export default SearchScreen;