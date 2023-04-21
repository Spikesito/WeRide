import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { readData, updateData } from "../../Components/ExternalFunction/CRUD";
import { auth } from "../../firebase";

const AddFriends = ({ navigation }) => {
    let currentUserData
    let friendData
    const currentUser = auth.currentUser.uid

    const fetchUserData = async () => {
        console.log("user: ", currentUser)
        currentUserData = await readData(`users/${currentUser}`)
        return currentUserData
    }
    
    useEffect(() => {
        fetchUserData()
    }, [])
    
    const addFriend = async () => {
        friendData = await readData("users/" + "qRPBlo2Kq5ZBjjaw3QcMmBMeNqy1")
        // Créez une copie de l'objet friends_id
        let updatedFriendsId = { ...currentUserData.friends_id };
        // Ajoutez la nouvelle paire clé-valeur à l'objet copié
        updatedFriendsId["qRPBlo2Kq5ZBjjaw3QcMmBMeNqy1"] = friendData.firstname;

        let friends = {
            firstname: currentUserData.firstname,
            pseudo: currentUserData.pseudo,
            email: currentUserData.email,
            phone_number: currentUserData.phone_number,
            birth_date: currentUserData.birth_date,
            friends_id: updatedFriendsId, // Utilisez l'objet copié et mis à jour
        };

        return updateData(`users/${currentUser}`, friends);
    };

    return (
        <View>
            <Button title="Add Friend" onPress={addFriend} />
        </View>
    );
};

export default AddFriends;