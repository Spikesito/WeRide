import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { createData, readData } from "../CRUD";
import { auth } from "../firebase";
import { handleAddressChange, handleAddressSelect } from "../../Components/ExternalFunction/FuncApiAdd";
import { errorHandler } from "../../Components/ExternalFunction/FuncFromChecker";

const CreateTripPage = ({ navigation }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [departure, setDeparture] = useState("");
  const [departureSuggestions, setDepartureSuggestions] = useState([]);
  const [showDepartureSuggestions, setShowDepartureSuggestions] = useState(true);
  const [arrival, setArrival] = useState("");
  const [arrivalSuggestions, setArrivalSuggestions] = useState([]);
  const [showArrivalSuggestions, setShowArrivalSuggestions] = useState(true);
  const [step, setStep] = useState('');
  const [stepsList, setStepsList] = useState([]);
  const [stepsSuggestions, setStepsSuggestions] = useState([]);
  const [showStepsSuggestions, setShowStepsSuggestions] = useState(true);


  let trip;
  let currentUserData;
  const currentUser = auth.currentUser.uid;

  const fetchUserData = async () => {
    console.log("user: ", currentUser);
    currentUserData = await readData(`users/${currentUser}`);
    return currentUserData;
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const callDepartureChange = (text) => {handleAddressChange(text, setDeparture, setDepartureSuggestions, setShowDepartureSuggestions);};

  const callDepartureSelect = (item) => {handleAddressSelect(item, setDeparture, setDepartureSuggestions, setShowDepartureSuggestions);};

  const callArrivalChange = (text) => {handleAddressChange(text, setArrival, setArrivalSuggestions, setShowArrivalSuggestions);};

  const callArrivalSelect = (item) => {handleAddressSelect(item, setArrival, setArrivalSuggestions, setShowArrivalSuggestions);};

  const callStepsChange = (text) => {handleAddressChange(text, setStep, setStepsSuggestions, setShowStepsSuggestions);};

  const callStepsSelect = (item) => {handleAddressSelect(item, setStep, setStepsSuggestions, setShowStepsSuggestions);};

  const addStepToList = () => {
    if (step) {
      setStepsList([...stepsList, { id : stepsList.length, name: step}]);
      setStep('');
      setShowStepsSuggestions(false)
    }
  };

  const renderSteps = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center'}}>
    <Text style={{ paddingVertical: 10 }}>{item.name}</Text>
    <TouchableOpacity onPress={() => deleteStep(item.id)}>
      <Text style={{color: "red", marginLeft: 10,}}>Supprimer</Text>
    </TouchableOpacity>
    </View>
  );

const deleteStep = (id) => {
    setStepsList((prevList) => prevList.filter((item) => item.id !== id));
  }

  const createTrip = async () => {
    if (errorHandler(setErrorMessage, title, description, departureDate, departure, arrival, stepsList)) {
      setErrorMessage("");
      try {
        trip = {
            title: title,
            description: description,
            departure_date: departureDate,
            departure: departure,
            arrival: arrival,
            steps: stepsList.map(step => step.name),
            creator: currentUser,
            participant: [],
            messaging: "id_de_la_messagerie",
        };
        createData('trips/', trip);
        console.log("le trip a été créé", trip);
        navigation.navigate("Home");
      }
      catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        {errorMessage ? <Text style={{ color: 'red', fontSize: 15 }}> {errorMessage} </Text> : null}
      </View>
      <Text>Titre:</Text>
      <TextInput value={title} onChangeText={setTitle} />

      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} />

      <Text>Date départ (JJ/MM/AAAA):</Text>
      <TextInput value={departureDate} onChangeText={setDepartureDate} />

      <Text>Depart:</Text>
      <TextInput value={departure} onChangeText={callDepartureChange} />
      {showDepartureSuggestions && (
        <FlatList
          data={departureSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => callDepartureSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <Text>Arrivée:</Text>
      <TextInput value={arrival} onChangeText={callArrivalChange} />
      {showArrivalSuggestions && (
        <FlatList
          data={arrivalSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => callArrivalSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
      <Text>Étapes:</Text>
      <TextInput value={step} onChangeText={callStepsChange} style={{width: '80%', paddingLeft: 10}}/>
      <Button title="Ajouter" onPress={addStepToList} style={{with: '15%'}}/>
      </View>

      {showStepsSuggestions && (
        <FlatList style={{marginBottom: 15}}
          data={stepsSuggestions}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => callStepsSelect(item)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      <Text>Étape du trajet:</Text>
      <FlatList
        data={stepsList}
        renderItem={renderSteps}
        keyExtractor={(item) => item.id.toString()}
      />

      <Button title="Create Trip" onPress={createTrip} />
    </View>
  );
};

export default CreateTripPage;
