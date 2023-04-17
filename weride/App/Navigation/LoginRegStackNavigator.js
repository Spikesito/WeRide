import * as React from 'react';
import LoginScreen from '../Components/Screens/Login/LoginScreen';
import RegisterScreen from '../Components/Screens/Register/RegisterScreen';
import HomeScreen from '../Components/Screens/Home/HomeScreen';

import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

export default function LoginRegStackNavigator() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    if (!user) {
        return (
            <Stack.Navigator>
                {/* screenOptions={{headerShown: false}} */}
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        )
    } else {
        return (
            <Stack.Navigator>
                {/* screenOptions={{headerShown: false}} */}
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
            </Stack.Navigator>
        )
    }

}