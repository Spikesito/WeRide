import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faMapMarkerAlt,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const ItineraryPath = () => {
  const navigation = useNavigation();
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [showTimePicker, setShowTimePicker] = useState(true);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
  };

  const onTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTimePicker(Platform.OS === "ios");
    setTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/lyon2.jpg")}
        style={{ width: "120%", height: "50%", marginTop: "-12%" }}
      />
      <Text style={styles.title}>Itinéraire</Text>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt} />
        <TextInput style={styles.input} placeholder="Départ" />
      </View>
      <View style={styles.inputContainer}>
        <FontAwesomeIcon style={styles.icon} icon={faMapMarkerAlt} />
        <TextInput style={styles.input} placeholder="Arriver" />
      </View>
      <TouchableOpacity
        style={styles.addbutton}
        onPress={() => console.log("OK")}
      >
        <View style={styles.addButtonContent}>
          <FontAwesomeIcon icon={faPlusCircle} />
          <Text style={styles.addButtonText}>Ajouter une étape</Text>
        </View>
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
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("CreatePost")}
      >
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
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: "5%",
    marginLeft: "-70%",
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    paddingLeft: 35,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: "5%",
    width: "100%",
    marginTop: "5%",
    marginBottom: 20,
    marginLeft: "5%",
  },
  addbutton: {
    borderColor: "#ccc",
    padding: 12,
    width: "100%",
    height: "7%",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#DCDBDB",
  },
  addButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  addButtonText: {
    marginLeft: 5,
  },
  continueButton: {
    backgroundColor: "#FFCC33",
    borderWidth: 2,
    borderRadius: 3,
    borderColor: "#FFCC33",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    height: "7%",
  },
  duoButton: {
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "cyan",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
  },
  icon: {
    position: "absolute",
    top: 10,
    left: 8,
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: "#DCDBDB",
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
});
