import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Tabs from "./src/Tab";
import ConInscri from "./src/ConInscri";
import ConnexionScreen from "./src/Hello/ConnexionScreen";
import InscriptionScreen from "./src/Hello/InscriptionScreen";
import NewPath from "./src/Path/NewPath";
import ItineraryPath from "./src/Path/ItineraryPath";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
// export default function App() {
//   return <Tab />;
// }


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ConInscri" component={ConInscri}/>
        <Stack.Screen name="Connexion" component={ConnexionScreen}/>
        <Stack.Screen name="Inscription" component={InscriptionScreen}/>
        <Stack.Screen name="Tabs" component={Tabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});