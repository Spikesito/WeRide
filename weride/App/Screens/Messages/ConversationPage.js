// ConversationPage.js
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { readData, createData } from "../../Components/ExternalFunction/CRUD";

const ConversationPage = ({ route }) => {
  const { conversationId } = route.params;
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const fetchMessages = async () => {
    const conversationMessages = await readData(`conversations/${conversationId}/messages`);
    setMessages(conversationMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() !== "") {
      const messageData = {
        id: "",
        content: newMessage,
        author: "", // Set the author ID here
        conversation: conversationId,
      };

      // Replace "messages" with the appropriate path to messages in your database
      await createData("messages", messageData);
      fetchMessages();
      setNewMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <View>
      <Text>
        {item.author}: {item.content}
      </Text>
    </View>
  );

  return (
    <View>
      <Text>Conversation {conversationId}</Text>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        placeholder="Type a message"
      />
      <TouchableOpacity onPress={sendMessage}>
        <Text>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ConversationPage;