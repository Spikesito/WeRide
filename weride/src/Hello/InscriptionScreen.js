import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

const InscriptionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inscription</Text>
      <TextInput
        style={styles.input}
        placeholder="NOM Prénom"
      />
      <TextInput
        style={styles.input}
        placeholder="Nom d'utilisation"
      />
      <TextInput
        style={styles.input}
        placeholder="Date de naissance"
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse mail"
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
      />
      <TouchableOpacity style={styles.button} name="Inscription" onPress={() => navigation.navigate("Slider")}>
        <Text style={styles.buttonText}>S'inscrire</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Vous avez un compte ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
          <Text style={styles.bottomButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InscriptionScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingBottom: '10%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#FFCC33',
    borderRadius: 5,
    padding: 12,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: '40%',
  },
  bottomText: {
    marginRight: 10,
    fontSize: 15,
  },

  bottomButtonText: {
    color: 'blue',
    fontSize: 15,
    fontWeight: 'bold',
  },
});