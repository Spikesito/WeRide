import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Switch,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const SettingItem = ({ title, onPress, rightComponent }) => (
  <TouchableOpacity style={styles.settingItem} onPress={onPress}>
    <Text style={styles.settingItemTitle}>{title}</Text>
    {rightComponent}
  </TouchableOpacity>
);

const Params = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Paramètre</Text>
      </View>
      <ScrollView>
        <View style={styles.userInfo}>
          <Image
            source={require("../../assets/acteur/Emile.png")}
            style={styles.avatar}
          />
          <Text style={styles.userName}>Seguret Emile</Text>
        </View>
        <SettingItem
          title="Notifications"
          onPress={() => navigation.navigate("Notification")}
        />
        <SettingItem
          title="Confidentialité"
          onPress={() => navigation.navigate("Confi")}
        />
        <SettingItem title="Aide" onPress={() => navigation.navigate("Aide")} />
        <SettingItem
          title="À propos"
          onPress={() => navigation.navigate("Propos")}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  iconContainer: {
    position: "absolute",
    left: 16,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  settingItemTitle: {
    fontSize: 16,
  },
});

export default Params;
