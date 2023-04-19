import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ItineraryPath = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/imageProfil.jpg')} style={{ width: '120%', height: '50%', marginTop: '-10%' }} />
      <Text style={styles.title}>Itinéraire</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={icon({ name: 'map-marker-alt' })} />
        <TextInput
          style={styles.input}
          value="Départ"
          // onChangeText={setText1}
          placeholder="Input 1"
        />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={icon({ name: 'map-marker-alt' })} />
        <TextInput
          style={styles.input}
          value="Arriver"
          // onChangeText={setText2}
          placeholder="Input 2"
        />
      </View>
      <TouchableOpacity style={styles.addbutton} onPress={() => console.log("OK")}>
        <Text>Ajouter une étape</Text>
      </TouchableOpacity>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.duoButton} onPress={() => console.log("OK")}>
          <Text>Date</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.duoButton} onPress={() => console.log("OK")}>
          <Text>Heure</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => console.log("OK")}>
        <Text>Continuer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ItineraryPath

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: '5vw',
    fontWeight: 'bold',
    marginTop: "5%",
    marginLeft: "-70%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    //   marginBottom: 2,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: '5%',
    //   justifyContent: 'space-between',
    width: '100%',
    marginTop: '5%',
    marginBottom: 20,
    marginLeft: '5%',
  },
  addbutton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    padding: 12,
    width: '100%',
    height: '7%',
    alignItems: 'left',
    justifyContent: 'center',
  },
  continueButton: {
    backgroundColor: 'blue',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: 'blue',
    textAlign: 'center',
    justifyContent: 'center',
    width: '70%',
    height: '7%',
  },
  duoButton: {
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'cyan',
    width: '20%',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 8,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});