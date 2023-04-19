import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, View,  Text, TextInput, TouchableOpacity, StyleSheet, FlatList, CheckBox, Button } from 'react-native';
import writeTripData from '../../../../dbFunction';
import axios from 'axios';

const RidesForm = () => {
  const [editableEnd, setEditableEnd] = useState(false);
  const [editableStep, setEditableStep] = useState(false);
  const [type, setType] = useState(true)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startPoint, setStartPoint] = useState('');
  const [startPointSuggestions, setStartPointSuggestions] = useState([]);
  const [showStartPointSuggestions, setShowStartPointSuggestions] = useState(true);
  const [endPoint, setEndPoint] = useState('');
  const [endPointSuggestions, setEndPointSuggestions] = useState([]);
  const [showEndPointSuggestions, setShowEndPointSuggestions] = useState(true);
  const [step, setStep] = useState('');
  const [stepList, setStepList] = useState([]);
  const [stepSuggestions, setStepSuggestions] = useState([]);
  const [showStepSuggestions, setShowStepSuggestions] = useState(true);

  const toggleEditableEnd = () => {
    setEditableEnd(!editableEnd);
    if (editableEnd) {
      setEndPoint('');
    }
  };

  const toggleEditableStep = () => {
    setEditableStep(!editableStep);
    if (editableStep) {
      setStepList([]);
    }
  };

  const handleStartPointChange = (text) => {
    setStartPoint(text);
  
    axios.get(`https://api-adresse.data.gouv.fr/search/?q=${text}`)
      .then((response) => {
        const suggestions = response.data.features.map((feature) => {
          return {
            label: feature.properties.label,
          };
        });
        setStartPointSuggestions(suggestions);
        setShowStartPointSuggestions(suggestions.length > 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStartPointSelect = (item) => {
    setStartPoint(item.label);
    setStartPointSuggestions([]);
    setShowStartPointSuggestions(false);
  };

  const handleEndPointChange = (text) => {
    setEndPoint(text);
  
    axios.get(`https://api-adresse.data.gouv.fr/search/?q=${text}`)
      .then((response) => {
        const suggestions = response.data.features.map((feature) => {
          return {
            label: feature.properties.label,
          };
        });
        setEndPointSuggestions(suggestions);
        setShowEndPointSuggestions(suggestions.length > 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEndPointSelect = (item) => {
    setEndPoint(item.label);
    setEndPointSuggestions([]);
    setShowEndPointSuggestions(false);
  };

  const handleStepChange = (text) => {
    setStep(text);
  
    axios.get(`https://api-adresse.data.gouv.fr/search/?q=${text}`)
      .then((response) => {
        const suggestions = response.data.features.map((feature) => {
          return {
            label: feature.properties.label,
          };
        });
        setStepSuggestions(suggestions);
        setShowStepSuggestions(suggestions.length > 0);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleStepSelect = (item) => {
    setStep(item.label);
    setStepSuggestions([]);
    setShowStepSuggestions(false);
  };

  const addStepToList = () => {
    if (step) {
      setStepList([...stepList, { id : stepList.length, name: step}]);
      setStep('');
    }
  };

  const renderStep = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{ paddingVertical: 10 }}>{item.name}</Text>
    <TouchableOpacity onPress={() => deleteStep(item.id)}>
      <Text style={styles.deleteButton}>Supprimer</Text>
    </TouchableOpacity>
    </View>
  );

  const deleteStep = (id) => {
    setStepList((prevList) => prevList.filter((item) => item.id !== id));
  }

  useEffect(() => {
    if (endPoint != '') {
      setType(false)
    } else {
      setType(true)
    }
  }, [endPoint])

  const lastStepToEndPoint = () => {
    const lastStep = stepList.slice(-1).map(step => step.name)[0]; 
    stepList.pop();
    return lastStep;
  }

  const handleRide = () => {
    console.log(type, title, description, startDate, startPoint, endPoint, stepList)
    if (endPoint == '' && stepList.length != 0) {
      const newEndPoint = lastStepToEndPoint();
      writeTripData(type, title, description, startDate, startPoint, newEndPoint, stepList)
    } else {
      writeTripData(type, title, description, startDate, startPoint, endPoint, stepList)
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Titre"
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
          placeholder="Date de départ (DD/MM/YYYY)"
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
        {showStartPointSuggestions && (
          <FlatList
            data={startPointSuggestions}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleStartPointSelect(item)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={editableEnd}
          onValueChange={toggleEditableEnd}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Je veux créer un trajet (d'un point A à un point B)</Text>
        </View>
        {editableEnd && <TextInput
          placeholder="Lieu d'arrivée"
          value={endPoint}
          onChangeText={handleEndPointChange}
          style={styles.input}
        />}
        { showEndPointSuggestions && (
          <FlatList
            data={endPointSuggestions}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleEndPointSelect(item)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        <View style={styles.checkboxContainer}>
        <CheckBox
          value={editableStep}
          onValueChange={toggleEditableStep}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Ajouter une étape au trajet</Text>
        </View>
        { editableStep && <TextInput
          placeholder="Lieu de l'étape"
          value={step}
          onChangeText={handleStepChange}
          style={styles.input}
          editable={editableStep}
        />}
        { showStepSuggestions && (
          <FlatList
            data={stepSuggestions}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleStepSelect(item)}>
                <Text>{item.label}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        { editableStep && <Button title="Ajouter" onPress={addStepToList} />}
        { editableStep &&<Text style={styles.label}>Étape du trajet:</Text>}
        { editableStep && <FlatList
          data={stepList}
          renderItem={renderStep}
          keyExtractor={(item) => item.id.toString()}
        />}
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
  deleteButton: {
    color: "red",
    marginLeft: 10,
  },
});




export default RidesForm;