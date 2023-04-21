import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const friends = [
  {
    id: "1",
    name: "Gabby",
    avatar: require("../../assets/Gabby.png"),
  },
  {
    id: "2",
    name: "Christophe",
    avatar: require("../../assets/acteur/Christophe.png"),
  },
  {
    id: "3",
    name: "Jules",
    avatar: require("../../assets/acteur/Julio.png"),
  },
];

const FriendItem = ({ item, navigation }) => (
  <TouchableOpacity
    style={styles.friendItem}
    onPress={() => navigation.navigate("FriendProfile")}
  >
    <Image source={item.avatar} style={styles.avatar} />
    <View style={styles.friendContent}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

const MyFriend = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Liste d'amis</Text>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <FriendItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 30,
  },
  friendItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  friendContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default MyFriend;
