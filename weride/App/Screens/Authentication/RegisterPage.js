import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "../../firebase";

import { createNewUser } from "../../Components/ExternalFunction/CRUD";

const RegisterPage = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [newPseudo, setPseudo] = useState("");
  const [newEmail, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(newEmail, password);
      const userData = {
        firstname: firstName,
        pseudo: newPseudo,
        email: newEmail,
        phone_number: phone_number,
        birth_date: birthDate,
        trajetsCrees: [],
        friends: [],
        motos: [],
        messagerie: [],
      };
      await createNewUser(`users/${user.uid}`, userData);
      navigation.navigate("Home");
    } catch (error) {
      // Handle registration errors here
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Prénom:</Text>
      <TextInput value={firstName} onChangeText={setFirstName} />

      <Text>Pseudo:</Text>
      <TextInput value={newPseudo} onChangeText={setPseudo} />

      <Text>Email:</Text>
      <TextInput value={newEmail} onChangeText={setEmail} />

      <Text>Téléphone:</Text>
      <TextInput value={phone_number} onChangeText={setPhoneNumber} />

      <Text>Date de naissance (JJ/MM/AAAA):</Text>
      <TextInput value={birthDate} onChangeText={setBirthDate} />

      <Text>Mot de passe:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      <Button title="Register" onPress={register} />
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default RegisterPage;