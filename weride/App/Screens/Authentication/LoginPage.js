import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { auth } from "../../firebase";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorLogin = false;

  useEffect (() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate("Home")
      }
    })
  }, [])

  const login = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
      navigation.navigate("Home");
    } catch (error) {
      errorLogin = true;
      console.error(error);
    }
  };

  return (
    <View>
      <Text>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} />

      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry />

      {errorLogin ? (
        <View>
          <Text> Wrong email or password </Text>
        </View>
      ) : null}

      <Button title="Login" onPress={login} />
      <Button title="Register" onPress={() => navigation.navigate("Register")} />
    </View>
  );
};

export default LoginPage;