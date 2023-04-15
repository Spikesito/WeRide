import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ConInscri from "./src/ConInscri";
import ConnexionScreen from "./src/Hello/ConnexionScreen";
import InscriptionScreen from "./src/Hello/InscriptionScreen";

// export default function App() {
//   return <Tab />;
// }


export default function App() {
  return <ConInscri />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});