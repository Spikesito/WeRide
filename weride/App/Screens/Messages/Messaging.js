// MessagingPage.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { readData } from "../../Components/ExternalFunction/CRUD";
import { auth } from "../../firebase";

const MessagingPage = ({ navigation }) => {
  let currentUser = auth.currentUser.uid;

  const [keysConversations, setKeysConversations] = useState([]);
  const [conversations, setConversations] = useState([]);

  const fetchParticipants = () => {
    
  }

  const fetchConversations = async () => {
    // Replace "conversations" with the appropriate path to conversations in your database
    const userConversations = await readData("messaging/");
    setKeysConversations(Object.keys(userConversations).filter((key) =>{
      console.log(key);
      return userConversations[key].participants.includes(currentUser);
    }));
    setConversations(Object.values(userConversations).filter((key) =>{
      return userConversations[key].participants.includes(currentUser);
    }));
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Conversation", { conversationId: item.id })}
    >
      <Text>Conversation {item.id}</Text>
    </TouchableOpacity>
  );
  
  return (
    <View>
      <Text>Messaging</Text>
      <FlatList
        data={conversations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MessagingPage;