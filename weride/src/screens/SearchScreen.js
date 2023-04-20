import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import FilterScreen from '../Search/FilterScreen';
import { useNavigation } from "@react-navigation/native";
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

const SearchBar = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = () => {
    // Effectuez ici votre recherche en utilisant searchText
    // Ajoutez ensuite searchText aux recherches récentes
    setRecentSearches([...recentSearches, searchText]);
    setSearchText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faUsers} size={24} color="#000" />
        <Image
          source={require("../../assets/LOGO_WE_RIDE.png")}
          style={styles.headerTitle}
        />
        <FontAwesomeIcon icon={faCog} size={24} color="#000" />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Recherche"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
      <View style={styles.recentSearchesContainer}>
        <Text style={styles.recentSearchesTitle}>Recherches récentes :</Text>
        <ScrollView style={styles.recentSearchesList}>
          {recentSearches.map((search, index) => (
            <Text key={index} style={styles.recentSearch}>
              {search}
            </Text>
          ))}
        </ScrollView>
      </View>
      <View style={styles.moreCriteriaButtonContainer}>
        <TouchableOpacity style={styles.moreCriteriaButton} onPress={() => navigation.navigate('Filter')}>
          <Text style={styles.moreCriteriaButtonText}>Plus de critères</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const MainPage = () => {
  return (
    <View style={styles.pageContainer}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 50,
    marginBottom: 30,
  },
  headerTitle: {
    paddingLeft: 9,
    width: 180,
    height: 40,
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 18,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  recentSearchesContainer: {
    flex: 1,
    marginTop: 16,
  },
  recentSearchesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  recentSearchesList: {
    maxHeight: 500,
  },
  recentSearch: {
    fontSize: 15,
    marginBottom: 4,
  },
  moreCriteriaButtonContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  moreCriteriaButton: {
    alignItems: 'center',
  },
  moreCriteriaButtonText: {
    fontSize: 20,
    color: 'black',
  },
});

export default MainPage;