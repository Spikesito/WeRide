import { useState, useEffect } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { readData } from "../../ExternalFunction/CRUD";
import { auth } from "../../firebase";
import { updateData } from "../../ExternalFunction/CRUD";

const TripsDetails = ({ navigation, route }) => {
    const currentUser = auth.currentUser.uid

    const tripId = route.params.key;
    const [tripData, setTripData] = useState({})

    const [participants, setParticipants] = useState([])

    const renderSteps = ({ item }) => (
        <Text style={{ paddingVertical: 2 }}>{item}</Text>
    );

    const fetchTripData = async () => {
        const tripData = await readData(`trips/${tripId}`);
        setParticipants(tripData.participants)
        setTripData(tripData);
    }

    const handleFollowTrip = async () => {
        let participantsUpdated = []

        if (!participants.includes(currentUser)) {
            participantsUpdated.push(currentUser) // follow a selected trip
            alert("Tu as rejoins ce trip !")
            fetchTripData()
        } else {
            if (tripData.creator != currentUser) {
                participantsUpdated = participants.filter(e => e !== currentUser); // unfollow trip
                alert("Tu a quitté ce trip !")
                fetchTripData()
            } else { // handle case where you want to unfollow but ur the creator of the trip
                alert("Tu es le créateur de ce trip tu ne pas pas le quitter, il faut le supprimer dans ton profil !")
            }
        }
        if (participantsUpdated.length == []) { // handle case where none of this conditions have been reached
            participantsUpdated = participants
        }
        if (!participantsUpdated.includes(tripData.creator)) { // avoid cases where the creator is getting removed from the participants
            participantsUpdated.push(tripData.creator)
        }
        if (!tripData.steps) { // avoid sending undefined data to realtime database to avoid error
            tripData.steps = []
        }

        const updatedMessaging = {
            participant: participantsUpdated
        }
        await updateData(`messaging/${tripId}`, updatedMessaging)

        const updatedData = {
            title: tripData.title,
            description: tripData.description,
            departure_date: tripData.departure_date,
            departure: tripData.departure,
            arrival: tripData.arrival,
            steps: tripData.steps,
            creator: tripData.creator,
            participants: participantsUpdated,
        };
        
        await updateData(`trips/${tripId}`, updatedData);
        fetchTripData()
    }

    useEffect(() => {
        fetchTripData();
    }, []);

    return (
        <View>
            <Text style={{ paddingBottomg: 2 }}>Titre: {tripData.title}</Text>
            <Text style={{ paddingBottomg: 2 }}>Description: {tripData.description}</Text>
            <Text style={{ paddingBottomg: 2 }}>Date départ: {tripData.departure_date}</Text>
            <Text style={{ paddingBottomg: 2 }}>Départ: {tripData.departure}</Text>
            <Text style={{ paddingBottomg: 2 }}>Arrivée: {tripData.arrival}</Text>
            <Text style={{ paddingBottomg: 2 }}>Étape(s) du trajet:</Text>
            <FlatList
                data={tripData.steps}
                renderItem={renderSteps}
                keyExtractor={(item) => item}
            />
            <Button title="Rejoindre le Trip" style={{ with: '15%' }} onPress={() => handleFollowTrip(tripId)} />
        </View>
    )
}

export default TripsDetails