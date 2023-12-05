import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { readData } from "../../CRUD";
import { auth } from "../../firebase";

const HomePage = ({ navigation }) => {
  const [trips, setTrips] = useState([]);
  const [friends, setFriends] = useState([]);
  let currentUser = auth.currentUser.uid;

  const fetchFriends = async () => {
    if (currentUser) {
      let currentUserData = await readData(`users/${currentUser}`)
      if (currentUserData) {
        setFriends(currentUserData.friends);
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
    const currentUserTrips = await readData(`trips/${currentUser}`);
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
    auth.signOut()
      .then(() => {
        navigation.navigate("Login")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
  return (
    <View>
      <Text>Upcoming Trips: {currentUser}</Text>
      {trips.map((trip) => (
        <Text key={trip.id}>{trip.name}</Text>
      ))}
      <Button title="Create Trip" onPress={() => navigation.navigate("CreateTrip")} />
      {/* <Button title="Add Friend" onPress={() => navigation.navigate("AddFriends")} /> */}
      <Button title="Discover Trips" onPress={() => navigation.navigate("Discover")} />
      <Button title="Friends Trips" onPress={() => navigation.navigate("FriendsTrips")} />
      <Button title="Profile Page" onPress={() => navigation.navigate("Profile")} />


      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};

export default HomePage;