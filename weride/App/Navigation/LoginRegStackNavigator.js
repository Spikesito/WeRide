import * as React from 'react';
import LoginScreen from '../Components/Screens/Login/LoginScreen';
import RegisterScreen from '../Components/Screens/Register/RegisterScreen';
import HomeScreen from '../Components/Screens/Home/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function LoginRegStackNavigator() {
    return (
        <Stack.Navigator>
            {/* screenOptions={{headerShown: false}} */}
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}