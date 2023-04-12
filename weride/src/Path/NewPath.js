import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyPathScreen from '../screens/MyPathScreen';
import { NavigationContainer } from "@react-navigation/native";


const NewPath = () => {
    const NewPath = createNativeStackNavigator();
    return (
        <NavigationContainer>
            {/* <NewPath.Navigator> */}
                <NewPath.Screen name="MesTrajets" component={MyPathScreen}/>
                <Text>NewPath</Text>
            {/* </NewPath.Navigator> */}
        </NavigationContainer>
  )
}
export default NewPath