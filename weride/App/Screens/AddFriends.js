import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { createData, readData, updateData } from "../CRUD";
import { auth } from "../firebase";

const AddFriends = ({navigation}) => {
    let friends
    let currentUserData
    const currentUser = auth.currentUser.uid

    const fetchUserData = async () => {
        console.log("user: ", currentUser)
        currentUserData = await readData(`users/${currentUser}`)
        return currentUserData
    }

    useEffect(() => {
        fetchUserData()
    },[])

    const addFriend = () => {
        friends = {
            firstname: currentUserData.firstname,
            pseudo: currentUserData.pseudo,
            email: currentUserData.email,
            phone_number: currentUserData.phone_number,
            birth_date: currentUserData.birth_date,
            friends_id: ["qC3q1nIF6tdW6Hf6SzKCoZrJt582"]
        };
        // friends.push("ktrZz1ObidcRawmtRikVXoARmrh1")
        updateData(`users/${currentUser}`, friends);
        // navigation.navigate("Home")
    };

    return (
        <View>
            <Button title="Add Friend" onPress={addFriend} />
        </View>
    );
};

export default AddFriends;