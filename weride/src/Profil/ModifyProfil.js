import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ProfilScreen = () => {
    const navigation = useNavigation();

    const [text, setText] = useState("Motard passionné depuis plusieurs années et ayant eu plusieurs engins, je n'attend plus qu'une seule chose : qu'un dame veuille bien passer son permis moto afin d'aller faire de jolie road trip !");
    const [text2, setText2] = useState('Lorem');

    const [textInput, setTextInput] = useState('SEGURET Emile');
    const [textInput2, setTextInput2] = useState('Tenere 700 - Yamaha');
    const [textInput3, setTextInput3] = useState('2020');

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Choisissez une option');

    const options = [
        'Route',
        'Cross',
    ];

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setDropdownOpen(false);
    };

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Image source={require('../../assets/acteur/Emile.png')} style={styles.image} />

            <View style={styles.containerHead}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTextInput}
                    value={textInput}
                    placeholder="SEGURET Emile"
                />
                <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                    <FontAwesomeIcon icon={faCheck} style={{color: 'white'}}/>
                </TouchableOpacity>
            </View>

            <View style={styles.containerBody}>
                {/* <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eget nibh vitae vel ante cursus tincidunt.</Text> */}
                <View>
                    <TextInput
                        multiline={true}
                        numberOfLines={3}
                        onChangeText={(text) => setText(text)}
                        value={text}
                        style={styles.textArea}
                    />
                </View>
                <View style={styles.body}>
                    <Text style={{ fontWeight: 'bold' }}>Moto</Text>
                    <TextInput
                        style={styles.input2}
                        onChangeText={setTextInput2}
                        value={textInput2}
                        placeholder="Tenere 700 - Yamaha"
                    // onChangeText={setLocation}
                    />
                    <Text style={styles.text}>Année:</Text>
                    <TextInput
                        style={styles.input2}
                        onChangeText={setTextInput3}
                        value={textInput3}
                        placeholder="2020"
                    // onChangeText={setLocation}
                    />
                    <Text style={styles.text}>Description:</Text>
                    <TextInput
                        multiline={true}
                        numberOfLines={2}
                        onChangeText={(text2) => setText2(text2)}
                        value={text2}
                        style={styles.textArea}
                    // onChangeText={setLocation}
                    />
                </View>

                <View style={styles.body1}>
                    <Text style={{ fontWeight: 'bold' }}>Trajet effectués</Text>
                    <Text>10 trajets depuis juillet 2022</Text>
                    <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
                        <Text style={styles.VoirHistorique}>Voir l'historique</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    contentContainer: {
        paddingBottom: 20, // Add some padding at the bottom
    },
    image: {
        width: '100%',
        height: 400, // Change this to a fixed height
        resizeMode: 'cover',
    },
    containerHead: {
        width: '80%',
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: '-10%',
        marginLeft: '10%'
    },
    containerBody: {
        marginTop: '5%',
        marginLeft: '5%',
    },
    body: {
        marginTop: '5%'
    },
    body1: {
        marginTop: '-8%',
    },
    input: {
        fontSize: 16,
        width: '70%',
        height: '80%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        zIndex: 10,
        marginTop: '2%',
        color: 'white',
    },
    input2: {
        fontSize: 16,
        width: '90%',
        height: '12%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        zIndex: 10,
        marginTop: '2%',
    },
    textArea: {
        marginTop: '3%',
        width: '90%',
        borderWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        marginTop: '2%',
    },
    VoirHistorique: {
        fontSize: 12,
        marginLeft: '3%',
        marginTop: '1%',
        marginBottom: '5%'
    },
})
export default ProfilScreen;