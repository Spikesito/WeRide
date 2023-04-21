import React, { useEffect, useState } from "react";
import { readData } from "../../ExternalFunction/CRUD";
import { View, Text, Button, FlatList } from "react-native";
import { auth } from "../../firebase";

const ProfilePage = ({ navigation }) => {
  const currentUser = auth.currentUser.uid;

  const [userData, setUserData] = useState({});
  const [tripUserData, setTripUserData] = useState({});
  const [tripUserkey, setTripUserKey] = useState({});

  const fetchUserData = async () => {
    const userData = await readData(`users/${currentUser}`);
    setUserData(userData);
  }

  const fetchTripData = async () => {
    const tripData = await readData(`trips/`);
    setTripUserKey(Object.keys(tripData).filter((key) => {
      return tripData[key].creator === currentUser;
    }));
    setTripUserData(Object.values(tripData).filter((entry) => {
      return entry.creator === currentUser;
    }));
  }

  const handleRedirectionEditTrip = (key) => {
    setUserData({});
    setTripUserKey({});
    setTripUserData({});
    navigation.navigate("EditTrip", { key })
  }

  const renderItem = ({ item, index }) => {
    const key = tripUserkey[index];
    return (
      <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <View>
          <Text>{item.title}</Text>
          <Text>{item.departure_date}</Text>
        </View>
        <Button title="Modify" style={{ with: '15%' }} onPress={() => handleRedirectionEditTrip(key)} />
      </View>
    );
  };

  useEffect(() => {
    fetchUserData();
    fetchTripData();
  }, []);

  return (
    <View>
      <Text style={{ margin: 10, fontWeight: "bold" }}>Données utilisateur: </Text>
      <Text style={{ padding: 5 }}>Prénom: {userData.firstname}</Text>
      <Text style={{ padding: 5 }}>Pseudo: {userData.pseudo}</Text>
      <Text style={{ padding: 5 }}>Email: {userData.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      {userData.bike ? (
        <>
          <Text style={{ margin: 10, fontWeight: "bold" }}>Moto: </Text>
          <Text style={{ padding: 5 }}>Modèle: {userData.bike.model}</Text>
          <Text style={{ padding: 5 }}>Marque: {userData.bike.brand}</Text>
          <Text style={{ padding: 5 }}>Année: {userData.bike.year}</Text>
          <Text style={{ padding: 5 }}>Description: {userData.bike.description}</Text>
        </>
      ) : null}
      <Button title="Modify Bike" onPress={() => navigation.navigate("Bikes")} />
      <Text style={{ margin: 10, fontWeight: "bold" }}>Trajets créées: </Text>
      <FlatList style={{ padding: 5 }}
        data={tripUserData}
        renderItem={(item, index) => renderItem(item, index)}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ProfilePage;