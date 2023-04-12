import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreenActu = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text >Actualité</Text>
      <Button
        title="Actualité"
        onPress={() => navigation.navigate("Actu")}
      />
    </View>
  );
};

export default HomeScreenActu;