import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
// import Video from 'react-native-video';

const ConInscri = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={require('./../assets/motoAcceuil.jpg')} style={styles.image} />
                <Image
                    source={require('./../assets/image.png')}
                    style={{ width: '90%', height: '20%', zIndex: 10, position: 'absolute' }}
                    resizeMode='contain'
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.buttonConnexion}
                        onPress={() => navigation.navigate("Connexion")}
                    // onPress={() => console.log("Connexion OK")}
                    >
                        <Text style={styles.textConnexion}>Se connecter</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonInscription}
                        onPress={() => navigation.navigate("Inscription")}
                    // onPress={() => console.log("Inscription OK")}
                    >
                        <Text style={styles.textInscription}>S'inscrire</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ConInscri

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        zIndex: 0,
        justifyContent: 'center',
    },
    buttonConnexion: {
        backgroundColor: 'white',
        position: 'absolute',
        marginTop: '125%',
        marginLeft: '10%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 105,
        marginBottom: 10,
    },
    buttonInscription: {
        backgroundColor: '#FFCC33',
        position: 'absolute',
        marginTop: '140%',
        marginLeft: '10%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 117,
        marginBottom: 10,
    },
    textConnexion: {
        textAlign: 'center',
    },
    textInscription: {
        textAlign: 'center',
    },
    buttonContainer: {
        display:'flex',
        flexDirection: 'column',
        position: 'absolute',
        width:'100%',
        height: '100%'
    }
})