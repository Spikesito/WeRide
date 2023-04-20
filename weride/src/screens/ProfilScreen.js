import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfilScreen = () => {
  return (
    <ScrollView>
      <Image
        source={require("../../assets/imageProfil.jpg")}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      />

      <View
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "-10%",
          marginLeft: "10%",
        }}
      >
        <Text style={{ zIndex: 10, fontSize: 20 }}>NAME</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={faPen} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: "10%", marginLeft: "5%" }}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eget
          nibh vitae vel ante cursus tincidunt.
        </Text>

        <View style={styles.espaceAll}>
          <Text style={styles.titlePart}>Moto</Text>
          <Text>Tenere 700</Text>
        </View>

        <View style={styles.espaceAll}>
          <Text style={styles.titlePart}>Trajet effectués</Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{ backgroundColor: "transparent" }}>
            <Text style={{ fontSize: 12, marginLeft: "3%", marginTop: "1%" }}>
              Voir l'historique
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.espaceAll}>
          <Text style={styles.titlePart}>Équipement</Text>
          <Text>Intercom Freecom 4+</Text>
        </View>

        <View style={styles.espaceAll}>
          <Text style={styles.titlePart}>Types de trajets</Text>
          <Text>Route</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  titlePart: {
    fontWeight: "bold",
    fontSize: 16,
  },
  espaceAll: {
    marginTop: "3%",
  },
});
