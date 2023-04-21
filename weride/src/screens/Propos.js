import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const About = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>À propos</Text>
        <View style={styles.iconContainer} />
      </View>

      <ScrollView>
        <Text style={styles.title}>WeRide</Text>
        <Text style={styles.text}>
          Votre application est une plateforme innovante qui offre des services
          et fonctionnalités pour répondre aux besoins de ses utilisateurs.
        </Text>

        <Text style={styles.title}>Version</Text>
        <Text style={styles.text}>1.0.0</Text>

        <Text style={styles.title}>Développé par</Text>
        <Text style={styles.text}>WeRide</Text>

        <Text style={styles.title}>Contactez-nous</Text>
        <Text style={styles.text}>
          Si vous avez des questions, des suggestions ou des problèmes,
          n'hésitez pas à nous contacter à l'adresse e-mail suivante :
          support@WeRide.com
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconContainer: {
    position: "absolute",
    left: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 10,
  },
  text: {
    marginLeft: 10,
    fontSize: 14,
    marginBottom: 15,
  },
});
