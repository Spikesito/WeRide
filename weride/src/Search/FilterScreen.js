import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from "@react-navigation/native";

const FilterScreen = () => {
    const navigation = useNavigation();
    const [location, setLocation] = useState('');

    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

    const handleDayPress = day => {
        setSelectedDate(day.dateString);
    };
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonPress = (button) => {
        if (selectedButton === button) {
            setSelectedButton(null);
        } else {
            setSelectedButton(button);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.locationContainer}>
                <Text style={styles.title}>Lieu de départ</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Départ"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
            <View style={{marginBottom: '5%',}}>
                <Text style={styles.title}>Date de départ</Text>
                <Calendar
                    onDayPress={handleDayPress}
                    markedDates={{ [selectedDate]: { selected: true } }}
                />
            </View>
            <Text style={styles.title}>Type de trajet</Text>
            <View style={styles.typeButtonContainer}>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'button1' && styles.selectedButton,
                    ]}
                    onPress={() => handleButtonPress('button1')}
                >
                    <Text style={styles.buttonText}>Balade</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                        styles.button,
                        selectedButton === 'button2' && styles.selectedButton,
                    ]}
                    onPress={() => handleButtonPress('button2')}
                >
                    <Text style={styles.buttonText}>Route</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.DeletebuttonBottom} onPress={() => navigation.navigate('Search')}>
                    <Text style={styles.buttonTextBottom}>Effacer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SearchbuttonBottom} onPress={() => navigation.navigate('Result')}>
                    <Text style={styles.buttonTextBottom}>Rechercher (1250)</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 24,
    },
    locationContainer: {
        marginBottom: 16,
    },
    title: {
        fontSize: '4vw',
        marginRight: 16,
        marginBottom: '3%',
    },
    input: {
        fontSize: '4vw',
        width: '90%',
        height: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        alignItems: 'center',
    },
    SearchbuttonBottom: {
        backgroundColor: '#FFCC33',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 40,
        alignItems: 'center',
    },
    typeButtonContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
    },
    button: {
        padding: 5,
        backgroundColor: '#eee',
        borderRadius: 5,
        margin: 10,
    },
    selectedButton: {
        backgroundColor: '#2196F3',
    },
    buttonText: {
        fontSize: 14,
        color: '#333',
    },

});

// const FilterScreen = () => {
//   const [selectedDate, setSelectedDate] = useState(new Date().toISOString().slice(0, 10));

//   const handleDayPress = day => {
//     setSelectedDate(day.dateString);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Date de départ</Text>
//       <Calendar
//         onDayPress={handleDayPress}
//         markedDates={{ [selectedDate]: { selected: true } }}
//       />
//       <Text style={styles.selectedDateText}>Date sélectionnée: {selectedDate}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   selectedDateText: {
//     fontSize: 16,
//     marginTop: 20,
//   },
// });

export default FilterScreen;