import { StyleSheet, Text, View, TouchableOpacity, toggleReverse, TextInput, reverse} from 'react-native'
import React from 'react'

const ItineraryPath = () => {
    return (
        <View style={styles.container}>
          <TouchableOpacity style={styles.inverserButton}>
            <Text style={styles.buttonText}>Inverser</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
          />
          <TextInput
            style={styles.input}
          />
          <TouchableOpacity style={styles.ajouterButton} onPress={ajouterEtape}>
            <Text style={styles.buttonText}>Ajouter une étape</Text>
          </TouchableOpacity>
          {etapes.map((etape, index) => (
            <TextInput
              key={index}
              style={styles.input}
              value={etape}
              onChangeText={(value) => setEtape(index, value)}
            />
          ))}
          <View style={styles.row}>
            <TouchableOpacity style={styles.todayButton} onPress={today}>
              <Text style={styles.buttonText}>Aujourd'hui</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.nowButton} onPress={now}>
              <Text style={styles.buttonText}>Maintenant</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.continuerButton} onPress={continuer}>
            <Text style={styles.buttonText}>Continuer</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    export default ItineraryPath
    
const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 16,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
      },
      inverserButton: {
        alignSelf: 'flex-end',
        marginBottom: 16,
      },
      ajouterButton: {
        alignSelf: 'flex-start',
        marginBottom: 16,
      },
      todayButton: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#007AFF',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
      },
      nowButton: {
        flex: 1,
        marginLeft: 8,
        backgroundColor: '#007AFF',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        },
    continuerButton: {
        backgroundColor: '#007AFF',
        borderRadius: 4,
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center',
        marginTop: 'auto',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
    row: {
      flexDirection: 'row',
      marginBottom: 16,
    },
});