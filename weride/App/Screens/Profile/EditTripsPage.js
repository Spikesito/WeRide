import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { updateData, readData, deleteData } from "../../Components/ExternalFunction/CRUD";
import { auth } from "../../firebase";
import { handleAddressChange, handleAddressSelect } from "../../Components/ExternalFunction/FuncApiAdd";
import { errorHandler } from "../../Components/ExternalFunction/FuncFromChecker";

const EditTripsPage = ({ navigation, route }) => {
    const tripId = route.params.key;
    const [tripData, setTripData] = useState({});

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

    const fetchTripData = async () => {
      const tripData = await readData(`trips/${tripId}`);
      setTripData(tripData);
    }

    const initializeData = () => {
      let liste = []
      setTitle(tripData.title);
      setDescription(tripData.description);
      setDepartureDate(tripData.departure_date);
      setDeparture(tripData.departure);
      setArrival(tripData.arrival);
      for (let s in tripData.steps) {
        liste = [...liste, { id : liste.length, name: tripData.steps[s]}];
      }
      setStepsList(liste);
    }

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
        <Text style={{ paddingVertical: 2 }}>{item.name}</Text>
        <TouchableOpacity onPress={() => deleteStep(item.id)}>
          <Text style={{color: "red", marginLeft: 10,}}>Supprimer</Text>
        </TouchableOpacity>
        </View>
      );
    
      const deleteStep = (id) => {
        setStepsList((prevList) => prevList.filter((item) => item.id !== id));
      }

    useEffect(() => {
      fetchTripData();
    }, []);

    useEffect(() => {
      initializeData();
    }, [tripData]);

    const updateTrip = () => {
      if (errorHandler(setErrorMessage, title, description, departureDate, departure, arrival)) {
        setErrorMessage("");
        try {
          let trip = {
            title: title,
            description: description,
            departure_date: departureDate,
            departure: departure,
            arrival: arrival,
            steps: stepsList.map(step => step.name),
            creator: tripData.creator,
            participants: tripData.participants,
          };  
          updateData(`trips/${tripId}` ,trip);
          navigation.navigate("Profile");
        }
        catch (error) {
          console.error(error);
        }
      }
    }

    const deleteTrip = () => {
      try {
        deleteData(`trips/${tripId}`);
        navigation.navigate("Profile");
      }
      catch (error) {
        console.error(error);
      }
    }

    return (
        <View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
            {errorMessage ? <Text style={{ color: 'red', fontSize: 15 }}> {errorMessage} </Text> : null}
          </View>
          <Text>Titre:</Text>
          <TextInput value={title} onChangeText={setTitle} style={{borderWidth: 1, borderRadius: 5}} />
    
          <Text>Description:</Text>
          <TextInput value={description} onChangeText={setDescription} style={{borderWidth: 1, borderRadius: 5}} />
    
          <Text>Date départ (JJ/MM/AAAA):</Text>
          <TextInput value={departureDate} onChangeText={setDepartureDate} style={{borderWidth: 1, borderRadius: 5}} />
    
          <Text>Depart:</Text>
          <TextInput value={departure} onChangeText={callDepartureChange} style={{borderWidth: 1, borderRadius: 5}} />
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
          <TextInput value={arrival} onChangeText={callArrivalChange} style={{borderWidth: 1, borderRadius: 5}} />
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
          <TextInput value={step} onChangeText={callStepsChange} style={{width: '80%', paddingLeft: 10, borderWidth: 1, borderRadius: 5}}/>
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
            keyExtractor={(item) => item.id}
          />
    
          <Button title="Modify Trip" onPress={updateTrip} />
          <TouchableOpacity
            style={{backgroundColor: "red", paddingHorizontal: 30, paddingVertical: 10}}
            onPress={deleteTrip}
            >
          <Text style={{fontSize: 16, color: "#FFF", fontWeight: 'bold', textAlign: 'center'}} >DELETE TRIP</Text>
        </TouchableOpacity>
        </View>
    )
}

export default EditTripsPage;