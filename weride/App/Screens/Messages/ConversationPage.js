import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { readData } from "../../CRUD";

const ConversationPage = ({ route }) => {
  const { conversation } = route.params;
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const conversationMessages = await readData(`messages/${conversation.id}/`);
    setMessages(conversationMessages);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <View>
      <Text>{conversation.name}</Text>
      {messages.map((message) => (
        <Text key={message.id}>{message.content}</Text>
      ))}
    </View>
  );
};

export default ConversationPage;