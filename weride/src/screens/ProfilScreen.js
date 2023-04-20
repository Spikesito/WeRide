import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const ProfilScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image source={require('../../assets/acteur/Emile.png')} style={styles.image} />

      <View style={{ width: '80%', display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: '-10%', marginLeft: '10%', zIndex: 10, }}>
        <Text style={styles.name}>SEGURET Emile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ModifProfil')}>
          <FontAwesomeIcon icon={faPen} style={{color: 'white'}}/>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBody}>
        <Text>Motard passionné depuis plusieurs années et ayant eu plusieurs engins, je n'attend plus qu'une seule chose : qu'un dame veuille bien passer son permis moto afin d'aller faire de jolie road trip !</Text>

        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Moto</Text>
          <Text>Tenere 700 - Yamaha</Text>
          <Text>Année: 2020</Text>
          <Text>Description: Lorem</Text>
        </View>

        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Trajet effectués</Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.voirHistorique}>Voir l'historique</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
},
contentContainer: {
    paddingBottom: 20, // Add some padding at the bottom
},
image: {
    width: '100%',
    height: 400, // Change this to a fixed height
    resizeMode: 'cover',
},
  containerHead: {
    width: '80%',
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginTop: '-10%',
    marginLeft: '10%'
  },
  containerBody: {
    marginTop: '7%',
    marginLeft: '5%',
  },
  body: {
    marginTop: '8%'
  },
  voirHistorique: {
    fontSize: 12,
    marginLeft: '3%',
    marginTop: '1%',
    marginBottom: '5%'
  },
  name: {
    fontSize: 20,
    color: 'white'
  }
})
