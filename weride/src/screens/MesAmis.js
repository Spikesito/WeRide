import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import HomeScreenEvent from "../Home/HomeScreenEvent";
import HomeScreenActu from "../Home/HomeScreenActu";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faEllipsisV,
  faBookmark,
  faHeart,
  faComment,
  faShare,
  faUsers,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

const MesAmis = ({ userImage, userName }) => {
  const navigation = useNavigation();
  const Home = createBottomTabNavigator();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faUsers} size={24} color="#000" />
        <Image
          source={require("../../assets/LOGO_WE_RIDE.png")}
          style={styles.headerTitle}
        />
        <FontAwesomeIcon icon={faCog} size={24} color="#000" />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.friendButton, styles.activeButton]}>
          <Text style={styles.buttonText}>Mes amis</Text>
        </TouchableOpacity>
        <View style={styles.buttonDivider} />
        <TouchableOpacity
          style={styles.discoverButton}
          onPress={() => navigation.navigate("WeRide")}
        >
          <Text style={styles.buttonText}>Découvrir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.userProfileContainer}>
        <Image
          source={require("../../assets/motoAcceuil.jpg")}
          style={styles.userImage}
        />
        <View style={styles.nameContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.subText}>Nom d'utilisateur</Text>
          <Text style={styles.subText}>26 janvier 2023</Text>
        </View>

        <TouchableOpacity style={styles.optionsButton}>
          <FontAwesomeIcon icon={faEllipsisV} size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("PostScreen")}>
        <Text style={styles.title}>Titre de balade</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Distance</Text>
          <Text style={styles.infoValue}>25 km</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>État de la route</Text>
          <Text style={styles.infoValue}>4/5</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Note du trajet</Text>
          <Text style={styles.infoValue}>8/10</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/motoAcceuil.jpg")}
          style={styles.mainImage}
        />
        <TouchableOpacity style={styles.saveButton}>
          <FontAwesomeIcon icon={faBookmark} size={20} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faHeart} size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faComment} size={20} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <FontAwesomeIcon icon={faShare} size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default MesAmis;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
  headerTitle: {
    paddingLeft: 9,
    width: 180,
    height: 40,
  },
  userProfileContainer: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameContainer: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 14,
    color: "#666",
  },
  optionsButton: {
    paddingHorizontal: 10,
  },
  title: {
    marginLeft: 20,
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoSection: {
    flex: 1,
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 14,
    color: "#666",
  },
  infoValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  verticalLine: {
    height: "100%",
    width: 1,
    backgroundColor: "#ccc",
  },
  imageContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  mainImage: {
    width: "90%",
    height: Dimensions.get("window").height * 0.3,
    borderRadius: 5,
  },
  saveButton: {
    position: "absolute",
    top: 10,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  actionButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
  },

  followButtonText: {
    color: "#FFF",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  friendButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  activeButton: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
  discoverButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "green",
    marginHorizontal: 10,
  },
});
