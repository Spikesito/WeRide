import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { createData, readData } from "../CRUD";

const MessagingPage = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [inputMessage, setInputMessage] = useState("");

  const fetchConversations = async () => {
    const data = await readData("conversations");
    const conversationArray = [];
    for (let key in data) {
      conversationArray.push({
        id: key,
        ...data[key],
      });
    }
    setConversations(conversationArray);
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  const selectConversation = async (conversationId) => {
    const conversation = await readData(`conversations/${conversationId}`);
    setSelectedConversation(conversation);
  };

  const sendMessage = async () => {
    if (inputMessage.trim() !== "" && selectedConversation) {
      const newMessage = {
        content: inputMessage.trim(),
        sender: "user1", // Replace with the current user's ID
        conversation: selectedConversation.id,
      };
      const messageId = await createData("messages/", newMessage);
      setInputMessage("");

      // Add the message ID to the conversation's messages list
      const updatedConversation = {
        ...selectedConversation,
        messages: [...selectedConversation.messages, messageId],
      };
      await updateData(`conversations/${selectedConversation.id}`, updatedConversation);
      setSelectedConversation(updatedConversation);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        {conversations.map((conversation) => (
          <View key={conversation.id} style={{ padding: 10 }}>
            <Button
              title={`Conversation with ${conversation.participants.join(", ")}`}
              onPress={() => selectConversation(conversation.id)}
            />
          </View>
        ))}
      </ScrollView>
      {selectedConversation && (
        <View style={{ flex: 1 }}>
          <ScrollView>
            {selectedConversation.messages.map((messageId) => (
              <View key={messageId} style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{selectedConversation.messages[messageId].sender}</Text>
                <Text>{selectedConversation.messages[messageId].content}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TextInput
              value={inputMessage}
              onChangeText={setInputMessage}
              style={{ flexGrow: 1, borderWidth: 1, borderColor: "gray", padding: 5 }}
            />
            <Button title="Send" onPress={sendMessage} />
          </View>
        </View>
      )}
    </View>
  );
};

export default MessagingPage;