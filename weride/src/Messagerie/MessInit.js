import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faPaperPlane,
  faPaperclip,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const MessScreen = () => {
  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 85 : 30}
      enabled
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} style={styles.backIcon} />
            </TouchableOpacity>
            <Text style={styles.title}>Christophe Seguret</Text>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => navigation.navigate("Profiluser")}
            >
              <Image
                source={require("../../assets/acteur/Christophe.png")}
                style={styles.photo}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            {/* Ici, mapper les messages à partir de liste de messages */}
            <View style={styles.message}>
              <View style={styles.senderPhotoContainer}>
                <Image
                  source={require("../../assets/acteur/Christophe.png")}
                  style={styles.senderPhoto}
                />
              </View>
              <View style={styles.senderMessageContainer}>
                <Text style={styles.senderMessageText}>
                  Hey, comment ça va ?
                </Text>
                <Text style={styles.timeText}>13:45</Text>
              </View>
            </View>
            <View style={[styles.message1]}>
              <View style={styles.myMessageContainer1}>
                <Text style={styles.myMessageText1}>
                  Salut Alice, ça va bien et toi ?
                </Text>
                <Text style={[styles.timeText, styles.timeText1]}>13:48</Text>
              </View>
            </View>
          </ScrollView>
          <View style={styles.inputContainer}>
            <TouchableOpacity style={styles.attachmentButton}>
              <FontAwesomeIcon icon={faPaperclip} />
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Écrivez un message..."
              multiline
              maxHeight={100}
              scrollEnabled
            />
            <TouchableOpacity style={styles.sendButton}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default MessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#FFCC33",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  backIcon: {
    color: "white",
    marginRight: 10,
  },
  title: {
    color: "white",
    fontSize: 24,
    flex: 1,
    textAlign: "center",
  },
  plusButton: {
    width: 40,
    height: 40,
  },
  photo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  message: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 15,
    backgroundColor: "#BAC6D5",
    borderRadius: 15,
    flexDirection: "row",
    maxWidth: "70%",
  },
  message1: {
    padding: 15,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 100,
    backgroundColor: "#BAC6D5",
    borderRadius: 15,
    alignItems: "flex-start",
    flexDirection: "row-reverse",
    maxWidth: "70%",
  },
  senderPhotoContainer: {
    marginRight: 10,
  },
  senderPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  senderMessageContainer: {
    flex: 1,
  },
  senderName: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  senderMessageText: {
    fontSize: 16,
  },
  myMessageContainer1: {
    flex: 1,
  },
  myMessageText1: {
    fontSize: 16,
    textAlign: "left",
  },
  timeText: {
    fontSize: 12,
    color: "#777",
    alignSelf: "flex-end",
    marginTop: 5,
  },
  timeText1: {
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    padding: 10,
  },
  attachmentButton: {
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 15,
    minHeight: 40,
    textAlignVertical: "top",
    minHeight: 30,
  },
  sendButton: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    padding: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
