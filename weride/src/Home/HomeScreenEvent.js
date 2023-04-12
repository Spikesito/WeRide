import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreenEvent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Evenement</Text>
      {/* <Button
        title="Actualité"
        onPress={() => navigation.navigate("Actu")}
      /> */}
    </View>
  );
};

export default HomeScreenEvent;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     justifyContent: "center",
//     alignContent: "center",
//   },
// });