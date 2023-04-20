import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { readData } from "../../CRUD";
import { auth } from "../../firebase";

const FriendsTrips = ({ navigation }) => {
    const [trips, setTrips] = useState([]);
    const [friends, setFriends] = useState([]);
    let currentUser = auth.currentUser.uid;

    const fetchFriends = async () => {
        if (currentUser) {
            let currentUserData = await readData(`users/${currentUser}`)
            if (currentUserData) {
                setFriends(currentUserData.friends_id);
            }
        } else {
            navigation.navigate("Login")
        }
    }

    const addFriends = async () => {

    }


    const fetchTrips = async () => {
        const userTrips = [];

        // const data = await readData("trips");
        // const tripArray = [];
        // for (let key in data) {
        //   tripArray.push({
        //     id: key,
        //     ...data[key],
        //   });
        // }
        // setTrips(tripArray);

        //TODO: If Mes amis selected than print the bellow code, if Decouvrir selected then print all users code above
        for (const friendId of friends) {
            const friendTrips = await readData(`trips/${friendId}`);
            if (friendTrips) {
                userTrips.push(...friendTrips);
            }
        }
        const currentUserTrips = await readData(`trips/${currentUser.id}`);
        if (currentUserTrips) {
            userTrips.push(...currentUserTrips);
        }
        setTrips(userTrips);
    };

    useEffect(() => {
        fetchFriends();
        fetchTrips();
    }, []);

    const handleLogOut = () => {

    }

    return (
        <View>
            <Text>Trajets de mes amis:</Text>
            {friends.map((friend) => (
                <Text key={friend}>Trajet de l'ami : {friend}</Text>
            ))}
            <Button title="Back Home" onPress={() => navigation.goBack()} />

        </View>
    );
};

export default FriendsTrips;