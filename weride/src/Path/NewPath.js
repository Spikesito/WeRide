import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPathScreen from "../screens/MyPathScreen";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

const NewPath = () => {
  const navigation = useNavigation();
  return (
    // <NavigationContainer>
    //     <NewPath.Navigator>
    //         <NewPath.Screen name="NewTraject" component={MyPathScreen}/>
    //         <Text>NewPath</Text>
    //     </NewPath.Navigator>
    // </NavigationContainer>
    <View style={styles.container}>
      <Image
        source={require("../../assets/LOGO_WE_RIDE.png")}
        style={styles.headerTitle}
      />
      <Text style={styles.text}>Quel est votre type de trajet ?</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BaladeTrajet")}
      >
        <ImageBackground
          source={require("../../assets/motoAcceuil.jpg")}
          style={styles.imageBackground}
        >
          <Text style={styles.buttonText}>Balade</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("BaladeTrajet")}
      >
        <ImageBackground
          source={require("../../assets/motoAcceuil.jpg")}
          style={styles.imageBackground}
        >
          <Text style={styles.buttonText}>Trajet </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
export default NewPath;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "80%",
    height: "35%",
    borderRadius: 10,
    overflow: "hidden",
    margin: "5%",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    zIndex: 1,
  },
  text: {
    marginRight: "20%",
    paddingTop: 30,
    fontWeight: "bold",
    fontSize: 15,
  },
  headerTitle: {
    width: 180,
    height: 40,
    marginTop: 30,
  },
});
