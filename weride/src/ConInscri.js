import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Video from 'react-native-video';

const ConInscri = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("./../assets/accueilImage.jpg")}
        style={styles.image}
      />
      <Image
        source={require('./../assets/image.png')}
        style={{ width: '90%', height: '20%', zIndex: 10, position: 'absolute', alignSelf:'center' }}
        resizeMode='contain'
      />
      <TouchableOpacity
        style={styles.buttonConnexion}
        onPress={() => navigation.navigate("Connexion")}
      >
        <Text style={styles.textConnexion}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonInscription}
        onPress={() => navigation.navigate("Inscription")}
      >
        <Text style={styles.textInscription}>S'inscrire</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConInscri;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: "center", // Ajouté pour centrer les éléments
  },
  image: {
    width: "100%",
    height: "100%",
    zIndex: 0,
    position: "absolute", // Ajouté pour positionner l'image en arrière-plan
  },
  buttonConnexion: {
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 600,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "center",
    width: 280,
  },
  buttonInscription: {
    borderWidth: 1,
    borderColor: "#FFCC33",
    backgroundColor: "#FFCC33",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
    alignSelf: "center",
    width: 280,
  },
  textConnexion: {
    color: "black",
    textAlign: "center",
  },
  textInscription: {
    color: "black",
    textAlign: "center",
  },
});
