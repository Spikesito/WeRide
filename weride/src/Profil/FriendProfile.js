import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OtherProfil = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Gabby.png")}
        style={{ width: "100%", height: "50%", zIndex: 0 }}
      />

      <View style={styles.containerHead}>
        <Text style={styles.name}>THOYER Gabby</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModifProfil")}
        ></TouchableOpacity>
      </View>

      <View style={styles.containerBody}>
        <Text>
          A défaut d'être un super motard, j'excelle en dev notamment pour la
          création d'application mobile !
        </Text>

        <View style={styles.body}>
          <Text style={styles.title}>Moto</Text>
          <Text>Yamaha MT 07</Text>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Trajet effectués</Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{ backgroundColor: "transparent" }}>
            <Text style={{ fontSize: 12, marginLeft: "2%", marginTop: "1%" }}>
              Voir l'historique
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.buttonAddFriend}
          onPress={() => console.log("Friend Add")}
        >
          <Text style={styles.textButton}>Supprimer cet ami</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherProfil;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  containerHead: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "-10%",
    marginLeft: "10%",
    zIndex: 10,
  },
  containerBody: {
    marginTop: "7%",
    marginLeft: "5%",
  },
  body: {
    marginTop: "8%",
  },
  buttonAddFriend: {
    backgroundColor: "#FFCC33",
    borderRadius: 5,
    width: "80%",
    height: "12%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 25,
    marginTop: 100,
  },
  textButton: {
    color: "black",
    fontSize: 16,
  },
  name: {
    color: "white",
    fontSize: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
