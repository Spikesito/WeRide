import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createData } from "../../CRUD";
import { auth } from "../../firebase";

const CreateTripPage = ({ navigation }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [departure, setDeparture] = useState("");
    const [arrival, setArrival] = useState("");
    const [departureDate, setDepartureDate] = useState("");

    let trips
    let currentUserData
    const currentUser = auth.currentUser.uid

    const fetchUserData = async () => {
        console.log("user: ", currentUser)
        currentUserData = await readData(`users/${currentUser}`)
        return currentUserData
    }

    useEffect(() => {
        fetchUserData()
    }, [])

    const createTrip = () => {
        trips = {
            firstname: currentUserData.firstname,
            pseudo: currentUserData.pseudo,
            email: currentUserData.email,
            phone_number: currentUserData.phone_number,
            birth_date: currentUserData.birth_date,
            friends_id: currentUser.friends_id,
            trips_id: ["trip_id_generated"]
        };
        // friends.push("ktrZz1ObidcRawmtRikVXoARmrh1")
        updateData(`users/${currentUser}`, trips); 
        // navigation.navigate("Home")
    };

    return (
        <View>
            <Text>Titre:</Text>
            <TextInput value={title} onChangeText={setTitle} />

            <Text>Description:</Text>
            <TextInput value={description} onChangeText={setDescription} />

            <Text>Depart:</Text>
            <TextInput value={departure} onChangeText={setDeparture} />

            <Text>Arrivée:</Text>
            <TextInput value={arrival} onChangeText={setArrival} />

            <Text>Date départ (JJ/MM/AAAA):</Text>
            <TextInput value={departureDate} onChangeText={setDepartureDate} />

            <Button title="Create Trip" onPress={createTrip} />
        </View>
    );
};

export default CreateTripPage;