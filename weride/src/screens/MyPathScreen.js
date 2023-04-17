import React from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewPath from "../Path/NewPath";


const MyPathScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewTrajets')}>
        <ImageBackground source={require('../../assets/motoAcceuil.jpg')} style={styles.imageBackground}>
          <Text style={styles.buttonText}>Créer un trajet</Text>
        </ImageBackground>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => console.log("Trajet à venir")}>
        <ImageBackground source={require('../../assets/motoAcceuil.jpg')} style={styles.imageBackground}>
          <Text style={styles.buttonText}>Trajet à venir</Text>
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
    height: 150,
    borderRadius: 10,
    overflow: 'hidden',
    margin: '10%',
    
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    position: 'absolute',
    zIndex: 1,
  },
})