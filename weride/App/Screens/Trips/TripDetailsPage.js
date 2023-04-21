import { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { readData } from "../../Components/ExternalFunction/CRUD";

const TripsDetails = ({ navigation, route }) => {
    const tripId = route.params.key;
    const [tripData, setTripData] = useState({})

    const fetchTripData = async () => {
        const tripData = await readData(`trips/${tripId}`);
        setTripData(tripData);
    }

    const renderSteps = ({ item }) => (
        <Text style={{ paddingVertical: 2 }}>{item}</Text>
    );

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

        </View>
    )
}

export default TripsDetails