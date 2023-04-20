import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
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
import OnePost from "../Post/OnePost"

const EndSearchScreen = ({ navigation }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={styles.allProfil}>
        {/* 1er PROFIL  */}
        <Text style={styles.title}>Profil Trouvé</Text>
        <View style={styles.userProfileContainer}>
          <Image
            source={require("../../assets/Gabby.png")}
            style={styles.userImage}
          />
          <TouchableOpacity style={styles.nameContainer} onPress={() => navigation.navigate('OtherProfil')}>
            <Text style={styles.subText}>THOYER Gabby</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsButton}>
            <FontAwesomeIcon icon={faEllipsisV} size={24} color="#999" />
          </TouchableOpacity>
        </View>
        {/* 2eme PROFIL  */}
        <View style={styles.userProfileContainer}>
          <Image
            source={require("../../assets/acteur/Emile.png")}
            style={styles.userImage}
          />
          <TouchableOpacity style={styles.nameContainer} onPress={() => navigation.navigate('OtherProfil')}>
            <Text style={styles.subText}>SEGURET Emile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionsButton}>
            <FontAwesomeIcon icon={faEllipsisV} size={24} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
        <Text style={styles.titleTrajet}>Trajet Trouvé</Text>
        <OnePost />
    </ScrollView>
  )
}

export default EndSearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '20%',
  },
  allProfil: {
    marginBottom: 30,
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
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  titleTrajet:{
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: -50,
  },
})