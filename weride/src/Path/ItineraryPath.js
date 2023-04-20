import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ItineraryPath = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(true);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === 'ios');
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/imageProfil.jpg')} style={{ width: '120%', height: '50%', marginTop: '-10%' }} />
      <Text style={styles.title}>Itinéraire</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt} />
        <TextInput style={styles.input} value="Départ" placeholder="Input 1" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt} />
        <TextInput style={styles.input} value="Arriver" placeholder="Input 2" />
      </View>
      <TouchableOpacity style={styles.addbutton} onPress={() => console.log('OK')}>
        <Text>Ajouter une étape</Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        {showDatePicker && (
          <DateTimePicker
            testID="datePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onDateChange}
          />
        )}
        {showTimePicker && (
          <DateTimePicker
            testID="timePicker"
            value={time}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={onTimeChange}
          />
        )}
      </View>
      <TouchableOpacity style={styles.continueButton} onPress={() => console.log('OK')}>
        <Text>Continuer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ItineraryPath;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 5,
    fontWeight: 'bold',
    marginTop: '5%',
    marginLeft: '-70%',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 35,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: '5%',
    width: '100%',
    marginTop: '5%',
    marginBottom: 20,
    marginLeft: '5%',
  },
  addbutton: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    padding: 12,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueButton: {
    backgroundColor: '#597393',
    borderWidth: 2,
    borderRadius: 3,
    borderColor: '#597393',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    height: '7%',
  },
  duoButton: {
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'cyan',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 8,
    marginRight: 10,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
  },
});