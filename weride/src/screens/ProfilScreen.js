import React from "react";
import { View, Text, Button, Image, TouchableOpacity} from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const ProfilScreen = () => {
  return (
    <View>
        <Image source={require('../../assets/imageProfil.jpg')}  style={{ width: '100%', height: '100%' , zIndex: 0}}/>
      
      <View style={{width: '80%' ,display: "flex", flexDirection: "row", justifyContent: 'space-between',marginTop:'-10%', marginLeft: '10%'}}>
        <Text style={{zIndex: 10, fontSize: 5 }}>NAME</Text>
        <TouchableOpacity>
          <FontAwesomeIcon icon={icon({name: 'pen'})} />
        </TouchableOpacity>
      </View>
      
      <View style={{marginTop: '5%', marginLeft: '5%'}}>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eget nibh vitae vel ante cursus tincidunt.</Text>
        
        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold'}}>Moto</Text>
          <Text>Tenere 700</Text>
        </View>
        
        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold'}}>Trajet effectués</Text>
          <Text>10 trajets depuis juillet 2022</Text>
          <TouchableOpacity style={{backgroundColor: 'transparent'}}> 
            <Text style={{fontSize: 2.5}}>Voir l'historique</Text>
          </TouchableOpacity>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold'}}>Équipement</Text>
          <Text>Intercom Freecom 4+</Text>
        </View>

        <View style={{marginTop: '3%'}}>
          <Text style={{fontWeight: 'bold'}}>Types de trajets</Text>
          <Text>Route</Text>
          </View>
      </View>
    </View>
  );
};

export default ProfilScreen;