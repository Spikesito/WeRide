import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MessScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Messagerie</Text>
      <Button
        title="Messagerie"
        onPress={() => navigation.navigate("Messagerie")}
      />
    </View>
  );
};

export default MessScreen;