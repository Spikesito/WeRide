import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { readData } from "../../CRUD";
import ConversationList from "./ConversationList";

const MessagingPage = ({ currentUser, navigation }) => {
  const [conversations, setConversations] = useState([]);

  const fetchConversations = async () => {
    const userConversations = await readData(`conversations/${currentUser.id}`);
    setConversations(userConversations);
  };

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <View>
      <ConversationList
        conversations={conversations}
        onConversationPress={(conversation) =>
          navigation.navigate("Conversation", { conversation })
        }
      />
    </View>
  );
};

export default MessagingPage;