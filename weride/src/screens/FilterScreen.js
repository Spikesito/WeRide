import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';


const FilterScreen = () => {
    const [location, setLocation] = useState('');
    const [direction, setDirection] = useState('');

    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [selectedOption1, setSelectedOption1] = useState('Choisissez un type de moto');

    const options1 = [
        'Route',
        'Roadsters',
        'Sportives',
        'Cruisers',
        'Cross',
        'Duals sport',
    ];

    const handleOptionSelect1 = (option1) => {
        setSelectedOption1(option1);
        setDropdownOpen1(false);
    };

    const [dropdownOpen2, setDropdownOpen2] = useState(false);
    const [selectedOption2, setSelectedOption2] = useState('Choisissez le cylindré');

    const options2 = [
        'Moins de 50cc',
        'De 50cc à 125cc',
        'De 125cc à 250cc',
        'De 250cc à 500cc',
        'De 500cc à 750cc',
        'De 750cc à 1000cc',
        'Plus de 1000cc',
    ];

    const handleOptionSelect2 = (option2) => {
        setSelectedOption2(option2);
        setDropdownOpen2(false);
    };

    const [dropdownOpen3, setDropdownOpen3] = useState(false);
    const [selectedOption3, setSelectedOption3] = useState('Choisissez la distance du trajet');

    const options3 = [
        'Trajets courts : moins de 50 km',
        'Trajets moyens : de 50 km à 200 km',
        'Trajets longs : de 200 km à 500 km',
        'Grandes distances : plus de 500 km',
    ];

    const handleOptionSelect3 = (option3) => {
        setSelectedOption3(option3);
        setDropdownOpen3(false);
    };

    const [dropdownOpen4, setDropdownOpen4] = useState(false);
    const [selectedOption4, setSelectedOption4] = useState('Choisissez le nombre de personne');

    const options4 = [
        'Petite balade : de 2 à 5 motocyclistes',
        'Balade moyenne : de 6 à 10 motocyclistes',
        'Grande balade : de 11 à 20 motocyclistes',
        'Rassemblement : plus de 20 motocyclistes',
    ];

    const handleOptionSelect4 = (option4) => {
        setSelectedOption4(option4);
        setDropdownOpen4(false);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.locationContainer}>
                <Text style={styles.title}>Lieu</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Départ"
                    value={location}
                    onChangeText={setLocation}
                />
            </View>
            <View style={styles.directionContainer}>
                <Text style={styles.subtitle}>Vers</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Arrivé"
                    value={direction}
                    onChangeText={setDirection}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Date</Text>
                <TouchableOpacity style={styles.dropdownButton}>
                    <Text style={styles.dropdownButtonText}>Dropdown</Text>
                </TouchableOpacity>
            </View>
            {/* // Select type moto */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Type de moto</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDropdownOpen1(!dropdownOpen1)}
                >
                    <Text style={styles.buttonText}>{selectedOption1}</Text>
                </TouchableOpacity>
                {dropdownOpen1 && (
                    <View style={styles.optionsContainer}>
                        {options1.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.option}
                                onPress={() => handleOptionSelect1(option)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            {/* Select Cylindré  */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Cylindré</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDropdownOpen2(!dropdownOpen2)}
                >
                    <Text style={styles.buttonText}>{selectedOption2}</Text>
                </TouchableOpacity>
                {dropdownOpen2 && (
                    <View style={styles.optionsContainer}>
                        {options2.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.option}
                                onPress={() => handleOptionSelect2(option)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            {/* Select Distance  */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Distance</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDropdownOpen3(!dropdownOpen3)}
                >
                    <Text style={styles.buttonText}>{selectedOption3}</Text>
                </TouchableOpacity>
                {dropdownOpen3 && (
                    <View style={styles.optionsContainer}>
                        {options3.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.option}
                                onPress={() => handleOptionSelect3(option)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            {/* Nombre de personne */}
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Nombre de personne</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDropdownOpen4(!dropdownOpen4)}
                >
                    <Text style={styles.buttonText}>{selectedOption4}</Text>
                </TouchableOpacity>
                {dropdownOpen4 && (
                    <View style={styles.optionsContainer}>
                        {options4.map((option) => (
                            <TouchableOpacity
                                key={option}
                                style={styles.option}
                                onPress={() => handleOptionSelect4(option)}
                            >
                                <Text style={styles.optionText}>{option}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )}
            </View>
            <View style={styles.bottomContainer}>
                <TouchableOpacity style={styles.DeletebuttonBottom} onPress={() => navigation.navigate('Filter')}>
                    <Text style={styles.buttonTextBottom}>Effacer</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.SearchbuttonBottom} onPress={() => navigation.navigate('Filter')}>
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
    directionContainer: {
        marginBottom: 16,
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    title: {
        fontSize: '4vw',
        marginRight: 16,
        marginBottom: '3%',
    },
    subtitle: {
        fontSize: '3vw',
        marginBottom: 8,
    },
    input: {
        fontSize: '4vw',
        width: '90%',
        height: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    dropdownButton: {
        borderRadius: 8,
        width: '80%',
        height: '10%',
        alignItems: 'center',
    },
    dropdownButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    moreCriteriaButton: {
        backgroundColor: '#007AFF',
        alignSelf: 'center',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        alignItems: 'center',
        position: 'absolute',
        bottom: 32,
        width: '80%',
    },
    moreCriteriaButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    optionsContainer: {
        zIndex: 10,
        // position: 'absolute',
        // top: 50,
        marginLeft: '10%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    option: {
        marginLeft: '10%',
        paddingVertical: 5,
    },
    optionText: {
        zIndex: 10,
        fontSize: 16,
    },
    button: {
        zIndex: 1,
        backgroundColor: '#FFCC33',
        padding: 5,
        width: '85%',
        borderRadius: 5,
        marginLeft: '10%',
    },
    buttonText: {
        zIndex: 1,
        fontSize: '4vw',
    },
    bottomContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: '5%',
        alignItems: 'center',
    },
    DeletebuttonBottom:{
    },
    SearchbuttonBottom: {
        borderWidth: 2,
        borderRadius: 5,
        paddingVertical: 5  , 
        paddingHorizontal: 40, 
        alignItems: 'center',
    },

});

export default FilterScreen;