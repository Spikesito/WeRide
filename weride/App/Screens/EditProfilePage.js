import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { updateData } from "../CRUD";

const EditProfilePage = ({ currentUser, navigation }) => {
  const [firstName, setFirstName] = useState(currentUser.prenom);
  const [lastName, setLastName] = useState(currentUser.nom);
  const [email, setEmail] = useState(currentUser.email);

  const updateProfile = async () => {
    const updatedData = {
      prenom: firstName,
      nom: lastName,
      email: email,
    };
    await updateData(`users/${currentUser.id}`, updatedData);
    navigation.goBack(); // Navigate back to the ProfilePage
  };

  return (
    <View>
      <Text>First Name:</Text>
      <TextInput value={firstName} onChangeText={setFirstName} />

      <Text>Last Name:</Text>
      <TextInput value={lastName} onChangeText={setLastName} />

      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Button title="Save Changes" onPress={updateProfile} />
    </View>
  );
};

export default EditProfilePage;