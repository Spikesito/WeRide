import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import HomeScreenEvent from '../Home/HomeScreenEvent';
import HomeScreenActu from '../Home/HomeScreenActu';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEllipsisV, faBookmark, faHeart, faComment, faShare, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({ userImage, userName }) => {
  const navigation = useNavigation();
  const Home = createBottomTabNavigator();

  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <FontAwesomeIcon icon={faArrowLeft} size={24} color="#000" />
      </TouchableOpacity>
      <View style={styles.userProfileContainer}>
        <Image source={require('../../assets/motoAcceuil.jpg')} style={styles.userImage} />
        <View style={styles.nameContainer}>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={styles.subText}>Nom d'utilisateur</Text>
          <Text style={styles.subText}>26 janvier 2023</Text>
        </View>
        <TouchableOpacity style={styles.followButton}>
          <Text style={styles.followButtonText}>Suivre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionsButton}>
          <FontAwesomeIcon icon={faEllipsisV} size={24} color="#999" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Titre de balade</Text>
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
        <Image source={require('../../assets/motoAcceuil.jpg')} style={styles.mainImage} />
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
      <Text style={styles.loremIpsumText}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <Text style={styles.participantsText}>Nombre de participants : 10</Text>
      <View style={styles.participantImages}>
        <Image source={require('../../assets/motoAcceuil.jpg')} style={styles.participantImage} />
        <Image source={require('../../assets/motoAcceuil.jpg')} style={styles.participantImage} />
        <Image source={require('../../assets/motoAcceuil.jpg')} style={styles.participantImage} />
      </View>
      </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  userProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  optionsButton: {
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoSection: {
    flex: 1,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 14,
    color: '#666',
  },
  infoValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#ccc',
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  mainImage: {
    width: '90%',
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 5,
  },
  saveButton: {
    position: 'absolute',
    top: 10,
    right: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  followButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
  loremIpsumText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: 'justify',
  },
  participantsText: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  participantImages: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 10,
  },
  participantImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 5,
  },
});