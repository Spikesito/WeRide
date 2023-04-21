import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { readData } from "../../ExternalFunction/CRUD";
import { auth } from "../../firebase";
import { RadioButton } from "react-native-paper";

const HomePage = ({ navigation }) => {
  const [friendsTripsData, setFriendsTripsData] = useState({});
  const [friendsTripskeys, setFriendsTripsKeys] = useState({});
  const [tripsData, setTripsData] = useState({});
  const [tripskeys, setTripsKeys] = useState({});
  const [checked, setChecked] = useState('discover');
  let friends = []
  let currentUser = auth.currentUser.uid;

  const fetchFriends = async () => {
    if (currentUser) {
      let currentUserData = await readData(`users/${currentUser}`)
      for (let friend_id in currentUserData.friends_id) {
        if (currentUserData) {
          friends.push(friend_id)
        }
      }
    } else {
      navigation.navigate("Login")
    }
  }

  const fetchFriendsTrips = async () => {
    const tripData = await readData(`trips/`);
    for (const friend of friends) {
      setFriendsTripsKeys(Object.keys(tripData).filter((key) => {
        return tripData[key].creator === friend;
      }));
      setFriendsTripsData(Object.values(tripData).filter((entry) => {
        return entry.creator === friend;
      }));
    }
  }

  const fetchTripData = async () => {
    const tripData = await readData(`trips/`);
    setTripsKeys(Object.keys(tripData).filter((key) => {
      return tripData[key].creator;
    }));
    setTripsData(Object.values(tripData).filter((entry) => {
      return entry.creator;
    }));
  }

  useEffect(() => {
    fetchFriends();
    fetchFriendsTrips();
    fetchTripData();
  }, []);

  const renderItem = ({ item, index }) => {
    let key
    if (checked == "friends") {
      key = friendsTripskeys[index];
    } else if (checked == "discover") {
      key = tripskeys[index]
    }
    return (
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.departure_date}</Text>
        </View>
        <Button title="Voir le trip " style={{ with: '15%' }} onPress={() => navigation.navigate("TripsDetails", { key })} />
      </View>
    );
  };



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
      <View style={{ flexDirection: "row", alignItems: "left" }}>
        <RadioButton
          value="friends"
          status={checked === 'friends' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('friends')}
        />
        <Text>Mes amis :</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "left" }}>
        <RadioButton
          value="discover"
          status={checked === 'discover' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('discover')}
        />
        <Text>Découvrir :</Text>
      </View>
      <Text>----------------------------</Text>
      {checked == 'discover' ? (
        <FlatList style={{ padding: 5 }}
          data={tripsData}
          renderItem={(item, index) => renderItem(item, index)}
          keyExtractor={item => item.id}
        />
      ) : (
        <FlatList style={{ padding: 5 }}
          data={friendsTripsData}
          renderItem={(item, index) => renderItem(item, index)}
          keyExtractor={item => item.id}
        />
      )}

      <Button title="Create Trip" onPress={() => navigation.navigate("CreateTrip")} />
      <Button title="Profile Page" onPress={() => navigation.navigate("Profile")} />
      <Button title="Messaging" onPress={() => navigation.navigate("Messaging")} />

      <Button title="Log Out" onPress={handleLogOut} />
    </View>
  );
};

export default HomePage;