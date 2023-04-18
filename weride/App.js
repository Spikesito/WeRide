import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "./App/firebase";

import LoginPage from "./App/Screens/LoginPage";
import RegisterPage from "./App/Screens/RegisterPage";
import HomePage from "./App/Screens/HomePage";
import CreateTripPage from "./App/Screens/CreateTripPage";
import MessagingPage from "./App/Screens/MessagingPage";
import ProfilePage from "./App/Screens/ProfilePage";
import EditProfilePage from "./App/Screens/EditProfilePage";
import AddFriends from "./App/Screens/AddFriends";

const Stack = createStackNavigator();

const App = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(currentUser) {
    setCurrentUser(currentUser);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen
          name="Home"
          component={HomePage}
          initialParams={{}}
        />
        <Stack.Screen
          name="CreateTrip"
          component={CreateTripPage}
          initialParams={{ currentUser }}
        />
        <Stack.Screen
          name="AddFriends"
          component={AddFriends}
          initialParams={{}}
        />
        <Stack.Screen name="Messaging" component={MessagingPage} />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          initialParams={{ currentUser }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfilePage}
          initialParams={{ currentUser }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;