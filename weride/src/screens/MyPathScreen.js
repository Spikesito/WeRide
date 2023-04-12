import React from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewPath from "../Path/NewPath";

const MyPathScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("MesTrajets")}>
        <Text>Mon bouton</Text>
      </TouchableOpacity>
      
      <Button
        title="Trajet à venir"
        onPress={() => navigation.navigate("MesTrajets")}
      />
    </View>
  );
};

export default MyPathScreen;