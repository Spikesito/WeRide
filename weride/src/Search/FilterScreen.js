import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Calendar } from "react-native-calendars";
import { useNavigation } from "@react-navigation/native";

const FilterScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState("");

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 10)
  );

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = (button) => {
    if (selectedButton === button) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.title}>Lieu de départ</Text>
        <TextInput
          style={styles.input}
          placeholder="Départ"
          value={location}
          onChangeText={setLocation}
        />
      </View>
      <View style={styles.calendar}>
        <Text style={styles.title}>Date de départ</Text>
        <Calendar
          onDayPress={handleDayPress}
          markedDates={{ [selectedDate]: { selected: true } }}
        />
      </View>
      <Text style={styles.title}>Type de trajet</Text>
      <View style={styles.typeButtonContainer}>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "button1" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("button1")}
        >
          <Text style={styles.buttonText}>Balade</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            selectedButton === "button2" && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress("button2")}
        >
          <Text style={styles.buttonText}>Route</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.DeletebuttonBottom}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonTextBottomDel}>Effacer</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.SearchbuttonBottom}
          onPress={() => navigation.navigate("Result")}
        >
          <Text style={styles.buttonTextBottom}>Rechercher (1250)</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 80,
    //marginTop: 40,
  },
  // locationContainer: {
  //     marginBottom: 16,
  // },
  title: {
    fontSize: 16,
    marginRight: 16,
    marginBottom: "3%",
  },
  input: {
    fontSize: 16,
    width: "90%",
    height: "20%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 3,
  },
  bottomContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "15%",
  },
  SearchbuttonBottom: {
    backgroundColor: "#FFCC33",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  typeButtonContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-around",
  },
  button: {
    paddingHorizontal: 30,
    paddingVertical: 6,
    backgroundColor: "#eee",
    borderRadius: 5,
    margin: 10,
  },
  selectedButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    fontSize: 14,
    color: "#333",
  },
  calendar: {
    marginTop: "-10%",
    marginBottom: "6%",
  },
  buttonTextBottomDel: {
    textDecorationLine: "underline",
  },
});

export default FilterScreen;
