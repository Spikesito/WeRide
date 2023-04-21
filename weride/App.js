import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { auth } from "./App/firebase";

import LoginPage from "./App/Screens/Authentication/LoginPage";
import RegisterPage from "./App/Screens/Authentication/RegisterPage";
import HomePage from "./App/Screens/Home/HomePage";
import CreateTripPage from "./App/Screens/Trips/CreateTripPage";
import ProfilePage from "./App/Screens/Profile/ProfilePage";
import EditProfilePage from "./App/Screens/Profile/EditProfilePage";
import AddFriends from "./App/Screens/Home/AddFriends";
import FriendsTrips from "./App/Screens/Home/FriendsTrips";

import ConversationPage from "./App/Screens/Messages/ConversationPage";
import BikePage from "./App/Screens/Profile/BikePage";
import MessagingPage from "./App/Screens/Messages/Messaging";
import EditTripsPage from "./App/Screens/Profile/EditTripsPage";
import TripsDetails from "./App/Screens/Trips/TripDetailsPage";

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

        <Stack.Screen name="Home" component={HomePage} initialParams={{}} />
        <Stack.Screen name="CreateTrip" component={CreateTripPage} initialParams={{ currentUser }} />
        <Stack.Screen name="AddFriends" component={AddFriends} initialParams={{}} />
        <Stack.Screen name="TripsDetails" component={TripsDetails} initialParams={{}} />

        <Stack.Screen name="FriendsTrips" component={FriendsTrips} initialParams={{}} />
        <Stack.Screen name="Conversation" component={ConversationPage} />
        <Stack.Screen name="Messaging" component={MessagingPage} />

        <Stack.Screen name="Profile" component={ProfilePage} initialParams={{ currentUser }} />
        <Stack.Screen name="EditProfile" component={EditProfilePage} initialParams={{ currentUser }} />
        <Stack.Screen name="Bikes" component={BikePage} />

        <Stack.Screen name="EditTrip" component={EditTripsPage} initialParams={{}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
