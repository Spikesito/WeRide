import React from "react";
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { useNavigation } from "@react-navigation/native";

const OtherProfil = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Gabby.png')} style={{ width: '100%', height: '50%', zIndex: 0 }} />

      <View style={styles.containerHead}>
        <Text style={{color:'white', fontSize: '5vw' }}>THOYER Gabby</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ModifProfil')}>
          <FontAwesomeIcon icon={icon({ name: 'pen' })} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerBody}>
        <Text>A défaut d'être un super motard, j'excelle en dev notamment pour la création d'application mobile !</Text>

        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold' }}>Moto</Text>
          <Text>Yamaha MT 07</Text>
        </View>

        <View style={styles.body}>
          <Text style={{ fontWeight: 'bold' }}>Trajet effectués</Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{ backgroundColor: 'transparent' }}>
            <Text style={{ fontSize: 12, marginLeft: '2%', marginTop: '1%' }}>Voir l'historique</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonAddFriend}>
            <Text>Ajouter en ami</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OtherProfil;

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
      marginLeft: '10%',
      zIndex: 10
  },
  containerBody: {
      marginTop: '7%',
      marginLeft: '5%',
  },
  body: {
      marginTop: '8%'
  },
  buttonAddFriend: {
    backgroundColor: '#FFCC33',
    borderRadius: 5,
    padding: 12,
    width: '100%',
    height: '7%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  }
})