export default function App() {

  return (
    <View style={styles.container}>
      {/* <div id="Top" style={styles.top}> */}
        <Text id="Name">NAME</Text>
        <Button id="SettingProfil" title='Param' style={styles.SettingProfil}></Button>
      {/* </div> */}
      {/* <Div id="DivBio"> */}
        <Text id="Biographie" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque eget nibh vitae vel ante cursus tincidunt.</Text>
      {/* </Div> */}
      {/* <Div id="Description" style={styles.Description}> */}
        <Text class="TitrePartie">Moto</Text>
        <Text class="DescriptionPartie">Tenere 700</Text>
        
        <Text class="TitrePartie">Trajet effectués</Text>
        <Text class="DescriptionPartie">10 trajets depuis juillet 2022</Text>
        <Text id="Historique" style={styles.Historique}>Voir l'historique</Text>

        <Text class="TitrePartie">Équipement</Text>
        <Text class="DescriptionPartie">Intercom Freecom 4+</Text>
        
        <Text class="TitrePartie">Types de trajets</Text>
        <Text class="DescriptionPartie">Route</Text>

      {/* </Div> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 100,
    marginLeft: 10,
  },
  
  top: {
    marginTop: 100,
    display:'flex',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingBottom: 20,
  },
  
  SettingProfil: {
    height: 10,
    width: 10,
  },

  DivBio: {
    paddingTop: 10,
  },

  Description: {
    display: 'flex',
    flexDirection: 'column',
    gap: 15,
    paddingTop: 20,
  },

  Historique: {
    fontSize: 11,
    marginTop: -10,
  },
});
