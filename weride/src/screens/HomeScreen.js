import React from "react";
import { View, Text, Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreenEvent from "../Home/HomeScreenEvent";
import HomeScreenActu from "../Home/HomeScreenActu";

const HomeScreen = () => {
  const navigation = useNavigation();
  const Home = createBottomTabNavigator();

  return (
    <View>
      <Text>Este es el home 1</Text>
      {/* <Button
        title="Ir a home 2"
        onPress={() => navigation.navigate("Home")}
      /> */}
      {/* <NavigationContainer> */}
        <Home.Navigator screenOptions={{ headerShown: false }}>
          <Home.Screen name="Actualités" component={HomeScreenActu} />
          <Home.Screen name="Évènements" component={HomeScreenEvent} />
        </Home.Navigator>
      {/* </NavigationContainer> */}
    </View>
  );
};


export default HomeScreen;