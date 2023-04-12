import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tab from "./src/Tab";

export default function App() {
  return <Tab />;
}

// export default function App(){
//   return (
//     <View>
//       <Image source={require('./assets/motoAcceuil.jpg')} />
//     </View>
//   )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});