import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { readData } from "../../CRUD";
import { updateData } from "../../CRUD";
import { auth } from "../../firebase";

const BikePage = ({ navigation }) => {
    const currentUser = auth.currentUser.uid;
    const [new_model, setModel] = useState("")
    const [new_brand, setBrand] = useState("")
    const [new_year, setYear] = useState("")
    const [new_description, setDescription] = useState("")

    let currentUserData
    const [userData, setUserData] = useState({});


    const fetchUserData = async () => {
        console.log("user: ", currentUser)
        currentUserData = await readData(`users/${currentUser}`)
        setUserData(currentUserData)
    }
    
    useEffect(() => {
        fetchUserData()
    }, [])
    
    const saveBike = async () => {
        await fetchUserData()
        let updatedBike = {}

        // Créez une copie de l'objet friends_id
        console.log(userData)
        if (userData.bike) {
            updatedBike = {...userData.bike}
        }

        // // Ajoutez la nouvelle paire clé-valeur à l'objet copié
        updatedBike.model = new_model;
        updatedBike.brand = new_brand;
        updatedBike.year = new_year;
        updatedBike.description = new_description;

        let updatedUser = {
            firstname: currentUserData.firstname,
            pseudo: currentUserData.pseudo,
            email: currentUserData.email,
            phone_number: currentUserData.phone_number,
            birth_date: currentUserData.birth_date,
            friends_id: currentUserData.friends_id,
            bike: updatedBike // Utilisez l'objet copié et mis à jour
        };

        return updateData(`users/${currentUser}`, updatedUser);
    };

    const handleSaveBike = async () => {
        saveBike()
        navigation.navigate("Profile")
    }


    return (
        <View>
            <Text>Bikes</Text>
            {currentUserData ? (
                <>
                    <Text>Model : {currentUserData.bike.model}</Text>
                    <Text>Marque : {currentUserData.bike.brand}</Text>
                    <Text>Year : {currentUserData.bike.name}</Text>
                    <Text>Description : {currentUserData.bike.description}</Text>

                </>
            ) :
                <>
                    <View>
                        <Text>Modèle:</Text>
                        <TextInput value={new_model} onChangeText={setModel} />

                        <Text>Marque:</Text>
                        <TextInput value={new_brand} onChangeText={setBrand} />

                        <Text>Année:</Text>
                        <TextInput value={new_year} onChangeText={setYear} />

                        <Text>Description:</Text>
                        <TextInput value={new_description} onChangeText={setDescription} />

                        <Button title="Save Bike" onPress={handleSaveBike} />
                        <Button title="Back to profile" onPress={() => navigation.goBack()} />
                    </View>
                </>
            }

        </View>
    );
};

export default BikePage;