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

const Confi = ({ navigation }) => {
  const [sharingData, setSharingData] = useState(true);
  const [locationData, setLocationData] = useState(true);
  const [allowAdTracking, setAllowAdTracking] = useState(true);
  const [allowPhotoAccess, setAllowPhotoAccess] = useState(true);
  const [allowContactsAccess, setAllowContactsAccess] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Confidentialité</Text>
        <View style={styles.iconContainer} />
      </View>

      <View style={styles.settingRow}>
        <Text>Partage des données</Text>
        <Switch
          value={sharingData}
          onValueChange={(value) => setSharingData(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Utilisation des données de localisation</Text>
        <Switch
          value={locationData}
          onValueChange={(value) => setLocationData(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Autoriser le suivi des publicités</Text>
        <Switch
          value={allowAdTracking}
          onValueChange={(value) => setAllowAdTracking(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Autoriser l'accès aux photos</Text>
        <Switch
          value={allowPhotoAccess}
          onValueChange={(value) => setAllowPhotoAccess(value)}
        />
      </View>
      <View style={styles.settingRow}>
        <Text>Autoriser l'accès aux contacts</Text>
        <Switch
          value={allowContactsAccess}
          onValueChange={(value) => setAllowContactsAccess(value)}
        />
      </View>
    </SafeAreaView>
  );
};

export default Confi;

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
