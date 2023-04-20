import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPath from "../Path/NewPath";


const MyPathScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../assets/LOGO_WE_RIDE.png")}
          style={styles.headerTitle}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewTrajets')}>
        <ImageBackground source={require('../../assets/créerUnTrajet.jpeg')} style={styles.imageBackground}>
          <Text style={styles.buttonTextNew}>Créer un trajet</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyPath')}>
        <ImageBackground source={require('../../assets/trajetAVenir.jpeg')} style={styles.imageBackground}>
          <Text style={styles.buttonTextVenir}>Trajet à venir</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default MyPathScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: '30%',
    borderRadius: 10,
    overflow: 'hidden',
    margin: '10%',
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 50,
  },
  headerTitle: {
    paddingLeft: 9,
    width: 180,
    height: 40,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTextNew: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
  },
  buttonTextVenir: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
  },
})