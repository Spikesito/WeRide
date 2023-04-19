import React from "react";
import { View, Text, Button } from "react-native";

const ProfilePage = ({ currentUser }) => {
  return (
    <View>
      <Text>First Name: {currentUser.prenom}</Text>
      <Text>Last Name: {currentUser.nom}</Text>
      <Text>Email: {currentUser.email}</Text>
      <Text>Trips Created: {currentUser.trajetsCrees.length}</Text>
      <Text>Friends: {currentUser.friends.length}</Text>
      <Text>Motos: {currentUser.motos.length}</Text>
      <Text>Conversations: {currentUser.messagerie.length}</Text>
      <Button title="Edit Profile" onPress={() => navigation.navigate("EditProfile")} />
    </View>
  );
};

export default ProfilePage;