import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigation } from "@react-navigation/native";

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
        <ScrollView style={styles.container}>
            <Image source={require('../../assets/Emile.png')} style={{ width: '100%', height: '75%', zIndex: 0 }} />

            <View style={styles.containerHead}>
                <TextInput
                    style={styles.input}
                    onChangeText={setTextInput}
                    value={textInput}
                    placeholder="SEGURET Emile"
                />
                <TouchableOpacity onPress={() => navigation.navigate('Profil')}>
                    <FontAwesomeIcon icon={icon({ name: 'pen' })} />
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

                <View style={styles.body}>
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
    input: {
        fontSize: 20,
        width: '90%',
        height: '70%',
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
        height: '70%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 3,
        zIndex: 10,
        marginTop: '2%',
    },
    textArea: {
        marginTop: '3%',
        width: '90%',
    },
    text:{
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