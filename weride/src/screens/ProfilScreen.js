import React from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigation } from "@react-navigation/native";

const ProfilScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <Image source={require('../../assets/Emile.png')} style={{ width: '100%', height: '100%', zIndex: 0 }} />

      <View style={{ width: '80%', display: "flex", flexDirection: "row", justifyContent: 'space-between', marginTop: '-10%', marginLeft: '10%', zIndex:10, }}>
        <Text style={{fontSize: 20, color: 'white'}}>SEGURET Emile</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ModifProfil')}>
          <FontAwesomeIcon icon={icon({ name: 'pen' })} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerBody}>
        <Text>Motard passionné depuis plusieurs années et ayant eu plusieurs engins, je n'attend plus qu'une seule chose : qu'un dame veuille bien passer son permis moto afin d'aller faire de jolie road trip !</Text>

        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold' }}>Moto</Text>
          <Text>Tenere 700 - Yamaha</Text>
          <Text>Année: 2020</Text>
          <Text>Description: Lorem</Text>
        </View>

        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold' }}>Trajet effectués</Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
            <Text style={styles.VoirHistorique}>Voir l'historique</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
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
  VoirHistorique: {
    fontSize: 12, 
    marginLeft: '3%', 
    marginTop: '1%',
    marginBottom: '5%'
},
})
