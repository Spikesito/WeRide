import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import App from '../../App';

// const Stack = createStackNavigator();

const ConnexionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>S'identifier</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
      // value={email}
      // onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
      // value={password}
      // secureTextEntry={true}
      // onChangeText={handlePasswordChange}
      />
      <TouchableOpacity style={styles.button} name="Connexion" onPress={() => navigation.navigate("Tabs")}>
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.textLose}>Mot de passe oublié</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomText}>Vous n'avez pas de compte ?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Inscription")}>
          <Text style={styles.bottomButtonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConnexionScreen

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
    paddingBottom: '20%',
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
    // backgroundColor: '#007bff',
    backgroundColor: '#FFCC33',
    borderRadius: 5,
    padding: 12,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textLose: {
    fontSize: '2.7vw',
    paddingTop: '5%'
  },
  bottomContainer: {
    flexDirection: 'row',
    marginTop: 20,
    paddingTop: '80%',
  },
  bottomText: {
    marginRight: 10,
    fontSize: '2.5vw',
  },

  bottomButtonText: {
    color: 'blue',
    fontSize: '2.5vw',
    fontWeight: 'bold',
  },
});