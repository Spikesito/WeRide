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

const OnePost = ({ userImage, userName }) => {
  const navigation = useNavigation();
  const Home = createBottomTabNavigator();

  return (
    <ScrollView style={styles.container}>
      {/* 1er POST */}
      <View style={styles.userProfileContainer}>
        <Image
          source={require("../../assets/acteur/Emile.png")}
          style={styles.userImage}
        />
        <TouchableOpacity
          style={styles.nameContainer}
          onPress={() => navigation.navigate("Profil")}
        >
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.subText}>SEGURET Emile</Text>
          <Text style={styles.subText}>20 avril 2023</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Suivre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <FontAwesomeIcon icon={faEllipsisV} size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("PostScreen")}>
        <Text style={styles.title}>Randonnée à la campagne</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Distance</Text>
          <Text style={styles.infoValue}>100 km</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>État de la route</Text>
          <Text style={styles.infoValue}>3/5</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Note du trajet</Text>
          <Text style={styles.infoValue}>8/10</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/imageFond/MonPost.jpeg")}
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
      <View style={styles.line} />
      {/* 2eme POST  */}
      <View style={styles.userProfileContainer}>
        <Image
          source={require("../../assets/acteur/Emile.png")}
          style={styles.userImage}
        />
        <TouchableOpacity
          style={styles.nameContainer}
          onPress={() => navigation.navigate("Profil")}
        >
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.subText}>SEGURET Emile</Text>
          <Text style={styles.subText}>10 février 2023</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Suivre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <FontAwesomeIcon icon={faEllipsisV} size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("PostScreen")}>
        <Text style={styles.title}>Balade en ville</Text>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Distance</Text>
          <Text style={styles.infoValue}>50 km</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>État de la route</Text>
          <Text style={styles.infoValue}>4/5</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.infoSection}>
          <Text style={styles.infoLabel}>Note du trajet</Text>
          <Text style={styles.infoValue}>6/10</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/imageFond/MonPostVille.jpeg")}
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
      <View style={styles.line} />
    </ScrollView>
  );
};

export default OnePost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: "15%",
  },
  line: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
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
  followButton: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginRight: 10,
    borderColor: "#919191",
    borderWidth: 2,
    borderRadius: 5,
  },
  followButtonText: {
    color: "#919191",
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
