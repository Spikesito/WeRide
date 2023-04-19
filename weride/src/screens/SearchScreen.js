import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import FilterScreen from '../Search/FilterScreen';
import { useNavigation } from "@react-navigation/native";


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
        <TouchableOpacity style={styles.moreCriteriaButton}  onPress={() => navigation.navigate('Filter')}>
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
    paddingTop: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
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
    maxHeight: 300,
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
    fontSize: '3.5vw',
    color: 'black',
  },
});

export default MainPage;