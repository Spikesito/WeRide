import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Switch,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Notification = ({ navigation }) => {
  const [doNotDisturb, setDoNotDisturb] = useState(false);
  const [showPreviews, setShowPreviews] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [newFriendsNotification, setNewFriendsNotification] = useState(true);
  const [soundVibration, setSoundVibration] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
        <View style={styles.iconContainer} />
      </View>
      <View style={styles.settingRow}>
        <Text>Ne pas déranger</Text>
        <Switch
          value={doNotDisturb}
          onValueChange={(value) => setDoNotDisturb(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Afficher les aperçus</Text>
        <Switch
          value={showPreviews}
          onValueChange={(value) => setShowPreviews(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Son des notifications</Text>
        <Switch
          value={soundEnabled}
          onValueChange={(value) => setSoundEnabled(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Notifications de nouveaux amis</Text>
        <Switch
          value={newFriendsNotification}
          onValueChange={(value) => setNewFriendsNotification(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Son et vibration lorsque l'app est utilisée</Text>
        <Switch
          value={soundVibration}
          onValueChange={(value) => setSoundVibration(value)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    left: 16,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 5,
  },
});
