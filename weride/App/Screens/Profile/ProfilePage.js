import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { readData } from "../../CRUD";
import { auth } from "../../firebase";

const ProfilePage = ({ navigation }) => {
  const currentUser = auth.currentUser.uid;

  const [userData, setUserData] = useState({});

  const fetchUserData = async () => {
    const userData = await readData(`users/${currentUser}`);
    setUserData(userData);
  }

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <View>
      <Text>First Name: {userData.firstname}</Text>
      <Text>Last Name: {userData.pseudo}</Text>
      <Text>Email: {userData.email}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
      {userData.bike ? (
        <>
          <Text>Model: {userData.bike.model}</Text>
          <Text>Brand: {userData.bike.brand}</Text>
        </>
      ) : null}

      <Button title="Modify Bike" onPress={() => navigation.navigate("Bikes")} />
    </View>
  );
};

export default ProfilePage;