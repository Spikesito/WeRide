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

const Help = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconContainer}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Aide</Text>
        <View style={styles.iconContainer} />
      </View>

      <ScrollView>
        <Text style={styles.sectionTitle}>Questions fréquentes</Text>

        <Text style={styles.question}>Comment créer un compte ?</Text>
        <Text style={styles.answer}>
          Pour créer un compte, cliquez sur le bouton "S'inscrire" sur l'écran
          de connexion, puis suivez les étapes pour fournir vos informations
          personnelles et configurer votre compte.
        </Text>

        <Text style={styles.question}>
          Comment réinitialiser mon mot de passe ?
        </Text>
        <Text style={styles.answer}>
          Pour réinitialiser votre mot de passe, cliquez sur le lien "Mot de
          passe oublié" sur l'écran de connexion. Entrez votre adresse e-mail et
          suivez les instructions pour réinitialiser votre mot de passe.
        </Text>

        <Text style={styles.question}>
          Comment modifier mes informations personnelles ?
        </Text>
        <Text style={styles.answer}>
          Pour modifier vos informations personnelles, accédez à la section
          "Paramètres" de l'application, puis cliquez sur "Informations
          personnelles". Modifiez les informations souhaitées et cliquez sur
          "Enregistrer" pour sauvegarder vos modifications.
        </Text>

        {/* Add more questions and answers as needed */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Help;

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
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  question: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  answer: {
    fontSize: 14,
    marginBottom: 15,
  },
});
