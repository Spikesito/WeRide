import React from 'react'
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

const ConInscri = () => {
    const ConInscri = createNativeStackNavigator();
    // const navigation = useNavigation();
     return (
        <View style={styles.container}>
            <Image source={require('./../assets/motoAcceuil.jpg')} style={styles.image} />
                <TouchableOpacity
                    style={styles.buttonConnexion}
                    // onPress={() => navigation.navigate("Connexion")}
                    onPress={() => console.log("Connexion OK")}
                    >
                    <Text style= {styles.textConnexion}>Se connecter</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonInscription}
                    // onPress={() => navigation.navigate("Inscription")}
                    onPress={() => console.log("Inscription OK")}
                    >
                    <Text style= {styles.textInscription}>S'inscrire</Text>
                </TouchableOpacity>
        </View>
  )
}

export default ConInscri

const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        position: 'relative' 
    },
    image: {
        width: '100%', 
        height: '100%',
        zIndex: 0
    },
    buttonConnexion: {
        position:'absolute',
        marginTop:'125%',
        marginLeft:'10%',
        borderWidth: 1, 
        borderColor: 'white', 
        borderRadius: 10, 
        paddingVertical: 10, 
        paddingHorizontal: 105, 
        marginBottom: 10,
    },
    buttonInscription: {
        position:'absolute',
        marginTop:'140%', 
        marginLeft:'10%', 
        borderWidth: 1, 
        borderColor: 'white',
        borderRadius: 10, 
        paddingVertical: 10, 
        paddingHorizontal: 117, 
        marginBottom: 10,
    },
    textConnexion:{
        color: 'white', 
        textAlign:'center',         
    },
    textInscription:{
        color: 'white', 
        textAlign:'center',   
    }
})