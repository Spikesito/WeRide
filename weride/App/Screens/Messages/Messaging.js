// MessagingPage.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { readData } from "../../ExternalFunction/CRUD";
import { auth } from "../../firebase";

const MessagingPage = ({ navigation }) => {
  let currentUser = auth.currentUser.uid;

  const [trips, setTrips] = useState([])
  const [conversations, setConversations] = useState([]);
  const [messagingIdsToDisplay, setMessagingIdsToDisplay] = useState([]);

  const fetchData = async () => {
    const trips = await readData("trips/");
    const conversations = await readData("messaging/");

    setTrips(trips);
    setConversations(conversations);

    const filteredConversations = Object.keys(conversations).filter((key) => {
      if (conversations[key].participant.includes(currentUser)) {
        return conversations[key];
      }
    });

    setMessagingIdsToDisplay(filteredConversations);
  }

  useEffect(() => {
    fetchData()
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{backgroundColor:"red", paddingVertical:5, paddingHorizontal:15, borderRadius:15, marginVertical: 5,marginLeft:'10%',width: "80%"}}
      onPress={() => navigation.navigate("Conversation", { conversationId: conversations[item] })}
    >
      <Text>Conversation {trips[item].title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text>Messaging</Text>
      <FlatList
        data={messagingIdsToDisplay}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MessagingPage;