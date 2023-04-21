import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleSearch = () => {
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
        onFocus={() => setModalVisible(true)}
        onSubmitEditing={handleSearch}
      />
      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>Fermer</Text>
          </TouchableOpacity>
          <Text style={styles.recentSearchesTitle}>Recherches récentes</Text>
          {recentSearches.map((search, index) => (
            <Text key={index} style={styles.recentSearch}>
              {search}
            </Text>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 48,
    paddingHorizontal: 16,
  },
  closeButton: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 16,
  },
  recentSearchesTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  recentSearch: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default SearchBar;