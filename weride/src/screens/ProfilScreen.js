import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfilScreen = () => {
  const navigation = useNavigation();
  const handleLogout = () => {
    navigation.navigate("ConInscri");
  };
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Image
        source={require("../../assets/acteur/Emile.png")}
        style={styles.image}
      />

      <View
        style={{
          width: "80%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "-10%",
          marginLeft: "10%",
          zIndex: 10,
        }}
      >
        <Text style={styles.name}>SEGURET Emile</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("ModifProfil")}
          style={styles.penIconContainer}
        >
          <FontAwesomeIcon icon={faPen} style={styles.penIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerBody}>
        <Text>
          Motard passionné depuis plusieurs années et ayant eu plusieurs engins,
          je n'attend plus qu'une seule chose : qu'un dame veuille bien passer
          son permis moto afin d'aller faire de jolie road trip !
        </Text>

        <View style={styles.body}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Moto</Text>
          <Text>Tenere 700 - Yamaha</Text>
          <Text>Année: 2020</Text>
          <Text>Description: Lorem</Text>
        </View>

        <View style={styles.body}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Trajet effectués
          </Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{ backgroundColor: "transparent" }}>
            <Text style={styles.voirHistorique}>Voir l'historique</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.logoutButtonContainer}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    paddingBottom: 20,
  },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  containerHead: {
    width: "80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "-10%",
    marginLeft: "10%",
  },
  containerBody: {
    marginTop: "7%",
    marginLeft: "5%",
  },
  body: {
    marginTop: "8%",
  },
  voirHistorique: {
    fontSize: 12,
    marginLeft: "3%",
    marginTop: "1%",
    marginBottom: "5%",
  },
  name: {
    fontSize: 20,
    color: "white",
  },
  logoutButtonContainer: {
    alignItems: "center",
    marginTop: 30,
  },
  logoutButton: {
    backgroundColor: "#F44336",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  penIconContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: 30,
    height: 30,
  },
  penIcon: {
    color: "black",
  },
});
