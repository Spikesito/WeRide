import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";

const CreatePost = ({ userImage, userName }) => {
  const navigation = useNavigation();
  const Home = createBottomTabNavigator();

  const handleAddPost = () => {
    console.log("Post ajouté");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Titre de la balade</Text>
        <TextInput
          style={styles.input}
          placeholder="Nouveau titre de la balade"
        />

        <Text style={styles.postTitle}>Faites votre post</Text>
        <View style={styles.postInputContainer}>
          <FontAwesomeIcon style={styles.icon} icon={faPaperclip} />
          <TextInput
            style={styles.postInput}
            placeholder="Description du nouveau post"
            multiline
            numberOfLines={6}
            scrollEnabled
          />
        </View>

        <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
          <Text style={styles.addButtonText}>Ajouter le post</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: '10%',
    marginBottom: '5%',
  },
  postInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  postInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    flex: 1,
    minHeight: 180,
    maxHeight: 200,
  },
  addButton: {
    backgroundColor: "#FFCC33",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: '65%',
    borderRadius: 5,
  },
  addButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
