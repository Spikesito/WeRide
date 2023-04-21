import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Tabs from "./src/Tab";
import ConInscri from "./src/ConInscri";
import ConnexionScreen from "./src/Hello/ConnexionScreen";
import InscriptionScreen from "./src/Hello/InscriptionScreen";
import Slider from "./src/screens/Slider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ConInscri" component={ConInscri} />
        <Stack.Screen name="Connexion" component={ConnexionScreen} />
        <Stack.Screen name="Inscription" component={InscriptionScreen} />
        <Stack.Screen name="Slider" component={Slider} />
        <Stack.Screen name="Tabs" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
