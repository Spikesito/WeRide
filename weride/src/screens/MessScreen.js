import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input } from 'react-native-elements';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

const discussions = [
  {
    id: '1',
    name: 'Alice',
    avatar: 'https://via.placeholder.com/150',
    lastMessage: 'Hey, comment ça va ?',
    timestamp: '12:30',
  },
  {
    id: '2',
    name: 'Bob',
    avatar: 'https://via.placeholder.com/150',
    lastMessage: 'Salut Alice, tout va bien et toi ?',
    timestamp: '11:15',
  },
  // Ajouter plus de discussions si nécessaire
];
const onlineUsers = [
  {
    id: '1',
    name: 'Alice',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: '2',
    name: 'Bob',
    avatar: 'https://via.placeholder.com/150',
  },
  // Ajouter plus d'utilisateurs connectés si nécessaire
];

const MessScreen = () => {
  const navigation = useNavigation();

  const renderOnlineUser = ({ item }) => (
    <View style={styles.onlineUser}>
      <Image source={{ uri: item.avatar }} style={styles.onlineUserAvatar} />
      <Text style={styles.onlineUserName}>{item.name}</Text>
    </View>
  );
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.discussionItem}
      onPress={() => navigation.navigate('Chat', { discussionId: item.id })}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.discussionContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
      <Text style={styles.timestamp}>{item.timestamp}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Messages</Text>
        </TouchableOpacity>
        <View style={styles.verticalLine} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Groupes</Text>
        </TouchableOpacity>
      </View>
      <Input
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBar}
        placeholder="Rechercher"
        onChangeText={(text) => console.log(text)}
        leftIcon={<MaterialIcons name="search" size={24} color="gray" />}
        rightIcon={<AntDesign name="closecircle" size={20} color="gray" />}
      />
      <View style={styles.onlineUsersContainer}>
        <FlatList
          horizontal
          data={onlineUsers}
          renderItem={renderOnlineUser}
          keyExtractor={(item) => item.id}
          style={styles.onlineUsersList}
        />
      </View>
      <FlatList
        data={discussions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
    
  );
};

export default MessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
  },
  verticalLine: {
    height: 20,
    width: 1,
    backgroundColor: '#ccc',
  },
  searchBarContainer: {
    paddingHorizontal: 0,
    marginHorizontal: 20,
    width:'90%',
  },
  searchBar: {
    paddingHorizontal: 10,
    paddingVertical: 1,
    marginhorizontal: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  discussionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  discussionContent: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 16,
    color: '#666',
  },
  timestamp: {
    fontSize: 14,
    color: '#999',
    marginLeft: 10,
  },
  onlineUsersContainer: {
    height: 90,
  },
  onlineUsersList: {
    paddingLeft: 15,
  },
  onlineUser: {
    alignItems: 'center',
    marginRight: 15,
  },
  onlineUserAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  onlineUserName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
