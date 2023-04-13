import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View,  Text, TextInput, TouchableOpacity, StyleSheet, FlatList, CheckBox } from 'react-native';
import { auth } from '../../../../firebase';
import axios from 'axios';

const RidesForm = () => {
  const [editable, setEditable] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [startPointSuggestions, setStartPointSuggestions] = useState([]);
  const [endPoint, setEndPoint] = useState('');
  const [endPointSuggestions, setEndPointSuggestions] = useState([]);
  const [startDate, setStartDate] = useState('');

  const toggleEditable = () => setEditable(!editable);

  const handleStartPointChange = (text) => {
    setStartPoint(text);
  
    axios.get(`https://api-adresse.data.gouv.fr/search/?q=${text}`)
      .then((response) => {
        const suggestions = response.data.features.map((feature) => {
          return {
            label: feature.properties.label,
            lat: feature.geometry.coordinates[1],
            lon: feature.geometry.coordinates[0],
          };
        });
        setStartPointSuggestions(suggestions);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStartPointSelect = (item) => {
    setStartPoint(item.label);
    setStartPointLatitude(item.lat);
    setStartPointLongitude(item.lon);
    setStartPointSuggestions([]);
  };

  const handleEndPointChange = (text) => {
    setEndPoint(text);
  
    axios.get(`https://api-adresse.data.gouv.fr/search/?q=${text}`)
      .then((response) => {
        const suggestions = response.data.features.map((feature) => {
          return {
            label: feature.properties.label,
            lat: feature.geometry.coordinates[1],
            lon: feature.geometry.coordinates[0],
          };
        });
        setEndPointSuggestions(suggestions);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEndPointSelect = (item) => {
    setEndPoint(item.label);
    setEndPointLatitude(item.lat);
    setEndPointLongitude(item.lon);
    setEndPointSuggestions([]);
  };

  const addStep = () => {

  }

  const handleRide = () => {
    console.log(title, description, startPoint, endPoint, startDate, endDate)
//    auth
//      .signInWithEmailAndPassword(email, password)
 //     .then(userCredentials => {
//        const user = userCredentials.user;
 //       console.log('Logged in with:', user.email);
 //     })
 //     .catch(error => alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={text => setDescription(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Date de départ"
          value={startDate}
          onChangeText={text => setStartDate(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Lieu de départ"
          value={startPoint}
          onChangeText={handleStartPointChange}
          style={styles.input}
        />
        <FlatList
          data={startPointSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleStartPointSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
           )}
        />
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={editable}
          onValueChange={toggleEditable}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Je veux créer un trajet (d'un point A à un point B)</Text>
        </View>
        {editable && <TextInput
          placeholder="Lieu d'arrivée"
          value={endPoint}
          onChangeText={handleEndPointChange}
          style={styles.input}
          editable={editable}
        />}
        <FlatList
          data={endPointSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleEndPointSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
           )}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleRide}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Valider le trajet</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginLeft: 15,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
  },
});




export default RidesForm;